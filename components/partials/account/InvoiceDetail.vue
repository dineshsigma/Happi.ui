<template lang="html">
    <section class="ps-my-account ps-page--account">
        <div v-if="this.$cookies.get('userDetails')">
            <div class="container" v-if="eachOrder != null">
                <div class="row">
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                        <div class="ps-section__left">
                            <aside class="ps-widget--account-dashboard">
                                <div class="ps-widget__header">
                                    <figure v-if="eachOrder != null">
                                        <figcaption>
                                            {{ eachOrder.userInfo.name }}
                                        </figcaption>
                                        <p>{{ eachOrder.userInfo.email }}</p>
                                    </figure>
                                </div>
                                <div class="ps-widget__content">
                                    <AccountLinks :links="accountLinks" />
                                </div>
                            </aside>
                        </div>
                    </div>
                    <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12" v-if="eachOrder != null">
                        <div class="ps-section--account-setting">
                            <div class="ps-section__header">
                                <h3>
                                    OrderId #{{ eachOrder.order_id }} -
                                    <strong>({{ eachOrder.status }})</strong>
                                </h3>
                            </div>
                            <div class="ps-section__content">
                                <div class="row">
                                    <div class="col-md-4 col-12">
                                        <figure class="ps-block--invoice">
                                            <figcaption>
                                                Customer Name
                                            </figcaption>
                                            <div class="ps-block__content">
                                                <p>
                                                    {{
                                                        eachOrder.userInfo.name
                                                    }}
                                                </p>
                                            </div>
                                        </figure>
                                    </div>
                                    <div class="col-md-4 col-12">
                                        <figure class="ps-block--invoice">
                                            <figcaption>
                                                Email Address
                                            </figcaption>
                                            <div class="ps-block__content">
                                                <p>
                                                    {{
                                                        eachOrder.userInfo.email
                                                    }}
                                                </p>
                                            </div>
                                        </figure>
                                    </div>
                                    <div class="col-md-4 col-12">
                                        <figure class="ps-block--invoice">
                                            <figcaption>
                                                Phone Number
                                            </figcaption>
                                            <div class="ps-block__content">
                                                <p>
                                                    {{
                                                        eachOrder.userInfo.phone
                                                    }}
                                                </p>
                                            </div>
                                        </figure>
                                    </div>
                                    <div class="col-md-4 col-12">
                                        <figure class="ps-block--invoice">
                                            <figcaption>
                                                Created
                                            </figcaption>
                                            <div class="ps-block__content">
                                                <p >
                                                    {{ localDateFormat(eachOrder.createdOn) }}
                                                </p>
                                            </div>
                                        </figure>
                                    </div>
                                    <div class="col-md-4 col-12">
                                        <figure class="ps-block--invoice">
                                            <figcaption>
                                                Total Quantity
                                            </figcaption>
                                            <div class="ps-block__content">
                                                <p>
                                                    {{ eachOrder.CartQuantity }}
                                                </p>
                                            </div>
                                        </figure>
                                    </div>
                                    <div class="col-md-4 col-12">
                                        <figure class="ps-block--invoice">
                                            <figcaption>
                                                Total Price
                                            </figcaption>
                                            <div class="ps-block__content">
                                                <p>
                                                    {{ priceFormat(eachOrder.CartSubtotal) }}
                                                </p>
                                            </div>
                                        </figure>
                                    </div>

                                    <div class="col-md-12 col-12">
                                        <figure class="ps-block--invoice"  v-if="eachOrder.selectedStore == ''">
                                            <figcaption>
                                                Address
                                            </figcaption>
                                            <div class="ps-block__content">
                                                <strong>
                                                    {{
                                                        eachOrder.selectedAddress.name
                                                    }}
                                                </strong>
                                                <p>
                                                    Address:
                                                    {{
                                                        eachOrder.selectedAddress
                                                            .area
                                                    }},
                                                    {{
                                                        eachOrder.selectedAddress
                                                            .street
                                                    }},
                                                    {{
                                                        eachOrder.selectedAddress
                                                            .city
                                                    }},
                                                    {{
                                                        eachOrder.selectedAddress
                                                            .country
                                                    }},
                                                    {{
                                                        eachOrder.selectedAddress
                                                            .pincode
                                                    }}
                                                </p>
                                                <p>
                                                    Phone:
                                                    {{
                                                        eachOrder.selectedAddress
                                                            .phone
                                                    }}
                                                </p>
                                            </div>
                                        </figure>
                                        <figure class="ps-block--invoice"  v-if="eachOrder.selectedStore != ''">
                                            <figcaption>
                                                Pickup {{eachOrder.selectedStore.timeSlot}}
                                            </figcaption>
                                            <div class="ps-block__content">
                                                <strong>
                                                    {{
                                                        eachOrder.selectedStore.RetailerLocalityArea
                                                    }}
                                                </strong>
                                                <p>
                                                    Address:
                                                    {{
                                                        eachOrder.selectedStore.FullPostalAddress
                                                    }},
                                                    
                                                    {{
                                                        eachOrder.selectedStore
                                                            .city
                                                    }},
                                                    {{
                                                        eachOrder.selectedStore
                                                            .pincode
                                                    }}
                                                </p>
                                                <p>
                                                    Phone:
                                                    {{
                                                        eachOrder.selectedStore
                                                            .MobileNumber
                                                    }}
                                                </p>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                                <div class="table-responsive" v-if="eachOrder.cart_items">
                                    <TableInvoice
                                        :products="
                                            eachOrder.cart_items
                                        "
                                    />
                                </div>
                                <div class="table-responsive" v-else>
                                    <TableInvoice
                                        :products="
                                            eachOrder.order_info
                                        "
                                    />
                                </div>
                                <nuxt-link to="/account/orders">
                                    <a class="ps-btn ps-btn--sm ">
                                        Back to orders
                                    </a>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
        <div class="container">
            <div class="row">
                <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12" v-if="this.orderListOrderId != null">
                    <div class="ps-section--account-setting">
                        <div class="ps-section__header">
                            <h3>
                                OrderId #{{ this.orderListOrderId.order_id }} -
                                <strong>({{ this.orderListOrderId.status }})</strong>
                            </h3>
                        </div>
                        <div class="ps-section__content">
                            <div class="row">
                                <div class="col-md-4 col-12">
                                    <figure class="ps-block--invoice">
                                        <figcaption>
                                            Customer Name
                                        </figcaption>
                                        <div class="ps-block__content">
                                            <p>
                                                {{
                                                    this.orderListOrderId.userInfo.name
                                                }}
                                            </p>
                                        </div>
                                    </figure>
                                </div>
                                <div class="col-md-4 col-12">
                                    <figure class="ps-block--invoice">
                                        <figcaption>
                                            Email Address
                                        </figcaption>
                                        <div class="ps-block__content">
                                            <p>
                                                {{
                                                    this.orderListOrderId.userInfo.email
                                                }}
                                            </p>
                                        </div>
                                    </figure>
                                </div>
                                <div class="col-md-4 col-12">
                                    <figure class="ps-block--invoice">
                                        <figcaption>
                                            Phone Number
                                        </figcaption>
                                        <div class="ps-block__content">
                                            <p>
                                                {{
                                                    this.orderListOrderId.userInfo.phone
                                                }}
                                            </p>
                                        </div>
                                    </figure>
                                </div>
                                <div class="col-md-4 col-12">
                                    <figure class="ps-block--invoice">
                                        <figcaption>
                                            Created
                                        </figcaption>
                                        <div class="ps-block__content">
                                            <p >
                                                {{ localDateFormat(this.orderListOrderId.createdOn) }}
                                            </p>
                                        </div>
                                    </figure>
                                </div>
                                <div class="col-md-4 col-12">
                                    <figure class="ps-block--invoice">
                                        <figcaption>
                                            Total Quantity
                                        </figcaption>
                                        <div class="ps-block__content">
                                            <p>
                                                {{ this.orderListOrderId.CartQuantity }}
                                            </p>
                                        </div>
                                    </figure>
                                </div>
                                <div class="col-md-4 col-12">
                                    <figure class="ps-block--invoice">
                                        <figcaption>
                                            Total Price
                                        </figcaption>
                                        <div class="ps-block__content">
                                            <p>
                                                 {{ priceFormat(this.orderListOrderId.CartSubtotal) }}
                                            </p>
                                        </div>
                                    </figure>
                                </div>

                                <div class="col-md-12 col-12">
                                    <figure class="ps-block--invoice"  v-if="this.orderListOrderId.selectedStore == ''">
                                        <figcaption>
                                            Address
                                        </figcaption>
                                        <div class="ps-block__content">
                                            <strong>
                                                {{
                                                    this.orderListOrderId.selectedAddress.name
                                                }}
                                            </strong>
                                            <p>
                                                Address:
                                                {{
                                                    this.orderListOrderId.selectedAddress
                                                        .area
                                                }},
                                                {{
                                                    this.orderListOrderId.selectedAddress
                                                        .street
                                                }},
                                                {{
                                                    this.orderListOrderId.selectedAddress
                                                        .city
                                                }},
                                                {{
                                                    this.orderListOrderId.selectedAddress
                                                        .country
                                                }},
                                                {{
                                                    this.orderListOrderId.selectedAddress
                                                        .pincode
                                                }}
                                            </p>
                                            <p>
                                                Phone:
                                                {{
                                                    this.orderListOrderId.selectedAddress
                                                        .phone
                                                }}
                                            </p>
                                        </div>
                                    </figure>
                                    <figure class="ps-block--invoice"  v-if="this.orderListOrderId.selectedStore != ''">
                                        <figcaption>
                                            Pickup {{this.orderListOrderId.selectedStore.timeSlot}}
                                        </figcaption>
                                        <div class="ps-block__content">
                                            <strong>
                                                {{
                                                    this.orderListOrderId.selectedStore.RetailerLocalityArea
                                                }}
                                            </strong>
                                            <p>
                                                Address:
                                                {{
                                                    this.orderListOrderId.selectedStore.FullPostalAddress
                                                }},
                                                
                                                {{
                                                    this.orderListOrderId.selectedStore
                                                        .city
                                                }},
                                                {{
                                                    this.orderListOrderId.selectedStore
                                                        .pincode
                                                }}
                                            </p>
                                            <p>
                                                Phone:
                                                {{
                                                    this.orderListOrderId.selectedStore
                                                        .MobileNumber
                                                }}
                                            </p>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                            <div class="table-responsive" v-if="this.orderListOrderId.cart_items">
                                <TableInvoice
                                    :products="
                                        this.orderListOrderId.cart_items
                                    "
                                />
                            </div>
                            <div class="table-responsive" v-else>
                                <TableInvoice
                                    :products="
                                        this.orderListOrderId.order_info
                                    "
                                />
                            </div>
                            <nuxt-link to="/account/orders">
                                <a class="ps-btn ps-btn--sm ">
                                    Back to orders
                                </a>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
