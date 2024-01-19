<template lang='html'>
    <div class='ps-section--shopping ps-shopping-cart mt-3'>
        <v-overlay :value="overlay">
                <v-progress-circular
                    indeterminate
                    size="64"
                ></v-progress-circular>
            </v-overlay>
        <div class='container'>
            <div class='ps-section__content '>
                <div class='row ' v-if='cartInfo !== null'>
                    <div class='col-12 m-top-20 card-layout'
                         style='padding-bottom: 15px !important;padding-top: 15px !important;border-radius: 10px;'>
                        <h3 v-if='cartInfo != null && selectedOffer != null'>
                            Total <span>{{ priceFormat(amount) }}</span>
                        </h3>
                        <a
                            to='#'
                            v-if='cartInfo != null && selectedOffer != null'
                            @click.prevent='
                                        paymentUrl(`${cartInfo.cartId}`)
                                    '
                            class='ps-btn p-4 w-100 mt-4 '
                            style='color:#fff;text-align: center;text-transform: uppercase;'
                        >
                            {{PaymentText}}
                        </a>
                        <div v-if='customOfferList.length != 0'>
                            <div class='row m-top-20' v-if='selectedOffer == null'>
                                <div class='col-12'>
                                    <h3>
                                        Available Offers
                                    </h3>
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

                        <!-- <br />
                        <br /> -->
                        <!-- </div> -->


                    </div>
                    <div class='col-12 card-layout mbt-10'>
                        <!-- <nuxt-link
                            to="/account/checkout"
                            class="ps-btn m-bottom-10"
                        >
                            Proceed to payment
                        </nuxt-link> -->

                        <div class='ps-block--shopping-total'>
                            <!-- <div class="ps-block__header">
                                <p>
                                    Subtotal <span> {{ total }}</span>
                                </p>
                            </div> -->

                            <div class='ps-block__content'>

                                <ul class='ps-block__product'>
                                    <li
                                        v-for='(product, index) in cartItems'
                                        v-if='product.liveQuantity != 0'
                                    >
                                        <span class='ps-block__estimate'>
                                            <nuxt-link
                                                :to='
                                                    `/${product.linker}`
                                                '
                                                class='ps-product__title'
                                            >
                                                {{ product.name }}   <b>X</b>   {{ product.liveQuantity }}
                                                <br />
                                            </nuxt-link>
                                            <span style='text-align:right;'>
                                                 {{ priceFormat(product.itemTotal) }}</span
                                            >
                                        </span>
                                    </li>
                                </ul>

                                <h3>
                                    Total <span>{{ priceFormat(amount) }}</span>
                                </h3>

                            </div>

                        </div>
                    </div>
                    <div class='col-lg-6 col-md-6 col-sm-12 col-12  mbt-10'  v-if="cartInfo.deliveryType === 'delivery'">
                        <div
                            class='m-top-30 card-layout'
                        >
                            <h3>
                                Deliver to this address
                            </h3>
                            <div class='row m-0 mt-5'>
                                <div
                                    class='col-lg-12 col-sm-12 col-12 d-grid p-0'
                                >
                                    <ul style='list-style:none'>
                                        <li>
                                            <b>{{cartInfo.selectedAddress.name}}</b>
                                        </li>
                                        <li>
                                            {{ cartInfo.selectedAddress.area }}
                                        </li>
                                        <li>
                                            {{cartInfo.selectedAddress.street}}
                                        </li>
                                        <li>
                                            {{ cartInfo.selectedAddress.city }}
                                            ,
                                            {{ cartInfo.selectedAddress.state }}
                                        </li>
                                        <li>
                                            {{cartInfo.selectedAddress.pincode}}
                                        </li>
                                        <li>
                                            {{cartInfo.selectedAddress.country}}
                                        </li>
                                    </ul>
                                </div>
                                <div class='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 d-grid p-0'
                                     v-if='deliveryinfo != null'>
                                    <p>Your order will be delivered by <strong>{{ deliveryinfo.etd }}</strong> via
                                        shiprokcet</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='col-lg-6 col-md-6 col-sm-12 col-12  mbt-10' v-if="cartInfo.deliveryType === 'pickup'">
                        <div class='m-top-30 card-layout' >
                            <h3>
                                Pickup at store
                            </h3>

                            <div class='row m-top-30 mb-4'>
                                <div
                                    class='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 d-grid'
                                >
                                    <ul style='list-style:none'>
                                        <li>
                                            <b><i class='icon-store mr-2'></i>
                                                {{ cartInfo.selectedStore.RetailerLocalityArea }}
                                            </b>
                                        </li>
                                        <li>
                                            {{ cartInfo.selectedStore.FullPostalAddress }}
                                            {{ cartInfo.selectedStore.city }}
                                            {{ cartInfo.selectedStore.Pincode }}
                                        </li>
                                        <li>
                                            <i class='icon-phone mr-2'></i
                                            >{{cartInfo.selectedStore.MobileNumber}}
                                        </li>
                                        <li>
                                            <i class='icon-clock mr-2'></i
                                            >{{ cartInfo.selectedStore.timeSlot }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class='col-lg-6 col-md-6 col-sm-12 col-12  mbt-10'>
                        <div class='row m-top-30 mb-4 card-layout'
                             v-if='selectedOffer && selectedOffer != null'>
                            <div class='col-12 d-flex justify-content-between'>
                                <h3>Selected Offer</h3>
                                <button
                                    type='button'
                                    @click.prevent='changeoffer()'
                                    class='ps-btn p-1 change-btn'
                                >
                                    Change offer
                                </button>
                            </div>

                            <div
                                class='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 d-grid '
                            >
                                <ul style='list-style:none'>
                                    <li>
                                        <b>
                                            <i class='icon-store mr-2'></i>
                                            {{ selectedOffer.title }}
                                        </b>
                                    </li>
                                    <li>
                                        {{ selectedOffer.description }}
                                    </li>
                                    <li>
                                        Via {{ selectedOffer.paymentGateway }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <a
                        to='#'
                        v-if='cartInfo != null && selectedOffer != null'
                        @click.prevent='paymentUrl(`${cartInfo.cartId}`)'
                        class='ps-btn p-4 w-100 mt-4 '
                        style='color:#fff; text-transform: uppercase; padding: 12px 0px !important; text-align: center;'>
                        {{PaymentText}}
                    </a>
                    <a
                        to='#'
                        v-if='selectedOffer == null'
                        @click.prevent='scrollToTop()'
                        class='ps-btn p-4 w-100 mt-4 '
                        style='color:#fff; text-transform: uppercase; padding: 12px 0px !important; text-align: center;'>
                        Select Offer
                    </a>
                </div>
            </div>

        </div>
        <div class='ps-section__cart-actions' style='margin: 40px 0'>
            <nuxt-link
                to='/cart/delivery-options'
                class='back-btn'
            >
                <i class='icon-arrow-left mr-2'></i>Back to modify Address & Pickup
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductShoppingCart from '~/components/elements/product/ProductShoppingCart';
import TableShoppingCart from '~/components/partials/account/modules/TableShoppingCart';
import { baseUrl } from '~/repositories/Repository';

export default {
    name: 'ShoppingCart',
    components: { TableShoppingCart, ProductShoppingCart },
    computed: {
        ...mapState({
            cartItems: state => state.cart.cartItems,
            cartInfo: state => state.cart.cartInfo,
            total: state => state.cart.total,
            amount: state => state.cart.amount,
            cartProducts: state => state.product.cartProducts,
            offersList: state => state.offers.offersList
        })
    },
    data: () => {
        return {
            overlay: false,
            type: 'pickup', // pickup / delivery
            customOfferList: [],
            selectedOffer: null,
            deliveryinfo: null,
            selectedOfferIndex: 0,
            PaymentText: "Proceed to payment"
        };
    },
    async created() {
        this.$cookies.remove('redirectLogin');
        await this.$store.dispatch('cart/getCartItems');
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

        console.log("customOfferList", this.customOfferList);



        if (this.cartInfo.deliveryType === 'delivery') {
            try {
                var result = await this.$http.$post(`shipping-info`, {
                    'pickup_postcode': 500081,
                    'delivery_postcode': this.cartInfo.selectedAddress.pincode,
                    'cod': 0,
                    'weight': '.7',
                    mode: 'Air'
                })

                this.deliveryinfo = result.data.available_courier_companies[0];
            } catch {
                //location.reload();
            }
        }
        if (this.amount < 1) {
            this.$router.push('/cart')
        }
    },
    methods: {
        scrollToTop() {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });

        },
        selectOfferIndex(i) {
            this.selectedOfferIndex = i;
        },
        selectedOfferClass(i) {
            if (this.selectedOfferIndex === i) {
                return 'selectedOffer';
            }
        },
        priceFormat(item) {
            item = item.toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR'
            });
            return item;
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
        paymentUrl(item) {
            this.overlay = true;
            this.PaymentText = "Connecting to payment Gateway...";
            var products = [];

            for(var i = 0; i < this.cartItems.length; i++) {
                products.push(
                    {
                        'name': this.cartItems[i].name,
                        'id':  this.cartItems[i].id,
                        'price':  this.cartItems[i].payPrice+'.00',
                        'brand': '',
                        'category': '',
                        'variant': '',
                        'quantity': 1
                    }
                );
            }
            this.$gtm.push({
                'event': 'checkout',
                'ecommerce': {
                    'checkout': {
                        'actionField': {'step': 1, 'option': this.selectedOffer.paymentGateway },
                        'products': products
                    }
                }
            });
            setTimeout(function() {
                window.location.href = `${baseUrl}payment/init?cartId=${item}`;
            }, 3500)

        },
        freeHomeDelivery() {
            this.type = 'delivery';
        },
        pickupatStore() {
            this.type = 'pickup';
        },
        deliveryToAddress() {
            this.$router.push('/cart/preview');
        },
        editAddress() {
        },
        deleteAddress() {
        }
    }
};
</script>

