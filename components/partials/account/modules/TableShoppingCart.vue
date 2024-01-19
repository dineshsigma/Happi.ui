<template lang="html">
  <div style="width:100%;">
    <v-overlay v-if='loading'>
      <v-progress-circular indeterminate size='64'></v-progress-circular>
    </v-overlay>
    <div class="row mb-25 card-layout" v-for="(product, index) in cartItems" :key="product.producId">

      <div class="col-lg-2 col-sm-3 col-12 desktop">
        <nuxt-link :to="`/${product.linker}`" v-if='product.pictures != null && product.pictures_new == null'
                   class="d-flex align-items-center">
          <img
              :src="`https://happimobiles.s3.ap-south-1.amazonaws.com/happi/${product.pictures[0]}.jpg`"
              :alt="`${product.name}`"
              class="cart-img"
          />
        </nuxt-link>
        <nuxt-link :to="`/${product.linker}`" v-else class="d-flex align-items-center">
          <img
              :src="`${product.pictures_new[0]}`"
              :alt="`${product.name}`"
              class="cart-img"
          />
        </nuxt-link>
      </div>

      <div class="col-lg-10 col-sm-9 col-12 desktop">
        <nuxt-link :to="`/${product.linker}`" class="ps-product__title">
          <h4 style="font-family: Arial,sans-serif;">{{ product.name }}</h4>
        </nuxt-link>
        <div class="stock-msg" v-if="product.stockMsg && product.liveQuantity != 0"
             style="color:red;font-size: 10px;  white-space: break-spaces;line-height: 5px;">
          {{ product.stockMsg }}
        </div>
        <span v-else-if="product.liveQuantity == 0" style="color:red;font-weight:500;">
                    Out of stock
                </span>
        <span v-else-if="product.stock > 10">
                    <b>10+</b> items available in stock.
                </span>
        <span v-else>
                   Hurry Up! Only <b>{{ product.stock }}</b> items available in stock.
                </span>
        <br>
        <br/>

        <div v-if="product.payPrice != product.cartPrice" class="ps-product__price sale">
          <del class="mr-2">{{ priceFormat(product.cartPrice) }}</del>
          <br/>
          {{ priceFormat(product.payPrice) }}
          <br/>
          <span
              style="color:red;font-size:10px;  white-space: break-spaces;"
          >{{ product.priceMsg }}</span>
        </div>
        <div v-else class="ps-product__price">
          <h5 style="font-family:Arial,sans-serif;font-size: 14px;"> {{ priceFormat(product.payPrice) }}</h5>
        </div>
        <div class="row mgt-15" style="margin-top:10px; margin-bottom: 10px;">
          <div class="col-2 col-md-1">
            <i class="icon-circle-minus" @click.prevent="updateCart(product, '-')" style="font-size: 20px;"></i>
          </div>
          <div class="col-2 col-md-1">
            <span style="font-size: 20px;">{{ product.liveQuantity }}</span>
          </div>
          <div class="col-2 col-md-1">
            <i class="icon-plus-circle" @click.prevent="updateCart(product, '+')" style="font-size: 20px;"></i>
          </div>
          <div class="col-2 col-md-2">
            <span style="font-size: 20px;font-weight: 600;">{{ priceFormat(product.itemTotal) }}</span>
          </div>
        </div>

        <!-- <hr style="background-color:#d9d9d9"> -->
      </div>
      <div class="mobile w-100">
        <div class="d-flex ">
          <div class="mob-img">
            <nuxt-link :to="`/${product.linker}`" v-if='product.pictures != null && product.pictures_new == null'
                       class="d-flex align-items-center">
              <img
                  :src="`https://happimobiles.s3.ap-south-1.amazonaws.com/happi/${product.pictures[0]}.jpg`"
                  :alt="`${product.name}`"
                  class="cart-img"
              />
            </nuxt-link>
            <nuxt-link :to="`/${product.linker}`" v-else class="d-flex align-items-center">
              <img
                  :src="`${product.pictures_new[0]}`"
                  :alt="`${product.name}`"
                  class="cart-img"
              />
            </nuxt-link>

          </div>
          <div class="mob-details">
            <nuxt-link :to="`/${product.linker}`" class="ps-product__title">
              <h4 style="font-family: Arial,sans-serif;">{{ product.name }}</h4>
            </nuxt-link>
            <div class="stock-msg" v-if="product.stockMsg && product.liveQuantity != 0"
                 style="color:red;font-size: 10px;  white-space: break-spaces;line-height: 5px;">
              {{ product.stockMsg }}
            </div>
            <span v-else-if="product.liveQuantity == 0" style="color:red;font-weight:500;">
                    Out of stock
                </span>
            <span v-else-if="product.stock > 10">
                    <b>10+</b> items available in stock.
                </span>
            <span v-else>
                   Hurry Up! Only <b>{{ product.stock }}</b> items available in stock.
                </span>
            <br>
            <div v-if="product.payPrice != product.cartPrice" class="ps-product__price sale">
              <del class="mr-2">{{ priceFormat(product.cartPrice) }}</del>
              <br/>
              {{ priceFormat(product.payPrice) }}
              <br/>
              <span
                  style="color:red;font-size:10px;  white-space: break-spaces;"
              >{{ product.priceMsg }}</span>
            </div>
            <div v-else class="ps-product__price">
              <h5 style="font-family:Arial,sans-serif;font-size: 14px;"> {{ priceFormat(product.payPrice) }}</h5>
            </div>
            <div class="row mgt-15" style="margin-top:10px; margin-bottom: 1px;">
              <div class="col-2 col-md-1">
                <i class="icon-circle-minus" @click.prevent="updateCart(product, '-')" style="font-size: 20px;"></i>
              </div>
              <div class="col-2 col-md-1">
                <span style="font-size: 20px;">{{ product.liveQuantity }}</span>
              </div>
              <div class="col-2 col-md-1">
                <i class="icon-plus-circle" @click.prevent="updateCart(product, '+')" style="font-size: 20px;"></i>
              </div>
              <div class="col-2 col-md-2">
                <span style="font-size: 20px;font-weight: 600;">{{ priceFormat(product.itemTotal) }}</span>
              </div>
            </div>

          </div>
        </div>
      </div>


    </div>

  </div>
