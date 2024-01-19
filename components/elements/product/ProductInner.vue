<template lang="html">
    <div class="ps-product ps-product--inner" v-if="product.linker.raw != null">
        <div class="ps-product__thumbnail home-list-img" >
          <a :href="`/${product.linker.raw}`">
          <img v-if='product.image_url != undefined'
               class='hit-image'
               v-lazy-load
               :src='`${url(product.image_url.raw)}`'
               :alt='`${product.name.raw}`'
          />
          </a>
            <ul class="ps-product__actions">
                <template v-if="product.stock.raw != 0">
                    <li>
                        <button class="cart-button">
                         <i class="icon-bag2 psproduct homeCartIcon cart-icon" data-placement="top" title="Add to cart" @click.prevent="addItemToCart(product)">
                        <span class="cart-text">Add to cart</span></i>
                        </button>
                        </li>
                    <li>
                       <a> <i class="icon-heart psproduct homeCartWishList"  title="Add to wishlist" @click.prevent="handleAddItemToWishlist(product)"></i></a>
                    </li>
                    <!-- <li> -->
                       <!-- <a
                            to="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to cart"
                            @click.prevent="addItemToCart(product)"
                        >
                            <i class="icon-bag2"></i>
                        </a> -->
                         <!-- <a><i class="icon-bag2 psproduct homeCartIcon" data-placement="top" title="Add to cart" @click.prevent="addItemToCart(product)"></i> -->
                    <!-- </a></li> -->
                    <!-- <li> -->
                         <!--  <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to wishlist"
                            @click.prevent="handleAddItemToWishlist(product)"
                        >
                            <i class="icon-heart"></i>
                        </a> -->
                       <!-- <a> <i class="icon-heart psproduct homeCartWishList"  title="Add to wishlist" @click.prevent="handleAddItemToWishlist(product)"></i></a> -->
                    <!-- </li> -->
                </template>
                <template v-else>
                    <li>
                        <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to wishlist"
                            @click.prevent="handleAddItemToWishlist(product)"
                        >
                            <i class="icon-heart"></i>
                        </a>
                    </li>
                </template>
            </ul>
        </div>
        <div class="ps-product__container">
<!--            <nuxt-link to="/shop" class="ps-product__vendor">-->
<!--                {{ product.manufacturer.raw }}-->
<!--            </nuxt-link>-->
            <div class="ps-product__content">

                <a
                    :href="`/${product.linker.raw}`"
                    class="ps-product__title product-name"
                >
                    {{ product.name.raw }}
                </a>
                <div class="ps-product__rating"></div>
                <p
                    v-if="product.display_price.raw == product.payprice.raw"
                    class="ps-product__price sale mb-0 price-details"
                >
                    {{ priceFormat(product.display_price.raw) }}
                    <!-- <del class="ml-2">
                        {{ priceFormat(product.payPrice) }}
                    </del> -->
                </p>
                <p v-else class="ps-product__price mb-0 price-details">
                    {{ priceFormat(product.display_price.raw) }}
                </p>
                <p
                    v-if="product.stock.raw == 0"
                    class="mb-0"
                    style="color:red;font-size:12px;"
                >
                    Out of stock
                </p>
            </div>
            
<!--            <div class="ps-product__content hover">-->
<!--                <a :href="`/${product.linker.raw}`" class="ps-product__title">{{ product.name.raw }}</a>-->

<!--                &lt;!&ndash; <span-->
<!--                                                 @click.prevent="getAlogioEvent(`/${product.linker}`) ">-->
<!--                                                    {{ product.name }}-->
<!--                                                </span> &ndash;&gt;-->
<!--                <p-->
<!--                    v-if="product.display_price.raw === product.payprice.raw"-->
<!--                    class="ps-product__price sale mb-0"-->
<!--                >-->
<!--                    {{ priceFormat(product.display_price.raw) }}-->
<!--                    &lt;!&ndash; <del class="ml-2"> {{ priceFormat(product.payPrice) }}</del> &ndash;&gt;-->
<!--                </p>-->
<!--                <p v-else class="ps-product__price mb-0">-->
<!--                    {{ priceFormat(product.display_price.raw) }}-->
<!--                </p>-->
<!--                <p-->
<!--                    v-if="product.stock.raw == 0"-->
<!--                    class="mb-0"-->
<!--                    style="color:red;font-size:12px;"-->
<!--                >-->
<!--                    Out of stock-->
<!--                </p>-->
<!--            </div>-->
        </div>
