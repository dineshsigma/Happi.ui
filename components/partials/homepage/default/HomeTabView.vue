<template>
    <div class="white-bg sec-30px">
        <div class="ps-container">
        <h4 class="trending-title-mobile pt-3">BEST SELLING PRODUCTS</h4>
            <v-tabs
            v-model="tab"
            right
            active-class="active"
            >
            <v-tabs-slider color="#FB9013"></v-tabs-slider>

            <v-tab
                class="tab-item-text"
                v-for="item in items"
                :key="item"
            >
                {{ item }}
            </v-tab>
            </v-tabs>
        <hr>
        <div class="col-12">
            <div class="row">
                <div class="col-9">
                    <!-- {{newArrivals}}A -->
                    <v-tabs-items v-model="tab">
                        <!-- <v-tab-item
                            v-for="item in items"
                            :key="item"
                        > -->
                        <v-tab-item>
                        <div class="tab-cards">
                            <v-card flat
                            class="tab-card-layout row mt-4 ml-1"
                           >
                                <div
                                class='card-layout col-4'
                                v-for='(product, index) in newTab1.products.slice(0,9)' 
                                :key="index"
                                >
                                <product-best-selling :product='product' :key='product.id.raw' fromTab='mobile' />
                                </div>
                            </v-card>
                        </div>
                        </v-tab-item>
                        <v-tab-item>
                        <div class="tab-cards">
                            <v-card flat
                            class="tab-card-layout row mt-4 ml-1"
                            >
                                <div
                                class='card-layout col-4'
                                v-for='(product, index) in newTab2.products.slice(0,9)' 
                                :key="index"
                                >
                                <product-best-selling :product='product' :key='product.id.raw' fromTab='laptop'/>
                                </div>
                            </v-card>
                        </div>
                        </v-tab-item>
                        <v-tab-item>
                            <div class="tab-cards">
                            <v-card flat
                            class="row tab-card-layout mt-4 ml-1"
                            >
                                <div
                                class='card-layout col-4'
                                v-for='(product, index) in newTab3.products.slice(0,9)' 
                                :key="index"
                                >
                                <product-best-selling :product='product' :key='product.id.raw' fromTab='laptop'/>
                                </div>
                            </v-card>
                        </div>
                        </v-tab-item>
                        <v-tab-item>
                            <div class="tab-cards">
                            <v-card flat
                            class="row tab-card-layout mt-4 ml-1"
                            >
                                <div
                                class='card-layout col-4'
                                v-for='(product, index) in newTab4.products.slice(0,9)' 
                                :key="index"
                                >
                                <product-best-selling :product='product' :key='product.id.raw' fromTab='mobile'/>
                                </div>
                            </v-card>
                        </div>
                        </v-tab-item>
                    </v-tabs-items>
                </div>
                <div class="col-3">
                    <a href="/accessories/all" target="_blank">
                        <img class="tab-add" v-show="tab==3"
                        src='https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/9e168722-a171-403b-854f-b5da38be11c2.png'
                        alt="happimobiles"
                        />
                    </a>
                    <img class="tab-add" v-show="tab!=3"
                    src='https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/31c9b0f1-02de-433d-81c4-0771f242932a.png'
                    alt="happimobiles"
                    />
                </div>
            </div>
        </div>
    </div>
    </div>  
</template>
<script>
import { mapState } from 'vuex';
import ProductInnerNew from '~/components/elements/product/ProductInnerNew';
import ProductInnerDesktop from '~/components/elements/product/ProductInnerDesktop';
import ProductBestSelling from '~/components/elements/product/ProductBestSelling';
import { getColletionBySlug } from '~/utilities/product-helper';

export default {
    name:'HomeTabView',
    components: {
        ProductInnerNew,
        ProductBestSelling
    },
    props: {
        newArrivals: {
            type: Object,
            require: true,
            default: () => {
            }
        },
        newTab1: {
            type: Object,
            require: true,
            default: () => {
            }
        },
        newTab2: {
            type: Object,
            require: true,
            default: () => {
            }
        },
        newTab3: {
            type: Object,
            require: true,
            default: () => {
            }
        },
        newTab4: {
            type: Object,
            require: true,
            default: () => {
            }
        },
        homepageData: {
            type: Object,
            require: true,
            default: () => {
            }
        },
        collectionSlug: {
            type: String,
            default: ''
        },
        collectionSlugNew: {
            type: String,
            default: ''
        },
        imageAlign: {
            type: String,
            default: ''
        }
    },
    computed: {
        ...mapState({
            collections: state => state.collection.collections
        }),
        products() {
            
            return getColletionBySlug(this.collections, this.collectionSlug);
        }
    },
    data () {
      return {
        tab: null,
        items: [
          "SmartPhones", 'Laptops', "Smart Tv's", 'Gadgets'
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
    async mounted() {
        console.log(this.collectionSlug, this.collectionSlugNew, 'this.collectionSlug');
        console.log('mounted process.client', process.client);
        console.log('mounted process.client', this.newArrivals);
        console.log('mounted process.client', this.newTab);
        if (process.client) {
            //console.log("newArrivals.title" ,this.newArrivals.title);
            var counter = 0;
            var self = this;
            setTimeout(() => {
                // var impressions = [];
                // for (var i = 0; i < self.newArrivals.products.length; i++) {
                //     var e = self.newArrivals.products[i];
                //     impressions.push({
                //         'name': e.name,
                //         'id': e.objectID || e.id,
                //         'price': (e.price || e.payPrice) + '.00',
                //         'brand': e.category,
                //         'category': e.category,
                //         'variant': '',
                //         'list': 'Home Page Results',
                //         'position': i + 1
                //     });
                // }
                self.$gtm.push({
                    'ecommerce': {
                        'currencyCode': 'INR',
                        'impressions': impressions
                    }
                });
                // console.log("ecommerce", {
                //     'ecommerce': {
                //         'currencyCode': 'INR',
                //         'impressions': impressions
                //     }
                // })
            }, 10000);
            // if (!this.isMobile()) {
            //     setInterval(() => {
            //         //console.log("bannersMobile", this.newArrivals.products.length );
            //         if (this.newArrivals.products == null) {
            //             return;
            //         }
            //         counter++;
            //
            //         if (counter === this.newArrivals.products.length - 1) {
            //             counter = 0;
            //         }
            //
            //         if (this.dealOfDayCarousel != null) {
            //             this.dealOfDayCarousel.slideTo(counter, 1000, false);
            //         }
            //     }, 15000);
            // } else {
            //     setInterval(() => {
            //         //console.log("bannersMobile", this.newArrivals.products.length );
            //         if (this.newArrivals.products == null) {
            //             return;
            //         }
            //         counter++;
            //
            //         if (counter === this.newArrivals.products.length - 1) {
            //             counter = 0;
            //         }
            //
            //         if (this.dealOfDayCarousel != null) {
            //             this.dealOfDayCarousel.slideTo(counter, 1000, false);
            //         }
            //     }, 20000);
            // }
        }
    }
}
</script>
<style lang="scss" scoped>
.tab-card-layout{
    display: flex !important;
}
.active{
    color:#FB9013 !important;
}
.tab-item-text{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    color: rgba(0, 0, 0, 0.5);
}

    .tab-add{
    display: flex;

    height: 100%;
    margin: auto;
}
</style>
