<template lang="html">
    <div class="ps-section--shopping ps-shopping-cart mt-3">
        <div class="container">
            <!-- <div class="ps-section__header">
                <h3>Shopping Cart</h3>
            </div> -->
            <v-overlay :value="overlay">
                <v-progress-circular
                    indeterminate
                    size="64"
                ></v-progress-circular>
            </v-overlay>

            <div class="ps-section__content">
                <button
                    class="ps-btn"
                    type="button"
                    @click.prevent="newAddress()"
                >
                    Delivery
                </button>


                <button
                    class="ps-btn"
                    type="button"
                    @click.prevent="newAddress()"
                >
                    Pickup At Store
                </button>


            </div>

            <div class="ps-section__content" v-if="select_type != 'select'">
                <div class="row" v-if="cartItems !== null">
                    <div
                        class="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 p-m-0"
                    >
                        <div v-if="userDetails != null">
                            <div class="d-flex justify-content-between">
                                <h4>Free Home Delivery</h4>
                                <button
                                    type="button"
                                    @click.prevent="addAddress"
                                    style="float:right;text-decoration:underline;"
                                >
                                 Add Address
                            </button>

                            </div>

                            <div class="row m-0 card-layout" v-if="showAddressFrom">
                                <div
                                    class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 pb-0 pt-3"
                                >
                                    <form class="ps-form--contact-us">
                                        <h5>Add a new address</h5>
                                        <br />
                                        <div class="row">
                                            <div
                                                class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-m-0"
                                            >
                                                <label> Name </label>
                                                <div class="form-group">
                                                    <input
                                                        class="form-control"
                                                        type="text"
                                                        v-model="formData.name"
                                                        style="height:37px"
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-m-0"
                                            >
                                                <label> Email </label>
                                                <div class="form-group">
                                                    <input
                                                        class="form-control"
                                                        type="text"
                                                        v-model="formData.email"
                                                        style="height:37px"
                                                    />
                                                </div>
                                            </div>

                                            <div
                                                class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-m-0"
                                            >
                                                <label>
                                                    Phone Number
                                                </label>
                                                <div class="form-group">
                                                    <input
                                                        class="form-control"
                                                        type="number"
                                                        v-model="formData.phone"
                                                        style="height:37px"
                                                    />
                                                </div>
                                            </div>

                                            <div
                                                class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-m-0"
                                            >
                                                <label>
                                                    Street
                                                </label>
                                                <div class="form-group">
                                                    <input
                                                        class="form-control"
                                                        type="text"
                                                        v-model="
                                                            formData.street
                                                        "
                                                        style="height:37px"
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-m-0"
                                            >
                                                <label>
                                                    Area
                                                </label>
                                                <div class="form-group">
                                                    <input
                                                        class="form-control"
                                                        type="text"
                                                        v-model="formData.area"
                                                        style="height:37px"
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-m-0"
                                            >
                                                <label>
                                                    City
                                                </label>
                                                <div class="form-group">
                                                    <input
                                                        class="form-control"
                                                        type="text"
                                                        v-model="formData.city"
                                                        style="height:37px"
                                                    />
                                                </div>
                                            </div>

                                            <div
                                                class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-m-0"
                                            >
                                                <label>
                                                    Pincode
                                                </label>
                                                <div class="form-group">
                                                    <input
                                                        class="form-control"
                                                        type="text"
                                                        v-model="
                                                            formData.pincode
                                                        "
                                                        style="height:37px"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <button
                                                class="ps-btn"
                                                type="button"
                                                @click.prevent="newAddress()"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div
                                class="row m-0 mt-5 mb-5 desktop"
                                v-if="userDetails.address.length !== 0"
                            >
                                <div
                                    class="col-lg-12 col-sm-12 col-12 p-m-0 d-grid card-layout"
                                    v-for="(item, index) in userDetails.address"
                                >
                                    <div class='row' style='margin: 8px !important;'>
                                        <div class='col-6'>
                                            <ul style="list-style: none">
                                                <li>
                                                    <b>{{ item.name }}</b>
                                                </li>
                                                <li>{{ item.area }}</li>
                                                <li>{{ item.street }}</li>
                                                <li>
                                                    {{ item.city }} , {{ item.state }}
                                                </li>
                                                <li>{{ item.pincode }}</li>
                                                <li>{{ item.country }}</li>
                                                <li>E: {{ item.email }}</li>
                                            </ul>
                                        </div>
                                        <div class='col-6'>
                                            <div class="delivery-btn mb-2">
                                                <button
                                                    type="button"
                                                    class="ps-btn w-100"
                                                    @click.prevent="
                                                deliveryToAddress(item)
                                            "
                                                >
                                                    Delivery to this address
                                                </button>
                                            </div>
                                            <div class="edit-btns">
                                                <button
                                                    type="button"
                                                    class="custom-btn"
                                                    @click.prevent="
                                                editAddressFun(item, index)
                                            "
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    type="button"
                                                    class="custom-btn"
                                                    @click.prevent="
                                                deleteAddress(index)
                                            "
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div
                                class="row m-0 mt-5 mb-5 mobile"
                                v-if="userDetails.address.length != 0"
                            >
                                <div
                                    class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 p-m-2 d-grid card-layout"
                                    v-for="(item, index) in userDetails.address" v-on:click="selectIndex(index)"
                                    :class="selectedItem(index)" >

                                    <div class="row" style="margin-top:5px;margin-bottom:5px; padding: 5px;">
                                        <div class="col-2 center" >
                                            <input type="radio" id="address" class="checkmark" :value="index" v-model="selectedAddressIndex">
                                        </div>
                                        <div class="col-10">
                                            <ul style="list-style: none">
                                        <li>
                                            <b>{{ item.name }}</b>
                                        </li>
                                        <li>{{ item.area }}, {{ item.street }}</li>
                                        <li>
                                            {{ item.city }} , {{ item.state }}
                                        </li>
                                        <li>{{ item.country }}, {{ item.pincode }}</li>
                                        <li>E: {{ item.email }}</li>
                                    </ul>
                                    <div class="delivery-btn mb-2" v-if="selectedAddressIndex === index" style="text-align: center;" >
                                        <div class="spinner-grow" role="status" v-if="deliveryLoading" style="color: #fb9013;">
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                        <button
                                            v-if="!deliveryLoading"
                                            type="button"
                                            class="ps-btn w-100"
                                            @click.prevent="
                                                deliveryToAddressMobile(item)
                                            "
                                        >
                                            Delivery to this address
                                        </button>
                                    </div>
                                    <div class="edit-btns"  v-if="selectedAddressIndex === index" >
                                        <button
                                            type="button"
                                            class="custom-btn"
                                            @click.prevent="
                                                editAddressFun(item, index)
                                            "
                                        >
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            class="custom-btn"
                                            @click.prevent="
                                                deleteAddress(index)
                                            "
                                        >
                                            Delete
                                        </button>
                                    </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ps-block__content">
                                <p
                                    v-if="
                                        userDetails != null &&
                                            userDetails.address != null &&
                                            userDetails.address.length == 0
                                    "
                                    style="text-align: center"
                                >
                                    <br>
                                    <br>
                                    <br>
                                    You Have Not Set Up This Type Of Address Yet.
                                    <br>
                                    <br>
                                    <br>

                                    <button
                                        type="button"
                                        class="ps-btn"
                                        @click.prevent="addAddress()"
                                    >
                                       Add Your Address
                                    </button>
                                </p>
                            </div>
                        </div>
                        <div class="m-top-60" >
                            <h3>Pickup at store</h3>
                            <div class="row m-top-30">
                                <div
                                    class="col-sm-12 col-12 card-layout mtb-10"
                                >
                                    <div class="form-group">
                                        <label> Select City </label>
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <select
                                                        class="form-control"
                                                        v-model="selectedcity"
                                                        @change="getLocalStoreArea()"
                                                    >
                                                        <option v-for="(item,index) in citiesList">{{ item }}</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class=" col-sm-12 col-12 card-layout mtb-10"
                                    v-for="(item, index) in selectedCityStore" v-on:click="selectPickIndex(index)"
                                >

                                    <ul style="list-style: none">
                                        <li>
                                            <b
                                                ><i class="icon-store mr-2"></i
                                                >{{
                                                    item.RetailerLocalityArea
                                                }}</b
                                            >
                                        </li>
                                        <li v-if="selectedPickupIndex == index">{{ item.FullPostalAddress }}</li>
                                        <li v-if="selectedPickupIndex == index">{{ item.MobileNumber }}</li>
                                        <li v-if="selectedPickupIndex == index">{{ item.Pincode }}</li>
                                        <li v-if="selectedPickupIndex == index">
                                            <i class="icon-phone mr-2"></i
                                            >{{ item.State }}
                                        </li>
                                        <li v-if="selectedPickupIndex == index">{{ item.city }}</li>
                                    </ul>
                                    <div class="delivery-btn mb-2" v-if="selectedPickupIndex == index">
                                        <div class="form-group m-bottom-10">
                                            <label> Select Timing </label>
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <select
                                                            v-model="seletedDate"
                                                            class="form-control"
                                                        >
                                                            <option
                                                                v-for="(date,
                                                                index) in dates"
                                                            >
                                                                {{ date }}
                                                            </option>
                                                        </select>
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
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 p-m-0 pt-3 mtb-15 card-layout">
                        <div class="ps-block--shopping-total">


                            <div class="ps-block__content">
                                <ul class="ps-block__product">
                                    <li
                                        v-for="(product, index) in cartItems"
                                        v-if="product.liveQuantity !== 0"
                                    >

                                    <div class="flex-container">
                                            <div>
                                            <span >
                                               {{ product.name }} <br>X  {{ priceFormat(product.itemTotal) }}</span
                                            >
                                            </div>
                                    </div>
                                        <span class="ps-block__estimate">



                                        </span>
                                    </li>
                                </ul>

                                <h3>
                                    Total <span>{{ priceFormat(amount) }}</span>
                                </h3>
                            </div>
                        </div>
                        <!-- <nuxt-link
                            to="/account/checkout"
                            class="ps-btn ps-btn--fullwidth"
                        >
                            Proceed to checkout
                        </nuxt-link> -->
                    </div>
                </div>


                <div class="ps-section__cart-actions" style="margin-bottom:40px">
                    <nuxt-link
                        to="/cart"
                        style="text-decoration:underline;"
                    >
                        <i class="icon-arrow-left mr-2"></i>
                        Back to Shop
                    </nuxt-link>
                </div>
            </div>
            <!-- <div class="ps-section__footer">
                <div class="row justify-content-end">
                    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">

                    </div>
                    <div
                        class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12"
                    ></div>

                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductShoppingCart from '~/components/elements/product/ProductShoppingCart';
