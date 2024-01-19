<template lang="html">
    <div
        class=" pb-12 categories"
    >
        <div class=" categories-header-mobile">
            <div class=" row pt-4 brands brands-categories">
                <div
                    class="ps-carousel brands-home "
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
                                    class="brand-image"
                                    alt="happimobiles"
                                    v-lazy-load
                                />
                           <p class="category-name">{{product.name}}</p>

                            </nuxt-link>
                        </div>
                    </div>
                    <!--                    <div class="swiper-pagination"></div>-->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
//import CountDownSimple from '~/components/elements/commons/CountDownSimple';
//import CarouselArrows from '~/components/elements/commons/CarouselArrows';
//import { carouselFullwidth } from '~/utilities/carousel-helpers.js';
//import ProductCategory from '~/components/elements/product/ProductCategory';
import CarouselArrows from '~/components/elements/commons/CarouselArrows';
export default {
    name: 'HomeCategoriesMobile',
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
                // autoplay: {
                //     delay: 5000,
                //     disableOnInteraction: false
                // },
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
                        slidesPerView: 4,
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                },
            },
            // categoriesList: [
            //     {
            //         imgTitle:
            //             'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/fd7d8057-d730-469d-ae8e-e5958ee5d535.png',
            //         name: 'Mobiles',
            //         url: '/search?q=iphone',
            //     },
            //     {
            //         imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/3d11c9e3-61bc-4a1a-9247-1ca9ec175ee8.png',
            //         name: 'Accessories',
            //         url: '/mobiles/buy-samsung-mobiles-online',
            //     },
            //     {
            //         imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/c5ecd2ed-6df7-4f4a-8b3f-b2cdeb5abb22.png',
            //         name: 'Tablets',
            //         url: '/mobiles/oneplus',
            //     },
            //     {
            //         imgTitle:
            //             'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/7dce90ad-0e0b-49bd-a308-55ecae85df70.png',
            //         name: 'TVs',
            //         url: '/mobiles/buy-oppo-mobiles-online',
            //     },
            //     {
            //         imgTitle:'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/977e67b6-f66c-4651-b1a2-81aa6037f39a.png',
            //         name: 'Laptops',
            //         url: '/mobiles/buy-mi-mobiles-online',
            //     }
                
            // ],
            categoriesList: [
                {
                    imgTitle:
                        'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/fd7d8057-d730-469d-ae8e-e5958ee5d535.png',
                    name: 'Mobiles',
                    url: '/mobiles/all',
                },
                {
                    imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/3d11c9e3-61bc-4a1a-9247-1ca9ec175ee8.png',
                    name: 'Accessories',
                    url: '/accessories/all',
                },
                {
                    imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/c5ecd2ed-6df7-4f4a-8b3f-b2cdeb5abb22.png',
                    name: 'Tablets',
                    url: '/tablets/all',
                },
                {
                    imgTitle:
                        'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/7dce90ad-0e0b-49bd-a308-55ecae85df70.png',
                    name: 'TVs',
                    url: '/tvs/all',
                },
                {
                    imgTitle:'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/977e67b6-f66c-4651-b1a2-81aa6037f39a.png',
                    name: 'Laptops',
                    url: '/laptops/all',
                }
                
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
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
.categories-header-mobile{
height:fit-content !important;

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
.brands-categories{
    background-color: #F7F7F7 !important;
}
.category-name{
    font-size: 11px;
    font-family: Roboto;
    line-height: 1.6em;
    color: #000;
}
.brands-home{
    padding:1%;
}
.brands-categories{
    padding: 0px !important;
}
.brands {
    .swiper-slide{
        // margin-bottom:10px;
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
    background-color: #000;
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
    height: 40px !important;

    // height: 50px !important;
    // widows: 50px !important;
}
.search-brands {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: flex-start !important;
    padding: 0px !important;
    gap: 10px !important;
    isolation: isolate !important;
    font-size: 17px !important;
    margin-bottom: 7% !important;
    margin-left: 2% !important;
}
.ps-product--inner .ps-product__thumbnail {
    .brands {
        background-color: #fff1e5;
    }
}
.brands {
    background-color: #fff1e5;
    // border-radius: 7px;
    box-shadow: 0 0 5px -1px rgb(0 0 0 / 24%);
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
</style>