<template lang="html">
        <div class="delivery-container-mobile">
            <div class="delivery-box-mobile">
                <div
                    class="ps-carousel brands-home "
                    ref="mySwiper"
                    v-swiper:categorySwiper="carouselSetting"
                >
                    <div class="swiper-wrapper">
                        <div
                            class="swiper-slide"
                            v-for="(product, index) in categoriesList"
                        >
                            <div :to="`${product.url}`" class="dfdm-rules">
                                <!-- <img

                                    :src="`${product.imgTitle}`"
                                    class="brand-image-rule-mobile"
                                    alt="happimobiles"
                                    v-lazy-load
                                /> -->
                                <!-- <i {{product.icon}}></i> -->
                                <i :class="{ 'icon-rocket fdm-icon' : index==0 }"></i>
                                <i :class="{ 'icon-credit-card' : index==1 }"></i>
                                <i :class="{ 'icon-bubbles' : index==2 }"></i>
                                <i :class="{ 'icon-gift' : index==3 }"></i>
                                <P class="rules-text">{{product.name}}<span >{{product.text}}</span></P>
                                
                            </div>
                        </div>
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
    name: 'FDM',
    components: {
        CarouselArrows,
        //ProductCategory,
        // CarouselArrows,
        //CountDownSimple
    },
    props: {},
    data() {
        return {
            isIcon: true,
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
                        slidesPerView: 4,
                    },
                    1366: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 2.85,
                    },
                    768: {
                        slidesPerView: 2.85,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 12,
                    },
                },
            },
            categoriesList: [
                {
                    icon: "icon-rocket",
                    // imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/01d8c630-f27e-4d33-a4c8-4666913410dd.png',
                    name: 'Free Delivery',
                    text: 'For all orders above ₹5000',
                    url: '/search?q=iphone',
                },
                {
                    imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/27132aab-df45-4bb2-bf37-21d816c29b55.png',
                    name: 'Secure Payment',
                    text: '100% secure payment ',
                    url: '/mobiles/buy-samsung-mobiles-online',
                },
                {
                    imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/27132aab-df45-4bb2-bf37-21d816c29b55.png',
                    name: '24/7 Support',
                    text: 'Dedicated support',
                    url: '/mobiles/oneplus',
                },
                {
                    imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/27132aab-df45-4bb2-bf37-21d816c29b55.png',
                    name: 'Exclusive offers',
                    text: 'On Top Brands',
                    url: '/mobiles/buy-oppo-mobiles-online',
                },
                
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
// .fdm-icon{
//     color:#fff;
// }

.dfdm-rules{
    padding:1rem 0;
    img{
        margin-bottom: 4%;

    }
    i{
        color: #FFFFFF;
        font-size: 20px;
        text-align: center;
        display: block;
        padding: 1%;
    }
    p{
        line-height: normal;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 500 !important;
    }
    span{
        font-size: 11px;
        line-height: normal;
        font-weight:normal;
        display: block;
        margin: 0;
        padding: 0;

    }
}
.delivery-container-mobile{
    background-color: #FB9013;
;
}
.brand-image-rule-mobile{
    height: 20px;
    text-align: center !important;
    margin-left:40%;

    width: 28px;
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
.rules-text{
    font-size:15px;
    margin-bottom: 0% !important;
    font-weight: bold;
    width: 100%;
    text-align: center !important;
    color:#fff; 
}

.sub-text{
    margin-bottom: 0% !important;
    text-align: center !important;
    color: #fff;
        font-size:10px;
        color:#fff;
        margin-left:15%;
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
        background-color: #fff1e5;
    }
}
.brands {
    background-color: #fff1e5;
    border-radius: 7px;
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