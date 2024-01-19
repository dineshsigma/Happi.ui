<template lang="html">
    <div class="ps-section--shopping ps-shopping-cart pl-0 pr-0">
        <div class="container-fluid">
            <div class="ps-section__content">
                <div class="row" v-if="cartItems != null &&  cartItems.length != 0">
                    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 mobile "  >
                        <div class="card-layout" style="width: 100%;padding: 10px !important;">
                        </div>
                    </div>
                    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <table-shopping-cart />
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">
                        <div class="ps-block--shopping-totalt">

                            <div class="ps-block__content">
                              <div class='card card-details '>
                                <p class='card-title p-3 m-0'>Order Details</p>
                                <div class='card-body'>
                                  <div class='final-items'>
                                    <div class='d-flex justify-content-between '
                                         v-for='(product) in cartItems' :key='product.producId'>
                                      <span>{{ product.name }}</span>
                                      <span>{{ priceFormat(product.payPrice) }}</span>
                                    </div>
                                  </div>

                                  <div class='d-flex justify-content-between '>
                                    <span>Items in cart </span> <span>{{ cartItems.length }}</span></div>
                                  <div class='d-flex justify-content-between order-total'>
                                    <span>Order Total  </span> <span>{{ priceFormat(amount) }}</span></div>
                                </div>

                                <div class='card-footer offers-txt p-0'>
                                  <div v-if='customOfferList.length != 0'>
                                    <div class='row m-top-20 m-0' v-if='selectedOffer == null'>
                                      <div class='col-12 p-0'>

                                        <p class='card-title p-3 m-0'> Available Offers</p>
                                      </div>

                                      <div
                                          class='col-12 '
                                          v-for='(item, index) in customOfferList' v-on:click='selectOfferIndex(index)'
                                          :class='selectedOfferClass(index)'
                                      >
                                        <div class='row' style='margin:15px 0'>
                                          <div class='col-1'>
                                            <input type='radio' id='offer' class='checkmark' :value='index'
                                                   v-model='selectedOfferIndex'>
                                          </div>
                                          <div class='col-11'>
                                            <ul style='list-style:none'>
                                              <li class='d-flex justify-content-between'>
                                                <b
                                                ><i class='icon-store mr-2'></i>
                                                  {{ item.title }} </b>
                                              </li>
                                            </ul>
                                            <p v-if='selectedOfferIndex == index'>
                                              {{ item.description }}
                                            </p>
                                            <button
                                                type='button'
                                                @click.prevent='selectOffer(item)'
                                                v-if='selectedOfferIndex == index'
                                                class='ps-btn p-1'
                                                style='width:100%;padding: 5px 0 !important;color:#fff'>
                                              Apply
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div class="ps-section__cart-actions">
                        <h3>
                            Your bag is empty
                        </h3>
                        <nuxt-link to="/" class="ps-btn">
                            <i class="icon-arrow-left mr-2"></i>
                           Shop Now
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductShoppingCart from '~/components/elements/product/ProductShoppingCart';
import TableShoppingCart from '~/components/partials/account/modules/TableShoppingCart';

export default {
    name: 'ShoppingCart',
    components: { TableShoppingCart, ProductShoppingCart },
    computed: {
        ...mapState({
            cartItems: state => state.cart.cartItems,
            total: state => state.cart.total,
            amount: state => state.cart.amount,
            cartProducts: state => state.product.cartProducts,
            isLoggedIn: state => state.auth.isLoggedIn,
          offersList: state => state.offers.offersList
        })
    },
  data: () => {
    return {
  customOfferList: [],selectedOfferIndex: 0,
    }
},
    methods: {
         priceFormat(item) {
            item = item.toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR',
              });
             return item;
         },
      selectOfferIndex(i) {
        this.selectedOfferIndex = i;
      },
      selectedOfferClass(i) {
        if (this.selectedOfferIndex === i) {
          return 'selectedOffer';
        }
      },

      changeoffer() {
        this.selectedOffer = null;
      },
      async selectOffer(item) {
        await this.$store.dispatch('cart/deliveryOptionToCart', {
          selectedOffer: item
        });
        this.selectedOffer = item;
      },
    },
    async created() {
        this.$cookies.remove('redirectLogin');
        await this.$store.dispatch('auth/getUserInfo');

      await this.$store.dispatch('offers/getOfferList', {
        category_name: this.cartItems[0].category,
        value: this.amount
      });
      // RESET SELECTED OFFER ON PAGE LOAD
      this.selectedOffer = null;

      if (this.offersList.length !== 0) {
        for (let i = 0; i < this.offersList.length; i++) {
          let item = this.offersList[i];
          this.customOfferList.push(item);
        }
      }

      this.customOfferList.push(
          {
            "id" : "test",
            "title" : "Proceed Payment without offer",
            "rule" : "mobile",
            "categoy_id" : [

            ],
            "mobileIds" : [

            ],
            "amount" : {
              "min" : "1000",
              "max" : "15000",
              "maxCashBack" : "2000",
              "percentage" : "5"
            },
            "paymentGateway" : "PayU",
            "offerKey" : "",
            "description" : "All banks Payments with Credit Card/Credit Card EMI/Debit Card/Debit Card EMI/Net Banking, Wallet and UPI Options",
            "status" : false,
            "ShowTimer" : "yes",
            "terms" : "",
            "URL" : null,
            "offerkey" : ""
          }
      );


    }
};
</script>

<style lang='scss' scoped>
.ps-section--shopping {
    padding: 2rem;
}

.card-layout{
    background-color: #fff;
    border-radius: 8px;
}

.table-scroll {
    overflow-x: scroll;
}
.mobile{
    display: none;
}

.card-details {
.card-title {
  text-align: center;
  font-weight: 600;
  background-color: #efefef;
}

.final-items {
  margin: 0 0 8px 0;

span {
  font-weight: 600;
  font-size: 12px;
}
}

.order-total {
  border-top: 1px solid #f30;
  margin: 8px 0;
  border-bottom: 1px solid #f30;
  padding: 8px 0;

span {
  font-weight: bold !important;
  color: #f30;
}
}

.order-savings {
span {
  font-weight: bold !important;
  color: #f30;
}
}

.card-footer {
  display: grid;

span:first-child {
  font-size: 15px;
  color: #00aeef;
}

span:last-child {
  font-size: 13px;
}
}
}

@media (max-width:767px){
    .mobile{
        display: block;
    }
}
</style>
<style lang="scss" scoped>
.ps-block--shopping-total {
    padding : 30x 15px;
}
</style>
