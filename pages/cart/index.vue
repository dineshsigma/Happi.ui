<template lang='html'>
  <section class='ps-page--my-account ps-container p-0'>
    <bread-crumb :breadcrumb='breadCrumb'/>
    <v-overlay v-if='loading'>
      <v-progress-circular indeterminate size='64'></v-progress-circular>
    </v-overlay>

    <template v-else>
      <div v-if="cartinfoData !=null">
        <v-stepper alt-labels v-model='steps'>
          <v-stepper-header>
            <v-stepper-step :complete='steps > 1' step='1'>User Information</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete='steps > 2' step='2'>Cart Summary</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete='steps > 3' step='3'>Delivery Information</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step='4'>Review Cart</v-stepper-step>
          </v-stepper-header>
          <!-- <div v-if="bajajemi">
            <p id="demo" style="color:red"></p>
          </div> -->
          <v-stepper-items>
            <v-stepper-content step='1'>
              <p class='cartHeaders-view summary' style="text-align: left">User Information</p>
              <v-card class='mb-12'>
                <div class='row'>
                  <div class='col-xs-12 col-md-4' style='margin: 20px'>
                    <div v-if='newUserForm'>
                      <h5 style='margin: 10px'>Name</h5>
                      <div class='form-group' style='margin-bottom: 0'>
                        <v-text-field
                            v-model='name'
                            class='ps-text-field'
                            placeholder='Enter Name'
                            height='50'
                            outlined
                            ref='name'
                            id='name'
                            onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                            autofocus
                        />
                      </div>
                      <h5 style='margin: 10px'>Email</h5>
                      <div class='form-group' style='margin-bottom: 0'>
                        <v-text-field
                            v-model='email'
                            class='ps-text-field'
                            placeholder='Enter Email'
                            height='50'
                            outlined
                            ref='email'
                            id='email'
                            autofocus
                        />
                      </div>
                      <v-btn
                          class='ma-2'
                          :loading='userRegisterLoading'
                          :disabled='userRegisterLoading'
                          color='warning'
                          large
                          style='margin: 10px; font-size: 18px;font-weight: bold;'
                          @click='userRegister()'>
                        Register
                        <template v-slot:loader>
                          <span class='custom-loader'>
                            <v-icon light>mdi-cached</v-icon>
                          </span>
                        </template>
                      </v-btn>
                    </div>
                    <div v-else>
                      <h5 style='margin: 10px'>Phone Number Verification</h5>
                      <div class='form-group' style='margin-bottom: 0'>
                        <v-text-field
                            v-model='phoneNo'
                            class='ps-text-field'
                            placeholder='Enter PhoneNo'
                            height='50'
                            outlined
                            ref='phoneNo'
                            id='phoneNo'
                            autofocus
                        />
                      </div>
                      <v-btn
                          class='ma-2 sendOTPCart'
                          :loading='sendOtpLoading'
                          :disabled='sendOtpLoading'
                          color='warning'
                          v-show='!otp_display'
                          large
                          style='margin: 10px; font-size: 18px;font-weight: bold;'
                          @click='sendOtp()'>Send OTP
                        <template v-slot:loader>
                                                <span class='custom-loader'>
                                                    <v-icon light>mdi-cached</v-icon>
                                                </span>
                        </template>
                      </v-btn>
                      <v-btn
                          class='ma-2 UserRegisterCart'
                          :loading='sendOtpLoading'
                          :disabled='sendOtpLoading'
                          color='warning'
                          v-show='otp_display'
                          large
                          style='margin: 10px; font-size: 18px;font-weight: bold;'
                          @click='sendOtp()'>
                        ReSend OTP
                        <template v-slot:loader>
                                                <span class='custom-loader'>
                                                    <v-icon light>mdi-cached</v-icon>
                                                </span>
                        </template>
                      </v-btn>
                      <h5 v-show='otp_display' style='margin: 10px'>OTP</h5>
                      <h5>*Dear Customer, You will get OTP via call</h5>
                      <div
                          class='form-group'
                          v-show='otp_display'
                          style='margin-bottom: 1rem'>
                        <v-otp-input
                            v-model='otp'
                            length='6'
                            height='50'
                            type='number'
                            @finish='onOtpEntered()'
                        ></v-otp-input>
                        <span style='color:red'>{{ OtpMessage }}</span>
                      </div>
                      <v-btn
                          class='ma-2 UserRegisterCart'
                          :loading='sendOtpLoading'
                          :disabled='sendOtpLoading'
                          color='warning'
                          v-show='otp_display'
                          large
                          style='margin: 10px; font-size: 18px;font-weight: bold;'
                          @click='onOtpEntered()'>
                        Verify OTP
                        <template v-slot:loader>
                                                <span class='custom-loader'>
                                                    <v-icon light>mdi-cached</v-icon>
                                                </span>
                        </template>
                      </v-btn>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step='2' class="cart-summary-content">

              <p class='cartHeaders-view summary' style="text-align: left" >Cart Summary</p>
              <!--<shopping-cart> -->
              <div class='ps-section--shopping ps-shopping-cart pl-0 pt-0 pr-0 pb-5'
                   v-if='!loading'>
                <div class='container-fluid'>
                  <div class='ps-section__content'>
                    <div
                        class='row'
                        v-if='cartItems != null && cartItems.length != 0'>
                      <div class='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 p-m-0' style="margin-top: 1%;    padding: 26px;">
                        <table-shopping-cart/>
                      </div>
                      <div class='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 p-0'>
                        <div class='ps-block--shopping-totalt'>
                          <div class='ps-block__content'>
                            <div class='card card-details'>
                              <p class='card-title p-3 m-0'>Payment Information</p>
                              <div class='card-body'>
                                <div class='final-items'>
                                  <div
                                      class='d-flex justify-content-between'
                                      v-for='(product) in cartItems'
                                      :key='product.producId'>
                                    <span>{{ product.name }}</span>
                                    <span>{{ priceFormat(product.payPrice) }}</span>
                                  </div>
                                </div>
                                
                                <div v-if="bajajemi">
                                  <div class="d-flex justify-content-between">
                                    <span><b>{{this.bajajemi.tenor-this.bajajemi.advEmi}}</b> EMIs of <b>Rs. {{priceFormat(bajajemi.emiAmount)}}</b> :</span>
                                    <span><b>{{ priceFormat((bajajemi.tenor-this.bajajemi.advEmi)*bajajemi.emiAmount) }}</b></span>
                                  </div>

                                  <div class="d-flex justify-content-between">
                                    <span>Downpayment :</span>
                                    <span><b>{{ priceFormat(bajajemi.advEmi * bajajemi.emiAmount) }}</b></span>
                                  </div>

                                  <div class="d-flex justify-content-between">
                                    <span>Processeing Fee :</span>
                                    <span><b>{{ priceFormat(bajajemi.processingFee) }}</b></span>
                                  </div>

                                   <div class="d-flex justify-content-between">
                                    <!---<span>EMI Charges (payable now) *AA :</span>
                                    <span><b>{{ priceFormat(parseInt(bajajemi.charges?.split(";")[3]?.split(':')[1])) }}</b></span>--->
                                  </div>

                                  <div class="d-flex justify-content-between order-total">
                                    <span>Order Total</span>
                                    <span>{{ priceFormat(totalAmount) }}</span>
                                  </div>
                                </div>
                                <div v-else>
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
                              </div>

                                <div class="d-flex justify-content-between">
                                  <span><b>Items in cart</b></span>
                                  <span><b>{{ total }}</b></span>
                                </div>

                                <div class="d-flex justify-content-center">
                                  <span style="color: green"><b>{{ cartinfoData.cartInfo.offerSuccessMessage }}</b></span>
                                </div>

                              </div>
                              <div class='card-footer offers-txt p-0'>
                                <div class='row m-0' v-if='cartItems != null && cartItems.length != 0'>
                                  <div class='col-xs-12 col-md-12'>
                                    <h5 style='margin: 10px'> Coupon Code</h5>
                                    <div class='d-flex '>
                                      <v-text-field
                                          v-model='coupon_code'
                                          class='ps-text-field'
                                          height='45'
                                          :error-messages='couponError'
                                          outlined
                                          ref='coupon_code'
                                          id='coupon_code'/>
                                      <v-btn
                                          class='ma-2 OfferVerifyCart'
                                          :loading='couponCodeLoading'
                                          :disabled='couponCodeLoading'
                                          color='warning'
                                          large
                                          style='margin: 0px 8px !important; font-size: 18px;font-weight: bold;'
                                          @click='coupon_validate()'>
                                        Verify
                                        <template v-slot:loader>
                                          <span class='custom-loader'>
                                            <v-icon light>mdi-cached</v-icon>
                                          </span>
                                        </template>
                                      </v-btn>
                                    </div>
                                  </div>
                                </div>
                                
                                <div v-if="bajajemi"></div>
                                <div v-else>
                                <div v-if='customOfferList.length != 0'>
                                  <div
                                      class='row m-top-20 m-0' v-if='selectedOffer == null'>
                                    <div class='col-12 p-0'>
                                      <p class='card-title p-3 m-0'>Available Offers</p>
                                    </div>
                                    <div
                                        class='col-12'
                                        v-for='(item, index) in customOfferList'
                                        v-on:click='selectOfferIndex(item,index)'
                                        :class='selectedOfferClass(index)'
                                        style='cursor:pointer'>
                                      <div
                                          class='row'
                                          style='margin:15px 0'
                                      >
                                        <div class='col-1'>
                                          <input
                                              type='radio'
                                              id='offer'
                                              class='checkmark'
                                              :value='index'
                                              v-model='selectedOfferIndex'
                                          />
                                        </div>
                                        <div class='col-11'>
                                          <ul
                                              style='list-style:none'
                                          >
                                            <li
                                                class='d-flex justify-content-between'
                                            >
                                              <b>
                                                <i
                                                    class='icon-store mr-2'
                                                ></i>
                                                {{ item.title }}
                                              </b>
                                            </li>
                                          </ul>
                                          <p v-if="selectedOfferIndex == index">{{ item.description }}<br>
                                            <span style="color: red" v-if="(item.paymentGateway === 'PineLabs' || item.paymentGateway === 'Pinelabs') && cartItems.length != 1">
                                              <b>Please make sure you one item in cart to process the offer</b>
                                          </span>
                                          </p>
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
                  </div>

                    <div v-else>
                      <div class='ps-section__cart-actions'>
                        <h3>Your bag is empty</h3>
                        <nuxt-link to='/' class='ps-btn'>
                          <i class='icon-arrow-left mr-2'></i>
                          Shop Now
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="desktop">


              <div class='row m-0 '>
                <div class='col-xs-12 col-md-8'></div>
                <div class='col-xs-12 col-md-4 p-d-0'>
                  <v-btn class="cartSummary"
                      v-if='amount !== 0'
                      color='warning'
                      @click='formStarting'
                      x-large
                      style='font-size: 18px;font-weight: bold;float:right;width:100%;'
                  >Next
                  </v-btn>
                </div>
              </div> </div>
              <div class='sticky-layout mobile'  style='position: fixed;bottom: 0;left: 0;right: 0;z-index: 100;'>
                <v-btn class="cartSummary"
                    v-if='amount !== 0'
                    color='warning'
                    @click='formStarting'
                    x-large
                    style='font-size: 18px;font-weight: bold;float:right;width:100%;'
                >Next
                </v-btn>
              </div>

            </v-stepper-content>
            <v-stepper-content step='3'>
              <div class='card delivery-view'>
                <div class='card-body p-m-0'>
                  <div class='navigations d-flex align-items-center'>
                                        <span
                                            x-large
                                            text
                                            style='font-size: 18px;font-weight: bold;cursor: pointer;'
                                            outlined
                                            @click='backButton()'
                                        > <i class='icon-backward-circle fa-2x deliveryInformation' style="color: #fb9013"></i>
                                        </span>
                    <h3 class='cartHeaders-view' style='margin: 20px'>Delivery Information</h3>
                  </div>


                  <div class='row m-0'>

                    <div class='col-xs-12 col-md-12 p-0'>

                      <template class=''>
                        <v-container class='px-0' fluid>
                          <v-radio-group v-if="bajajemi" v-model='delivery_type' class='d-flex align-items-center'>
                            <v-radio class="cartDelivery"
                                key='delivery'
                                label='Delivery'
                                value='delivery'
                                checked
                            ></v-radio>
                          </v-radio-group>
                          <v-radio-group v-else v-model='delivery_type' class='d-flex align-items-center'>
                            <v-radio class="cartDelivery"
                                key='delivery'
                                label='Delivery'
                                value='delivery'
                                checked
                            ></v-radio>
                            <v-radio class="cartPickup"
                                key='Pickup'
                                label='Pickup At Store'
                                value='pickup'
                            ></v-radio>
                          </v-radio-group>
                        </v-container>
                      </template>
                    </div>
                    <div class='col-xs-12 col-md-12 p-m-0' v-if="delivery_type === 'delivery'"
                         style='margin: 20px 0;'>
                      <template>
                        <div class='row m-0 card-layout'>
                          <div
                              class='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 pb-0 pt-3'
                          >
                          <!-- <p style="color:red;text-align:center">HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII</p> -->
                            <v-form ref='form' v-model='valid' lazy-validation>
                              <h5>Fill Your Delivery Address</h5>
                              <br/>
                              <center><div v-if="bajajemi" class="warning-msg">
                                <i class="fa fa-warning happi-icon"></i>
                                Please Fill your Address & Pincode which is linked to your Bajaj Finserve Card
                              </div></center>
                              <br>
                              <div class='row'>
                                <div
                                    class='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'
                                >
                                  <v-text-field
                                      v-model='formData.name'
                                      :rules='nameRules'
                                      label='Name'
                                      required
                                  ></v-text-field>
                                </div>
                                <div
                                    class='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 '
                                >
                                  <v-text-field
                                      v-model='formData.email'
                                      :rules='emailRules'
                                      label='E-mail'
                                      required
                                  ></v-text-field>
                                </div>

                                <div
                                    class='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 '
                                >
                                  <label>Phone Number</label>
                                  <div class='form-group'>
                                    <input
                                        class='form-control'
                                        type="number"
                                        hide-spin-buttons
                                        disabled
                                        v-model='phoneNo'
                                        style='height:37px'
                                    />
                                  </div>
                                </div>

                                <div
                                    class='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 '
                                >
                                  <v-text-field
                                      v-model='formData.street'
                                      label='Street'
                                      :rules="[v => !!v || 'Street is required']"
                                      required
                                  ></v-text-field>
                                </div>
                                <div
                                    class='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 '
                                >
                                  <v-text-field
                                      v-model='formData.area'
                                      label='Area'
                                      :rules="[v => !!v || 'Area is required']"
                                      required
                                  ></v-text-field>
                                </div>
                                <div
                                    class='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 '
                                >
                                  <v-text-field
                                      v-model='formData.city'
                                      label='City'
                                      :rules="[v => !!v || 'City is required']"
                                      required
                                  ></v-text-field>
                                </div>
                                <div
                                    class='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 '
                                >
                                  <label>Select State</label>
                                  <v-overflow-btn
                                      class='my-2'
                                      :items='states'
                                      menu-props='top'
                                      label='Select your state'
                                      :rules="[v => !!v || 'State is required']"
                                      v-model='formData.state'
                                      target='#dropdown-example-1'
                                  ></v-overflow-btn>
                                </div>

                                <div
                                    class='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 '
                                >
                                  <v-text-field
                                      v-model='formData.pincode'
                                      :rules='pincodeRules'
                                      :counter='6'
                                      label='Pincode'
                                      type="number"
                                      hide-spin-buttons
                                      required
                                  ></v-text-field>
                                </div>
                              </div>
                              <v-btn
                                  style='font-size: 18px;font-weight: bold; width: 100%;margin-bottom: 15px;'
                                  color='warning'
                                  large
                                  :disabled='!valid'
                                  @click='saveAddress()'
                              >Next
                              </v-btn>

                            </v-form>
                          </div>
                        </div>
                      </template>
                    </div>
                    <div class='col-xs-12  col-md-6' v-if="delivery_type === 'pickup'"
                         style='margin: 20px 0;'>
                      <template>
                        <div class='m-top-60'>
                          <!-- <h3>Pickup at store</h3> -->
                          <div class='row m-top-30' style='margin-top:10px'>
                            <div class='col-sm-12 col-12 card-layout mtb-10 p-m-0 ' style="border: 0 !important;">
                              <div class='form-group mb-0'>
                                <!-- <label> Select City </label> -->
                                <div class='row'>
                                  <div class='col-12'>
                                    <div class='form-group mb-0'>
                                      <v-select
                                          :items='citiesList'
                                          label='Select Pickup City'
                                          @change='getLocalStoreArea()'
                                          outlined
                                          v-model='selectedcity'
                                      ></v-select>
                                    </div>
                                  </div>
                                </div>

                                <!-- Block Start -->

                                <div
                                    class="col-sm-12 col-12 card-layout mtb-0"
                                    v-for="(item, index) in selectedCityStore"
                                    v-on:click="selectPickIndex(index)"
                                >
                                  <ul style="list-style: none">
                                    <li>
                                      <b>
                                        <i class="icon-store mr-2"></i>
                                        {{ item.RetailerLocalityArea }}
                                      </b>
                                    </li>
                                    <li
                                        v-if="selectedPickupIndex === index"
                                    >{{ item.FullPostalAddress }}
                                    </li>
                                    <li
                                        v-if="selectedPickupIndex === index"
                                    >{{ item.MobileNumber }}
                                    </li>
                                    <li
                                        v-if="selectedPickupIndex === index"
                                    >{{ item.Pincode }}
                                    </li>
                                    <li v-if="selectedPickupIndex === index">
                                      <i class="icon-phone mr-2"></i>
                                      {{ item.State }}
                                    </li>
                                    <li
                                        v-if="selectedPickupIndex === index"
                                    >{{ item.city }}
                                    </li>
                                  </ul>
                                  <div
                                      class="delivery-btn mb-2"
                                      v-if="selectedPickupIndex === index"
                                  >
                                    <div class="form-group mb-0">
                                      <!--   <label> Select  </label>-->
                                      <div
                                          class="row"
                                          style="margin-top:10px"
                                      >
                                        <div class="col-12">
                                          <div class="form-group">
                                            <v-select
                                                :items="dates"
                                                label="Select Pickup Timing"
                                                outlined
                                                v-model="seletedDate"
                                            ></v-select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <button
                                        type="button"
                                        class="ps-btn w-100"
                                        style="color:#fff"
                                        @click.prevent="pickUpAtStore(item)"
                                    >
                                      will pickup in
                                      {{ item.RetailerLocalityArea }}
                                    </button>
                                  </div>
                                </div>


                                <!-- Block End -->
                              </div>
                            </div>

                          </div>
                        </div>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </v-stepper-content>
            <v-stepper-content step='4'>
              <div class='card final-review'>
                <div class='card-body'>
                  <div class='navigations d-flex align-items-center'>
                  <span
                      x-large
                      text
                      style='font-size: 18px;font-weight: bold;cursor: pointer;'
                      outlined
                      @click='backButton()'
                  > <i class='icon-backward-circle fa-2x ' color='warning ' style="color: #fb9013"></i>
                  </span>
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
                              FREE Delivery on {{ shipping_dates }}
                              <br>
                              <br>
                              <div v-if="bajajemi" style="background-color: white; border: 2px solid rgba(0, 0, 0, 0.3);border-radius: 15px;width: 450px;">
                                
                                <span style="color:black;font-weight:800;font-size: 14px;"><center>Bajaj EMI Details</center></span>
                                <!-- <span style="color:black;font-weight:600;font-size: 12px;"><center>Name: {{ this.userCardData.CustomerName }}</center></span> -->
                                <span style="color:black;font-weight:600;font-size: 12px;"><center>Card Number: XXXX XXXX XXXX {{ this.card }}</center></span>
                                <div class="offers-show" style="font-size: 14px;">
                                  <div class="offers-each">
                                    <!-- {{ this.bajajemi }} -->
                                      <span>
                                          <b> Downpayment : </b> <b style="float:right">{{ this.bajajemi.advEmiAmt }}</b> <br />
                                          EMI Amount :  <span style="float:right"> {{ this.bajajemi.emiAmount}} X {{ this.bajajemi.tenor - this.bajajemi.advEmi}} Months </span> <br />
                                          Processing Fee : <span style="float:right"> {{this.bajajemi.processingFee}}  </span><br />
                                         <!---- EMI Charges (payable now) * : <span style="float:right"> {{this.bajajemi?.charges?.split(";")[3]?.split(':')[1]}}  </span>--->
                                          <br />
                                      </span>
                                  </div>
                              </div>
                              </div>
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

                          <!-- <div v-if="bajajemi">
                            
                          </div> -->
                          <div v-if="bajajemi">
                            <div class="d-flex justify-content-between">
                              <span><b>{{this.bajajemi.tenor - this.bajajemi.advEmi}}</b> EMIs of <b>Rs. {{priceFormat(bajajemi.emiAmount)}}</b> :</span>
                              <span><b>{{ priceFormat((bajajemi.tenor - this.bajajemi.advEmi)*bajajemi.emiAmount) }}</b></span>
                            </div>

                            <div class="d-flex justify-content-between">
                              <span>Downpayment :</span>
                              <span><b>{{ priceFormat(bajajemi.advEmiAmt) }}</b></span>
                            </div>

                            <div class="d-flex justify-content-between">
                              <span>Processeing Fee :</span>
                              <span><b>{{ priceFormat(bajajemi.processingFee) }}</b></span>
                            </div>

                           <div class="d-flex justify-content-between">
                              <span>EMI Charges (payable now) * :</span>
                              <span><b>{{ priceFormat(parseInt(this.bajajemi.charges?.split(";")[3]?.split(':')[1])) }}</b></span>
                            </div>

                            <div class="d-flex justify-content-between order-total">
                              <span>Order Total</span>
                              <span>{{ priceFormat(bajajTotalAmount) }}</span>
                            </div>
                          </div>
                          <div v-else>
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
                        <div class='special-txt' v-if="bajajemi">
                          <input class="form-check-input" v-model="checkPolicy" type="checkbox" id="policy" checked />
                          &nbsp;By placing order, you agree to Bajaj EMI
                          <a
                              href='/bajaj_privacy_policy'
                              target='_blank'
                              style='color: #021bb4; text-decoration:underline'
                          >privacy policy and conditions of use</a>
                        </div>
                        <div v-if="bajajemi" class='procced-btn desktop'>
                          <button
                              :disabled="!checkPolicy"
                              class='ps-btn ps-btn--fullwidth cartCheckout'
                              @click.prevent='generateOtp()'
                              style='font-size: 18px;font-weight: bold;'
                          >Generate OTP
                          </button>
                        </div>

                          <div v-else-if="this.cod == true" class="procced-btn desktop">
                            <button 
                              class="ps-btn ps-btn--fullwidth cartCheckout" @click.prevent="
                                codPayment()
                                " style="
                                font-size: 18px;
                                font-weight: bold;
                            ">
                              Cash On Delivery
                          </button>
                          <br>
                          <br>
                          <button class="ps-btn ps-btn--fullwidth cartCheckout"
                              @click.prevent="
                                checkout()
                                " style="
                                font-size: 18px;
                                font-weight: bold;
                            ">
                              Checkout
                          </button>
                          </div>

                          <div v-else class='procced-btn desktop'>
                          <button
                              class='ps-btn ps-btn--fullwidth cartCheckout'
                              @click.prevent='checkout()'
                              style='font-size: 18px;font-weight: bold;'
                          >Checkout
                          </button>
                        </div>

                        <v-dialog v-model="generate" width="500" persistent>
                              <v-card>
                                  <v-card-title class="text-h3">
                                      Enter Your OTP
                                      <br>
                                      <h5>OTP has been sent to your Bajaj Finance Registered Number</h5>
                                  </v-card-title>
                                  <v-card-text>
                                      <br><br>
                                      <v-row
                                          class="text-h5"
                                          justify="center"
                                      >
                                      <div
                                      class='form-group'
                                      
                                      style='margin-bottom: 1rem'>
                                    <v-otp-input
                                        v-model='bajajOtp'
                                        length='6'
                                        height='50'
                                        type='number'
                                    ></v-otp-input>
                                    <span v-show="otpValidate" style='color:red;float: left;'>Please Enter Valid OTP</span>
                                    <span style='color:green;float: left;'>{{ bajajOtpResendMessage }}</span>
                                    <a @click='generateOtp()' style="text-decoration: underline;float: right;font-size: 12px;color:#fb9013">Resend OTP</a>

                                    <span style='color:red'>{{ bajajOtpMessage }}</span>
                                  </div>
                                  </v-row>
                                  </v-card-text>

                                  <v-divider></v-divider>

                                  <v-card-actions>
                                      <!-- <v-spacer></v-spacer> -->
                                      
                                  <v-btn
                                      class='ma-2 UserRegisterCart'       
                                      large
                                      style='margin: 8px;float:left; font-size: 16px;font-weight: bold;color: white;background-color: #fb9013;border: 1px solid #fb9013;height: 32px;border-radius: 8px;'
                                      @click='goBack()'>
                                    Cancel
                                    <template v-slot:loader>
                                          <span class='custom-loader'>
                                              <v-icon light>mdi-cached</v-icon>
                                          </span>
                                    </template>
                                  </v-btn>
                                
                                  <v-spacer></v-spacer>
                                
                                  <v-btn
                                      class='ma-2 UserRegisterCart'       
                                      large
                                      style='margin: 8px;float:right; font-size: 16px;font-weight: bold;color: white;background-color: #fb9013;border: 1px solid #fb9013;height: 32px;border-radius: 8px;'
                                      @click='confirmOnOTP()'>
                                    Verify OTP
                                    <template v-slot:loader>
                                        <span class='custom-loader'>
                                            <v-icon light>mdi-cached</v-icon>
                                        </span>
                                    </template>
                                  </v-btn>
                                  </v-card-actions>
                              </v-card>
                        </v-dialog>

                        <v-dialog v-model="notGenerate" width="500" persistent>
                              <v-card>
                                  <v-card-title class="text-h3">
                                      Pincodes Mismatch
                                      <br>
                                      <br>
                                      <h5>To proceed with Bajaj EMI Your Delivery Pincode should Match with the Pincode which is Liked to Your Bajaj Card</h5>
                                  </v-card-title>
                                
                                  <v-divider></v-divider>

                                  <v-card-actions>
                                      
                                  <v-spacer></v-spacer>
                                
                                  <v-spacer></v-spacer>
                                
                                  <v-btn
                                      class='ma-2 UserRegisterCart'       
                                      large
                                      style='margin: 8px;float:right; font-size: 16px;font-weight: bold;color: white;background-color: #fb9013;border: 1px solid #fb9013;height: 32px;border-radius: 8px;'
                                      @click='changeDeliveryPincode()'>
                                    Go Back
                                    <template v-slot:loader>
                                                            <span class='custom-loader'>
                                                                <v-icon light>mdi-cached</v-icon>
                                                            </span>
                                    </template>
                                  </v-btn>
                                  </v-card-actions>
                              </v-card>
                        </v-dialog>

                        <v-dialog v-model="intercityError" width="500" persistent>
                              <v-card>
                                  <v-card-title class="text-h3">
                                      Invalid Card Details
                                      <br>
                                      <br>
                                      <h5>Please contact Bajaj Customer Care</h5>
                                  </v-card-title>
                                
                                  <v-divider></v-divider>

                                  <v-card-actions>
                                      
                                  <v-spacer></v-spacer>
                                
                                  <v-spacer></v-spacer>
                                
                                  <v-btn
                                      class='ma-2 UserRegisterCart'       
                                      large
                                      style='margin: 8px;float:right; font-size: 16px;font-weight: bold;color: white;background-color: #fb9013;border: 1px solid #fb9013;height: 32px;border-radius: 8px;'
                                      @click='interCityError()'>
                                    Go Back
                                    <template v-slot:loader>
                                        <span class='custom-loader'>
                                            <v-icon light>mdi-cached</v-icon>
                                        </span>
                                    </template>
                                  </v-btn>
                                  </v-card-actions>
                              </v-card>
                        </v-dialog>

                        <v-dialog
                            v-model="otpEntered"
                            width="500"
                        >
                            <v-card>
                                <v-card-title class="text-h5"> 
                                    Do you want to proceed ?
                                </v-card-title>

                                <v-divider></v-divider>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    
                                    <v-btn
                                        elevation="0"
                                        @click="notProceed()"
                                        style="font-size: 14px;border-radius: 15px;border: 1px solid #fb9013;color:#fb9013;background-color: white;"
                                    >No</v-btn>
                                    <v-btn
                                        color="#fb9013"
                                        class="white--text"
                                        elevation="0"
                                        @click='onBajajOtpEntered()'
                                        style="font-size: 14px;border-radius: 15px;"
                                    >Yes</v-btn>
                                    
                                </v-card-actions>
                            </v-card>
                        </v-dialog>

                        <v-dialog
                            v-model="bajajPayment"
                            width="500"
                        >
                            <v-card>
                                <v-card-title class="text-h5"> 
                                    OTP Verified Successfully..!!
                                </v-card-title>
                                <v-card-text>
                                    <br><br>
                                    <v-row
                                        class="text-h5"
                                        justify="center"
                                    >
                                    Please complete the payment in next step to place your order.
                                </v-row>
                                </v-card-text>

                                <v-divider></v-divider>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    
                                    <v-btn
                                        elevation="0"
                                        @click="notProceed()"
                                        style="font-size: 14px;border-radius: 15px;border: 1px solid #fb9013;color:#fb9013;background-color: white;"
                                    >No</v-btn>
                                    <v-btn
                                        color="#fb9013"
                                        class="white--text"
                                        elevation="0"
                                        @click="checkout()"
                                        style="font-size: 14px;border-radius: 15px;"
                                    >Yes</v-btn>
                                    
                                </v-card-actions>
                            </v-card>
                        </v-dialog>

                        <v-dialog v-model="block"
                            width="500" persistent>
                            <v-card>
                                <v-card-title class="text-h5"> 
                                    You have reached Maximum Number of Times
                                    
                                </v-card-title>
                                <v-card-text>
                                    <br><br>
                                    <v-row
                                        class="text-h5"
                                        justify="center"
                                    >
                                      Try after 15 min 
                                    </v-row>
                                </v-card-text>
                                <v-divider></v-divider>
                                    <v-card-actions>
                                      <v-spacer></v-spacer>
                                      <v-btn
                                          elevation="0"
                                          @click="cardBlocked()"
                                          style="font-size: 14px;border-radius: 15px;border: 1px solid #fb9013;color:#fb9013;background-color: white;"
                                      >OK</v-btn>
                                    </v-card-actions>
                                </v-card>
                        </v-dialog>

                        <div v-if="bajajemi" class='sticky-layout mobile'  style='position: fixed;bottom: 0;left: 0;right: 0;z-index: 100;'>
                          <div class='procced-btn'>
                            <button
                              :disabled="!checkPolicy"
                              class='ps-btn ps-btn--fullwidth cartCheckout'
                              @click.prevent='generateOtp()'
                              style='font-size: 18px;font-weight: bold;'
                          >Generate OTP
                          </button>
                          </div>
                        </div>

                        <div v-else-if="this.cod == true"
                            class="sticky-layout mobile" 
                            style="
                                position: fixed;
                                bottom: 0;
                                left: 0;
                                right: 0;
                                z-index: 100;
                            ">
                              <div class="procced-btn">
                                  <button 
                                      class="ps-btn ps-btn--fullwidth cartCheckout"
                                      @click.prevent="
                                        codPayment()
                                        " style="
                                    font-size: 18px;
                                    font-weight: bold;
                                ">
                                      Cash On Delivery
                                  </button>
                                  <button class="ps-btn ps-btn--fullwidth cartCheckout"
                                      @click.prevent="checkout()" 
                                      style="
                                    font-size: 18px;
                                    font-weight: bold;
                                ">
                                      Checkout
                                  </button>
                              </div>
                          </div>

                        <div v-else class='sticky-layout mobile'  style='position: fixed;bottom: 0;left: 0;right: 0;z-index: 100;'>
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
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
        <form style="display:none" ref="forms" id="checkoutform" :action=codeUrl method="post">
                    <input type="hidden" name="test" value="1" />
                    <input type="button" @click="codPayment()" value="COD">  
                </form>
      </div>
      <v-dialog v-model="bajajAlert" width="800" persistent>
          <v-card>
              <v-card-title class="text-h4">
                  Your previous Bajaj order loan has been approved..!!
                  <br>
                  <br>
                  <h5>Please pay the Amount Rs.{{ amountDue }}/-</h5>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  class='ma-2 UserRegisterCart'       
                  large
                  style='margin: 8px;float:right; font-size: 16px;font-weight: bold;color: white;background-color: #fb9013;border: 1px solid #fb9013;height: 32px;border-radius: 8px;'
                  @click='payDownPayment()'>
                Proceed to Pay
                <template v-slot:loader>
                    <span class='custom-loader'>
                        <v-icon light>mdi-cached</v-icon>
                    </span>
                </template>
              </v-btn>
              </v-card-actions>
          </v-card>
        </v-dialog>
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
      intercityError: false,
      prodUrl: JSON.parse(localStorage.getItem('productUrl')),
      selectedOffer: null,
      newUserForm: false,
      valid: false,
      isOfferSelected: false,
      bajajemi: JSON.parse(localStorage.getItem('bajajscheme')),
      cardNumber :localStorage.getItem('cardnumber'),
      userCardData:JSON.parse(localStorage.getItem('cardData')),
      last_card_digits : 4,
      totalAmount:'',
      bajajTotalAmount:'',
      card : '',
      checkPolicy : '',
      generate: false,
      notGenerate: false,
      bajajOtpResendMessage:"",
      block : false,
      bajajPayment: false,
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
      bajajOtp:'',
      OtpMessage: '',
      bajajOtpMessage:'',
      numAttempts:'',
      totalAttempts:'',
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
      errors: [],
      SuperAdminPhone: ['9491693889','9381719986', '9100574444', '9100782666', '8179377666', '9618488666', '9959632666', '9573145666', '7997255666', '9908834666', '8106443666', '9652277666', '9652023666', '9618443666', '9573501666', '8374265666', '9963443666', '9652834666', '8374122666', '9154713666', '8374799666', '8179422666', '8790023666', '9618987666',
                '8106232666', '8008654666', '8106811666', '9550301666', '9908287666', '9618912666', '7993154666', '7842332666', '9989265666', '7702944666', '8179399666', '7842331666', '8179812666', '6309487666', '9177954666', '8978599666', '9573567666', '9618767666', '9949434666', '9949710666', '9177901666', '9121853666', '9154628666', '9573599666', '9949410666',
                '9573201666', '7993417666', '7893611666', '8977430666', '8179987666', '7842338666', '8179033666', '8790332666', '9100781666', '8106454666', '9652811666', '9100792666', '9908389666', '7893832666', '7893923666', '9908987666', '9908332666', '8978643666', '9609490666', '9177312666', '7702511666', '9949121666', '8790034666', '8801760066', '8106401666',
                '8106421666', '8179945666', '6309484666', '8106298666', '9154641666', '9652267666', '9866011666', '8897101666', '8897388666', '8897811666', '8897998666', '7893823666', '8106812666', '8686836269'
            ],
            cod: false,
            codeUrl: '',
            bajajAlert: false,
            amountDue: 0,
            otpEntered: false,
            otpValidate: false,
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
      offersList: state => state.offers.offersList,
      bajajOtpGenerated: state => state.bajaj.bajajOtp,
      bajajVerify: state => state.bajaj.bajajVerify,
      pincodeError: state => state.bajaj.pincode_error
    })
  },
  async created() {
    // console.log(this.userCardData, 'userCardDatauserCardData----------');
    this.loading = true;
    var cart = await this.$store.dispatch('cart/getCartItems', []);
    // console.log(cart, 'CART');
    this.$cookies.remove('redirectLogin');
    let cartId = this.$cookies.get('cart_id');
    await this.$store.dispatch('auth/getUserInfo');
    let userData = this.$cookies.get('userDetails');
    if (userData && cart.cartInfo.bajajLoanCreated && cart.cartInfo.step == 4){
      // console.log('LOAN CREATED');
      if (this.SuperAdminPhone.includes(userData.phone)) {
        this.cod = true
      }
      this.steps = 4;
      this.bajajAlert = true;
      this.amountDue = cart.cartInfo.amountPending;
    }
    else if (userData && cart.cartInfo.step == 4) {
      await this.$store.dispatch('auth/cartUserDetails',userData);
      if (this.SuperAdminPhone.includes(userData.phone)) {
        this.cod = true
      }
      this.steps = 4;
      this.phoneNo = userData.phone;
      this.formData.name = cart.cartInfo.selectedAddress.name;
      this.formData.email = cart.cartInfo.selectedAddress.email;
      this.formData.street = cart.cartInfo.selectedAddress.street;
      this.formData.area = cart.cartInfo.selectedAddress.area;
      this.formData.city = cart.cartInfo.selectedAddress.city;
      this.formData.state = cart.cartInfo.selectedAddress.state;
      this.formData.addressType = cart.cartInfo.selectedAddress.addressType;
      this.formData.pincode = cart.cartInfo.selectedAddress.pincode;
    } else if (userData){
      await this.$store.dispatch('auth/cartUserDetails',userData);
      if (this.SuperAdminPhone.includes(userData.phone)) {
        this.cod = true
      }
      this.steps = 3;
      this.phoneNo = userData.phone
    } else {
      this.steps = 1;
    }
    // var cart = await this.$store.dispatch('cart/getCartItems', []);
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
    this.codeUrl = `https://dev-services.happimobiles.com/payment/payu/cod?cartId=${cartId}`;

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
     
      if(this.bajajemi){
        // console.log("thisbajajemi",this.bajajemi)
        // console.log(parseInt(this.bajajemi.charges?.split(";")[3]?.split(':')[1]))
        let decryptedCard = await this.requestDecrypt(this.cardNumber);
        this.last_card_digits = 4;
        this.card = decryptedCard.substring(decryptedCard.length - this.last_card_digits)
        this.bajajTotalAmount =  ((this.bajajemi.tenor-this.bajajemi.advEmi)*this.bajajemi.emiAmount) + this.bajajemi.advEmiAmt + this.bajajemi.processingFee + parseInt(this.bajajemi.charges?.split(";")[3]?.split(':')[1])
        this.totalAmount =  ((this.bajajemi.tenor-this.bajajemi.advEmi)*this.bajajemi.emiAmount) + this.bajajemi.advEmiAmt + this.bajajemi.processingFee
      }  
  },
  methods: {
    //DECRYPT FUNCTION
    async requestDecrypt(reqDecrypt) {
            const crypto = require('crypto');
            const secret = '1584FFBB3C6D5F74A5A41E7D3674A';
            var algorithm = 'aes256';
            var reqkey = 'happibajajreqkey';
            let reqencrypted = reqDecrypt;
            var decipher = crypto.createDecipher(algorithm, reqkey);
            var decrypted =
                decipher.update(reqencrypted, 'hex', 'utf8') + decipher.final('utf8');
            var body = JSON.parse(decrypted);
            // console.log(body, '---BODY')
            return body;
        },
    checkout() {
      this.loading = true;
      let cartId = this.$cookies.get('cart_id');
      setTimeout(function () {
        window.location.href = `https://dev-services.happimobiles.com/payment/init?cartId=${cartId}`;
      }, 1500);
    },

    codPayment() {
            //this.loading = true;
            let cartId = this.$cookies.get('cart_id');
            setTimeout(() => {
                // this.$refs.form.submit();
                document.getElementById("checkoutform").submit()
                this.loading = true;

            }, 1500)
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

    async confirmOnOTP(){
      if(this.bajajOtp.length == 6){
        this.otpEntered = true;
      } else {
        this.otpValidate = true;
      }
    },

    async onBajajOtpEntered() {
      let cardNum = localStorage.getItem('cardnumber');
      let decryptCardNum = await this.requestDecrypt(cardNum);
      let tempObj = {
        Delivery_Address: this.formData.city,
        otp: this.bajajOtp,
        Delivery_Pincode : this.formData.pincode,
        cardNumber : decryptCardNum,
        productId : localStorage.getItem('productId'), 
        cartId : this.$cookies.get('cart_id'),
        ORDERNO: this.bajajOtpGenerated.ORDERNO,
        payPrice: this.cartItems[0].payPrice,
        Model_id: localStorage.getItem('modelId')
      };
      let temp = await this.$store.dispatch('bajaj/verifyBajajOtp', tempObj);
      // console.log('---------------verifyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy-------------------------------',this.bajajVerify)
      if (this.bajajVerify.status == true) {
        this.generate = false
        this.otpEntered = false
        this.bajajPayment = true
        localStorage.removeItem("Attempts")
      } else {
        this.otpEntered = false
        this.numAttempts = this.numAttempts + 1
        this.bajajOtpMessage = this.bajajVerify.message;
        localStorage.setItem("Attempts",this.numAttempts)
        this.bajajOtp = ' '
        this.bajajOtpResendMessage = ' '
        this.totalAttempts = localStorage.getItem("Attempts")
        if(this.totalAttempts == 3){
          this.generate = false
          this.block = true
        }
      }
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },

    async cardBlocked(){
      this.block = false
      let cartId = this.$cookies.get('cart_id');
      await this.$store.dispatch('bajaj/clearCart', cartId);
      this.$router.push('/');
      localStorage.clear();
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
      let userData = this.$cookies.get('userDetails');
            if (this.SuperAdminPhone.includes(userData.phone)) {
                this.cod = true
            }
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
    },
    async generateOtp(){
      // console.log(this.cartItems, 'PPP');
        // this.resend = false
        // setTimeout(() => {
        //   this.resend = true
        // }, 5000);
        this.bajajOtp = ' '
        this.bajajOtpMessage = ' '
        this.bajajOtpResendMessage = "We have sent OTP to your Bajaj Registered Mobile Number"
        this.totalAttempts = localStorage.getItem("Attempts")
        if(this.totalAttempts == 3){
            this.generate = false
            this.block = true
          }
          let cardPin = localStorage.getItem('cardpincode');
          let decryptCardPin = await this.requestDecrypt(cardPin);
          let cardNum = localStorage.getItem('cardnumber');
          let decryptCardNum = await this.requestDecrypt(cardNum);

        let body = {
            Delivery_Pincode : this.formData.pincode,
            Card_Pincode : decryptCardPin,
            cardNumber : decryptCardNum,
            cartId : this.$cookies.get('cart_id'),
            payPrice : this.cartItems[0].payPrice,
            intercityDeliverFlag: this.userCardData?.INTERCITY_DELIVERY_FLAG
          };
          var temp = await this.$store.dispatch('bajaj/generateBajajOtp', body);
          // console.log('bajaj Otppppp  -------------',this.bajajOtpGenerated, this.pincodeError)
          this.numAttempts = this.bajajOtpGenerated.count
          // console.log(this.bajajOtpGenerated, 'bajajOtpGeneratedbajajOtpGenerated--------', this.pincodeError)
      try{
        if(this.bajajOtpGenerated){
          this.generate = true
        }
        else if(this.pincodeError){
          this.intercityError = true;
        } else {
          this.notGenerate = true;
        }
      }
      catch(e){
            console.log(e)
      } 
    },
    async goBack(){
      this.generate = false
      this.totalAttempts = localStorage.getItem("Attempts")
      if(this.totalAttempts == 3){
          this.generate = false
          this.block = true
        }
      this.bajajOtp = ' '
      this.bajajOtpMessage = ' '
      this.bajajOtpResendMessage = ' '
    },
    async changeDeliveryPincode(){
      this.notGenerate = false
      this.steps--;
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      this.formData.pincode = " "
    },
    async interCityError(){
      this.intercityError = false;
      window.location.href = this.prodUrl;
      // this.$router.push(this.prodUrl);
      // this.$router.push('/');
    },
    async notProceed(){
        this.bajajPayment = false
        this.bajajOtp = ' '
        this.bajajOtpMessage = ' '
        this.bajajOtpResendMessage = ' '
        this.otpEntered = false
        this.otpValidate = false
    },
    submitOtp(){
      this.generate = false
    },
    payDownPayment(){
      this.loading = true;
      let cartId = this.$cookies.get('cart_id');
      // console.log(cartId);
      setTimeout(function () {
        window.location.href = `https://dev-services.happimobiles.com/payment/init?cartId=${cartId}`;
      }, 1500);
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

  .offers-each {
    border-bottom: 2px solid #f1f1f1;
    padding: 10px;
}
.offers-each b {
    color: #ec0101;
}
.offers-each:last-child {
    border-bottom: 0;
}

button:disabled{
  background: #cccccc;
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
.warning-msg {
  color: #9F6000;
  background-color: #FEEFB3;
  margin: 10px 0;
  padding: 10px;
  border-radius: 3px 3px 3px 3px;
  width: 500px;
  text-align: center;
}
</style>
