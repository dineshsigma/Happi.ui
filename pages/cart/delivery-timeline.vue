<template lang='html'>
    <div class='ps-section--shopping ps-shopping-cart mt-3'>
        <div class='container'>
            <div class='row card-layout'>
                <div class='col-xl-12'>
                    <p v-if='deliveryinfo != null' style='font-size: 2.5rem;'>
                        Your order will be delivered by <strong>{{ deliveryinfo.etd }}</strong>
                        <br />
                        <img width='90px'
                             src='https://media-exp1.licdn.com/dms/image/C560BAQGxOfq6CRH36A/company-logo_200_200/0?e=2159024400&v=beta&t=G6IokcrQWa_dznOgMt4iz3VKxlEP5fvCqZ_H5dkDdz4'>
                    </p>

                </div>
            </div>
        </div>
        <a
            href='/cart/preview'
            v-if='deliveryinfo != null'
            class='ps-btn p-4'
            style='bottom: 10%;margin-top: 30%;text-align: center;color: rgb(255, 255, 255);position: fixed;width: 92%;'
        >
            Next
        </a>
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
            cartItems: (state) => state.cart.cartItems,
            cartInfo: (state) => state.cart.cartInfo,
            total: (state) => state.cart.total,
            amount: (state) => state.cart.amount,
            cartProducts: (state) => state.product.cartProducts,
            offersList: (state) => state.offers.offersList
        })
    },
    data: () => {
        return {
            type: 'pickup', // pickup / delivery
            customOfferList: [],
            selectedOffer: null,
            deliveryinfo: null
        };
    },
    async created() {
        this.$cookies.remove('redirectLogin');
        await this.$store.dispatch('cart/getCartItems');
        await this.$store.dispatch('offers/getOfferList', {
            category_name: this.cartItems[0].category,
            value: this.amount
        });
        if (
            this.cartInfo.selectedOffer !== null &&
            this.cartInfo.selectedOffer !== undefined
        ) {
            this.selectedOffer = this.cartInfo.selectedOffer;
        } else {
            this.selectedOffer = null;
        }
        // console.log('IMFO', this.offersList);
        if (this.offersList.length !== 0) {
            for (let i = 0; i < this.offersList[0].description.length; i++) {
                const element = this.offersList[0].description[i];
                let item = {};
                item.offerTitle = element.split('|')[0];
                item.offerText = element.split('|')[1];
                item.name = this.offersList[0].offer_name;
                item.id = this.offersList[0].id;
                this.customOfferList.push(item);
            }
        }

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
    },
    methods: {
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
            window.location.href = `${baseUrl}payment/init?cartId=${item}`;
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
.v-application {
    .mt-3 {
        height: 100%
    }
}

.button-next {
    position: fixed;
    width: 93%;
    left: 10%;
    bottom: 10%;
}

.card-layout {
    background-color: #fff;
    border-radius: 8px;
}
</style>
