<template lang='html'>
    <div
        class=' ps-product-list ps-deal-of-day ps-section--carousel-outside pb-12'
    >
        <div class='ps-container'>
            <!-- <div class="budget-link" v-if="newArrivals.title == 'LATEST LAUNCHES' " >
                <div class="price-ranges">
                        <a href="/mobiles/all/price-0-10000" title="Below - Rs.10,000">
                    Below - Rs.10,000
                </a>
                <a href="/mobiles/all/price-10001-14999" title="Rs.10,001 - Rs.14,999">
                    Rs.10,001 - Rs.14,999
                </a>
                <a  href="/mobiles/all/price-15000-19999" title="Rs.15,000 - Rs.19,999">
                    Rs.15,000 - Rs.19,999
                </a>
                <a href="/mobiles/all/price-20000-24999" title="Rs.20,000 - Rs.24,999">
                    Rs.20,000 - Rs.24,999
                </a>
                <a href="/mobiles/all/price-25000-29999" title="Rs.25,000 - Rs.29,000">
                    Rs.25,000 - Rs.29,000
                </a>
                <a href="/mobiles/all/price-30000-200000" title="Rs.30,000 and above">
                    Rs.30,000 and Above
                </a>
                </div>

            </div> -->

            <div class='ps-section__header '>
                <div class='ps-block--countdown-deal mob-hide'>
                    
                    <div class='ps-block__left'>
                        <h3>{{ newArrivals.title }}</h3>
                        <h3  class='ps-block__left header-title-mobile '>
                    
                    <a href="#" class="mobile-seeall">SEE ALL</a>
                </h3>
                    </div>
                
                    <div class="ps-block__right mob-hide  " v-if="newArrivals.title == 'LATEST LAUNCHES' ">
                        <a href="/mobiles/all/price-0-10000" title="Below - Rs.10,000">
                            Below - Rs.10,000
                        </a>
                        <a href="/mobiles/all/price-10001-14999" title="Rs.10,001 - Rs.14,999">
                            Rs.10,001 - Rs.14,999
                        </a>
                        <a  href="/mobiles/all/price-15000-19999" title="Rs.15,000 - Rs.19,999">
                            Rs.15,000 - Rs.19,999
                        </a>
                        <a href="/mobiles/all/price-20000-24999" title="Rs.20,000 - Rs.24,999">
                            Rs.20,000 - Rs.24,999
                        </a>
                        <a href="/mobiles/all/price-25000-29999" title="Rs.25,000 - Rs.29,000">
                           Rs.25,000 - Rs.29,000
                        </a>
                        <a href="/mobiles/all/price-30000-200000" title="Rs.30,000 and above">
                            Rs.30,000 and Above
                        </a>
                        <!-- <figure>
                            <figcaption>End in:</figcaption>
                            <count-down-simple
                                time="12 30 2020, 12:00 am"
                                format="MM DD YYYY, h:mm a"
                            />
                        </figure> -->
                    </div>
                </div>
                <!-- <nuxt-link to="/shop">
                </nuxt-link> -->
            </div>
            <div class='ps-section__content pt-4'>
                <div class='row'>
                    <div v-if='imageAlign == "left"' class='col-12 col-md-2 mob-hide'>

                        <!-- <a href='' class=''><img
                            :src='newArrivals.homepageData.latest_launches_image'
                              alt=''></a> -->

                        <a v-if='newArrivals.title == "LATEST LAUNCHES"' :href='homepageData.latest_launches_link'
                           :title='homepageData.latest_launches_text'>
                            <img :src='homepageData.latest_launches_image'
                                 :alt='homepageData.latest_launches_text' v-lazy-load>
                        </a>

                        <a v-if='newArrivals.title == "HOME ENTERTAINMENT"' :href='homepageData.home_entertainment_link'
                           :title='homepageData.home_entertainment_text'>
                            <img :src='homepageData.home_entertainment_image'
                                 :alt='homepageData.home_entertainment_text' v-lazy-load>
                        </a>

                        <a v-if='newArrivals.title == "TRENDING GADGETS"' :href='homepageData.trending_gadgets_link'
                           :title='homepageData.trending_gadgets_text'>
                            <img :src='homepageData.trending_gadgets_image'
                                 :alt='homepageData.trending_gadgets_text' v-lazy-load>
                        </a>

                        <a v-if='newArrivals.title == "BUDGET Rs.15,000 to Rs.50,000"' :href='homepageData.emerging_models_link' :title='homepageData.emerging_models_text'>
                            <img  :src='homepageData.emerging_models_image'
                                 :alt='homepageData.emerging_models_text' v-lazy-load>
                        </a>


                        <a v-if='newArrivals.title == "BUDGET ABOVE Rs.50,000"' :href='homepageData.dual_camera_link'
                           :title='homepageData.dual_camera_text'>
                            <img :src='homepageData.dual_camera_image'
                                 :alt='homepageData.dual_camera_text' v-lazy-load>
                        </a>
                         <a v-if='newArrivals.title == "FAST MOVING SMARTPHONES"' :href='homepageData.trending_gadgets_link'
                           :title='homepageData.dual_camera_image'>
                            <img :src='homepageData.dual_camera_image'
                                 :alt='homepageData.dual_camera_text' v-lazy-load>
                        </a>
                        <a v-if='newArrivals.title == "LAPTOPS"' :href='homepageData.laptops_link'
                           :title='homepageData.laptops_text'>
                            <img :src='homepageData.laptops_image'
                                 :alt='homepageData.laptops_text' v-lazy-load>
                        </a>
                         <a v-if='newArrivals.title == "PREMIUM SMARTPHONES"' :href='homepageData.trending_gadgets_link'
                           :title='homepageData.emerging_models_text'>
                            <img :src='homepageData.emerging_models_image'
                                 :alt='homepageData.emerging_models_text' v-lazy-load>
                        </a>

                    </div>
                    <div class='col-12 ps-section-content'>
                <h3  class='ps-block__left header-title-mobile desktop-hide'>
                    {{ newArrivals.title }} 
                    <a href="#" class="mobile-seeall">SEE ALL</a>
                </h3>
                <h3  class='ps-block__left center header-title mob-hide'>
                    {{ newArrivals.title }}</h3>
                    
                <!-- <div class="see-div"><button class="mobile-seeall desktop-hide">SEE ALL</button> -->
                </div>
                    <div class="ps-block__right price-labels mob-hide">
                        <span class="button-text">PRICE UNDER</span>
                        <button class="button-small">
                        <a href="/mobiles/all/price-0-10000" title="Below - Rs.10,000" class="button-text">
                            10K
                        </a>
                        </button>
                        <button class="button-small">
                        <a href="/mobiles/all/price-10001-14999" title="Rs.10,001 - Rs.14,999" class="button-text">
                            15K
                        </a>
                        </button>
                        <button class="button-small">
                        <a  href="/mobiles/all/price-15000-19999" title="Rs.15,000 - Rs.19,999" class="button-text">
                            20K
                        </a>
                        </button>
                        <button class="button-small">
                        <a href="/mobiles/all/price-30000-200000" title="Rs.30,000 and above" class="button-text">
                            30+K
                        </a>
                    </button>
            </div>
                    <div class='col-12 col-md-12'>
                        <div
                            class='ps-carousel'
                            v-swiper:dealOfDayCarousel='carouselSetting'
                        >
                            <div class='swiper-wrapper'>
                                <div
                                    class='swiper-slide card-layout card-phones'
                                    v-for='product in newArrivals.products' v-if='product.linker.raw !== null'
                                >