</template>

<script>
import AccountLinks from './modules/AccountLinks';
import TableInvoice from './modules/TableInvoice';
import { mapState } from 'vuex';
import moment from 'moment';
moment().format();

export default {
    name: 'InvoiceDetail',
    components: { TableInvoice, AccountLinks },
    props: {
        orderListOrderId: {
            type: Array,
            default: []
        }
    },
    computed: {
        ...mapState({
            eachOrder: state => state.orders.eachOrder,
        })
    },
    async created() {
        let userData = this.$cookies.get('userDetails');
        console.log(this.$cookies.get('userDetails'),"USER Details");
        if (userData) {
            await this.$store.dispatch('orders/getEachOrder', {
                order_id: this.$route.query.id
            });
            const result = await this.$store.dispatch('auth/getUserInfo', {
                        id: this.$cookies.get('userDetails').id
            });
            this.accountInfo = result;
        }else {
            await this.$store.dispatch('auth/setUserLogout');
        }
    },
    data() {
        return {
            accountLinks: [
                {
                    text: 'Account Information',
                    url: '/account/user-information',
                    icon: 'icon-user'
                },

                {
                    text: 'Orders',
                    url: '/account/orders',
                    icon: 'icon-papers',
                    active: true
                },
                {
                    text: 'Address',
                    url: '/account/addresses',
                    icon: 'icon-map-marker'
                },

                {
                    text: 'Wishlist',
                    url: '/account/wishlist',
                    icon: 'icon-heart'
                }
            ]
        };
    },
    methods: {
         priceFormat(item) {
             if(item == null){
                 item = "1";
             }
            item = item.toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR',
              });
             return item;
         },
        //  localDateFormat(item){
        //     const date = new Date(item);
        //     const timestampWithOffset = date.getTime();
        //     const offset = date.getTimezoneOffset() * 60 * 1000;
        //     const dateWithOffset = new Date(timestampWithOffset);
        //     return dateWithOffset;
        //  }
        localDateFormat(item){
            const date = new Date(item);
            const timestampWithOffset = date.getTime();
            const req_date = moment(timestampWithOffset).format("DD-MM-YYYY h:mm:ss a");
            return req_date
         }
    },
};
</script>

<style lang="scss" scoped></style>
