<template lang='html'>

    <div class='martfury ps-container p-0'>
        <bread-crumb :breadcrumb='breadCrumb' layout='fullwidth' />
        <div class='ps-page--product' style='margin-bottom:30px'>
            <div class='container-fluid'>
                <div class='ps-page__container'>
                    <div class='ps-page__left'>
                        <product-detail-fullwidth v-if='product !== null' :product="product"  />
                    </div>
                    <div class='ps-page__right'>

                        <product-widgets collection-slug='widget_same_brand' :product="product" />
                        <div class='share-soical' v-if='product !== null' >
                            <a href='#'>Share</a><br><br>
                            <ul style='margin-left:4%;' class='ps-list--social'>
                                <li data-v-7f405b66=''>
                                    <ShareNetwork
                                        network='facebook'
                                        :url='`https://www.happimobiles.com/${product.linker}`'
                                        :title='product.name'
                                    >
                                        <i class='fa fa-facebook'></i>
                                    </ShareNetwork>
                                </li>
                                <li>
                                    <ShareNetwork network='twitter'
                                        :url='`https://www.happimobiles.com/${product.linker}`'
                                        :title='product.name'
                                    >
                                        <i class='fa fa-twitter'></i>
                                    </ShareNetwork>

                                </li>
                                <li data-v-7f405b66=''>
                                    <ShareNetwork
                                        network='LinkedIn'
                                        :url='`https://www.happimobiles.com/${product.linker}`'
                                        :title='product.name'
                                    >
                                        <i data-v-7f405b66='' class='fa fa-linkedin'></i>
                                    </ShareNetwork>
                                </li>

                                <li>
                                    <ShareNetwork
                                        network='WhatsApp'
                                        :url='`https://www.happimobiles.com/${product.linker}`'
                                        :title='product.name'
                                    >
                                        <i data-v-7f405b66='' class='fa fa-whatsapp'></i>
                                    </ShareNetwork>

                                </li>
                                <li>
                                    <ShareNetwork
                                        network='Email'
                                        :url='`https://www.happimobiles.com/${product.linker}`'
                                        :title='product.name'
                                    >
                                        <i data-v-7f405b66='' class='fa fa-mail'></i>
                                    </ShareNetwork>

                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <default-description :product="product" />

                <customer-bought
                    v-if='collections !== null'
                    layout='fullwidth'
                    collection-slug='customer_bought'
                />
                <related-product
                    v-if='collections !== null'
                    layout='fullwidth'
                    collection-slug='shop-recommend-items'
                />
            </div>
        </div>


        <v-dialog
            v-model="cartLoading"
            hide-overlay
            persistent
            width="300"
        >
            <v-card
                color="primary"
                dark
            >
                <v-card-text>
                    Please stand by
                    <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                    ></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>

        <div class='sticky-layout mobile' v-if='product.stock !== 0' style='position: fixed;bottom: 0;left: 0;right: 0;z-index: 100;'>
            <v-btn class="ma-2"
                style='color:#fb9013; background-color:#fff;margin:0px !important ;border: 1px solid #fb9013;font-weight: bold;text-decoration: none;display: inline-block;font-size:14px;width:50%'
                @click.prevent='addItemToCart'
            >
                Add to cart
            </v-btn>

            <v-btn class="ma-2"
                style='background-color:#fb9013;margin:0px !important ;color:#fff;text-decoration: none;display: inline-block;font-size:14px;width:50%'
                @click.prevent='addItemToCart("buynow")'
            >
                Buy  Now
            </v-btn>
        </div>
        <newsletters layout='fullwidth' />

    </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductDetailFullwidth from '~/components/elements/detail/ProductDetailFullwidth';
import BreadCrumb from '~/components/elements/BreadCrumb';
import CustomerBought from '~/components/partials/product/CustomerBought';
import RelatedProduct from '~/components/partials/product/RelatedProduct';
import ProductWidgets from '~/components/partials/product/ProductWidgets';
import LayoutProduct from '~/layouts/layout-product';
import Newsletters from '~/components/partials/commons/Newsletters';
import DefaultDescription from '~/components/elements/detail/modules/DefaultDescription';

