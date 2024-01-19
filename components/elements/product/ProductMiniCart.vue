<template lang="html">
    <div class="ps-product--cart-mobile "v-if="product.liveQuantity !== 0" >
        <div class="ps-product__thumbnail">
            <img
                v-if='product.pictures != null &&  product.pictures_new == null'
                    :src="`https://happimobiles.s3.ap-south-1.amazonaws.com/happi/${product.pictures[0]}.jpg`"
                     :alt="`${product.name}`" 
                />
<!--            <img-->
<!--                v-if='product.pictures_new !== null'-->
<!--                :src="`${product.pictures_new[0]}`"-->
<!--                :alt="`${product.name}`"-->
<!--            />-->
            <!-- <nuxt-link :to="`/${product.linker}`">
            </nuxt-link>  -->
        </div>
        <div class="ps-product__content">
            <a
                class="ps-product__remove"
                href="#"
                @click.prevent="handleRemoveProductFromCart(product)"
            >
                <i class="icon-cross"></i>
            </a>
            <nuxt-link :to="`/${product.linker}`" class="ps-product__title">
                {{ product.name }}
            </nuxt-link>
            <p class="ps-product__title" style="margin-bottom:2px">
                <strong>Sold by:</strong>
                Happi Mobiles
            </p>
            <small >
                {{ product.quantity }} x  {{ priceFormat(product.payPrice) }} 
            </small>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'ProductMiniCart',
    props: {
        product: {
            type: Object,
            default: () => {}
        }
    },
    created: () => {
        console.log("product");
    },
    computed: {
        ...mapState({
            total: state => state.cart.total,
            cartItems: state => state.cart.cartItems,
            cartProducts: state => state.product.cartProducts,
            currency: state => state.app.currency
        }),
    },
    methods: {
         priceFormat(item) {
            item = item.toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR',
              });
             return item;
         },
        async loadCartProducts() {
            const cookieCart = this.$cookies.get('cart', { parseJSON: true });
            let queries = [];
            cookieCart.cartItems.forEach(item => {
                queries.push(item.id);
            });
            if (this.cartItems.length > 0) {
                const response = await this.$store.dispatch('product/getCartProducts',queries);
                if (response) {
                    this.$store.commit('cart/setLoading', false);
                }
            } else {
                this.$store.commit('product/setCartProducts', null);
            }
        },
         async handleRemoveProductFromCart(item) {
             await this.$store.dispatch('cart/updateCart', {
                    productId: item.productId,
                    quantity: -item.quantity
                });
            this.$store.dispatch('cart/getCartItems');
        },
    }
};
</script>

<style lang="scss" scoped>
.ps-product--cart-mobile  {
    .ps-product__title{
        font-size:12px;
    }
    .ps-product__thumbnail {
    max-width : 30px;

    }
}
</style>