import TableShoppingCart from '~/components/partials/account/modules/TableShoppingCart';
import { setTimeout } from 'timers';

export default {
    name: 'ShoppingCart',
    components: { TableShoppingCart, ProductShoppingCart },
    computed: {
        ...mapState({
            cartItems: state => state.cart.cartItems,
            total: state => state.cart.total,
            amount: state => state.cart.amount,
            cartProducts: state => state.product.cartProducts,
            storesList: state => state.cart.storesList,
            citiesList: state => state.cart.citiesList,
            userDetails: state => state.auth.userDetails,
            isLoggedIn: state => state.auth.isLoggedIn,
        })
    },
    data: () => {
        return {
            select_type: "select",
            overlay: true,
            showAddressFrom: false,
            selectedAddressIndex: 0,
            selectedPickupIndex: -1,
            deliveryLoading: false,
            dates: [],
            selectedcity: null,
            seletedDate: '',
            country: null,
            name: null,
            email: null,
            phone: null,
            street: null,
            area: null,
            city: null,
            addressType: null,
            defaultAddress: null,
            type: 'delivery',
            selectedCityStore: [],
            formData: {
                country: 'India',
                name: '',
                email: '',
                phone: '',
                street: '',
                area: '',
                city: '',
                addressType: ''
            },
            isEdit: false,
            editAddress: null
        };
    },

    async created() {

        if (
            !this.$cookies.get('userDetails') ||
            this.$cookies.get('userDetails') === undefined
        ) {
            this.$cookies.set('redirectLogin','/cart/delivery-options');
            setTimeout(() => {
                this.$router.push('/account/login');
            }, 1000);

        } else {
            await this.$store.dispatch('auth/getUserInfo');
        }
        console.log('USER DETAILS', this.userDetails);
        await this.$store.dispatch('cart/getCartItems');
        await this.$store.dispatch('cart/getStoreList', []);
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
            this.$router.push('/cart')
        }

        this.overlay = false;
    },

    methods: {
         priceFormat(item) {
            item = item.toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR',
              });
             return item;
         },
        addAddress() {
            this.showAddressFrom = true;

            this.formData.country = '';
            this.formData.name = '';
            this.formData.email = '';
            this.formData.phone = '';
            this.formData.street = '';
            this.formData.area = '';
            this.formData.city = '';
            this.formData.addressType = '';
            this.formData.pincode = '';
        },
        freeHomeDelivery() {
            this.type = 'delivery';
        },
        selectIndex(i){
                this.selectedAddressIndex = i;
        },
        selectPickIndex(i){
            this.selectedPickupIndex = i;
        },
        selectedItem(i){
            if(this.selectedAddressIndex === i){
                return "selectedAddress"
            }
        },
        async pickUpAtStore(store) {
            // this.type = 'pickup';
            this.overlay = true;
            store.timeSlot = this.seletedDate;
            await this.$store.dispatch('cart/deliveryOptionToCart', {
                store: store,
                deliveryType: 'pickup'
            });
            setTimeout(() => {
                this.$router.push('/cart/preview');
            }, 2000);
        },
        // delivery address
        async deliveryToAddress(delivery) {
            this.overlay = true;
            console.log(delivery);
            await this.$store.dispatch('cart/deliveryOptionToCart', {
                address: delivery,
                deliveryType: 'delivery'
            });
            setTimeout(() => {
                this.$router.push('/cart/preview');
            }, 2500);
        },
        async deliveryToAddressMobile(delivery){
            this.overlay = true;
            console.log(delivery);
            this.deliveryLoading = true;
            await this.$store.dispatch('cart/deliveryOptionToCart', {
                address: delivery,
                deliveryType: 'delivery'
            });
            setTimeout(() => {
                //this.$router.push('/cart/preview');
                this.$router.push('/cart/preview');
                this.deliveryLoading = false;
            }, 2500);
        },

        editAddressFun(item, index) {
            console.log(item);
            this.showAddressFrom = true;
            this.formData.country = item.country;
            this.formData.name = item.name;
            this.formData.email = item.email;
            this.formData.phone = item.phone;
            this.formData.street = item.street;
            this.formData.area = item.area;
            this.formData.city = item.city;
            this.formData.pincode = item.pincode;
            this.editIndex = index;
            this.isEdit = true;
        },
        async deleteAddress(index) {
            await this.$store.dispatch('auth/deleteUserAddress', {
                index: index
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
        // new address added in login user
        async newAddress() {
            this.overlay = true;
            await this.$store.dispatch('auth/updateUserInfo', {
                tempObj: this.formData,
                isEdit: this.isEdit,
                index: !this.isEdit ? 'no_index' : this.editIndex
            });
            this.showAddressFrom = false;
            setTimeout(()=> this.overlay = false, 2000)
        }
    }
};
</script>

<style>
.d-grid {
    display: grid;
    align-items: flex-end;
    margin-bottom: 1rem;
}

.card-layout{
    background-color: #fff;
    border-radius: 8px;
}

.mtb-10{
    margin:5px 0;
}
.mtb-15{
    margin:15px 0;
}

.d-grid .ps-btn {
    padding: 10px;
    font-size: 13px;
    color: #fff;
}
.ps-section--shopping {
    padding: 2rem;
}
.edit-btns {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
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

.custom-btn {
    background-color: rgb(219, 219, 219);
    padding: 5px;
    border-radius: 5px;
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
    margin-top: 10px;
    margin-bottom: 30px;
    padding: 30px 15px;
    background-color: #ffffff;
    border-radius:8px;
    border: 1px solid #fff;
}
.add-address-btn {
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

.flex-container {
  display: flex;
}

.flex-container > div {
  font-size: 30px;
}
.mobile{
    display: none;
}

@media (max-width: 767px) {
    .p-m-0 {
        padding: 10px;

    }
    .p-m-2 {
        padding: 2px;

    }
    .add-address-btn {
        white-space: nowrap;
        padding: 9px 8px !important;
        height: fit-content;
        color: #fff;
    }
    .desktop{
        display: none;
    }
    .mobile{
        display: block;
    }
    .selectedAddress{
        padding: 5px;
    }
    .bb1s{
        border-bottom: 1px solid #fb9011;
    }
    .end-line {
        border-bottom: 1px solid #fff;
    }
    .center{
          margin: auto;
    }
    .checkmark {
        position: absolute;
        top: 0;
        left: 25%;
        height: 25px;
        width: 25px;
        background-color: #eee;
        border-radius: 50%;
    }
    input ~ .checkmark {
        background-color: #ccc;
    }
    input:checked ~ .checkmark {
        background-color: #fb9013;
    }
}
</style>
<style lang="scss" scoped></style>
