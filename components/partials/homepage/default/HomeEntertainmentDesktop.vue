<template>
    <section class="home-ent-desktop mt-0">
        <div class="ps-container h-e-container">
            <h3 class="home-ent-heading ">{{ newArrivals.title }} </h3>
            <div class="row pt-3">
                <div class="col-8 col-md-8">
                    <VueSlickCarousel class='xyz' v-bind="homeentertainmentscroll"
                        v-if="(newArrivals.products.length > 0)">
                        <div class='card-layout' v-for='(product, index) in newArrivals.products.slice(0, 8)'
                            :key="index">
    <!---------------------------------------- Producct Iner Desktop Component-->
                            <product-inner-desktop :product='product' :key='product.id.raw' fromComp='entDesk' />
         <!---------------------------------------- Producct Iner Desktop Component-->
                        </div>
                    </VueSlickCarousel>
                </div>

                <div class="col-4 col-md-4 p-5">
                    <div style="display:flex; align-items: center;justify-content: center; gap: 1rem; flex-direction: column;padding: 2rem;">
                        <div class="home-ent-add-column">
                            <img src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/c9b3416f-a7bb-4ed3-a83d-d7b8d087addc.png" alt="happimobiles" class="img-fluid" />
                        </div>
                        <button class="shop-button pb-2" @click="handleShopNow">SHOP NOW</button>
                    </div>
                </div>
            </div>
            </div>
        </section>
    <!-- </div> -->
</template>
<script>
import ProductInnerNew from '~/components/elements/product/ProductInnerNew';
import ProductInnerDesktop from '~/components/elements/product/ProductInnerDesktop';
import { getColletionBySlug } from '~/utilities/product-helper';
import CarouselArrows from '~/components/elements/commons/CarouselArrows';
import { mapState } from 'vuex';
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: 'HomeEntertainmentMobile',
    components: {
        // ProductInner,
        ProductInnerNew,
        ProductInnerDesktop,
        CarouselArrows,
        VueSlickCarousel

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
            homeentertainmentscroll: {
                infinite: true,
                slidesToShow: 2,
                speed: 1500,
                rows: 2,
                slidesPerRow: 1,
                arrows: true,
                dots: true,
            }
        };
    },
    methods: {
        isMobile() {
            // console.log('isMobile process.client', process.client);
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
        // console.log('this.newArrivals', this.newArrivals.products);
        // const newProd = this.newArrivals.products.slice(0,8);
        // console.log('this.newArrivals', newProd);
        // this.newArrivals.products = newProd;
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
.ps-container.h-e-container{
    background: linear-gradient(180deg, #F3EDED 0%, #EAEAEB 100%) !important;
}
.home-ent-desktop {
    background: linear-gradient(180deg, #F3EDED 0%, #EAEAEB 100%) !important;
    // height:80vh !important;
    // display: flex;
    // text-align: center;
    // justify-content: center;
}
.home-ent-add-column{
    img{
        width:350px;

    }
}
.home-ent-heading{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
padding-top: 3%;
    text-align: center;
    text-transform: uppercase;

    color: #323232;
}
.ent-container-desk{
    background: linear-gradient(180deg, #F3EDED 0%, #EAEAEB 100%) !important;
}

.home-ent-carosel {
    margin: 10%;
}

.home-entertain-mobile {
    justify-content: center;
    align-items: center;
    display: flex;
}

.shop-button {
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

    &:hover {
        background-color: #FFFFFF;
        box-shadow: 0px 15px 20px rgba(251, 144, 19, 0.4);
        color: #FB9013 !important;
        transform: translateY(-7px);
    }
}


.ent-image {
    width: 337px;
    height: 272px;
}

.ent-mobile {
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

.xyz {
    .slick-list {
        min-height: 500px !important;
    }

}

@media screen and (max-width: 1920px) {
// .home-ent-desktop{background: #000 !important;}
.container{    margin-top:0.965rem !important;

    width:1640px !important;
    margin:0 auto;
    // border: 2px dashed #f00;
    // background: linear-gradient(180deg, #F3EDED 0%, #EAEAEB 100%);

} 
}
@media screen and (max-width: 1356px) {
// .home-ent-desktop{background: #000 !important;}
.container{
    margin-top:2%;
    width:100% !important;
    margin:0 auto;
    // border: 2px dashed #f90;
    // background: linear-gradient(180deg, #F3EDED 0%, #EAEAEB 100%);
} 
}



</style>