</template>

<script>
import {mapState} from 'vuex';
import ProductShoppingCart from '~/components/elements/product/ProductShoppingCart';

export default {
  name: 'TableShoppingCart',
  components: {ProductShoppingCart},
  data: () => {
    return { 
      loading: false
    }
  },
  computed: {
    ...mapState({
      cartItems: state => state.cart.cartItems,
      total: state => state.cart.total,
      amount: state => state.cart.amount,
      cartProducts: state => state.product.cartProducts
    })
  },
  created() {
    setTimeout(() => {
      console.log("cartItems", this.cartItems);
    }, 2000)

  },
  methods: {
    async loadCartProducts() {
      const cookieCart = this.$cookies.get('cart', {parseJSON: true});
      let queries = [];
      cookieCart.cartItems.forEach(item => {
        queries.push(item.id);
      });
      if (this.cartItems.length > 0) {
        await this.$store.dispatch('product/getCartProducts', queries);
      } else {
        this.$store.commit('product/setCartProducts', null);
      }

    },

    handleRemoveProductFromCart(product) {
      const cartItem = this.cartItems.find(
          item => item.id === product.id
      );
      this.$store.dispatch('cart/removeProductFromCart', cartItem);
      this.loadCartProducts();
    },
    incrementQuantity(product) {
      console.log('=====', product);
      const cartItem = this.cartItems.find(
          item => item.pId === product.products[0].pId
      );
      this.$store.dispatch('cart/increaseCartItemQuantity', cartItem);
      this.loadCartProducts();
    },
    async updateCart(item, action) {
      this.loading = true;
      if (action == '+') {
        await this.$store.dispatch('cart/updateCart', {
          productId: item.productId,
          quantity: 1
        });

        // setTimeout(function(){ $('.stock-msg').hide(); }, 8000);
      } else if (action == '-') {
        await this.$store.dispatch('cart/updateCart', {
          productId: item.productId,
          quantity: -1
        });
      } else if (action == 'x') {
        await this.$store.dispatch('cart/updateCart', {
          productId: item.productId,
          quantity: -item.quantity
        });
      }
      await this.$store.dispatch('cart/getCartItems');
      this.loading = false;
    },
    priceFormat(item) {
      item = item.toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR',
      });
      // console.log("DDDDDDD",item);
      return item;
    }
  }
};
</script>
<style>
.ps-table--responsive tbody tr td[data-label]:first-child {
  white-space: inherit;
}