<!--        <v-dialog v-model="quickviewDialog" width="1200">-->
<!--            <div class="ps-dialog">-->
<!--                <a-->
<!--                    class="ps-dialog__close"-->
<!--                    @click.prevent="quickviewDialog = false"-->
<!--                >-->
<!--                    <i class="icon icon-cross"></i>-->
<!--                </a>-->
<!--                &lt;!&ndash; <product-quickview :product="product" /> &ndash;&gt;-->
<!--            </div>-->
<!--        </v-dialog>-->
<ul class="ps-product__actions">
                <template v-if="product.stock.raw != 0">
                    <li>
                        <button class="cart-button">
                         <i class="icon-bag2 psproduct homeCartIcon cart-icon" data-placement="top" title="Add to cart" @click.prevent="addItemToCart(product)">
                        <span class="cart-text">Add to cart</span></i>
                        </button>
                        </li>
                    <li>
                       <a> <i class="icon-heart psproduct homeCartWishList"  title="Add to wishlist" @click.prevent="handleAddItemToWishlist(product)"></i></a>
                    </li>
                </template>
                <template v-else>
                    <li>
                        <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to wishlist"
                            @click.prevent="handleAddItemToWishlist(product)"
                        >
                            <i class="icon-heart"></i>
                        </a>
                    </li>
                </template>
            </ul>

    </div>
</template>
<script>
import { mapState } from 'vuex';
//import Rating from '../Rating';
//import ProductQuickview from '~/components/elements/detail/ProductQuickview';

