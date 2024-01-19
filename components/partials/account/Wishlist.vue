<template lang="html">
    <div class="ps-section--shopping ps-whishlist">
        <div class="container">
            <div class="ps-section__header pb-5">
                <h1>Wishlist</h1>
            </div>
            <div class="ps-section__content">
                <div class="table-responsive desktop" >
                    <table class="table ps-table--whishlist">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody v-if="wishlistItems != null">
                            <tr
                                v-for="product in wishlistItems"
                                :key="product.id"  >
                                <td>
                                    <a
                                        href="#"
                                        @click.prevent="
                                            handleRemoveItemFromWishlist(
                                                product
                                            )
                                        "
                                    >
                                        <i class="icon-cross"></i>
                                    </a>
                                </td>
                                <td>
                                    <product-shopping-cart :product="product" />
                                </td>
                                <td class="price">
                                     {{ priceFormat(product.payPrice) }}
                                </td>
                                <td>
                                    <a
                                        class="ps-btn"
                                        href="#"
                                        v-if="product.stock != 0"
                                        @click.prevent="
                                            addItemToCart(product)
                                        "
                                    >
                                        Add to cart
                                    </a>
                                    <span v-else style="font-weight:700; font-size:14px; color:red">
                                        Out Of stock
                                    </span>
                                </td>
                            </tr >
                            <tr  v-if="wishlistItems.length == 0"> <td  colspan="4" style="text-align:center;">No Items </td></tr>
                        </tbody>
                    </table>
                </div>
                <div class="mobile">

                    <div v-if="wishlistItems != null" v-for="product in wishlistItems" :key="product.id" >
                        <div class="ps-product--cart">
                            <div class="ps-product__content ">
                                <nuxt-link
                                    :to="`/${product.linker}`"
                                    class="d-flex align-items-center"
                                >
                                    <img
                                        :src="
                                            `https://happimobiles.s3.ap-south-1.amazonaws.com/happi/${product.pictures!=undefined?product.pictures[0]:''}.jpg`
                                        "
                                        :alt="`${product.name}`"
                                        style="width:40px"
                                    />
                                    <a class="ps-product__title">{{ product.name }}
                                    <br>
                                    {{ priceFormat(product.payPrice) }}
                                    </a>
                                </nuxt-link>
                            </div>
                        </div>
                        <br/>

                        <a
                                        class="ps-btn"
                                        href="#"
                                        v-if="product.stock != 0"
                                        @click.prevent="
                                            addItemToCart(product)
                                        "
                                    >
                                        Add to cart
                                    </a>
                                    <span v-else style="font-weight:700; font-size:14px; color:red">
                                        Out Of stock
                                    </span>
    <br/>
                                    <a href="#"
                                    style="text-decoration: underline;font-size:10px"
                                        @click.prevent="
                                            handleRemoveItemFromWishlist(
                                                product
                                            )
                                        "
                                    >
                                        Remove From Wishlist 
                                    </a>
                                
                    </div>    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductShoppingCart from '~/components/elements/product/ProductShoppingCart';
import ProductWishlist from '~/components/elements/product/ProductWishlist';
import { getListOfProductId } from '~/utilities/product-helper';
export default {
    name: 'Wishlist',
    components: { ProductShoppingCart },
    computed: {
        ...mapState({
            wishlistItems: state => state.wishlist.wishlistItems,
        })
    },
    async created() {
        let userData = this.$cookies.get('userDetails');
        if (userData) {
            const result = await this.$store.dispatch('wishlist/getWishlist', {
                user_id : userData.phone
            });
            return;
        } else {
            this.$router.push('/account/login');
        }
    },
    methods: {
         priceFormat(item) {
            item = item.toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR',
              });
             return item;
         },
       async addItemToCart(product) {
           console.log(product);
            let item = {
                id: product.id,
                quantity: 1,
                payPrice: product.payPrice
            };
            await this.$store.dispatch('cart/addProductToCart', item);
           // this.getCartProduct(this.cartItems);
            // this.$notify({
            //     group: 'addCartSuccess',
            //     title: 'Success!',
            //     text: `${product.name} has been added to your cart!`
            // });
            this.$store.dispatch('cart/toastView', {
            show: true,
            htmlTag : `<span> Success : Your have added </span> <span style="padding: 0 0 9px;">${product.name} </span>
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
          async getCartProduct(products) {
            let listOfIds = [];
            products.forEach(item => {
                listOfIds.push(item.id);
            });
            await this.$store.dispatch('product/getCartProducts', listOfIds);
        },
        handleRemoveItemFromWishlist(product) {
            this.$store.dispatch('wishlist/removeItemFromWishlist', {
                product_id : product.id,
                user_id : this.$cookies.get('userDetails').phone
            });
            // this.loadWishlist();
            // this.$store.dispatch('wishlist/getWishlist', {
            //     user_id: this.$cookies.get('userDetails').phone,
                
            // });
            // this.$notify({
            //     group: 'addCartSuccess',
            //     title: 'Remove Item!',
            //     text: `${product.name} has been removed from your wishlist!`
            // });
        },
        async loadWishlist() {
            const wishlistItemsOnCookie = this.$cookies.get('wishlist', {
                parseJSON: true
            });
            if (wishlistItemsOnCookie) {
                const queries = getListOfProductId(wishlistItemsOnCookie.items);
                if (queries.length >= 0) {
                    const response = await this.$store.dispatch(
                        'product/getWishlishtProducts',
                        queries
                    );
                }
            }
        }
    }
   
};
</script>

<style lang="scss" scoped>
.desktop{
    display : block;
}
.mobile{
 display : none;
}

.ps-product--cart {
    .ps-product__content  {
        padding-left :0;
        img {
            margin-right:5px;
        }
    }
    .ps-product__thumbnail {
        text-align: center;
        img {
            height: 40px;
        }
    }
}

@media only screen and (max-width: 768px) {
  .desktop{
        display : none;
    }
    .mobile{
    display : block;
    }
}
</style>
