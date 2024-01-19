<template lang="html">
    <div>
        <div class="ps-product__shopping row m-0 pb-0">

            <div class="offers-b" v-if="offersList.length !== 0">
                <div class="offers-f">
                    <span>Available Offers</span>

                </div>
                <div class="offers-show" style="font-size: 14px;">
                    <!--                    v-if='item.title != "Produce Payment without out offer"'-->
                    <div class="offers-each" v-if="offersList != null" v-for="(item, index) in offersList">
                        <span>
                            <b style="color:black">{{ item.title }}</b>
                            <a v-if="item.terms != null" style='text-decoration: underline;color: #fb9011;font-weight: 600;'
                                @click.prevent='selectIndex(index)' target="_blank">
                                T&C
                            </a>

                        </span>
                        <br>
                        <div v-if="selectedIndex === index">{{ item.description }}</div>
                        <div style="margin-left:20px" v-if="selectedIndex === index" v-html="item.terms">
                        </div>
                    </div>

                </div>
            </div>
            <!-- <br>
            <br> -->

            <div class="emi-options">
                <!--            <span class="a-hidden">-->
                <!--            <b>EMI</b> starts at ₹1,412 per month.-->
                <!--            </span>    -->
                <!--            <a href="#">EMI Options</a>-->
            </div>
        </div>
        <!-- {{ product.thirdPartyCodes.bajajModelCode }} -->
        <!-- <h4 class="emi" @click="viewBajaj()"><b>Bajaj Emi Options</b></h4> -->
        <a class="ps-btn" style="color:#fff;border-radius: 15px;" @click="viewBajaj()"
            v-if="product.thirdPartyCodes.bajajModelCode">
            Buy with Bajaj EMI
        </a>
        <!-- <br>
        <br>
        <br> -->
        <div class='row mt-5' v-if="this.viewBajajEmi == true">
            <div class='col-xs-8 col-md-6 col-lg-6'>
                <div class="ps-form__content" style='max-width: 100%'>
                    <div class="form-group" style="margin-bottom: -1.5em; ">
                        <v-text-field class="ps-text-field" value="" :rules='cardRules' v-model="bajajCardNumber"
                            type="number" hide-spin-buttons placeholder='XXXX XXXX XXXX XXXX' @input="cardLengthCheck()"
                            onKeyPress="if(this.value.length==16) return false;" label="Bajaj EMI Card Number" outlined
                            shaped v-on:keydown.enter.prevent='handleSubmit'>
                        </v-text-field>
                        <!--<span style="color: green"><b>{{ `invalid card details` }}</b></span> -->
                    </div>
                </div>
            </div>
            <div class='col-xs-4 col-md-6 col-lg-6'>
                <!-- <v-btn
                        color="#fb9013"
                        class="white--text"
                        elevation="0"
                        @click.prevent="handleSubmit"
                        style="font-size: 14px;border-radius: 15px;"
                    >Fetch Schemes</v-btn> -->
                <a class="ps-btn" v-if="this.bajajCardNumber.length == 16" style="color:#fff;border-radius: 15px;"
                    @click.prevent="handleSubmit">
                    Fetch Schemes
                </a>

            </div>
        </div>
        <!-- <br>
        <br> -->
        <div class="offers-b" v-if="this.schemes && product.thirdPartyCodes.bajajModelCode">
            <div v-if="this.bajajCardNumber.length == 16">
                <div class="offers-show" style="font-size: 14px;">
                    <!-- {{ dotloader }} -->
                    <span class="spinner" v-show="schemesLoader">
                        <div class="bounce1"></div>
                        <div class="bounce2"></div>
                        <div class="bounce3"></div>
                    </span>
                    <div class="offers-f" v-show="this.schemes.length > 0">
                        <span>Bajaj EMI Schemes</span>
                    </div>
                    <div class="offers-each" v-for="item in displayedRecords">
                        <span>
                            <b> Downpayment :</b> <b style="float:right"> {{ item.emiAmount * item.advEmi }}</b> <br />
                            EMI Amount <span style="float:right"> {{ item.emiAmount }} X {{ item.tenor - item.advEmi}} Months </span>
                            <br />
                            Processing Fee <span style="float:right"> {{ item.processingFee }} </span><br />
                            
                            <!---EMI Charges <span style="float:right"> {{ item.charges?.split(";")[3]?.split(':')[1] }} </span>--->
                            <br />

                            <!-- <a class="ps-btn" style='text-decoration: underline;color: white;font-weight: 600;' @click.prevent='selectScheme(item)' target="_blank" >
                                Select Scheme & Produce to payment
                            </a> -->
                            <v-btn @click.prevent='selectScheme(item)'
                                style="height:25px;float:right;color: white;background-color: #fb9013;" target="_blank">
                                Select Scheme & Proceed to payment
                            </v-btn>

                        </span>
                    </div>
                    <button v-if="showLoadMoreButton" @click="loadMoreRecords" class="more-button">+ More</button>
                    <button v-if="showlessButton" @click="lessRecords" class="more-button">- Less</button>
                </div>
            </div>
        </div>
        <!-- <div v-if="this.popup == true">
                <div class="content">
                <p>Your Cart will be Emptied....</p>
                
                <p>Do you want to proceed ?</p>
                <div class="field">
                    <button @click="proceedToCart()">YES</button>
                    <button @click="notProceed()">NO </button>
                </div>
                </div>
            </div> -->

        <v-dialog v-model="popup" width="500">
            <v-card>
                <v-card-title class="text-h5">
                    We would like to clear your cart <br>
                    As bajaj Emi can be processed for only one product
                </v-card-title>
                <v-card-text>
                    <br><br>
                    <v-row class="text-h5" justify="center">
                        Do you want to Proceed
                    </v-row>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn elevation="0" @click="notProceed()"
                        style="font-size: 14px;border-radius: 15px;border: 1px solid #fb9013;color:#fb9013;background-color: white;">
                        No</v-btn>
                    <v-btn color="#fb9013" class="white--text" elevation="0" @click="proceedToCart()"
                        style="font-size: 14px;border-radius: 15px;">Yes</v-btn>

                </v-card-actions>
            </v-card>
        </v-dialog>

        <div class="row m-0">
            <section class="ps-product__shopping mt-4 mb-4 b-0 pb-0 cart-btns-mob" style="background: #fff;"
                v-if="product.stock != 0">
                <a class="ps-btn " href="#" @click.prevent="addItemToCart">
                    Add to cart
                </a>
                <a class="ps-btn" href="#" @click.prevent="buyNowToCart">
                    Buy Now
                </a>
                <div class="ps-product__actions">
                    <a href="#" @click.prevent="handleAddItemToWishlist">
                        <i class="icon-heart" style="font-size: 3.5rem !important;"></i>
                    </a>
                </div>
            </section>
            <section class="ps-product__shopping mt-4 mb-4 b-0 pb-0 cart-btns-mob" style="background: #fff;" v-else>
                <div class="ps-btn " style="cursor:default;">
                    Out of stock
                </div>
                <div class="ps-product__actions">
                    <a href="#" @click.prevent="handleAddItemToWishlist">
                        <i class="icon-heart"></i>
                    </a>
                </div>
            </section>
        </div>
        <v-dialog v-model="productAddConfirmPopup" width="500">
            <v-card>
                <v-card-title class="text-h5">
                    Your cart has Bajaj Product <br>
                    You cannot add more than one product to apply Bajaj Scheme
                </v-card-title>
                <v-card-text>
                    <br><br>
                    <v-row class="text-h5" justify="center">
                        Do you want to clear the cart
                    </v-row>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn elevation="0" @click="notClearBajaj()"
                        style="font-size: 14px;border-radius: 15px;border: 1px solid #fb9013;color:#fb9013;background-color: white;">
                        No</v-btn>
                    <v-btn color="#fb9013" class="white--text" elevation="0" @click="ClearBajajCart()"
                        style="font-size: 14px;border-radius: 15px;">Yes</v-btn>

                </v-card-actions>
            </v-card>
        </v-dialog>

    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'ModuleProductShopping',
    components: {},
    props: {
        product: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        ...mapState({
            prodOffersList: (state) => state.product.prodOffersList,
            cartItems: (state) => state.cart.cartItems,
            wishlistItems: (state) => state.wishlist.wishlistItems,
            offersList: (state) => state.offers.offersList,
            isToast: (state) => state.cart.isToast,
            bajajSchemes: (state) => state.bajaj.bajajSchemes,
            allSchemes: (state) => state.bajaj.allSchemes,
            cartProducts: (state) => state.product.cartProducts,
            //product: state => state.product.product,
        }),
    },
    async created() {
        // console.log('======0', this.offersList, location.href);
        // localStorage.setItem('productUrl', JSON.stringify(location.href));
        if (process.client) {
            localStorage.setItem('productUrl', JSON.stringify(location.href));
        }
        let userData = this.$cookies.get('userDetails');
        await this.$store.dispatch('offers/getOfferList', {
            category: this.product.category,
            apx_code: [this.product.thirdPartyCodes.apxItemCode],
            price: this.product.payPrice,
        });
        // console.log("offersList",this.offersList)
        if (userData) {
            const result = await this.$store.dispatch('wishlist/getWishlist', {
                phone: userData.phone,
            });
            return;
        }
    },
    data() {
        return {
            quantity: 1,
            selectedIndex: -1,
            deliveryinfo: null,
            dates: '',
            error: '',
            bajajCardNumber: '',
            schemes: [],
            userCardData: [],
            cardRules: [
                (v) => !!v || 'Cardnumber is required',
                (v) => v.length === 16 || 'Cardnumber must be 16 Digitals',
            ],
            popup: false,
            overlay: false,
            dialog: false,
            requestotp: false,
            cd_promo: '',
            digital_promo: '',
            viewBajajEmi: false,
            productAddConfirmPopup: false,
            schemesLoader: false,
            showLoadMoreButton: false,
            displayedRecords: [], // Subset of records to display
            recordsPerPage: 5,
            showlessButton: false,
        };
    },
    methods: {
        //ENCRYPT FUNTION
        async requestEncrypt(body) {
            const crypto = require('crypto');
            const secret = '1584FFBB3C6D5F74A5A41E7D3674A';
            let customerResponse = JSON.stringify(body); //strigfy data
            var algorithm = 'aes256'; //const value
            var key = 'happibajajreqkey'; //response key
            var cipher = crypto.createCipher(algorithm, key);
            var resencrypted =
                cipher.update(customerResponse, 'utf8', 'hex') + cipher.final('hex');
            return resencrypted;
        },
        handleIncreaseQuantity() {
            this.quantity++;
        },
        selectIndex(i) {
            this.selectedIndex = i;
        },
        handleDescreaseQuantity() {
            if (this.quantity > 1) {
                this.quantity--;
            }
        },
        viewBajaj() {
            this.viewBajajEmi = !this.viewBajajEmi;
        },
        loadMoreRecords() {
            const currentIndex = this.displayedRecords.length;
            const newRecords = this.schemes.slice(
                currentIndex,
                currentIndex + this.recordsPerPage
            );
            this.displayedRecords = [...this.displayedRecords, ...newRecords];

            if (this.displayedRecords.length == this.schemes.length) {
                this.showlessButton = true;
                this.showLoadMoreButton = false;
            }
        },
        lessRecords() {
            const currentIndex = this.displayedRecords.length;
            this.displayedRecords = [
                ...this.displayedRecords.slice(0, (currentIndex - 5)),
                ...this.displayedRecords.slice((currentIndex - 5) + 5),
            ];
             if (this.displayedRecords.length <= 6) {
                this.showlessButton = false;
                this.showLoadMoreButton = true;
            }
        },

        // handleAddToCart(isBuyNow) {
        //     console.log('======0', isBuyNow);
        //     // console.log('======product', product);
        //     // const cartItemsOnCookie = this.$cookies.get('cart', {
        //     //     parseJSON: true
        //     // });
        //     let existItem;
        //     if (cartItemsOnCookie) {
        //         existItem = cartItemsOnCookie.cartItems.find(
        //             item => item.id === this.product.id
        //         );
        //     }

        //     let item = {
        //         id: this.product.id,
        //         quantity: this.quantity,
        //         price: this.product.price
        //     };
        //     if (existItem !== undefined) {
        //         if (this.quantity + existItem.quantity > 10) {
        //             this.$notify({
        //                 group: 'addCartSuccess',
        //                 title: 'Waring!',
        //                 text: `Can't add more than 10 items`
        //             });
        //             if (isBuyNow && isBuyNow === true) {
        //                 setTimeout(
        //                     function() {
        //                         this.$router.push('/account/checkout');
        //                     }.bind(this),
        //                     500
        //                 );
        //             }
        //         } else {
        //             this.addItemToCart(item);
        //         }
        //     } else {
        //         this.addItemToCart(item);
        //     }
        // },

        async addItemToCart(payload) {
            if (localStorage.getItem('bajajscheme')) {
                this.productAddConfirmPopup = true;
            } else {
                let item = {
                    id: this.product.id,
                    quantity: 1,
                    payPrice: this.product.payPrice,
                    category: this.product.category[1],
                };
                await this.$store.dispatch('cart/addProductToCart', item);
                // this.getCartProduct(this.cartItems);

                this.$store.dispatch('cart/toastView', {
                    show: true,
                    htmlTag: `<span> Success : Your have added </span> <span style="padding: 0 0 9px;">${this.product.name} </span>
<span style="padding: 0 0 9px;"> to your shopping cart.</span>
 <span><a href="/cart" class="checkout-class" style=" cursor: pointer;
           background-color: #fb9013;
    color: #fff;
    padding: 5px;
    text-decoration: none;
    border-radius: 5px;
    font-weight: 500;
    font-size: 13px;">Proceed to Checkout</a> </span>`,
                });
                setTimeout(() => {
                    console.log('AFTER SEO');
                    this.$store.dispatch('cart/toastView', {
                        show: false,
                        itemName: `${this.product.name}`,
                    });
                }, 8000);

                await this.$store.dispatch('cart/getCartItems');
            }
        },

        async buyNowToCart(payload) {
            if (localStorage.getItem('bajajscheme')) {
                this.productAddConfirmPopup = true;
            } else {
                let item = {
                    id: this.product.id,
                    quantity: 1,
                    payPrice: this.product.payPrice,
                    category: this.product.category[1],
                };
                await this.$store.dispatch('cart/addProductToCart', item);
                // this.getCartProduct(this.cartItems);
                // this.$notify({
                //     group: 'addCartSuccess',
                //     title: 'Success!',
                //     text: `${this.product.name} has been added to your cart!`
                // });

                this.$store.dispatch('cart/toastView', {
                    show: true,
                    htmlTag: `<span> Success : Your have added </span> <span style="padding: 0 0 9px;">${this.product.name} </span>
<span style="padding: 0 0 9px;"> to your shopping cart.</span>
 <span><a href="/cart" class="checkout-class" style=" cursor: pointer;
           background-color: #fb9013;
    color: #fff;
    padding: 5px;
    text-decoration: none;
    border-radius: 5px;
    font-weight: 500;
    font-size: 13px;">Proceed to Checkout</a> </span>`,
                });
                setTimeout(() => {
                    this.$store.dispatch('cart/toastView', {
                        show: false,
                        itemName: `${this.product.name}`,
                    });
                }, 5000);
                setTimeout(() => {
                    location.replace('/cart');
                }, 6000);
            }
        },

        async getCartProduct(products) {
            let listOfIds = [];
            products.forEach((item) => {
                listOfIds.push(item.id);
            });
            await this.$store.dispatch('product/getCartProducts', listOfIds);
        },
        async handleAddItemToWishlist() {
            let userData = this.$cookies.get('userDetails');
            if (userData) {
                let item = {
                    product_id: product.objectID,
                    user_id: userData.phone,
                    id: userData.phone + '-' + product.objectID,
                };
                let wishStatus = await this.$store.dispatch(
                    'wishlist/addItemToWishlist',
                    item
                );
                if (wishStatus == 'ok') {
                    // this.$notify({
                    //     group: 'addCartSuccess',
                    //     title: 'Add to wishlist!',
                    //     text: `${product.name} has been added to your wishlist !`
                    // });
                } else {
                    // this.$notify({
                    //     group: 'addCartSuccess',
                    //     title: 'Item already added to wishlist!',
                    //     text: ``
                    // });
                }
            } else {
                this.$router.push('/account/login');
            }
        },
        async loadCartProducts() {
            const cartItemsOnCookie = this.$cookies.get('cart', {
                parseJSON: true,
            });
            let queries = [];
            cartItemsOnCookie.cartItems.forEach((item) => {
                queries.push(item.id);
            });
            if (this.cartItems.length > 0) {
                await this.$store.dispatch('product/getCartProducts', queries);
            } else {
                this.$store.commit('product/setCartProducts', null);
            }
        },

        // proceed to add bajaj product to cart
        async proceedToCart() {
            if (this.cartItems != 0) {
                let cartId = this.$cookies.get('cart_id');
                if (localStorage.getItem('bajajscheme')) {
                    await this.$store.dispatch('bajaj/clearCart', cartId);
                }
                this.popup = false;
            }
            let item = {
                id: this.product.id,
                quantity: 1,
                payPrice: this.product.payPrice,
                category: this.product.category[1],
            };
            await this.$store.dispatch('cart/addProductToCart', item);
            // this.getCartProduct(this.cartItems);

            this.$store.dispatch('cart/toastView', {
                show: true,
                htmlTag: `<span> Success : Your have added </span> <span style="padding: 0 0 9px;">${this.product.name} </span>
<span style="padding: 0 0 9px;"> to your shopping cart.</span>
 <span><a href="/cart" class="checkout-class" style=" cursor: pointer;
           background-color: #fb9013;
    color: #fff;
    padding: 5px;
    text-decoration: none;
    border-radius: 5px;
    font-weight: 500;
    font-size: 13px;">Proceed to Checkout</a> </span>`,
            });
            setTimeout(() => {
                console.log('AFTER SEO');
                this.$store.dispatch('cart/toastView', {
                    show: false,
                    itemName: `${this.product.name}`,
                });
            }, 8000);

            await this.$store.dispatch('cart/getCartItems');
            this.$router.push('/cart');
        },

        async ClearBajajCart() {
            let cartId = this.$cookies.get('cart_id');
            await this.$store.dispatch('bajaj/clearCart', cartId);
            localStorage.removeItem('bajajscheme');
            localStorage.removeItem('cardnumber');
            this.productAddConfirmPopup = false;
            let item = {
                id: this.product.id,
                quantity: 1,
                payPrice: this.product.payPrice,
                category: this.product.category[1],
            };
            await this.$store.dispatch('cart/addProductToCart', item);
            // this.getCartProduct(this.cartItems);

            this.$store.dispatch('cart/toastView', {
                show: true,
                htmlTag: `<span> Success : Your have added </span> <span style="padding: 0 0 9px;">${this.product.name} </span>
<span style="padding: 0 0 9px;"> to your shopping cart.</span>
 <span><a href="/cart" class="checkout-class" style=" cursor: pointer;
           background-color: #fb9013;
    color: #fff;
    padding: 5px;
    text-decoration: none;
    border-radius: 5px;
    font-weight: 500;
    font-size: 13px;">Proceed to Checkout</a> </span>`,
            });
            setTimeout(() => {
                console.log('AFTER SEO');
                this.$store.dispatch('cart/toastView', {
                    show: false,
                    itemName: `${this.product.name}`,
                });
            }, 8000);

            await this.$store.dispatch('cart/getCartItems');
            this.$router.push('/cart');
        },
        // closing the bajaj popup
        async notProceed() {
            this.popup = false;
            localStorage.removeItem('bajajscheme');
            localStorage.removeItem('cardnumber');
            localStorage.removeItem('cardData');
            localStorage.removeItem('cardpincode');
            this.viewBajajEmi = false;
            this.bajajCardNumber = '';
            this.schemes = '';
        },

        async notClearBajaj() {
            this.productAddConfirmPopup = false;
        },

        async cardLengthCheck() {
            if (this.bajajCardNumber.length == 16) {
                return false;
            } else {
                this.schemes = [];
                localStorage.clear();
            }
        },

        //start with bajaj emi functions
        priceFormat(item) {
            item = item.toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR',
            });
            return item;
        },
        async selectScheme(scheme) {
            //console.log("yyyyyyyyyy",this.cartItems.length)
            if (this.cartItems.length !== 0) {
                this.popup = true;
                localStorage.setItem('bajajscheme', JSON.stringify(scheme));
            } else {
                localStorage.setItem('bajajscheme', JSON.stringify(scheme));
                let item = {
                    id: this.product.id,
                    quantity: 1,
                    payPrice: this.product.payPrice,
                    category: this.product.category[1],
                };
                await this.$store.dispatch('cart/addProductToCart', item);
                // this.getCartProduct(this.cartItems);

                this.$store.dispatch('cart/toastView', {
                    show: true,
                    htmlTag: `<span> Success : Your have added </span> <span style="padding: 0 0 9px;">${this.product.name} </span>
<span style="padding: 0 0 9px;"> to your shopping cart.</span>
 <span><a href="/cart" class="checkout-class" style=" cursor: pointer;
           background-color: #fb9013;
    color: #fff;
    padding: 5px;
    text-decoration: none;
    border-radius: 5px;
    font-weight: 500;
    font-size: 13px;">Proceed to Checkout</a> </span>`,
                });
                setTimeout(() => {
                    console.log('AFTER SEO');
                    this.$store.dispatch('cart/toastView', {
                        show: false,
                        itemName: `${this.product.name}`,
                    });
                }, 8000);

                await this.$store.dispatch('cart/getCartItems');
                this.$router.push('/cart');
            }
            // this.popup = true
            // localStorage.setItem("bajajscheme", JSON.stringify(scheme));
        },
        RequestOtp() {
            this.requestotp = true;
        },
        VerifyOtp() {
            this.dialog = false;
            this.overlay = !this.overlay;
            setTimeout(() => {
                this.overlay = !this.overlay;
            }, 3000);
        },

        async handleSubmit() {
            // localStorage.setItem("prodUrl", JSON.stringify(this.location));
            if (this.bajajCardNumber.length == 16) {
                this.schemesLoader = true;
                let encryptCardNumber = await this.requestEncrypt(this.bajajCardNumber);
                localStorage.setItem('cardnumber', encryptCardNumber);
                // console.log(
                //     this.bajajCardNumber,
                //     'this.bajajCardNumberthis.bajajCardNumber'
                // );
                try {
                    if (this.bajajCardNumber) {
                        // console.log(this.bajajCardNumber, '2030400307125866');
                        let temp = await this.$store.dispatch(
                            'bajaj/getBajajSchemes',
                            this.bajajCardNumber
                        );
                        this.userCardData = this.bajajSchemes;
                        localStorage.setItem(
                            'cardData',
                            JSON.stringify(this.userCardData)
                        );
                        let encryptcardPin = await this.requestEncrypt(this.userCardData.CUSTOMER_PINCODE);
                        localStorage.setItem(
                            'cardpincode',
                            encryptcardPin
                        );
                        localStorage.setItem('productId', this.product.id);
                        localStorage.setItem(
                            'modelId',
                            this.product.thirdPartyCodes.bajajModelCode
                        );
                        this.cd_promo = this.userCardData.CD_PROMO;
                        this.digital_promo = this.userCardData.DIGITAL_PROMO;
                        let body = {
                            CD_PROMO: this.cd_promo,
                            DIGITAL_PROMO: this.digital_promo,
                            // id: this.product.id,
                            payPrice: this.product.payPrice,
                            bajaj_model_code:
                                this.product.thirdPartyCodes.bajajModelCode ||
                                '',
                        };
                        if (this.bajajSchemes) {
                            let temps = await this.$store.dispatch(
                                'bajaj/getBajajAllSchemes',
                                body
                            );
                            // console.log(
                            //     'bajaj all Schemes -----------------------------------------------',
                            //     this.allSchemes,
                            //     temps
                            // );
                        }
                        this.schemes = this.allSchemes;
                        if (this.allSchemes.length > 5) {
                            this.showLoadMoreButton = true;
                            // this.showlessButton = false
                        }
                        this.loadMoreRecords();
                        this.schemesLoader = false;
                    } else {
                        this.schemesLoader = false;
                        alert('invalid card details');
                    }
                } catch (e) {
                    this.schemesLoader = false;
                    console.log(e);
                    alert('invalid card details');
                }
            } else {
                this.bajajCardNumber = ' ';
            }
        },

        //   async handleSubmitSchema(){
        //     let body {
        //        CD_PROMO : this.cd_promo,
        //        DIGITAL_PROMO : this.digital_promo
        //       };

        //       let temps = await this.$store.dispatch('bajaj/getBajajAllSchemes' ,body);
        //       console.log('bajajSchemes -----------------------------------------------',this.allSchemes)
        //       //this.schemes = this.bajajSchemes.data

        //   }
    },
    //end with bajaj emi functions
};
</script>
<style>
.spinner {
    margin: 100px auto 0;
    width: 70px;
    text-align: center;
}