export default {
    name: 'ProductInner',
    components: {
        //ProductQuickview, Rating
        },
    props: {
        product: {
            type: Object,
            require: true,
            default: () => {}
        }
    },

    computed: {
        ...mapState({
            cartItems: state => state.cart.cartItems,
            currency: state => state.app.currency,
            wishlistItems: state => state.wishlist.wishlistItems,
            itemAddedToWishlist: state=> state.wishlist.itemAddedToWishlist
        }),
        isSale() {
            if (this.product.is_sale) {
                return true;
            }
            return false;
        }
    },

    data: () => ({
        productRating: 5,
        productModal: false,
        productPreload: true,
        isImageLoaded: false,
        quickviewDialog: false
    }),
    methods: {
         priceFormat(item) {
            item = item || 0;
            if(item == 0){
                console.log("PRODUCT ERR", this.product);
            }
            item = item.toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR',
              });
             return item;
         },
        async addItemToCart(payload) {
            this.$gtm.push({event:"addToCart", 'ecommerce': {
                    'currencyCode': 'INR',
                    'add': {                                // 'add' actionFieldObject measures.
                        'products': [{                        //  adding a product to a shopping cart.
                            'name': this.product.name.raw,
                            'id': this.product.id.raw,
                            'price': this.product.payprice.raw+'.00',
                            'brand': '',
                            'category': '',
                            'variant': '',
                            'quantity': 1
                        }]
                    }
                }})
            let item = {
                id: this.product.id.raw,
                quantity: 1,
                payPrice: this.product.payprice.raw
            };
            await this.$store.dispatch('cart/addProductToCart', item);
          this.$store.dispatch('cart/toastView', {
            show: true,
            htmlTag : `<span> Success : Your have added </span> <span style="padding: 0 0 9px;">${this.product.name.raw} </span>
<span style="padding: 0 0 9px;">to your shopping cart.</span>
 <span><a href="/cart" class="checkout-class" style=" cursor: pointer;
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
              itemName: `${this.product.name.raw}`
            })
          }, 15000);
            await this.$store.dispatch('cart/getCartItems');
        },

        async buyNowToCart(payload) {
            this.$gtm.push({event:"addToCart", 'ecommerce': {
                    'currencyCode': 'INR',
                    'add': {                                // 'add' actionFieldObject measures.
                        'products': [{                        //  adding a product to a shopping cart.
                            'name': this.product.name.raw,
                            'id': this.product.id.raw,
                            'price': this.product.payprice.raw+'.00',
                            'brand': '',
                            'category': '',
                            'variant': '',
                            'quantity': 1
                        }]
                    }
                }})
            let item = {
                id: this.product.id.raw,
                quantity: 1,
                payPrice: this.product.payprice.raw
            };
            await this.$store.dispatch('cart/addProductToCart', item);
          this.$store.dispatch('cart/toastView', {
            show: true,
            htmlTag : `<span> Success : Your have added </span> <span style="padding: 0 0 9px;">${this.product.name.raw} </span>
<span style="padding: 0 0 9px;"> to your shopping cart.</span>
 <span><a href="/cart" class="checkout-class" style=" cursor: pointer;
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
              itemName: `${this.product.name.raw}`
            })
          }, 15000);
            setTimeout(() => {
                this.$router.push('/cart');
            }, 2000);
        },
        async handleAddItemToWishlist(product) {
            console.log('PRDIDD', product);
            let userData = this.$cookies.get('userDetails');
            let prod_id = this.product.id.raw.split("|");
            if (userData) {
                let item = {
                    product_id: prod_id[1],
                    user_id: userData.phone,
                    id: userData.phone + '-' + this.product.id.raw
                };
                console.log('item wishlist', item);
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

        handleAddItemToCompare() {
            let item = {
                id: this.product.id
            };
            this.$store.dispatch('compare/addItemToCompare', item);
            // this.$notify({
            //     group: 'addCartSuccess',
            //     title: 'Add to compare!',
            //     text: `${this.product.title} has been added to your compare !`
            // });
        },

        async getCartProduct(products) {
            let listOfIds = [];
            products.forEach(item => {
                listOfIds.push(this.product.id.raw);
            });
            const response = await this.$store.dispatch(
                'product/getCartProducts',
                listOfIds
            );
            if (response) {
                this.$store.commit('cart/setLoading', false);
            }
        },
        url(url) {
            if(url==null){
             return 'https://s3.ap-south-1.amazonaws.com/happimobiles/homepage/2048px-No_image_available.svg.png/';
            }else{
             return url.replace('https://happimobiles.s3.ap-south-1.amazonaws.com/', 'https://d1pf9mdy4w0oq4.cloudfront.net/fit-in/200x150/')
            }
            // https://happimobiles.s3.ap-south-1.amazonaws.com/happi/MGSCDOMF-1626534271867.jpg
            // https://d1pf9mdy4w0oq4.cloudfront.net/fit-in/200x150/happi/ZFHKKZMT-1629098175058.jpg
        }
    }
};
</script>
<style lang="scss">
.cart-icon{
    position: absolute;
    left: 5%;
    right: 10.76%;
    top: 10%;
    bottom: 25%;

    background: #FFFFFF;
}
.cart-button{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 13px;
    gap: 6px;

    width: 99px;
    height: 28px;

    background: #FB9013;
    border-radius: 54px;
}
.cart-text{
    width: 53px;
    height: 18px;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;

    color: #FFFFFF;
}

.product-name{  
    width: 210px;
    height: 44px;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;

    color: #333333 !important;
}
.price-details{
    width: 210px;
    height: 27px;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;

    color: #333333 !important;
}

.psproduct {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
}
.ps-product--inner {
    padding: 0;
    border: none;
    .ps-product__thumbnail {
        width: 150px;
        // height: 320px;
        height: 259px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: auto;
    }
    .ps-product__price {
        small {
            margin-left: 0;
        }
    }
}
.home-list-img {
    text-align: center;
    img {
        // height: 125px!important;
        width: auto !important;
    }
    .main-img{
        display:block;
        opacity: 1.0;
    }
    .child-img{
        display: none;
        opacity: 0.0;
    }

    // &:hover {
    //     .main-img{
    //         display: none;
    //         opacity: 0.0;
    //         transition: opacity .55s ease-in-out;
    //         -moz-transition: opacity .55s ease-in-out;
    //         -webkit-transition: opacity .55s ease-in-out;
    //     }
    //     .child-img{
    //         display:block;
    //         opacity: 1.0;
    //         transition: opacity .55s ease-in-out;
    //         -moz-transition: opacity .55s ease-in-out;
    //         -webkit-transition: opacity .55s ease-in-out;
    //     }
    // }

}

@media (max-width: 767px) {
    .ps-product--inner {
        .ps-product__thumbnail {
            height: 200px;
            width : auto;
            display: flex;
            align-items: center;
        }
    }

    .home-list-img {
        text-align: center;

        img {
            height: auto;
            width: auto !important;
        }



    }
}
</style>
