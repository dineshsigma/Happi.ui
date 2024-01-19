<template lang="html">
    <div v-if="product != null && product.payPrice != null">
        <div class="ps-product--detail ps-product--full-content">
            <div class="ps-product__top ">
                <div class="ps-product__price-right ps-product--hot-deal p-4">
                    <template >
                        <div class="ps-product__expires p-0">
<!--                            <p>Expires In</p>-->
<!--                            <count-down-->
<!--                                time="12 31 2020, 0:00 am"-->
<!--                                format="MM DD YYYY, h:mm a"-->
<!--                            />-->
                        </div>
                        <h4
                            v-if="product.payPrice != product.mrp"
                            class="ps-product__price sale"
                        >
                            <del class="mr-2">
                                 {{ priceFormat(product.mrp) }}</del
                            >
                            {{ priceFormat(product.payPrice) }}
                        </h4>
                        <h4 v-else class="ps-product__price">
                            {{ priceFormat(product.payPrice) }}
                        </h4>
                    </template>

                    <div class="ps-product__shopping" >
                        <a
                            class="ps-btn sideProductAddToCart"
                            href="#"
                            @click.prevent="addItemToCart"
                            v-if="product.stock != 0"
                        >
                            Add to cart
                        </a>
                        <a
                            class="ps-btn sideProductAddToBuyNow"
                            href="#"
                            @click.prevent="buyNowToCart"
                            v-if="product.stock != 0"
                        >
                            Buy Now
                        </a>

                        <div
                            class="ps-btn "
                            style="cursor:default;"
                            v-if="product.stock == 0"
                        >
                            Out of stock
                        </div>
                        <div class="ps-product__actions">
                            <a v-if="!wishlistSelected" href="#" @click.prevent="handleAddItemToWishlist">
                                <i class="icon-heart mr-2 sideProductAddToWishList"></i>
                                Add to wishlist
                            </a>
                            <a v-else href="#" style="color:red" @click.prevent="handleAddItemToWishlist">
                                <i class="icon-heart mr-2 sideProductAddToWishList" ></i>
                                Added to wishlist
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section>
            <aside class="widget widget_product widget_features">
                <p><i class="icon-network"></i> Free Shipping Across India* </p>
                <p>
                    <i class="icon-smile"></i> Celebrating 1 Million Happi Customers
                </p>
                <p>
                    <i class="icon-medal-empty"></i> Awarded Best Multi Brand Mobile Retailer by Times of India
                </p>
            </aside>
        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { getColletionBySlug } from '~/utilities/product-helper';
import ProductDefault from '~/components/elements/product/ProductDefault';
//import CountDown from '~/components/elements/commons/CountDown';

export default {
    name: 'ProductWidgets',
    components: { ProductDefault,
    //    CountDown
    },
    props: {
        product: {
            type: Object,
            require: true,
            default: () => {}
        }
    },
    data(){
        return{
            wishlistSelected: false
        }
    },
    computed: {
        ...mapState({
            cartItems: state => state.cart.cartItems,
            // collections: state => state.collection.collections,
            wishlistItems: state => state.wishlist.wishlistItems,
            wishlistProductIds:  state => state.wishlist.wishlistProductIds,
        })
    },
    async created() {
    },
    methods: {
         priceFormat(item) {
            item = item.toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR',
              });
             return item;
         },
        async addItemToCart(payload) {
            let item = {
                id: this.product.id,
                quantity: 1,
                payPrice: this.product.payPrice
            };
            await this.$store.dispatch('cart/addProductToCart', item);

            // this.$notify({
            //     group: 'addCartSuccess',
            //     title: 'Success!',
            //     text: `${this.product.name} has been added to your cart!`
            // });

          this.$store.dispatch('cart/toastView', {
            show: true,
            htmlTag : `<span> Success : Your have added </span> <span style="padding: 0 0 9px;">${this.product.name} </span><span style="padding: 0 0 9px;"> to your shopping cart.</span><span><a href="/cart" class="checkout-class" style=" cursor: pointer;
           background-color: #fb9013;
    color: #fff;
    padding: 5px;
    text-decoration: none;
    border-radius: 5px;
    font-weight: 500;
    font-size: 13px;">Proceed to Checkout</a> </span>`
          });
          setTimeout(() => {
            console.log("AFTER SEO");
            this.$store.dispatch('cart/toastView', {
              show: false,
              itemName: `${this.product.name}`
            })
          }, 2500);
            await this.$store.dispatch('cart/getCartItems');
        },

        async buyNowToCart(payload) {
            let item = {
                id: this.product.id,
                quantity: 1,
                payPrice: this.product.payPrice
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
            htmlTag : `<span> Success : Your have added </span> <span style="padding: 0 0 9px;">${this.product.name} </span>
                       <span style="padding: 0 0 9px;"> to your shopping cart.</span>
                       <span><a href="/cart" class="checkout-class" style="cursor: pointer;background-color: #fb9013;color: #fff;padding: 5px;text-decoration: none;border-radius: 5px;font-weight: 500;font-size: 13px;">Proceed to Checkout</a> </span>`
          });
          setTimeout(() => {
            this.$store.dispatch('cart/toastView', {
              show: false,
              itemName: `${this.product.name}`
            })
          }, 5000);
          setTimeout(() => {
            location.replace('/cart');
          }, 6000);
        }, 
       async  handleAddItemToWishlist() {
            let userData = this.$cookies.get('userDetails');
            if (userData) {
               let item = {
                    product_id: this.product.id,
                    user_id: userData.phone,
                    id: userData.phone + '-' + this.product.objectID
                };
                let wishStatus = await this.$store.dispatch(
                    'wishlist/addItemToWishlist',
                    item
                );
                if (wishStatus == 'ok') {
                    // this.$notify({
                    //     group: 'addCartSuccess',
                    //     title: 'Add to wishlist!',
                    //     text: `${this.product.name} has been added to your wishlist !`
                    // });
                    await this.$store.dispatch('wishlist/getWishlist', {
                        user_id: userData.phone
                    });
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
        async getCartProduct(products) {
            // let listOfIds = [];
            // products.forEach(item => {
            //     listOfIds.push(item.id);
            // });
            // await this.$store.dispatch('product/getCartProducts', listOfIds);
        }
    }
};
</script>

<style lang="scss" scoped>
.ps-product--full-content .ps-product__price-right .ps-product__actions a .red{
    color: red;
}
@media (max-width: 767px) {
    .ps-product--detail {
        margin-bottom: 15px !important;
    }
}
</style>