<!--                                    <product-inner-new-->
<!--                                        v-if="newArrivals.type == 'ALGOLIA'"-->
<!--                                        :product='product'  v-else />-->
                                    <!-- <product-inner
                                        :product='product'
                                        :key='product.id.raw'
                                    /> -->
                                    <product-inner-new
                                        :product='product'
                                        :key='product.id.raw'
                                    />
                                </div>
                            </div>
<!--                            <div class='swiper-pagination'></div>-->
                            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
                               <carousel-arrows type="simple" />
                        </div>
                    </div>
                    <div v-if='imageAlign == "right"' class='col-12 col-md-2 mob-hide'>
                        <a v-if='newArrivals.title == "LATEST LAUNCHES"' :href='homepageData.latest_launches_link'
                           :title='homepageData.latest_launches_text'>
                            <img :src='homepageData.latest_launches_image'
                                 :alt='homepageData.latest_launches_text' v-lazy-load>
                        </a>

                        <a v-if='newArrivals.title == "HOME ENTERTAINMENT"' :href='homepageData.home_entertainment_link'
                           :title='homepageData.home_entertainment_text'>
                            <img :src='homepageData.home_entertainment_image'
                                 :alt='homepageData.home_entertainment_text' v-lazy-load>
                        </a>

                        <a v-if='newArrivals.title == "TRENDING GADGETS"' :href='homepageData.trending_gadgets_link'
                           :title='homepageData.trending_gadgets_text'>
                            <img :src='homepageData.trending_gadgets_image'
                                 :alt='homepageData.trending_gadgets_text' v-lazy-load>
                        </a>

                        <a v-if='newArrivals.title == "BUDGET SMARTPHONES"' :href='homepageData.emerging_models_link' :title='homepageData.emerging_models_text'>
                            <img  :src='homepageData.emerging_models_image'
                                 :alt='homepageData.emerging_models_text' v-lazy-load>
                        </a>


                        <a v-if='newArrivals.title == "DUAL CAMERA PHONES"' :href='homepageData.dual_camera_link'
                           :title='homepageData.dual_camera_text'>
                            <img :src='homepageData.dual_camera_image'
                                 :alt='homepageData.dual_camera_text' v-lazy-load>
                        </a>

                        <a v-if='newArrivals.title == "LAPTOPS"' :href='homepageData.laptops_link'
                           :title='homepageData.laptops_text'>
                            <img :src='homepageData.laptops_image'
                                 :alt='homepageData.laptops_text' v-lazy-load>
                        </a>
                        <a v-if='newArrivals.title == "FAST MOVING SMARTPHONES"' :href='homepageData.trending_gadgets_link'
                           :title='homepageData.dual_camera_text'>
                            <img :src='homepageData.dual_camera_image'
                                 :alt='homepageData.dual_camera_text' v-lazy-load>
                        </a>
                       <a v-if='newArrivals.title == "PREMIUM SMARTPHONES"' :href='homepageData.trending_gadgets_link'
                           :title='homepageData.emerging_models_text'>
                            <img :src='homepageData.emerging_models_image'
                                 :alt='homepageData.emerging_models_text' v-lazy-load>
                        </a>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