<style lang='scss' scoped>
body {
    background-color: #F3F6F9;
}

.ps-section--shopping {
    padding: 1rem;
    margin: 18px;
}

.card-layout {
    background-color: #fff;
}

.back-btn {
    padding: 0;
    width: 80%;
    font-weight: 400;
    font-size: 12px;
    text-decoration: underline;
}

.edit-btns {
    display: flex;
    justify-content: space-between;
}

.edit-btns button {
    width: 48%;
}

.delivery-btn .custom-btn {
    width: 100%;
}

.delivery-btn button {
    font-weight: 400;
}

.card-layout {
    background-color: #fff;
    border-radius: 8px;
    padding: 8px;
}

.custom-btn {
    background-color: rgb(219, 219, 219);
    padding: 5px;
    border-radius: 5px;
}

.mbt-10 {
    margin: 10px 0;
}

.m-top-30 {
    margin-top: 30px;
}

.m-top-60 {
    margin-top: 60px;
}

.m-bottom-10 {
    margin-bottom: 10px;
}

.m-top-60 {
    margin-top: 60px;
}

.end-line {
    border-bottom: 1px solid #fb9011;
}

.ps-block--shopping-total {
    margin-bottom: 30px;
    padding: 30px 15px;
    background-color: #ffffff;
    // border: 1px solid #fb9011;
    margin-top: auto;
}

.d-grid {
    display: grid;
    align-items: baseline;
    margin-bottom: 1rem;
}

.d-grid .ps-btn {
    padding: 1px 14px !important;
    font-size: 16px;
    color: #fff;
    width: fit-content !important;
    height: fit-content;
}

.change-btn {
    white-space: nowrap;
    padding: 9px 8px !important;
    height: fit-content;
    color: #fff !important;
}

.ps-block__estimate .ps-product__title {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.mobile{
    display: none;
}

@media (max-width: 767px) {
    /* .d-grid .ps-btn {
        padding: 1px 14px !important;
        font-size: 16px;
        color: #fff;
        width: fit-content !important;
    } */
    .ps-block--shopping-total {
        padding: 1rem !important;
        /* border: 0; */
        margin-top: 2rem !important;
    }
    .mobile{
        display: block;
    }

    .desktop{
        display: none;
    }
}
</style>
