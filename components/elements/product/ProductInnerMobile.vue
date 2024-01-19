<template lang="html">
    <div class="ps-product ps-product--inner prd_cust" v-if="product.linker.raw != null">
        <div class="icons_box">
            <div class="wishlist-heart-lisiting">
                <a 
                v-on:click=" !wishlistedIds.includes(isWishId) ? handleAddItemToWishlist(product) : handleRemoveItemFromWishlist(product) ">
                    <i 
                    :class="wishlistedIds.includes(isWishId) == true ? 'fa fa-heart' : 'fa fa-heart-o'"
                    style="font-size: 1.5rem !important;  color:#FB9013"></i>
                </a>
            </div>
            <div class="circle-percentage" v-if="(parseInt(product.mrp.raw) - parseInt(product.payprice.raw) > 5)">
                <span v-if="product.mrp"
                    >
                    - {{ (((parseInt(product.mrp.raw) - parseInt(product.payprice.raw)) /
                            (product.mrp.raw)) * 100).toFixed(0)
                    }}%&nbsp;</span>
                </div> 
        </div>
        <a  :href="`/${product.linker.raw}`">
        <div class="ps-product__thumbnail home-list-img" >
          <a :href="`/${product.linker.raw}`">
          <img v-if='product.image_url != undefined'
               class='hit-image'
               :src='`${url(product.image_url.raw)}`'
               :alt='`${product.name.raw}`'
          />
            </a> 

        </div>
        <div class="ps-product__container ">
            <div class="ps-product__content-new">
                <h6 class="category-head-mobile">{{product.category.raw[0]}}</h6>
                <h1
                   
                    class="ps-product__title1"
                >
                    {{ product.name.raw }}
                
            </h1>
                <!-- <div class="ps-product__rating"> 
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i> 
                </div> -->
                <div class="price">
                    <ul>
                        <li v-if="product.stock.raw != 0">
                            <div v-if="product.display_price.raw == product.payprice.raw">
                                <a href="">{{ priceFormat(product.display_price.raw) }}</a>
                            </div>
                            <div v-else class="ps-product__price mb-0 price-details-mobile">
                                <a href="">{{ priceFormat(product.display_price.raw) }}</a>
                            </div> 
                        </li>
                        <li v-if="product.stock.raw == 0" class="ps-product__price mb-0 price-details-mobile out-stock-mobile">
                            Out of stock
                        </li>
                        <!-- <li  v-else>
                           <div class="" style="color:#fff"> Out of stock
                        </div>
                        </li> -->
                    </ul>
                </div>                
            </div>
         
            <!-- <div class="prd_hover">
                <ul class="new">
                <template v-if="product.stock.raw != 0">
                    <li>
                        <a href="">
                            <i class="fa fa-user"></i>
                        <span class="cart-text">Add to cart</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                        <span class="cart-text">Buy Now</span>
                        </a>
                    </li>
                    <li>
                        <a href="" >
                            <i class="fa fa-user"></i>
                        </a>
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
                </template> -->
               <!-- </ul>
            </div> -->
        </div>
    </a>
    <!-- <div class="product-bottom-inner ">
                <ul class="">
                    <li>
                        <a class="buy-now-inner"  href="#" @click.prevent="handleAddToCart">
                            <i class="icon-cart"></i> Add to cart
                        </a>
                    </li> &nbsp;
                    <li>
                        <a class="buy-now-inner " href="#" @click.prevent="handleAddToCart">Buy Now</a>
                    </li>
                 
                    <li>
                        <a href="#" @click.prevent="handleAddToCart" class="share-button">
                            <i class="fa fa-share-alt" aria-hidden="true"></i>

                        </a>
                    </li> 
                    
                </ul>
    </div> -->
    </div>
</template>
<script>
import { mapState } from 'vuex';
//import Rating from '../Rating';
//import ProductQuickview from '~/components/elements/detail/ProductQuickview';

