<template lang="html">
    <div class="ps-cart--mini">
        <a class="header__extra" href="#">
            <i class="icon-cart happi-icon"></i>
            <span v-if="cartItems.length > 0">
                <!-- <i>{{ total }}</i> -->
            </span>
        </a>
        <div v-if="total > 0" class="ps-cart__content">
            <div class="ps-cart__items" v-if="cartItems.length > 0">
                <template v-if="loading === true">
                    <loading />
                </template>
                <template v-else>
                    <product-mini-cart
                        v-for="product in cartItems"
                        :product="product"
                        :key="product.productId"
                    />
                </template>
                <!-- <div v-for="product in cartProducts">
                    {{product.products[0].pictures ? product.products[0].pictures : ''}}
                    {{product.products[0].price ? product.products[0].price: ''}}
                </div> -->
            </div>
            <div class="ps-cart__footer">
                <h3>
                   Sub Total
                    <strong>{{ priceFormat(amount) }}</strong>
                </h3>
                <nuxt-link to="/cart" class="ps-btn ps-btn--fullwidth viewCartIcon">
                    View Cart
                </nuxt-link>
            </div>
        </div>
        <div v-else class="ps-cart__content">
            <div class="ps-cart__items no-products">
               No products in cart
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductMiniCart from '~/components/elements/product/ProductMiniCart';
import Loading from '~/components/elements/commons/Loading';

export default {
    name: 'MiniCart',
    components: { Loading, ProductMiniCart },
    computed: {
        ...mapState({
            total: state => state.cart.total,
            amount: state => state.cart.amount,
            loading: state => state.cart.loading,
            cartItems: state => state.cart.cartItems,
            cartProducts: state => state.product.cartProducts
        })
    },
    methods: {
         priceFormat(item) {
            item = item.toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR',
              });
             return item;
         }
    },
    async created() {
        this.$store.dispatch('product/getCartProducts');
        // await this.$store.dispatch('cart/getCartItems');
      
    }
};
</script>

<style lang="scss" scoped>
.ps-cart__items {
    min-height: 150px;
    &.no-products {
        min-height: 50px;
    }
}
.ps-cart__footer {
    figure {
        display: flex;
        flex-flow: row nowrap;
        margin-right: 0 -5px;

        > * {
            flex-basis: 100%;
            max-width: 50%;
            padding: 0 5px;
        }

        .ps-btn {
            width: 100%;
            text-align: center;
        }
    }
}
.happi-icon{
    color: #fff;
    :hover {
        color:#000;
    }
}
</style>
