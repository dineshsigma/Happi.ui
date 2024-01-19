<template lang='html'>
  <section class='ps-page--my-account ps-container p-0'>
    <bread-crumb :breadcrumb='breadCrumb'/>
    <v-overlay v-if='loading'>
      <v-progress-circular indeterminate size='64'></v-progress-circular>
    </v-overlay>

    <template v-else>
      <div v-if="cartinfoData !=null">
     
   
              <div class='card final-review'>
                <div class='card-body'>


                  <div class='navigations d-flex align-items-center'>
                <!-- <span
                    x-large
                    text
                    style='font-size: 18px;font-weight: bold;cursor: pointer;'
                    outlined
                    @click='backButton()'
                > <i class='icon-backward-circle fa-2x ' color='warning ' style="color: #fb9013"></i>
                </span> -->
                    <h3 class='cartHeaders-view cartReview' style='margin: 20px'>
                      Review Cart</h3>
                  </div>
                  <div style='width:100%;' class='final-peview'>
                    <div class='row m-0'>
                      <div class='col-lg-8 col-12 p-m-0'>
                        <div class='first-b-preivew'>
                          <div class='prod-list'>
                            <div
                                class='mb-25 card-layout prod-each-layout'
                                v-for='(product) in cartItems'
                                :key='product.producId'
                            >
                              <div class='prod-img-b '>
                                <nuxt-link
                                    :to='`/${product.linker}`'
                                    v-if='product.pictures != null && product.pictures_new == null'
                                    class='d-flex align-items-center justify-content-center'
                                >
                                  <img
                                      :src='`https://happimobiles.s3.ap-south-1.amazonaws.com/happi/${product.pictures[0]}.jpg`'
                                      :alt='`${product.name}`'
                                      class='cart-img'
                                  />
                                </nuxt-link>
                                <nuxt-link
                                    :to='`/${product.linker}`'
                                    v-else
                                    class='d-flex align-items-center justify-content-center'
                                >
                                  <img
                                      :src='`${product.pictures_new[0]}`'
                                      :alt='`${product.name}`'
                                      class='cart-img'
                                  />
                                </nuxt-link>
                              </div>

                              <div class='prod-detial-b'>
                                <nuxt-link
                                    :to='`/${product.linker}`'
                                    class='ps-product__title'
                                >
                                  <div
                                      class='prod-name'
                                      style='font-family: Arial,sans-serif;'
                                  >{{ product.name }}
                                  </div>
                                </nuxt-link>

                                <br/>

                                <div
                                    v-if='product.payPrice !== product.cartPrice'
                                    class='ps-product__price sale'
                                >
                                  <del
                                      class='mr-2'
                                  >{{ priceFormat(product.cartPrice) }}
                                  </del>
                                  <br/>
                                  {{ priceFormat(product.payPrice) }}
                                  <br/>
                                  <span
                                      style='color:red;font-size:10px;  white-space: break-spaces;'
                                  >{{ product.priceMsg }}</span>
                                </div>
                                <div
                                    v-else
                                    class='ps-product__price d-flex justify-content-between'
                                >
                                  <span>Product Price</span>
                                  <h5
                                      style='font-family:Arial,sans-serif;font-size: 14px;'
                                  >{{ priceFormat(product.payPrice) }}</h5>
                                </div>

                              </div>
                            </div>
                          </div>
                          <div class='second-b'>
                            <div class='shipping-address' v-if="delivery_type=='delivery'">
                              <span>Shipping Address</span>
                              <ul style='list-style:none'>
                                <li>{{ formData.name }}</li>
                                <li>{{ formData.email }}</li>
                                <li>{{ formData.phone }}</li>
                                <li>
                                  {{ formData.street }}
                                  ,
                                  {{ formData.area }}
                                </li>
                                <li>{{ formData.city }}</li>
                                <li>{{ formData.pincode }}</li>
                              </ul>
                            </div>

                            <div class='shipping-address' v-if="delivery_type=='pickup'">
                              <span>Pickup Address</span>
                              <ul style='list-style:none'>
                                <li>{{ formData.FullPostalAddress }}</li>
                                <li>{{ formData.RetailerLocalityArea }}</li>
                                <li>{{ formData.MobileNumber }}</li>
                                <li>{{ formData.State }}</li>
                                <li>{{ formData.city }}</li>
                                <li>{{ formData.Pincode }}</li>
                                <li>{{ formData.timeSlot }}</li>
                              </ul>
                            </div>

                            <span style='color: #0a8d0a; font-weight: bold;'>
                                                    FREE Delivery on {{
                                shipping_dates
                              }}
                                                </span>
                          </div>

                        </div>
                      </div>
                      <div class='col-lg-4 col-12 p-m-0'>
                        <div class='card card-details ' >
                          <p class='card-title p-3 m-0'>Payment Information</p>
                          <div class='card-body p-2'>
                            <div class='final-items '>
                              <div
                                  class='d-flex justify-content-between'
                                  v-for='(product) in cartItems'
                                  :key='product.producId'
                              >
                                <span>{{ product.name }}</span>
                                <span>{{ priceFormat(product.payPrice) }}</span>
                              </div>
                            </div>


                            <div class="d-flex justify-content-between">
                              <span>Coupon Discount</span>
                              <span><b>{{ priceFormat(cartinfoData.cartInfo.couponDiscount) }}</b></span>
                            </div>

                            <div class="d-flex justify-content-between">
                              <span>Offer Cashback</span>
                              <span><b>{{ priceFormat(cartinfoData.cartInfo.cashback ? cartinfoData.cartInfo.cashback : 0.00) }}</b></span>
                            </div>
                            <div class="d-flex justify-content-between order-total">
                              <span>Order Total</span>
                              <span>{{ priceFormat(amount) }}</span>
                            </div>

                            <div class="d-flex justify-content-between">
                              <span><b>Items in cart</b></span>
                              <span><b>{{ total }}</b></span>
                            </div>
                            <div class="d-flex justify-content-center">
                              <span style="color: green"><b>{{ cartinfoData.cartInfo.offerSuccessMessage }}</b></span>
                            </div>
                          </div>
                        </div>
                        <div class='special-txt'>
                          By placing your order, you agree to happi mobiles
                          <a
                              href='/privacy_policy'
                              target='_blank'
                              style='color: #021bb4; text-decoration:underline'
                          >privacy policy</a> and
                          <a
                              href='/terms_and_conditions'
                              target='_blank'
                              style='color: #021bb4; text-decoration:underline'
                          >conditions of use</a>.
                        </div>
                        <div class='procced-btn desktop'>
                          <button
                              class='ps-btn ps-btn--fullwidth cartCheckout'
                              @click.prevent='checkout()'
                              style='font-size: 18px;font-weight: bold;'
                          >Checkout
                          </button>
                        </div>
                        <div class='sticky-layout mobile'  style='position: fixed;bottom: 0;left: 0;right: 0;z-index: 100;'>
                          <div class='procced-btn'>
                            <button
                                class='ps-btn ps-btn--fullwidth cartCheckout'
                                @click.prevent='checkout()'
                                style='font-size: 18px;font-weight: bold;'
                            >Checkout
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
          
      </div>
    </template>
  </section>

