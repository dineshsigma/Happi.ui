<template lang="html">
    <div class="product-card product-card-horizontal" v-if="product.linker.raw != null">
        <!-- <div v-bind:class="{'product-card-horizontal' : fromComp == 'entDesk'}"> -->
            <!-- Icons Card -->
            <div class="porduct-icons">
                <!-- <div class="icon-wish">
                    <a href="#" @click.prevent="handleAddItemToWishlist">
                        <i class="icon-heart"></i>
                    </a>
                </div> -->
                <div class="circle-percentage-he" v-if="(parseInt(product.mrp.raw) - parseInt(product.payprice.raw) > 5)">
                    <span v-if="product.mrp">
                        - {{(((parseInt(product.mrp.raw) - parseInt(product.payprice.raw)) /
                                (product.mrp.raw)) * 100).toFixed(0)
                        }}%</span>
                </div> 
            </div>        
            <!-- <div class="badge">Hot</div> -->
            <!-- product control -->
            <a :href="`/${product.linker.raw}`">
                <div class="product-details p-5">
                    <div class="product-tumb">
                            <img v-if='product.image_url != undefined' 
                                :src='`${url(product.image_url.raw)}`'
                                :alt='`${product.name.raw}`'
                            />
                    </div>
                    <div class="product-content-desktop">
                        <span class="product-catagory">{{ product.category.raw[0] }}</span>
                        <h2 class="product-title-extentions">
                            {{product.name.raw }}
                        </h2> 
                        <div class="product-rating" style="display:none"> 
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i> 
                        </div>
                        <div class="product-price-info">
                            <p v-if="product.stock.raw != 0">
                                <small v-show="product.mrp.raw != product.payprice.raw">{{ priceFormat(product.mrp.raw) }}</small>
                                {{ priceFormat(product.display_price.raw) }}</p>
                            <p v-else>Out of stock</p>
                        </div>   
                    </div> 
                 
                </div>
            </a>
            
            <div class="product-bottom-he">
                <ul>
                    <li>
                        <a class="buy-now-btn" @click.prevent="addItemToCart(product)">
                            <i class="icon-cart"></i> Add to cart
                        </a>
                    </li>
                    <li>
                        <a class="buy-now-btn" @click.prevent="buyNowToCart">Buy Now</a>
                    </li>
                    <li >
                    <a class="share-button" 
                        v-on:click=" !wishlistedIds.includes(isWishId) ? handleAddItemToWishlist(product) : handleRemoveItemFromWishlist(product) ">
                        <i :class="wishlistedIds.includes(isWishId) == true ? 'fa fa-heart' : 'fa fa-heart-o'" aria-hidden="true" style="color:#FB9013 "></i>

                        <!-- <i class="icon-heart"></i> -->
                    </a>
             
                    </li>
                    <li>
                        <a href="#" @click.prevent="webShareApiSupported(product)" class="share-button">
                            <i class="fa fa-share-alt" aria-hidden="true"></i>

                        </a>
                    </li> 
                    
                </ul>
            </div> 
        <!-- </div> -->
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
            default: () => {},
        },
        fromComp: {
            type: String,
            require: true,
            default: () => '',
        },
    },

    computed: {
        ...mapState({
            cartItems: (state) => state.cart.cartItems,
            currency: (state) => state.app.currency,
            wishlistItems: (state) => state.wishlist.wishlistItems,
            itemAddedToWishlist: (state) => state.wishlist.itemAddedToWishlist,
            wishlistedIds: (state) => state.wishlist.wishlistProductIds,
        }),
        isWishId() {
            return this.product.id.raw.split('happi|')[1];
        },
        isSale() {
            if (this.product.is_sale) {
                return true;
            }
            return false;
        },
    },

    data: () => ({
        productRating: 5,
        productModal: false,
        productPreload: true,
        isImageLoaded: false,
        quickviewDialog: false,
    }),
    methods: {
        async webShareApiSupported(product) {
            const urlNew =
                'https://www.happimobiles.com/' + this.product.linker.raw;
            if (navigator.share) {
                navigator.share({
                    title: this.product.name.raw,
                    text: this.product.name.raw,
                    url: urlNew,
                });
                // .then(() => console.log('Successful share'))
                // .catch((error) => console.log('Error sharing', error));
            }
        },
        mrpPriceFormat(item) {
            let val = (item / 1).toFixed(2).replace('', '');
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },
        priceFormat(item) {
            item = item || 0;
            if (item == 0) {
                console.log('PRODUCT ERR', this.product);
            }
            item = item.toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR',
            });
            return item;
        },
        async addItemToCart(payload) {
            this.$gtm.push({
                event: 'addToCart',
                ecommerce: {
                    currencyCode: 'INR',
                    add: {
                        // 'add' actionFieldObject measures.
                        products: [
                            {
                                //  adding a product to a shopping cart.
                                name: this.product.name.raw,
                                id: this.product.id.raw,
                                price: this.product.payprice.raw + '.00',
                                brand: '',
                                category: '',
                                variant: '',
                                quantity: 1,
                            },
                        ],
                    },
                },
            });
            let item = {
                id: this.product.id.raw,
                quantity: 1,
                payPrice: this.product.payprice.raw,
            };
            await this.$store.dispatch('cart/addProductToCart', item);
            this.$store.dispatch('cart/toastView', {
                show: true,
                htmlTag: `<span> Success : Your have added </span> <span style="padding: 0 0 9px;">${this.product.name.raw} </span>
<span style="padding: 0 0 9px;">to your shopping cart.</span>
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
                    itemName: `${this.product.name.raw}`,
                });
            }, 15000);
            await this.$store.dispatch('cart/getCartItems');
        },

        async buyNowToCart(payload) {
            this.$gtm.push({
                event: 'addToCart',
                ecommerce: {
                    currencyCode: 'INR',
                    add: {
                        // 'add' actionFieldObject measures.
                        products: [
                            {
                                //  adding a product to a shopping cart.
                                name: this.product.name.raw,
                                id: this.product.id.raw,
                                price: this.product.payprice.raw + '.00',
                                brand: '',
                                category: '',
                                variant: '',
                                quantity: 1,
                            },
                        ],
                    },
                },
            });
            let item = {
                id: this.product.id.raw,
                quantity: 1,
                payPrice: this.product.payprice.raw,
            };
            await this.$store.dispatch('cart/addProductToCart', item);
            this.$store.dispatch('cart/toastView', {
                show: true,
                htmlTag: `<span> Success : Your have added </span> <span style="padding: 0 0 9px;">${this.product.name.raw} </span>
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
                    itemName: `${this.product.name.raw}`,
                });
            }, 15000);
            setTimeout(() => {
                this.$router.push('/cart');
            }, 2000);
        },
        async handleAddItemToWishlist(product) {
            console.log('PRDIDD', product);
            let userData = this.$cookies.get('userDetails');
            let prod_id = this.product.id.raw.split('|');
            if (userData) {
                let item = {
                    product_id: prod_id[1],
                    user_id: userData.phone,
                    id: userData.phone + '-' + this.product.id.raw,
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
                        user_id: userData.phone,
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
        async handleRemoveItemFromWishlist(product) {
            // console.log('REMOVE', product);
            let prod_id = this.product.id.raw.split('|');
            await this.$store.dispatch('wishlist/removeItemFromWishlist', {
                product_id: prod_id[1],
                user_id: this.$cookies.get('userDetails').phone,
            });
            this.$store.dispatch('wishlist/getWishlist', {
                user_id: this.$cookies.get('userDetails').phone,
            });
        },

        handleAddItemToCompare() {
            let item = {
                id: this.product.id,
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
            products.forEach((item) => {
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
            if (url == null) {
                return 'https://s3.ap-south-1.amazonaws.com/happimobiles/homepage/2048px-No_image_available.svg.png/';
            } else {
                return url.replace(
                    'https://happimobiles.s3.ap-south-1.amazonaws.com/',
                    'https://d1pf9mdy4w0oq4.cloudfront.net/fit-in/200x150/'
                );
            }
            // https://happimobiles.s3.ap-south-1.amazonaws.com/happi/MGSCDOMF-1626534271867.jpg
            // https://d1pf9mdy4w0oq4.cloudfront.net/fit-in/200x150/happi/ZFHKKZMT-1629098175058.jpg
        },
    },
};
</script>
<style lang="scss">
.product-card {
    position: relative;
    width: 100%;
    margin-bottom: 1rem !important;
    .porduct-icons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row-reverse;
        padding: 0.5rem;
        position: absolute;
        z-index: 1;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        .icon-wish {
            a {
                i {
                    font-size: 1.5rem;
                }
            }
        }
        .icon-percentage {
            span {
            }
        }
    }
    a {
        display: flex;
        width: 100%;
        align-items: flex-start;
        justify-content: flex-start;
        .product-details {
            display: flex;
            width: 100%;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            padding: 1rem 0.75rem;

            .product-tumb {
                min-width: 50%;
                height: auto;
                background: #fff;
                height: 132px;
                height: 240px;
                margin: auto;
                position: relative;
                overflow: hidden;

                img {
                    width: 100%;
                    // max-width: 188%;
                    height: auto;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    padding: 0.75rem;
                }
            }

            .product-content-desktop {
                padding: 0.75rem;
                min-height: 132px;
                .product-catagory {
                    font-size: 14px;
                    font-family: 'Open Sans';
                    font-weight: 400;
                    font-size: 14px;
                    line-height: normal;
                    text-transform: capitalize;
                }
                .product-rating {
                    color: #fb9013;
                }
                h2 {
                    font-size: 14px;
                    font-weight: 600;
                    line-height: 19px;
                    height: 42px;
                    // line-height: 19px;
                    // height: 62px !important;
                    overflow: hidden;
                    color: #000;
                    display: block;
                    margin: 0;
                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                .prd-rating {
                    i {
                    }
                }
                .product-price-info {
                    p {
                        margin: 0;
                    }
                    small {
                        margin-right: 10px;
                        text-decoration: line-through;
                    }
                }
            }
        }
    }
}

.product-card-horizontal {
    background: #fff;
    transition: all 0.5s ease-in-out;
    transform: scale(1);
    a {
        .product-details {
            display: flex;
            flex-direction: row;
            padding: 1rem 0.75rem;
            width: 100%;
            .product-tumb {
                min-width: 50%;
                height: auto;
                background: #fff;
                height: 132px;
                margin: auto;
                position: relative;
                overflow: hidden;

                img {
                    min-width: 100%;
                    // max-width: 188%;
                    height: auto;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    padding: 0.75rem;
                }
            }
            .product-content-desktop {
                min-width: 50%;
                background: #fff;
            }
        }
    }
    .product-bottom-he {
        display: none;
        background: #fff;
        width: 100%;
        position: absolute;
        opacity: 0;
        bottom: -10px !important;
        transition: all 0.5s ease-in-out;
        padding: 0.5rem 1rem;
        transform: translate(-50%, -50%);
        z-index: 9;
        ul {
            position: relative;
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 1rem;
            margin: 0;
        }
        li {
            list-style: none;
            // background: rgb(245, 241, 241);
            .buy-now-btn {
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 600;
                font-size: 13px;
                line-height: 18px;
                /* identical to box height */
                width: fit-content;
                height: 28px;

                color: #fb9013;
                background: #fff;
                border: 1px solid #fb9013;
                align-items: center;
            }
            .share-button {
                color: #rgb(0, 0, 0, 0.5);
                background: transparent;
                font-size: 16px;

                &:hover {
                    color: #fb9013;
                    background: transparent !important;
                    font-size: 16px;
                }
            }
        }
        li a {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 5px 13px;
            gap: 6px;

            // width: fit-content;
            // height: 28px;

            background: #fb9013;
            border-radius: 54px;

            display: block;
            padding: 0.5rem 1.25rem;

            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 500;
            font-size: 13px;
            line-height: 18px;
            color: #rgb(0, 0, 0, 0.5);
        }
        li a:hover {
            background: #fb9013 !important;
            border-radius: 54px;

            /* identical to box height */
            color: #f9f9f9;
        }
    }
}
.product-card-horizontal:hover {
    transform: scale(1.02);
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.2);
}

.product-card-horizontal:hover .product-bottom-he {
    transition: all 0.5s ease-in-out;
    display: block !important;
    transform: translate(0, 0);
    background: #f9f9f9;
    bottom: -40px;
    opacity: 1;
}

.ps-container .card-layout {
    padding: 5px;
    border-radius: 0 !important;
    background: transparent !important;
}

.category-head-mobile {
    font-size: 10px !important;
    letter-spacing: 1px;
}
.prd_cust .ps-product__container .ps-product__content {
    h1 {
        display: block;
        margin: 0;
        font-family: 'Open Sans';
        font-size: 16px;
        line-height: 17px;
        height: 40px;
        overflow: hidden;
        /* height: 27px !important; */
        overflow: hidden;
        // background: aquamarine;}
    }
    .ps-product__title1 {
        //    color: #333333;
        font-weight: 500;
        font-size: 13px;
        line-height: 18px;
    }
}
.out-stock-mobile {
    color: #fb9013 !important;
}
.out-of-stock {
    display: none;
}
.cart-icon-mobile {
    color: #fff !important;
}
.wishlist-heart-lisiting {
    float: right;
    text-align: right;
    align-items: flex-end;
}
.price-details-mobile {
    padding: 0%;
}
.prd_cust .ps-product__container .price {
    display: inline-block;
}
#homepage-1 .ps-deal-of-day .ps-product .ps-product__price {
    color: #000;
    font-weight: 600;
    font-size: 13px !important;
    font-family: 'Open Sans';
    align-items: flex-start;
    // padding-left: 1rem;
}
.ps-product__rating {
    color: #fb9013;
}
.circle-percentage-he {
    width: 34px;
    height: 34px;
    line-height: 34px;
    border-radius: 50%;
    font-size: 12px;
    color: #000000;
    text-align: center;
    background: #ffc107;
}
</style>