.spinner > div {
    width: 16px;
    height: 16px;
    background-color: #fb9013;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
}

.spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
        -webkit-transform: scale(0);
    }

    40% {
        -webkit-transform: scale(1);
    }
}

@keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }

    40% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}

.cart-actions {
    display: flex;
    align-items: center;
}

/* .emi{
    color:#b12704;
    font-size: 16px;
    text-decoration: underline;
    cursor: pointer;
} */
.offers-b {
    width: 100%;
    border: 2px solid #f1f1f1;
    border-radius: 5px;
    margin-top: 2em;
}

.offers-b .offers-f span {
    color: #ec0101;
    font-size: 18px;
    font-weight: 600;
}

.offers-b .offers-f {
    border-bottom: 2px solid #f1f1f1;
    padding: 10px;
}

.offers-b .offers-each {
    border-bottom: 2px solid #f1f1f1;
    padding: 10px;
    padding-bottom: 30px;
}

.offers-b .offers-each b {
    color: #ec0101;
}

.offers-b .offers-each:last-child {
    border-bottom: 0;
}

.ps-product--hot-deal .ps-product__expires {
    border-top: 0 !important;
}

#grow {
    -moz-transition: height 0.5s;
    -ms-transition: height 0.5s;
    -o-transition: height 0.5s;
    -webkit-transition: height 0.5s;
    transition: height 0.5s;
    height: 0;
    overflow: hidden;
}
</style>

<style lang="scss" scoped>
@media (max-width: 767px) {
    .ps-product__shopping {
        border: 0 !important;
        margin-bottom: 0 !important;
        padding-bottom: 0;
    }

    .ps-product__shopping {
        // border: 0 !important;
        // margin-bottom: 0 !important;
        // padding-bottom: 0;
        //display: none;
    }

    .cart-btns-mob {
        display: none;
    }
}
.more-button{
    height: 25px;
    /* float: right; */
    color: white;
    background-color: rgb(251, 144, 19);
    padding: 4px;
    border-radius: 4px;
}
</style>