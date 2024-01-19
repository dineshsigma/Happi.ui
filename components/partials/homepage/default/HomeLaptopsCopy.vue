<template>
    <div
        class=' ps-product-list ps-deal-of-day ps-section--carousel-outside pb-12'
    >
        <div class='ps-container container-layout'>
            <div class='col-12 ps-section-content mobile-section-heading'>
                <h3  class='ps-block__left header-title-mobile desktop-hide'>
                    {{ newArrivals.title }}
                    <a href="#" class="mobile-seeall desktop-hide">SEE ALL</a>
                </h3>
                <h3  class='ps-block__left center header-title mob-hide'>
                    {{ newArrivals.title }}</h3>
                    <hr></hr>
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

           
            <div class="carousel-wrapper">
    <VueSlickCarousel v-bind="laptopsSlide" :arrows="true">
 
            <div class="card" style="background:#F9f9f9" 
            v-for='product in newArrivals.products' 
            :key="product.id.raw"
            v-if='product.linker.raw !== null'>
                    <product-inner-new
                            :product='product'
                            :key='product.id.raw'
                            /></div>
            <!-- <div class="col-6 card" style="background:#F9f9f9">2</div>
            <div class="col-6 card" style="background:#F9f9f9">3</div>
            <div class="col-6 card" style="background:#F9f9f9">4</div>
            <div class="col-6 card" style="background:#F9f9f9">5</div>
            <div class="col-6 card" style="background:#F9f9f9">6</div> -->
            <!-- <div class="col-6"
            v-for='product in newArrivals.products' 
            :key="product.id.raw"
            v-if='product.linker.raw !== null'>
                    <product-inner-new
                            :product='product'
                            :key='product.id.raw'
                            />
                </div>     --> 

 
      <!-- <div  v-for="(item, index) in bannersMobile" :key="i" class="img-wrapper slick-track">
        
      </div> -->
    </VueSlickCarousel>
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
import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


export default {
    name: 'HomeLaptopsCopy',
    components: {
        ProductInner,
        ProductInnerNew,
        //ProductDefault,
        CarouselArrows,
        VueSlickCarousel
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
            laptopsSlide: {
            slidesToShow: 2,
            arrows: true,
            autoplay: true,
            speed:500,
            infinite: true,
            dots: true,
            focusOnSelect: true,
            // slidesToScroll: 2
//   touchThreshold: 5
            },
            // carouselSetting: {
            //     loop: true,
            //     slidesPerView: 6,
            //     spaceBetween: 15,
            //     scrollbar: {
            //         draggable: false
            //     },
            //     pagination: {
            //         el: '.swiper-pagination',
            //         type: 'fraction'
            //     },
            //     autoplay: {
            //         delay: 15000,
            //         disableOnInteraction: false
            //     },
            //     // pagination: {
            //     //     el: '.swiper-pagination',
            //     //     clickable: true
            //     // },
            //     navigation: {
            //         nextEl: '.ps-deal-of-day .swiper-next',
            //         prevEl: '.ps-deal-of-day .swiper-prev'
            //     },
            //     breakpoints: {
            //         1680: {
            //             slidesPerView: 2
            //         },
            //         1366: {
            //             slidesPerView: 2
            //         },
            //         1024: {
            //             slidesPerView: 2
            //         },
            //         768: {
            //             slidesPerView: 2,
            //             spaceBetween: 10
            //         },
            //         480: {
            //             slidesPerView: 2,
            //             spaceBetween: 10
            //         }
            //     }
            // }
        };
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
            }, 10000);
            
        }
    },
}
</script>
<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
.slide {
   height: 300px;
   background: #ccc;
   text-align: center;
   line-height: 300px;
}

.slick-track {
  margin: 25px auto;
  width: 160px;
//    width: 100%;
}

.slick-dots-container {
  width: 5.5rem;
  overflow: hidden;
  display: block;
  padding: 0;
  margin: 0.625rem auto;
  height: 0.875rem;
  position: relative;
}

.slick-dots-container > ul {
  padding: 0;
  display: flex;
  transition: all 0.25s;
  position: relative;
  margin: 0;
  list-style: none;
  transform: translateX(0);
  align-items: center;
  bottom: unset;
  height: 100%;
}

.slick-dots-container > ul li {
  width: 0.625rem;
  height: 0.625rem;
  margin: 0 0.25rem;
  background-color: #efd5d5;
  border: none;
  border-radius: 50%;
}

.slick-dots-container > ul li button {
  font-size: 0;
  line-height: 0;
  display: block;
  width: 1.25rem;
  height: 1.25rem;
  padding: 0.3125rem;
  cursor: pointer;
  color: transparent;
  border: 0;
  outline: 0;
  background: 0 0;
}

.slick-dots-container > ul li.p-small-1,
.slick-dots-container > ul li.n-small-1 {
  transform: scale(0.8);
}

.slick-dots-container > ul li.slick-active {
  transform: scale(1.3);
  transform-origin: center;
  background: #3498db;
}

.slick-dots li button:before {
  display: none;
}


.slick-track{
height: 180px;
}
.slick-dots{
    overflow: hidden;
  display: block;
  padding: 0;
  margin: 0.625rem auto;
  height: 0.875rem;
  position: relative;
}



.container-layout{
    padding: 0 5%;
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

