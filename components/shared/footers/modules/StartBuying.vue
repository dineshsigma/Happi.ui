<template>
    <div>
        <div class="col-12">
            <img 
            src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/0f675082-d2d8-41d1-baf9-788f9ee53265.png"
            class="ent-image"
            alt="happimobiles"
            />
        </div>
        <div class="col-12 home-entertain-mobile">
            <button class="shop-button-mobile">
                <span class="button-text">START BUYING</span>
            </button>
        </div>
    </div>
</template>
<script>
import ProductInner from '~/components/elements/product/ProductInner';
import { getColletionBySlug } from '~/utilities/product-helper';
import CarouselArrows from '~/components/elements/commons/CarouselArrows';
import { mapState } from 'vuex';

export default {
    name: 'StartBuying',
    components:{
        ProductInner,
        CarouselArrows,

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

}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
.home-entertain-mobile{
    justify-content: center;
    align-items: center;
    display: flex;
}
.button-text{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.06em;
    text-transform: uppercase;

    color: #FFFFFF;
}

.shop-button-mobile{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 30px;
    gap: 10px;

    width: 180px;
    height: 39px;

    background: #FB9013;
    border-radius: 30px;
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
