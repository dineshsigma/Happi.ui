<template>
    <div>
        <div class="ps-block col-12">
            <h3 class="ent-mobile">{{newArrivals.title}}</h3>
        </div>
        <div class="col-12">
            <img 
            src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/c9b3416f-a7bb-4ed3-a83d-d7b8d087addc.png"
            alt="happimobiles"
            class="ent-image"
            />
        </div>
            <div class="col-12 home-entertain-mobile">
                <button class="shop-button pb-2" @click="handleShopNow">
                    SHOP NOW
                </button>
            </div>
            <div class='col-12 col-md-12'>
                        <div
                            class='ps-carousel'
                            v-swiper:dealOfDayCarousel='carouselSettingEnt'
                        >
                            <div class='swiper-wrapper'>
                                <div
                                    class='swiper-slide card-layout card-phones'
                                    v-for='(product, index) in newArrivals.products'
                                    :key="index"
                                    v-if='product.linker.raw !== null'
                                >
                                    <!-- <product-inner
                                        :product='product'
                                        :key='product.id.raw'
                                    /> -->
                                    <product-inner-mobile
                                        :product='product'
                                        :key='product.id.raw'
                                    />
                                </div>
                            </div>
                               <carousel-arrows type="simple" />
                        </div>
            </div>
    </div>
</template>
<script>
import ProductInnerNew from '~/components/elements/product/ProductInnerNew';
import ProductInnerMobile from '~/components/elements/product/ProductInnerMobile';
import { getColletionBySlug } from '~/utilities/product-helper';
import CarouselArrows from '~/components/elements/commons/CarouselArrows';
import { mapState } from 'vuex';

export default {
    name: 'HomeEntertainmentMobile',
    components:{
        // ProductInner,
        ProductInnerNew,
        CarouselArrows,
        ProductInnerMobile
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
            carouselSettingEnt: {
                loop: true,
                slidesPerView: 6,
                spaceBetween: 15,
                scrollbar: {
                    draggable: false
                },
                // pagination: {
                //     el: '.swiper-pagination',
                //     type: 'fraction'
                // },
                autoplay: {
                    delay: 15000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev'
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
        },
        handleShopNow() {
            this.$router.push('/tvs/all');
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

}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
.home-entertain-mobile{
    justify-content: center;
    align-items: center;
    display: flex;
}

.shop-button{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 30px;
    gap: 10px;

    width: 144px;
    height: 39px;
    
    background: #FB9013;
    border-radius: 30px;

    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

    font-family: 'Open Sans';
    color: #FFFFFF;
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;
    letter-spacing: 0.06em;

    &:hover{
        background-color: #FFFFFF;
        box-shadow: 0px 15px 20px rgba(251, 144, 19, 0.4);
        color: #FB9013 !important;
        transform: translateY(-7px);
    }
}


.ent-image{
    width: 337px;
    height: 272px;
}
.ent-mobile{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    /* identical to box height */

    text-align: center;
    text-transform: uppercase;

    color: #323232;
}

</style>
