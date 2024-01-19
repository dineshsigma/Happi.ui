<template>
    <div
        class=' ps-product-list ps-deal-of-day ps-section--carousel-outside home-laptops-cont pb-0' 
    >
        <div class='ps-container'>
            <div class='col-12 ps-section-content mobile-section-heading'>
                <h3  class='ps-block__left header-title-mobile desktop-hide'>
                    {{ newArrivals.title }}
                    <a @click="routeTo(newArrivals.products[0].category.raw[0], '/all')" class="mobile-seeall desktop-hide">SEE ALL</a>
                </h3>
                <h3  class='ps-block__left header-title mob-hide'>
                    {{ newArrivals.title }}</h3>
                    <hr>
                <!-- <div class="see-div"><button class="mobile-seeall desktop-hide">SEE ALL</button> -->
            </div>
            <div class="row">
                <div class="col-3">
                    <div class="ad-image-box">
                        <a href="/iphone-14" target="_blank">
                        <img
                        src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/aee9eab4-2429-4390-bd63-93d1e7a3a325.png"
                        alt="happimobiles"
                        />
                        </a>
                        <!-- <img 
                        src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/9b448080-e0df-42c3-bade-d743b3f1f005.png"
                        alt="happimobiles"
                        /> -->
                    </div>
                </div>
                <div class="col-9">
                    <div class="ps-block__right price-labels mob-hide">
                                <span class="button-text">PRICE UNDER</span>
                                <button class="button-small">
                                <a @click="routeTo(newArrivals.products[0].category.raw[0], '/all/price-0-10000')" title="Below - Rs.10,000" class="button-text">
                                    10K
                                </a>
                                </button>
                                <button class="button-small">
                                <a @click="routeTo(newArrivals.products[0].category.raw[0], '/all/price-10001-14999')" title="Rs.10,001 - Rs.14,999" class="button-text">
                                    15K
                                </a>
                                </button>
                                <button class="button-small">
                                <a @click="routeTo(newArrivals.products[0].category.raw[0], '/all/price-15000-19999')" title="Rs.15,000 - Rs.19,999" class="button-text">
                                    20K
                                </a>
                                </button>
                                <button class="button-small">
                                <a @click="routeTo(newArrivals.products[0].category.raw[0], '/all/price-30000-200000')" title="Rs.30,000 and above" class="button-text">
                                    30+K
                                </a>
                            </button>
                    </div>
                    
                    <div
                        class='ps-carousel'
                        v-swiper:dealOfDayCarousel='carouselSetting'
                        >
                            <div class='swiper-wrapper col-9'>
                                <div
                                    class='swiper-slide card-layout card-phones'
                                    v-for='(product, index) in newArrivals.products' 
                                    :key="index"
                                    v-if='product.linker.raw !== null'
                                    >
                                    <product-inner-new
                                    :product='product'
                                    :key='componentKey'
                                    />
                                </div>
                            </div>
                        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
                        <carousel-arrows type="simple" />
                    </div>
                </div>
            </div>
        </div>
                
    </div>
</template>
<script>
import { mapState } from 'vuex';
import CarouselArrows from '~/components/elements/commons/CarouselArrows';
import ProductInner from '~/components/elements/product/ProductInner';
import ProductInnerNew from '~/components/elements/product/ProductInnerNew';
import { getColletionBySlug } from '~/utilities/product-helper';


export default {
    name: 'HomeSliderWithAd',
    components: {
        ProductInner,
        ProductInnerNew,
        //ProductDefault,
        CarouselArrows,
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
            collections: state => state.collection.collections,
            wishlistedIds: state => state.wishlist.wishlistProductIds
        }),
        products() {
            return getColletionBySlug(this.collections, this.collectionSlug);
        }
    },
    data() {
        return {
            componentKey: 0,
            carouselSetting: {
                loop: false,
                slidesPerView: 5.5,
                spaceBetween: 0,
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
                        slidesPerView: 4,
                        spaceBetween: 0
                    },
                    1366: {
                        slidesPerView: 4,
                        spaceBetween: 0
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 0
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 0
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 0
                    }
                }
            }
        };
    },
    methods: {
        routeTo(category, tag) {
            let priceUrlsMobiles = [
                    {
                        url: '/mobiles/all/?q=&page=1&price=25to10000&sort=Price%20-%20Low%20to%20High&stock=In%20Stock',
                        text: '10'
                    },
                    {
                        url: '/mobiles/all/?q=&page=1&price=10000to15000&sort=Price%20-%20Low%20to%20High&stock=In%20Stock',
                        text: '15'
                    },
                    {
                        url: '/mobiles/all/?q=&page=1&price=10000to20000&sort=Price%20-%20Low%20to%20High&stock=In%20Stock',
                        text: '20'
                    },
                    {
                        url: '/mobiles/all/?q=&page=3&price=30000to200000&sort=Price%20-%20Low%20to%20High&stock=In%20Stock',
                        text: '30+'
                    }
                ]
            if (category == 'mobile'){
                if (tag == '/all/price-0-10000'){
                    this.$router.push(priceUrlsMobiles[0].url)
                }
                if (tag == '/all/price-10001-14999'){
                    this.$router.push(priceUrlsMobiles[1].url)
                }
                if (tag == '/all/price-15000-19999'){
                    this.$router.push(priceUrlsMobiles[2].url)
                }
                if (tag == '/all/price-30000-200000'){
                    this.$router.push(priceUrlsMobiles[3].url)
                }
            }
            
            // if (category == 'mobile'){
            //     let route = '/mobiles' + tag;
            //     this.$router.push(route);
            // } else {
            //     let route = category + tag;
            //     this.$router.push(route);
            // }
        },
        methods: {
            forceRerender() {
                this.componentKey += 1;
            }
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
}
</script>
<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
.ad-image-box{
    display: flex;
    img{
        height: 100%;
        width: auto;
        padding:5%;
    }
}

.container-layout{
    padding: 0 !important;
    background: #ffffff !important;
    max-width: 100% !important;
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
        text-align: end;
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
    .mobile-section-heading{
        padding: -10% !important;
    }
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
        padding-bottom: 0rem !important;
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
 .card-phones{
    margin-right:5px !important;
 }
.button-small{
    justify-content: center;
    align-items: center;
    padding: 3px;
    margin:5px;
    gap: 10px;

    width: auto;
    height: 26px;

    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
}
.button-text{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.5);
}
}
</style>