export default {
    layout: 'layout-product-ssr',
    transition: 'zoom',
    components: {
        Newsletters,
        LayoutProduct,
        ProductWidgets,
        RelatedProduct,
        CustomerBought,
        BreadCrumb,
        ProductDetailFullwidth,
        DefaultDescription,
    },
    //ssr: true,
    computed: {
        ...mapState({
            collections: (state) => state.collection.collections,
            //product: (state) => state.product.product,
            cartItems: (state) => state.cart.cartItems,
            total: (state) => state.cart.total,
            amount: (state) => state.cart.amount,
            cartProducts: (state) => state.product.cartProducts,
            isLoggedIn: (state) => state.auth.isLoggedIn,
            wishlistItems: (state) => state.wishlist.wishlistItems,
            relatedProducts: (state) => state.product.relatedProducts,
        }),
    },
    data() {
        return {
            loadingProduct: true,
            productId: this.$route.params.slug,
            breadCrumb: null,
            pageLoading: true,
            cartLoading: true,
            text: '',
        };
    },
    methods: {
        async addItemToCart(type = 'addtocart') {
            if (process.client) {
                this.cartLoading = true;
                console.log('addItemToCart', this.cartLoading);
                let item = {
                    id: this.product.id,
                    quantity: 1,
                    payPrice: this.product.payPrice,
                    category: this.product.category[1],
                };
                await this.$store.dispatch('cart/addProductToCart', item);
                await this.$store.dispatch('cart/getCartItems');

                this.$store.dispatch('cart/toastView', {
                    show: true,
                    htmlTag: `<span> Success : Your have added </span> <span style="padding: 0 0 9px;">${this.product.name} </span>
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
                this.cartLoading = false;
                setTimeout(() => {
                    //console.log("AFTER SEO");
                    this.$store.dispatch('cart/toastView', {
                        show: false,
                        itemName: `${this.product.name}`,
                    });
                    if (type === 'buynow') {
                        this.$router.push('/cart');
                    }
                }, 2500);
            }
        },
        goToCart() {
            this.$router.push('/cart');
        },
    },
    async asyncData({ query, store, params, $http, $seo, redirect }) {
        if (params.slug === 'undefined' || params.slug === undefined) {
            return;
        }
        let response;
        try {
            response = await $http.$get(`api/product/${params.slug}`);
        } catch (e) {
            console.log(
                'URL',
                `https://dev-services.happimobiles.com/api/product/${params.slug}`
            );
            console.log(e);
        }
        var picture_url = '';
        var images = [];
        if (
            response.product != null &&
            response.product.pictures_new != null &&
            response.product.pictures_new.length !== 0
        ) {
            picture_url = response.product.pictures_new[0];
            if (
                response.product.image_url != undefined &&
                response.product.image_url != null &&
                response.product.image_url.trim() !== ''
            ) {
                images.push(response.product.image_url);
            }
            response.product.pictures_new.forEach((e) => {
                images.push(e);
            });
        } else {

            picture_url = `https://happimobiles.s3.ap-south-1.amazonaws.com/happi/${response.product.pictures[0]}.jpg`;
            if (
                response.product.image_url != undefined &&
                response.product.image_url != null &&
                response.product.image_url.trim() !== ''

            ) {
                images.push(response.product.image_url);
            }
            response.product.pictures.forEach((e) => {
                images.push(
                    `https://happimobiles.s3.ap-south-1.amazonaws.com/happi/${e}.jpg`
                );
            });
        }
        console.log('response.product.image_url', response.product.image_url)

        response.product.pictures_new = images;
        $seo({
            title: response.product.name.substring(0, 50),
            templateTitle: '%title% - Happi Mobiles',
            description: `Price:  ₹${response.product.payPrice}.00`,
            keywords: response.product.name,
            openGraph: {
                site: 'Happi Mobiles',
                type: 'website',
                title: response.product.name,
                description: response.product.name,
                image: picture_url,
                price: {
                    currency: 'INR',
                    amount: response.product.payPrice + '.00',
                },
            },
            twitter: {
                site: 'Happi Mobiles',
                type: 'website',
                title: response.product.name,
                description: response.product.name,
            },
            facebook: {
                appId: '826575227724107',
                pageId: '',
            },
            jsonld: {
                '@context': 'https://schema.org',
                '@type': 'Product',
                productID: params.slug,
                name: response.product.name,
                description: response.product.name,
                url: 'https://www.happimobiles.com/' + params.slug,
                image: picture_url,
                offers: [
                    {
                        '@type': 'Offer',
                        price: '' + response.product.payPrice,
                        priceCurrency: 'INR',
                        itemCondition: 'https://schema.org/NewCondition',
                        availability: 'https://schema.org/InStock',
                    },
                ],
            },
        });
        return {
            product: response.product,
            modelProducts: response.modelProducts,
            breadCrumb: response.product.breadCrumb,
        };
    },

    mounted() {
        this.$store.commit('app/setAppDrawer', false);
    },
    async created() {
        if (process.client) {
            this.$nextTick(function () {
                this.loadingProduct = false;
                this.cartLoading = false;
            });

            await this.$store.dispatch(
                'product/getProductsById',
                this.productId
            );

            //this.$store.commit('product/setModelProducts', this.modelProducts)


            this.$nextTick(function () {
                this.loading = false;
            });
            this.$gtm.push({
                event: 'ProductView',
                ecommerce: {
                    detail: {
                        actionField: { list: 'Products' }, // 'detail' actions have an optional list property.
                        products: [
                            {
                                name: this.product.name, // Name or ID is required.
                                id: this.product.id,
                                price: this.product.payPrice + '.00',
                                brand: '',
                                category: '',
                                variant: '',
                            },
                        ],
                    },
                },
            });

            this.$nextTick(function() {
                this.loading = false
            })
            this.$gtm.push({
                'ecommerce': {
                    'detail': {
                        'actionField': {'list': 'Products Detail Page'},    // 'detail' actions have an optional list property.
                        'products': [{
                            'name': this.product.name,         // Name or ID is required.
                            'id': this.product.id,
                            'price': this.product.payPrice+'.00',
                            'brand': '',
                            'category': '',
                            'variant': ''
                        }]
                    }
                }
            })


            await this.$store.dispatch('cart/getCartItems');

            var cartProduct = this.cartItems.find(
                (e) => this.product.id == e.productId
            );

            let userData = this.$cookies.get('userDetails');
            //console.log("SLUGG Items",this.product.id, this.cartItems)
            var cartProduct = this.cartItems.find(
                (e) => this.product.id === e.productId
            );
            if (cartProduct !== undefined) {
                this.$store.dispatch('cart/toastView', {
                    show: true,
                    htmlTag: `<span>${this.product.name} </span>  <span style="padding: 0 0 9px;"> Already in cart! </span> <span>  <a href="/cart" style=" cursor: pointer;
           background-color: #fb9013;
            color: #fff;
            padding: 5px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: 500;
            font-size: 13px;" class="checkout-class">Proceed to Checkout</a></span>`,
                });
                setTimeout(() => {
                    this.$store.dispatch('cart/toastView', {
                        show: false,
                        itemName: `${this.product.name}`,
                    });
                }, 5000);
                // this.text = `Already in your cart!`;
            }
            await this.$store.dispatch('auth/getUserInfo');
        }
    },
};
</script>

<style lang='scss' scoped>
.mobile {
    display: none;
}
@media (max-width: 767px) {
    .mobile {
        display: flex;
    }
    .ps-page--product {
        padding: 0;

        .ps-page__right {
            display: block !important;
            max-width: 100% !important;
            width: 100% !important;
        }
    }
}

.share-soical {
    display: flex;
    margin-left: 8%;
}

.share-soical a {
    font-size: 18px;
}
</style>