//import CountDownSimple from '~/components/elements/commons/CountDownSimple';
import CarouselArrows from '~/components/elements/commons/CarouselArrows';
//import { carouselFullwidth } from '~/utilities/carousel-helpers.js';
//import ProductDefault from '~/components/elements/product/ProductDefault';
import { getColletionBySlug } from '~/utilities/product-helper';
import ProductInner from '~/components/elements/product/ProductInner';
import ProductInnerNew from '~/components/elements/product/ProductInnerNew';
//import ProductInnerNew from '~/components/elements/product/ProductInnerNew';
// import { newArrivals } from '~/static/data/homepage';
export default {
    name: 'HomeDefaultDealOfDay',
    components: {
        ProductInner,
        //ProductDefault,
        CarouselArrows,
        ProductInnerNew
        //CountDownSimple,
        //ProductInnerNew
    },
    props: {
        newArrivals: {
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
    data() {
        return {
            carouselSetting: {
                loop: true,
                slidesPerView: 6,
                spaceBetween: 15,
                scrollbar: {
                    draggable: false
                },
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction'
                },
                autoplay: {
                    delay: 15000,
                    disableOnInteraction: false
                },
                // pagination: {
                //     el: '.swiper-pagination',
                //     clickable: true
                // },
                navigation: {
                    nextEl: '.ps-deal-of-day .swiper-next',
                    prevEl: '.ps-deal-of-day .swiper-prev'
                },
                breakpoints: {
                    1680: {
                        slidesPerView: 5
                    },
                    1366: {
                        slidesPerView: 4
                    },
                    1024: {
                        slidesPerView: 3
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    }
                }
            }
        };
    },
    methods: {
        isMobile() {
            console.log('isMobile process.client', process.client);
            if (process.client && screen !== undefined) {
                if (screen.width <= 760) {
                    return true;
                } else {
                    return false;
                }
            }
            //return true;
        }
    },
    async mounted() {
        console.log('mounted process.client', process.client);
        if (process.client) {
            //console.log("newArrivals.title" ,this.newArrivals.title);
            var counter = 0;
            var self = this;
            setTimeout(() => {
                var impressions = [];
                for (var i = 0; i < self.newArrivals.products.length; i++) {
                    var e = self.newArrivals.products[i];
                    impressions.push({
                        'name': e.name,
                        'id': e.objectID || e.id,
                        'price': (e.price || e.payPrice) + '.00',
                        'brand': e.category,
                        'category': e.category,
                        'variant': '',
                        'list': 'Home Page Results',
                        'position': i + 1
                    });
                }
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
    },
    async created() {
    }
};
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
.mobile-seeall{
    // display: flex !important;
    // justify-content: right !important;
    float:right;
    align-items: flex-end !important;
    font-size:15px;
    color: grey !important;
    
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
}

.ps-container{
    background: #ffffff !important;
    
}
.container-layout{
    padding: 0 !important;
    background: #ffffff !important;
    max-width: 100%;
}

.ps-section-content{
    background: #ffffff;
    width: 100% !important;
    // box-shadow: 0px 0px 5px #e0e0e0;
    border-radius: 8px;
    /* border: 1px solid #e6e6e6; */
}
.price-labels{
    text-align-last: end;
}
.header-title-mobile{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 33px;
    /* identical to box height */

    text-align: left;
    text-transform: uppercase;
}
.see-div{
    color:red;
    
}
.mobile-seeall{
    // display: flex !important;
    // justify-content: right !important;
    float:right;
    align-items: flex-end;
    font-size:15px;
    color: grey !important;
    
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
}

.header-title{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    /* identical to box height */

    text-align: center;
    text-transform: uppercase;
}
#homepage-1 {
    .ps-deal-of-day {
        .ps-carousel {
            .swiper-pagination {
                position: relative;
                top: 0;
                left: 0;
                transform: translate(0, 0);
                margin-top: 10px;
                display: block !important;
                .swiper-pagination-bullet {
                    width: 10px;
                    height: 10px;
                    cursor: pointer;
                }
            }
        }
    }
}
.ps-block--countdown-deal{
    width: 100%;
    .ps-block__right{
        margin-left: auto;
        margin-right: 0;
        a{
            margin: 0 10px;
            padding: 5px;
            border: 1px solid #d9d9d9;
            border-radius: 8px;
            font-weight: bold;
            &:hover{
                background: #fb9013;
            }
        }
    }
}
.ps-section__header {
    margin-bottom: 1rem !important;
}
.budget-link{
    display: none;
}
@media (max-width: 767px) {
    .ps-block__left {
        margin-bottom: 0 !important
    }
    .ps-product-list .ps-section__header h3 {
        padding-bottom: 0 !important;
    }
    .ps-collection {
        margin-bottom: 10px !important;
    }
    .ps-download-app {
        margin-top: 0 !important;
    }
    .budget-link{
        display: block;
        a {
            margin: 30px 3px;
            padding: 3px;
            border: 1px solid #d9d9d9;
            border-radius: 8px;
            font-weight: bold;
            &:hover{
                background: #fb9013;
            }
        }
    }
    @media only screen and (max-width: 767px) {
    .mob-hide {
        display:none;
    }
}
    #homepage-1 .ps-product-list:first-child {
        margin-top: 1rem !important;
    }
    .ps-product-list,
    .v-application .pb-12 {
        padding-bottom: 1rem !important;
    }
    .ps-section__header {
        margin-bottom: 0 !important;
    }
    .ps-carousel.swiper-container {
        margin-bottom: 0;
    }
    // .hide{
    //       display:none;
    // }
 .price-ranges {
     display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    }
    .budget-link a {
    margin : 6px;
    }
    .price-range-each {
    width : 98%;
    margin : 6px 10px;
    }
}
.v-application .pt-4{
    background: #ffffff;
    box-shadow: 0px 0px 5px #e0e0e0;
  /*  border: 1px solid #e6e6e6;
   */ 
    }
    .ps-product.ps-product--inner {
 background: #ffffff;
    box-shadow: 0px 0px 5px #a59f9f;    }
    .swiper-slide {
            // margin-top: 1%;
    }
   .swiper-wrapper {
        transform: translate3d(-957.6px, 0px, 0px);
   /* padding-left: 1%;
        padding-right: 1%;*/
    transition-duration: 0ms;
    }

    @media (min-width: 1025px){
.card-phones{
    width:215px !important;
 }
}
.card-phones{
    margin-right:5px !important;
 }
</style>