export default {
    name: 'ProductInnerMobile',
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
            itemAddedToWishlist: state=> state.wishlist.itemAddedToWishlist,
            wishlistedIds: state => state.wishlist.wishlistProductIds    
        }),
        isWishId() {
            return this.product.id.raw.split('happi|')[1]
        },
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
        async handleRemoveItemFromWishlist(product) {
            console.log('REMOVE', product);
            let prod_id = this.product.id.raw.split("|");
            await this.$store.dispatch('wishlist/removeItemFromWishlist', {
                product_id : prod_id[1],
                user_id : this.$cookies.get('userDetails').phone
            });
            this.$store.dispatch('wishlist/getWishlist', {
                user_id: this.$cookies.get('userDetails').phone,
                
            });
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
// .product-card-hover{

//     &:hover{
//         .home-list-img{
//         background-color: #ffffff !important; 
//          transform: translate(0rem , -1rem);
//     }
//     .ps-product__container{
//         background-color: #ffffff !important; 
//          transform: translate(0rem , -1.5rem);
//     }

// }
// }
.home-list-img{

}
.ps-product--inner{
    // transition: all 0.5s ease-in-out;
    // transform: scale(1);
    
    padding-bottom: 10% ;

    .product-bottom-inner{
        display: none ;
        background: none;
        width:100%; 
        position: absolute;
        opacity: 0;
        left:-3px;          
        margin: 0 3% ;
        bottom: 5px !important;
        // transition: all 0.5s ease-in-out;
        // padding: .5rem 1rem;
        // transform: translate(-50%,-50%);
        z-index: 9;  

        ul{
            // position: relative;
             list-style: none;
             display:flex; 
             align-items: center;
            //  justify-content: flex-start; 
            //  gap: 1rem;

            }
        li{
            list-style: none;
            
            // background: rgb(245, 241, 241);
            .buy-now-inner{
                font-family: 'Open Sans';
                font-style: normal;    
                font-weight: 400;
                font-size: 10px;
                width: fit-content;
                // line-height: 18px;
                /* identical to box height */
            // width: fit-content;
                // height: 28px;     display: flex;
                color: #FB9013 !important;
                background: #fff;
                border: 1px solid #FB9013;
                // align-items: center;
                // &:hover{
                //     background:#FB9013;
                //     color  : #fff !important;
                // }
            }
            .share-button{
                color: rgb(0, 0, 0, 0.5);
                background: none;
                font-size:15px;
                width:fit-content;
                &:hover{
                    color:#FB9013;
                    background: none !important;
                    font-size:15px;
                }
            }
    }
        li a{
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 5px 13px;
            gap: 6px;

            // width: fit-content;
            // height: 28px;

            background: #FB9013;
            border-radius: 54px;
            
            display: block;
            padding:.5rem 1.25rem;
        
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 500;
            font-size: 13px;
            line-height: 18px;
            color: rgb(0, 0, 0, 0.5);
            
        
        }
        // li a:hover{
        //     background: #FB9013 !important; 
        //     border-radius: 54px;
        //     /* identical to box height */
        //     color:#F9F9F9
        // }
    }
}
// .ps-product--inner:hover{ 
   
//     transform: scale(1.1); 
//     // transform: scale(1.02);
//     box-shadow: 0px 1px 6px rgba(0,0,0,0.2);
// }


// .ps-product--inner:hover
// .product-bottom-inner{
//     transition: all 0.5s ease-in-out;
//     display: block !important; 
//     transform: translate(0,0);
//     background: #fff;
//     bottom: -40px;
//     opacity: 1;

// } 
.category-head-mobile{
    font-size:10px !important;
    letter-spacing: 1px;
}
.prd_cust .ps-product__container .ps-product__content-new {
    margin-bottom: 10px;
    padding: 12% 5%;
  
    h1 {
    display: block;
    margin: 0;
    font-family: "Open Sans";
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
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;
    }
}
.out-stock-mobile{
    color:#fb9013 !important;
}
.out-of-stock{
    display: none;
}
.cart-icon-mobile{
    color:#fff !important;
}
.wishlist-heart-lisiting{
    float: right;
    text-align: right;
    align-items: flex-end;
}
.price-details-mobile{
padding:0%;
}
.prd_cust .ps-product__container .price{
    display: inline-block;
}
#homepage-1 .ps-deal-of-day .ps-product .ps-product__price {
    color: #000;
    font-weight: 600;
    font-size: 13px !important;
    font-family: "Open Sans";
    align-items: flex-start;
    // padding-left: 1rem;
}
.ps-product__rating{
color:#fb9013;
}
.circle-percentage {
    width: 26px;
    height: 26px;
    line-height: 26px;
    border-radius: 50%;
    font-size: 9px;
    color: #000000;
    text-align: center;
    background: #ffc107;

}
</style>