</template>

<script>
import {mapState} from 'vuex';
import BreadCrumb from '~/components/elements/BreadCrumb';
import EditAddress from '~/components/partials/account/EditAddress';
import Checkout from '~/components/partials/account/Checkout';
import ShoppingCart from '~/components/partials/account/ShoppingCart';
import LoginCart from '~/components/cart/login';
import {setTimeout} from 'timers';
import ProductShoppingCart from '~/components/elements/product/ProductShoppingCart';
import TableShoppingCart from '~/components/partials/account/modules/TableShoppingCart';

export default {
  transition: 'zoom',
  components: {
    ShoppingCart,
    Checkout,
    EditAddress,
    BreadCrumb,
    LoginCart,
    TableShoppingCart,
    ProductShoppingCart
  },
  data: () => {
    return {
      selectedOffer: null,
      newUserForm: false,
      valid: false,
      isOfferSelected: false,
      breadCrumb: [
        {
          text: 'Home',
          url: '/'
        },
        {
          text: 'Shopping Cart'
        }
      ],
      sendOtpLoading: false,
      userRegisterLoading: false,
      couponCodeLoading: false,
      otp_display: false,
      loading: false,
      steps: 1,
      phoneNo: '',
      coupon_code: '',
      name: '',
      email: '',
      otp: '',
      OtpMessage: '',
      delivery_type: 'delivery',
      couponError: [],
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length >= 3 || 'Name must be more than 3 characters'
      ],
      pincodeRules: [
        v => !!v || 'Pincode is required',
        v => v.length === 6 || 'Pincode must be 6 Digitals'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      formData: {
        country: 'India',
        name: '',
        email: '',
        phone: '',
        street: '',
        area: '',
        city: '',
        state: '',
        addressType: '',
        pincode: ''
      },

      selectedPickupIndex: -1,
      selectedCityStore: [],
      states: ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh',
        'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli', 'Daman and Diu',
        'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka',
        'Kerala', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
        'Odisha', 'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttarakhand', 'Uttar Pradesh',
        'West Bengal'],
      dates: [],
      selectedcity: null,
      pickUpStore: null,
      seletedDate: '',
      selectedOfferIndex: 0,
      customOfferList: [],
      shipping_dates: '',
      errors: []
    };
  },
  computed: {
    ...mapState({
      cartItems: state => state.cart.cartItems,
      total: state => state.cart.total,
      amount: state => state.cart.amount,
      cartinfoData: state => state.cart.cartInfo,
      cartProducts: state => state.product.cartProducts,
      isLoggedIn: state => state.auth.isLoggedIn,
      storesList: state => state.cart.storesList,
      citiesList: state => state.cart.citiesList,
      offersList: state => state.offers.offersList
    })
  },
  async created() {
    this.$cookies.remove('redirectLogin');
    await this.$store.dispatch('auth/getUserInfo');
    let userData = this.$cookies.get('userDetails');
    if (userData) {
      await this.$store.dispatch('auth/cartUserDetails',userData);
      this.steps = 2;
      this.phoneNo = userData.phone
    } else {
      this.steps = 1;
    }
    this.loading = true;
    var cart = await this.$store.dispatch('cart/getCartItems', []);
    await this.$store.dispatch('cart/getStoreList', []);
    if(this.cartinfoData) {
      this.coupon_code = this.cartinfoData.cartInfo.coupon
    }
    if(this.cartinfoData.cartInfo.couponErrMessage){
      this.couponError.push(this.cartinfoData.cartInfo.couponErrMessage);
    }
    this.loading = false;
    const d = new Date();
    var options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };

    var array = [];
    if (d.getHours() < 9) {
      array.push(d.toLocaleDateString('en-US', options) + ' (3PM - 6PM)');
      array.push(d.toLocaleDateString('en-US', options) + ' (6PM - 9PM)');
      d.setDate(d.getDate() + 1);
      array.push(
          d.toLocaleDateString('en-US', options) + ' (12PM - 3PM)'
      );
      array.push(d.toLocaleDateString('en-US', options) + ' (3PM - 6PM)');
    } else if (d.getHours() >= 9 && d.getHours() < 12) {
      array.push(d.toLocaleDateString('en-US', options) + ' (3PM - 6PM)');
      array.push(d.toLocaleDateString('en-US', options) + ' (6PM - 9PM)');
      d.setDate(d.getDate() + 1);
      array.push(
          d.toLocaleDateString('en-US', options) + ' (12PM - 3PM)'
      );
      array.push(d.toLocaleDateString('en-US', options) + ' (3PM - 6PM)');
      array.push(d.toLocaleDateString('en-US', options) + ' (6PM - 9PM)');
    } else if (d.getHours() >= 12 && d.getHours() < 15) {
      array.push(d.toLocaleDateString('en-US', options) + ' (6PM - 9PM)');
      d.setDate(d.getDate() + 1);
      array.push(
          d.toLocaleDateString('en-US', options) + ' (12PM - 3PM)'
      );
      array.push(d.toLocaleDateString('en-US', options) + ' (3PM - 6PM)');
      array.push(d.toLocaleDateString('en-US', options) + ' (6PM - 9PM)');
      d.setDate(d.getDate() + 1);
      array.push(
          d.toLocaleDateString('en-US', options) + ' (12PM - 3PM)'
      );
    } else if (d.getHours() >= 15) {
      d.setDate(d.getDate() + 1);
      array.push(
          d.toLocaleDateString('en-US', options) + ' (12PM - 3PM)'
      );
      array.push(d.toLocaleDateString('en-US', options) + ' (3PM - 6PM)');
      array.push(d.toLocaleDateString('en-US', options) + ' (6PM - 9PM)');
      d.setDate(d.getDate() + 1);
      array.push(
          d.toLocaleDateString('en-US', options) + ' (12PM - 3PM)'
      );
      array.push(d.toLocaleDateString('en-US', options) + ' (3PM - 6PM)');
    }
    this.seletedDate = array[0];
    this.dates = array;
    if (this.amount < 1) {
      this.$router.push('/cart');
    }

    this.overlay = false;


    await this.$store.dispatch('offers/getOfferList', cart.offer_context);

    // RESET SELECTED OFFER ON PAGE LOAD
    // this.selectedOffer = null;
    if (this.offersList.length !== 0) {
      for (let i = 0; i < this.offersList.length; i++) {
        let item = this.offersList[i];
        this.customOfferList.push(item);
      }
    }

    var monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


    var dt = new Date();
    dt.setDate(dt.getDate() + 3);
    let tdyDt = new Date();
    this.shipping_dates = `${tdyDt.getDate()} ${monthArray[tdyDt.getMonth()]} ${tdyDt.getFullYear()} - ${dt.getDate()} ${monthArray[dt.getMonth()]} ${dt.getFullYear()}`;
    this.customOfferList.push(
        {
          'id': 'test',
          'title': 'Proceed Payment without offer',
          'rule': 'mobile',
          'categoy_id': [],
          'mobileIds': [],
          'amount': {
            'min': '1000',
            'max': '15000',
            'maxCashBack': '',
            'percentage': ''
          },
          'paymentGateway': 'PayU',
          'offerKey': '',
          'description': 'All banks Payments with Credit Card/Credit Card EMI/Debit Card/Debit Card EMI/Net Banking, Wallet and UPI Options',
          'status': false,
          'ShowTimer': 'yes',
          'terms': '',
          'URL': null
        }
    );

      await this.$store.dispatch('cart/deliveryOptionToCart', {
        selectedOffer: this.customOfferList[0]
      });
      await this.$store.dispatch('cart/getCartItems', []);

  },
  methods: {
    checkout() {
      this.loading = true;
      let cartId = this.$cookies.get('cart_id');
      setTimeout(function () {
        window.location.href = `https://dev-services.happimobiles.com/payment/init?cartId=${cartId}`;
      }, 1500);
    },

    async selectOfferIndex(item, i) {
      this.selectedOfferIndex = i;
      this.isOfferSelected = true;
      await this.$store.dispatch('cart/deliveryOptionToCart', {
        selectedOffer: item
      });
      await this.$store.dispatch('cart/getCartItems', []);
    },
    async sendOtp() {
      this.sendOtpLoading = true;
      await this.$store.dispatch('auth/setAuthStatus', this.phoneNo);
      setTimeout(() => {
        this.sendOtpLoading = false;
        this.otp_display = true;
      }, 3000);

    },
    async onOtpEntered() {
      this.sendOtpLoading = true;
      let tempObj = {
        phoneNo: this.phoneNo,
        otp: this.otp
      };
      let temp = await this.$store.dispatch('auth/setOtpStatus', tempObj);
      if (temp.status) {
        this.newUserForm = false;
        let userCartDetails = {
          phoneNo: this.phoneNo,
          name : this.name,
          email: this.email
        }
        await this.$store.dispatch('auth/cartUserDetails', userCartDetails);
        if (temp.event == 'REGISTER_USER') {
          this.newUserForm = true;
        } else {
          this.steps = 2;
        }
      } else {
        this.OtpMessage = 'Oops ... Invalid OTP Please try again.';
      }
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },
    priceFormat(item) {
      item = item.toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR'
      });
      return item;
    },
    async userRegister() {
      if(this.name && this.email){
       this.userRegisterLoading = true;
       let tempObj = {
        name: this.name,
        email: this.email
      };
       await this.$store.dispatch('auth/cartUserDetails',tempObj,this.phoneNo);
      let temp = await this.$store.dispatch('auth/setRegisterStatus', tempObj);
      if (temp.status) {
        let tempObj2 = {otp: 'REGISTER_USER'};
        let temp2 = await this.$store.dispatch('auth/setOtpStatus', tempObj2);
        this.isActive = false;
        if (temp2.status) {
          location.reload();
        }
      }
      }else{
        alert("please fill the details");
      }
    },
    formStarting() {

      if (this.selectedOfferIndex === -1) {
        this.selectedOfferIndex = this.customOfferList.length - 1;
        this.selectOfferIndex(this.customOfferList[this.selectedOfferIndex]);
      }
      this.steps = 3;
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },
    // get stores list
    getLocalStoreArea() {
      var self = this;
      this.selectedPickupIndex = -1;
      try {
        if (this.selectedcity) {
          self.selectedCityStore = [];
          this.storesList.filter(locationsList => {
            var selectedLocation = JSON.parse(
                JSON.stringify(locationsList)
            );
            if (this.selectedcity === selectedLocation.city) {
              self.selectedCityStore.push(locationsList);
            }
          });
          self.selectedPickupIndex = 0;
        }
      } catch (e) {
        console.error('Failed to log in', e);
      }
    },
    selectedOfferClass(i) {
      if (this.selectedOfferIndex === i) {
        return 'selectedOffer';
      }
    },
    changeoffer() {
      this.selectedOffer = null;
    },
    async coupon_validate() {
      this.couponCodeLoading = true;
      let tempObj = {
        cartId: this.$cookies.get('cart_id'),
        coupon: this.coupon_code
      };
      let temp = await this.$store.dispatch('cart/valiDateCoupon', tempObj);
      if (temp.status) {
        await this.$store.dispatch('cart/getCartItems', []);
        this.couponError = [];
        await this.$store.dispatch('cart/getCartItems', []);
        if(this.cartinfoData.cartInfo.couponErrMessage){
          this.couponError.push(this.cartinfoData.cartInfo.couponErrMessage);
        }
      } else {
        this.couponError.push(temp.message);
      }
      setTimeout(() => {
        this.couponCodeLoading = false;
      }, 3000);
    },
    selectPickIndex(i) {
      this.selectedPickupIndex = i;
    },
    async saveAddress() {
      if (this.$refs.form.validate()) {
        await this.$store.dispatch('cart/deliveryOptionToCart', {
          address: {
            country: 'India',
            name: this.formData.name,
            email: this.formData.email,
            phone: this.phoneNo,
            street: this.formData.street,
            area: this.formData.area,
            city: this.formData.city,
            state: this.formData.state,
            pincode: this.formData.pincode
          },
          deliveryType: 'delivery'
        });
        this.steps = 4;
      }
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },
    async pickUpAtStore(store) {
      this.loading = true;
      store.timeSlot = this.seletedDate;
      await this.$store.dispatch('cart/deliveryOptionToCart', {
        store: store,
        deliveryType: 'pickup'
      });
      setTimeout(async () => {
        this.steps = 4;
        if (this.delivery_type === 'pickup') {
          this.formData = store;
          this.loading = false;
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }

      }, 2000);
    },
    backButton() {
      this.steps--;
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.final-peview {
  padding: 0px;
  //padding-bottom: 3rem;
  .cart-img {
    width: 100px;
    height: auto;
  }

  .prod-name {
    font-weight: 600;
  }

  .first-b-preivew {
    .prod-list-b {
      width: 100%;
    }

    .second-b {
      width: 100%;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
    }
  }
}

.prod-each-layout {
  display: flex;
  border: 2px solid #ddd6d6;
  padding-top: 3%;
  //margin: 15px 1px 1px 1px;
  padding-bottom: 2%;

  .prod-img-b {
    margin: 0 3rem;
  }
}

.shipping-address {
  margin-top: 1rem;

  span:first-child {
    font-size: 15px;
    font-weight: 600;
  }
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
      color: green;
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

.special-txt {
  margin: 8px 0;
  text-align: center;
}

.procced-btn {
  button {
    color: #fff;
  }
}

.v-btn__content {
  font-weight: bold;
  font-size: 18px;
}
//.cartHeaders-view {
//  margin: 0px !important
//}
.mobile {
  display: none !important;
}

.desktop {
  display: block !important;
}.cartHeaders-view.summary {
   font-size: 24px;
   font-weight: 600;
   margin:  10px 0 10px 15px;
 }
 .p-d-0 {
   padding: 0;
 }
.final-review {
 .prod-img-b {
   width: 25%;
 }
  .prod-detial-b {
    width: 75%;
    padding-right: 1rem;
  }
 .cart-img {
    height: 110px !important;
    width: auto !important;
  }

}
@media (max-width: 767px) {

  .mobile {
    display: block !important;
  }

  .desktop {
    display: none !important;
  }
  //.v-application--is-ltr .v-stepper--vertical .v-stepper__content:last-child {
  //  padding: 0 !important;
  //}
  .final-peview {
    padding: 0;
    margin-bottom: 3rem;
  }
  .prod-each-layout {
    .prod-img-b {
      margin: 0 1rem;
    }

    .prod-detial-b {
      padding-right: 8px;
    }
  }
  .second-b {
    display: grid !important;
  }
  .cart-summary-content {
    padding: 0 !important;
    .summary {

    }
  }
  .cartHeaders-view.summary {
    font-size: 24px;
    font-weight: 600;
    margin: 10px;
    text-align: center;
  }
  span.v-stepper__step__step {
    margin-bottom: 0 !important;
  }
  .v-stepper--alt-labels .v-stepper__header .v-divider {
      margin: 21px -69px 0;
  }
  .v-stepper__step {
    padding: 10px 0 0;
  }
  .search-bar-mob {
    display: none;
  }
  .v-stepper__content {
    padding: 10px !important;
  }
  .final-review {
    border: 0 !important;
    .card-body {
      padding: 0;
    }
    .prod-img-b {
      width: 25%; a
    {

    }
    }
    .cart-img {
      height: 100px !important;
      width: auto !important;
    }

  }
  .delivery-view {
    border: 0 !important;
  }
  .p-m-0 {
    padding:  0 !important;
  }
}
.ps-section__content{
    margin-top: 25px;
}
</style>