.mgt-15 {
  margin-top: 15px;
}

.card-layout {
  background-color: #fff;
  border-radius: 8px;
  padding-top: 3%;
  border: 2px solid #ddd6d6;
  margin: 0px 1px 1px 1px;
  padding-bottom: 2%;
}

.mb-25 {
  margin-bottom: 25px;
}

.ps-table--responsive tbody tr td[data-label] {
  white-space: nowrap;
  display: table-cell;
  align-items: center;
  justify-content: flex-start;
}

/* .ps-table--shopping-cart tbody tr td:first-child {
    width: 110px;
} */
</style>
<style lang="scss" scoped>
.flt-rht {
  float: right;
}

.cart-img {
  width: 100px;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.mob-table {
  display: none;
}

.desktop-table {
  display: block;
}

.icon-plus-circle, .icon-circle-minus {
  cursor: pointer;
}

.mobile {
  display: none !important;
}

.desktop {
  display: block !important;
  .cart-img {
    height: 100px;
    width: auto;
  }

}


@media (max-width: 767px) {
  .mobile {
    display: block !important;

    .mob-img {
      width: 25%;
      //img {
      //  height: auto !important;
      //  width: 100% !important;
      //}
    }

    .mob-details {
      width: 75% !important;
    }
  }
  img.cart-img {
    height: 100px;
    width: auto !important;
  }
  .desktop {
    display: none !important;
  }
  .v-stepper__content {
    padding: 0px;
  }
  .desktop-table {
    display: none;
  }
  .flt-rht {
    float: left;
  }
  .mob-table {
    display: block;

    tbody {
      tr {
        td:first-child {
          .ps-product--cart {
            width: 110px;
          }
        }

        td:last-child {
          text-align: center;
        }

        td:nth-child(2) {
          .ps-product__price {
            width: 110px;
          }
        }

        td {
          vertical-align: inherit;
        }
      }
    }
  }

  .card-layout {

    padding-top: 1%;
    margin: 0px 1px 6px 1px;
    padding-bottom: 1%;
  }
  //     .ps-table--responsive {
  //         thead {
  //             display: block;
  //             tr {
  //                 th:nth-child(2) {
  //                     width: 100px;
  //                 }
  //                 th:nth-child(3) {
  //                     width: 100px;
  //                 }
  //                 th:nth-child(4) {
  //                     width: 100px;
  //                 }
  //                 th:last-child {
  //                     width: 30px;
  //                 }
  //             }
  //         }
  //         tbody {
  //             tr {
  //                 td: [data-label] {

  //                 }
  //                 :before {
  //                     display: none !important;
  //                 }
  //                 td:nth-child(2) {
  //                     width: 100px;
  //                 }
  //                 td:nth-child(3) {
  //                     width: 100px;
  //                 }
  //                 td:last-child {
  //                     width: 30px;
  //                 }
  //             }
  //         }
  //     }
}
</style>
