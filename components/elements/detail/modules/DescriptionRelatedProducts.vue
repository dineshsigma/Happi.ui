<template lang="html">
    <div>
    ABCDE
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    name: 'DescriptionRelatedProducts',
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
            // product: (state) => state.product.product,
            modelProducts: (state) => state.product.modelProducts,
        }),
    },

    // async created() {
    //     this.items = [];
    //     console.log(this.modelProducts, 'this.modelProducts');
    //     let response = await this.$store.dispatch('product/getDescriptionRelatedProducts', {
    //         // linker: this.modelProducts.combi[0].linker
    //         linker: 'realme-c31-dark-green-3gb-32gb'
    //     });
    //     console.log(response, 'response');
    // },

    created: async function () {
      setTimeout(() =>{
          console.log("this.modelProducts", this.modelProducts);
      }, 2000)

      setTimeout(() => {
        let response = this.$store.dispatch('product/getDescriptionRelatedProducts', {
            linker: this.modelProducts.combi[0].linker
            // linker: 'realme-c31-dark-green-3gb-32gb'
        });
        console.log(response, 'response');
      }, 2000)
      
      
    },

    data: () => ({
        productRating: 5,
        productModal: false,
        productPreload: true,
        isImageLoaded: false,
        quickviewDialog: false,
        items: []
    }),
    methods: {
//          priceFormat(item) {
//             item = item || 0;
//             if(item == 0){
//                 console.log("PRODUCT ERR", this.product);
//             }
//             item = item.toLocaleString('en-IN', {
//                 style: 'currency',
//                 currency: 'INR',
//               });
//              return item;
//          },
//         async addItemToCart(payload) {
//             this.$gtm.push({event:"addToCart", 'ecommerce': {
//                     'currencyCode': 'INR',
//                     'add': {                                // 'add' actionFieldObject measures.
//                         'products': [{                        //  adding a product to a shopping cart.
//                             'name': this.product.name.raw,
//                             'id': this.product.id.raw,
//                             'price': this.product.payprice.raw+'.00',
//                             'brand': '',
//                             'category': '',
//                             'variant': '',
//                             'quantity': 1
//                         }]
//                     }
//                 }})
//             let item = {
//                 id: this.product.id.raw,
//                 quantity: 1,
//                 payPrice: this.product.payprice.raw
//             };
//             await this.$store.dispatch('cart/addProductToCart', item);
//           this.$store.dispatch('cart/toastView', {
//             show: true,
//             htmlTag : `<span> Success : Your have added </span> <span style="padding: 0 0 9px;">${this.product.name.raw} </span>
// <span style="padding: 0 0 9px;">to your shopping cart.</span>
//  <span><a href="/cart" class="checkout-class" style=" cursor: pointer;
//            background-color: #fb9013;
//     color: #fff;
//     padding: 5px;
//     text-decoration: none;
//     border-radius: 5px;
//     font-weight: 500;
//     font-size: 13px;">Proceed to Checkout</a> </span>`
//           });
//           setTimeout(() => {
//             console.log("AFTER SEO");
//             this.$store.dispatch('cart/toastView', {
//               show: false,
//               itemName: `${this.product.name.raw}`
//             })
//           }, 15000);
//             await this.$store.dispatch('cart/getCartItems');
//         },

//         async buyNowToCart(payload) {
//             this.$gtm.push({event:"addToCart", 'ecommerce': {
//                     'currencyCode': 'INR',
//                     'add': {                                // 'add' actionFieldObject measures.
//                         'products': [{                        //  adding a product to a shopping cart.
//                             'name': this.product.name.raw,
//                             'id': this.product.id.raw,
//                             'price': this.product.payprice.raw+'.00',
//                             'brand': '',
//                             'category': '',
//                             'variant': '',
//                             'quantity': 1
//                         }]
//                     }
//                 }})
//             let item = {
//                 id: this.product.id.raw,
//                 quantity: 1,
//                 payPrice: this.product.payprice.raw
//             };
//             await this.$store.dispatch('cart/addProductToCart', item);
//           this.$store.dispatch('cart/toastView', {
//             show: true,
//             htmlTag : `<span> Success : Your have added </span> <span style="padding: 0 0 9px;">${this.product.name.raw} </span>
// <span style="padding: 0 0 9px;"> to your shopping cart.</span>
//  <span><a href="/cart" class="checkout-class" style=" cursor: pointer;
//            background-color: #fb9013;
//     color: #fff;
//     padding: 5px;
//     text-decoration: none;
//     border-radius: 5px;
//     font-weight: 500;
//     font-size: 13px;">Proceed to Checkout</a> </span>`
//           });
//           setTimeout(() => {
//             console.log("AFTER SEO");
//             this.$store.dispatch('cart/toastView', {
//               show: false,
//               itemName: `${this.product.name.raw}`
//             })
//           }, 15000);
//             setTimeout(() => {
//                 this.$router.push('/cart');
//             }, 2000);
//         },
//         async handleAddItemToWishlist(product) {
//             console.log('PRDIDD', product);
//             let userData = this.$cookies.get('userDetails');
//             let prod_id = this.product.id.raw.split("|");
//             if (userData) {
//                 let item = {
//                     product_id: prod_id[1],
//                     user_id: userData.phone,
//                     id: userData.phone + '-' + this.product.id.raw
//                 };
//                 console.log('item wishlist', item);
//                 let wishStatus = await this.$store.dispatch(
//                     'wishlist/addItemToWishlist',
//                     item
//                 );
                
//                 if (wishStatus == 'ok') {
//                     // this.$notify({
//                     //     group: 'addCartSuccess',
//                     //     title: 'Add to wishlist!',
//                     //     text: `${product.name} has been added to your wishlist !`
//                     // });
//                     await this.$store.dispatch('wishlist/getWishlist', {
//                         user_id: userData.phone
//                     });
//                 } else {
//                     // this.$notify({
//                     //     group: 'addCartSuccess',
//                     //     title: 'Item already added to wishlist!',
//                     //     text: ``
//                     // });
//                 }
//             } else {
//                 this.$router.push('/account/login');
//             }
//         },

//         handleAddItemToCompare() {
//             let item = {
//                 id: this.product.id
//             };
//             this.$store.dispatch('compare/addItemToCompare', item);
//             // this.$notify({
//             //     group: 'addCartSuccess',
//             //     title: 'Add to compare!',
//             //     text: `${this.product.title} has been added to your compare !`
//             // });
//         },

//         async getCartProduct(products) {
//             let listOfIds = [];
//             products.forEach(item => {
//                 listOfIds.push(this.product.id.raw);
//             });
//             const response = await this.$store.dispatch(
//                 'product/getCartProducts',
//                 listOfIds
//             );
//             if (response) {
//                 this.$store.commit('cart/setLoading', false);
//             }
//         },
//         url(url) {
//             if(url==null){
//              return 'https://s3.ap-south-1.amazonaws.com/happimobiles/homepage/2048px-No_image_available.svg.png/';
//             }else{
//              return url.replace('https://happimobiles.s3.ap-south-1.amazonaws.com/', 'https://d1pf9mdy4w0oq4.cloudfront.net/fit-in/200x150/')
//             }
//             // https://happimobiles.s3.ap-south-1.amazonaws.com/happi/MGSCDOMF-1626534271867.jpg
//             // https://d1pf9mdy4w0oq4.cloudfront.net/fit-in/200x150/happi/ZFHKKZMT-1629098175058.jpg
//         }
    }
};
</script>
<style lang="scss">

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
        height: 125px!important;
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

    &:hover {
        .main-img{
            display: none;
            opacity: 0.0;
            transition: opacity .55s ease-in-out;
            -moz-transition: opacity .55s ease-in-out;
            -webkit-transition: opacity .55s ease-in-out;
        }
        .child-img{
            display:block;
            opacity: 1.0;
            transition: opacity .55s ease-in-out;
            -moz-transition: opacity .55s ease-in-out;
            -webkit-transition: opacity .55s ease-in-out;
        }
    }

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
