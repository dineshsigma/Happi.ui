<template lang="html">
    <!-- <div
        class="ps-product-list ps-deal-of-day ps-section--carousel-outside pb-12 br-bxs-none"
    > -->
        <div class="section-container">
            
            <div class="row sb-card">
                <div class="col">
                    <h3 class="search-brands mt-5">Search By Brands</h3>
                </div>
                <div class="col-12 mb-5">
                    <div
                    class="brands-home"
                    ref="mySwiper"
                    v-swiper:categorySwiper="carouselSetting"
                >
                    <div class="swiper-wrapper">
                        <div
                            class="swiper-slide"
                            v-for="product in categoriesList"
                        >
                            <nuxt-link :to="`${product.url}`" class="center">
                                <img
                                    :src="`${product.imgTitle}`"
                                    alt="happimobiles"
                                    v-lazy-load
                                />
                            </nuxt-link>
                        </div>
                    </div>
                </div>
                
                    <!--                    <div class="swiper-pagination"></div>-->
                </div>
            </div>
        </div>
    <!-- </div> -->
</template>
<script>
//import CountDownSimple from '~/components/elements/commons/CountDownSimple';
//import CarouselArrows from '~/components/elements/commons/CarouselArrows';
//import { carouselFullwidth } from '~/utilities/carousel-helpers.js';
//import ProductCategory from '~/components/elements/product/ProductCategory';
import CarouselArrows from '~/components/elements/commons/CarouselArrows';
export default {
    name: 'HomeBrandsMobile',
    components: {
        CarouselArrows,
        //ProductCategory,
        // CarouselArrows,
        //CountDownSimple
    },
    props: {},
    data() {
        return {
            carouselSetting: {
                // loop: true,
                slidesPerView: 8,
                spaceBetween: 15,
                scrollbar: {
                    draggable: false,
                },
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                },
                navigation: {
                    // nextEl: '.ps-deal-of-day .swiper-next',
                    // prevEl: '.ps-deal-of-day .swiper-prev'
                    nextEl: '',
                    prevEl: '',
                },
                breakpoints: {
                    1680: {
                        slidesPerView: 8,
                    },
                    1366: {
                        slidesPerView: 5,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                },
            },
            // categoriesList: [
            //     {
            //         imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/df15cd27-8f07-4ef3-bbe6-9ff439605ea4.png',
            //         name: 'Apple',
            //         url: '/search?q=iphone',
            //     },
            //     {
            //         imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/5a6154b9-5ede-4bcc-9d70-cff742303cbc.png',                    name: 'Samsung',
            //         url: '/mobiles/buy-samsung-mobiles-online',
            //     },
            //     {
            //         imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/4de3e25d-bb76-4ad9-987b-3401d2108d5e.png',
            //         name: 'Oneplus',
            //         url: '/mobiles/oneplus',
            //     },
            //     {
            //         imgTitle:'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/a5efad32-ca71-43e0-8f59-e11ef89f9c2f.png',
            //         name: 'Oppo',
            //         url: '/mobiles/buy-oppo-mobiles-online',
            //     },
            //     {
            //         imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/d1d185a5-9126-4bbf-b720-7005393b1fe4.png',
            //         name: 'Mi',
            //         url: '/mobiles/buy-mi-mobiles-online',
            //     },
            //     {
            //         imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/3f59bef3-f10d-4703-85bb-10fd47f763af.png',
            //         name: 'Vivo',
            //         url: '/mobiles/vivo',
            //     },
            //     {
            //         imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/3425cc91-3f28-4f18-992c-ac1114f66de9.png',
            //         name: 'Realme',
            //         url: '/mobiles/buy-realme-mobiles-online',
            //     },
            //     {
            //         imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/4d3a9d2a-56b9-4862-bef1-4bb47d1e6247.png',
            //         name: 'Nokia',
            //         url: '/mobiles/nokia',
            //     }
            // ],
            categoriesList: [
                {
                    imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/df15cd27-8f07-4ef3-bbe6-9ff439605ea4.png',
                    name: 'Apple',
                    url: '/mobiles/apple',
                },
                {
                    imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/5a6154b9-5ede-4bcc-9d70-cff742303cbc.png',  
                    name: 'Samsung',
                    url: '/mobiles/buy-samsung-mobiles-online',
                },
                {
                    imgTitle:'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/46889902-c66c-435d-a560-53dc99d7e2d2.png',
                    name: 'Oneplus',
                    url: '/mobiles/oneplus',
                },
                {
                    imgTitle:'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/a5efad32-ca71-43e0-8f59-e11ef89f9c2f.png',
                    name: 'MI',
                    url: '/mobiles/buy-mi-mobiles-online',
                },
                {
                    imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/d1d185a5-9126-4bbf-b720-7005393b1fe4.png',
                    name: 'Nokia',
                    url: '/mobiles/nokia',
                },
                {
                    imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/4d3a9d2a-56b9-4862-bef1-4bb47d1e6247.png',
                    name: 'Vivo',
                    url: '/mobiles/vivo',
                },
                // {
                //     imgTitle:'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/a68cfc8c-9a38-46bd-9bb3-bd0616a3beb8.png',
                //     name: 'Oppo',
                //     url: '/mobiles/buy-oppo-mobiles-online',
                // },
                // {
                //     imgTitle:'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/57491562-4472-4b9e-9e7e-0af7931b4e44.png',
                //     name: 'Lenovo',
                //     url: '/laptops/lenovo',
                // },
                // {
                //     imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/8264660e-8abd-418b-a374-9b4609d75f7c.png',
                //     name: 'Lg',
                //     url: '/tvs/lg',
                // }
            ],
        };
    },
    methods: {
        isMobile() {
            if (process.client && screen !== undefined) {
                if (screen.width <= 760) {
                    return true;
                } else {
                    return false;
                }
            }
            // if( screen.width <= 760 ) {
            //     return true;
            // }
            // else {
            //     return false;
            // }
        },
    },
};
</script>
<style lang="scss">
.sb-card {
    background: #fff !important;
.swiper-slide{
    display: flex;
    align-items: center;
    justify-content: center;
    a{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 72px;
img{
    width:100%;
    height:auto;
}
    }
}
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
.brands-home{
    padding:1%;
}
.brands {
    .swiper-slide{
        margin-bottom:10px;
    }
    .swiper-arrow {
    display: inline-block;
    vertical-align: top;
    position: relative;
    width: 25px;
    height: 25px;
    border: none;
    // background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0;
    z-index: 100;
    cursor: pointer;
    transition: all 0.25s ease;
    outline: none;
}
    .swiper-nav {
 float: right;
    display: flex;
    flex-flow: wrap-reverse;
    top: 56%;
    width: 35%;
    /* padding-top: 2%; */
    justify-content: space-between;
    align-items: flex-end;
    height: 0;
    }
}
// .swiper-nav {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     z-index: 99;
//     left: 0;
//     width: 100%;
//     height: 0;
//     @include vertical-align();
// }
.arrows-carousel {
    display: inline-block;
    vertical-align: top;
    position: relative;
    width: 46px;
    height: 46px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0;
    z-index: 100;
    cursor: pointer;
    transition: all 0.25s ease;
    outline: none;
}
.brand-image {
    height: 50px !important;
    widows: 50px !important;
}
.search-brands {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: flex-start !important;
    padding: 0px !important;
    gap: 10px !important;
    isolation: isolate !important;
    font-size: 19px !important;
    margin-bottom: 7% !important;
    margin-left: 2% !important;
}
.ps-product--inner .ps-product__thumbnail {
    .brands {
        // background-color: #fff1e5;
    }
}
.brands {
    // background-color: #fff1e5;
    // border-radius: 7px;
    // box-shadow: 0 0 5px -1px rgb(0 0 0 / 24%);
    .swiper-wrapper {
        img {
            height: 80px;
        }
        p {
            margin-bottom: 0;
        }
    }
}
.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    text-align: center;
}

.br-bxs-none {
    .brands,
    .ps-section__content{
    border: none !important;
    padding: 1rem !important;
    box-shadow: none !important;}
}
</style>