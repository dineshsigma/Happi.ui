<template lang="html">
    <!-- <div
        class=" ps-product-list ps-deal-of-day ps-section--carousel-outside pb-12"
    > -->
        <!-- <div class="row"> -->
            <!-- <div class="ps-section__header mb-5">
                <div class="ps-block--countdown-deal">
                    <div class="ps-block__left">
                        <h3>TOP BRANDS</h3>
                    </div>
                     <div class="ps-block__right">

                    </div>
                </div>
            </div> -->
            <div class="ps-section__content pt-4 mt-3 brands row">
                <div class="col-12 brand-heading">
                    <h3>Search by Brands</h3>
                </div> 
                <div
                class="brand-name"
                v-for="product in categoriesList"
                >
                    <nuxt-link :to="`${product.url}`" class="center">
                     <img :src="`${product.imgTitle}`" alt="happimobiles"/>
                           <!-- <p>{{product.name}}</p> -->
                    </nuxt-link>
                </div>
            </div>
            <!-- <div class="ps-section__content pt-4 brands col-3 row m-1">
                <div class="col-12 brand-heading">
                    <h3>Search by Brands</h3>
                </div> 
                <div
                class="brand-name"
                v-for="product in Categories"
                >
                    <nuxt-link :to="`${product.url}`" class="center">
                     <img :src="`${product.imgTitle}`" alt="happimobiles" v-lazy-load />
                           <p>{{product.name}}</p>
                    </nuxt-link>
                </div>
            </div> -->
            <!-- <div class="ps-section__content pt-4 brands col-3 row m-1">
                <div class="col-12 brand-heading">
                    <h3>Search by Brands</h3>
                </div> 
                <div
                class="brand-name"
                v-for="product in Categories"
                >
                    <nuxt-link :to="`${product.url}`" class="center">
                     <img :src="`${product.imgTitle}`" alt="happimobiles" v-lazy-load />
                           <p>{{product.name}}</p>
                    </nuxt-link>
                </div>
            </div> -->
            
            <!-- <div class="ps-section__content pt-4 brands">
                <div
                    class="ps-carousel"
                    ref="mySwiper"
                    v-swiper:categorySwiper="carouselSetting"
                >
                    <div class="swiper-wrapper">
                        <div
                            class="swiper-slide"
                            v-for="product in categoriesList"
                        >
                            <nuxt-link :to="`${product.url}`" class="center">
                                <img :src="`${product.imgTitle}`" alt="happimobiles" v-lazy-load />
                                <p>{{product.name}}</p>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div> -->
        <!-- </div> -->
    <!-- </div> -->
</template>

<script>
//import CountDownSimple from '~/components/elements/commons/CountDownSimple';
//import CarouselArrows from '~/components/elements/commons/CarouselArrows';
//import { carouselFullwidth } from '~/utilities/carousel-helpers.js';
//import ProductCategory from '~/components/elements/product/ProductCategory';

export default {
    name: 'HomeDefaultTopCategories',
    components: {
      //ProductCategory,
       // CarouselArrows,
        //CountDownSimple
    },
    props: {

    },

    data() {
        return {
            carouselSetting: {
                // loop: true,
                slidesPerView: 8,
                spaceBetween: 15,
                scrollbar: {
                    draggable: false
                },
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                },
                navigation: {
                    // nextEl: '.ps-deal-of-day .swiper-next',
                    // prevEl: '.ps-deal-of-day .swiper-prev'
                    nextEl: '',
                    prevEl: ''
                },
                breakpoints: {
                    1680: {
                        slidesPerView: 8
                    },
                    1366: {
                        slidesPerView: 5
                    },
                    1024: {
                        slidesPerView: 4
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 10
                    },
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    }
                }
            },
            categoriesList : [
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Apple.webp",
                    name : "Apple",
                    url: "/search?q=iphone"
                },
                // {
                //     imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/ASUS.webp",
                //     name : "Asus",
                //    url : "/search?q=asus"
                // },
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Samsung.webp",
                    name : "Samsung",
                    url: "/mobiles/buy-samsung-mobiles-online"
                },
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Oneplus.webp",
                    name : "Oneplus",
                    url: "/mobiles/oneplus"
                },
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Oppo.webp",
                    name : "Oppo",
                    url: "/mobiles/buy-oppo-mobiles-online"
                },
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Redmi.webp",
                    name : "Mi",
                    url: "/mobiles/buy-mi-mobiles-online"
                },
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Vivo.webp",
                    name : "Vivo",
                    url : "/mobiles/vivo"
                },
                // {
                //     imgTitle : "https://d34e6224thkkna.cloudfront.net/happi_media/TTINWQDJ-1629262405605.png",
                //     name : "Honor"
                // },
                //   {
                //     imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/lg%20logo.webp",
                //     name : "LG",
                //     url :"search?q=lg"
                // },
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Realme.webp",
                    name : "Realme",
                    url: "/mobiles/buy-realme-mobiles-online"
                },
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Nokia.webp",
                    name : "Nokia",
                    url: "/mobiles/nokia"
                },
                // {
                //     imgTitle : "https://d34e6224thkkna.cloudfront.net/happi_media/DSPBHRMH-1629262422692.png",
                //     name : "Motorola"
                // },
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Nokia.webp",
                    name : "Nokia",
                    url: "/mobiles/nokia"
                },
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Nokia.webp",
                    name : "Nokia",
                    url: "/mobiles/nokia"
                },
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Nokia.webp",
                    name : "Nokia",
                    url: "/mobiles/nokia"
                },
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Nokia.webp",
                    name : "Nokia",
                    url: "/mobiles/nokia"
                },
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Nokia.webp",
                    name : "Nokia",
                    url: "/mobiles/nokia"
                },
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Nokia.webp",
                    name : "Nokia",
                    url: "/mobiles/nokia"
                },
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Nokia.webp",
                    name : "Nokia",
                    url: "/mobiles/nokia"
                }
            ],
            Categories: [
            {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Samsung.webp",
                    name : "Samsung",
                    url: "/mobiles/buy-samsung-mobiles-online"
                },
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Oneplus.webp",
                    name : "Oneplus",
                    url: "/mobiles/oneplus"
                },
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Oppo.webp",
                    name : "Oppo",
                    url: "/mobiles/buy-oppo-mobiles-online"
                },
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Redmi.webp",
                    name : "Mi",
                    url: "/mobiles/buy-mi-mobiles-online"
                },
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Vivo.webp",
                    name : "Vivo",
                    url : "/mobiles/vivo"
                },
            ]
        };
    },

    methods: {
        isMobile() {
            if(process.client && screen !== undefined){
                if( screen.width <= 760 ) {
                    return true;
                }
                else {
                    return false;
                }
             }
            // if( screen.width <= 760 ) {
            //     return true;
            // }
            // else {
            //     return false;
            // }
        }
    }
};
</script>

<style lang="scss">
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
.ps-product--inner .ps-product__thumbnail{
    .brands{
      background-color: #fff1e5;
    }
}
.brands{
  background-color: #fff1e5;
  border-radius: 7px;
  box-shadow: 0 0 5px -1px rgb(0 0 0 / 24%);
  .swiper-wrapper{
    img {
      height:80px;
    }
    p{
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
.brand-name{
    padding: 30px;
    margin: 5px;
    text-align: center;
}
.brand-heading{
    color:#323232;
    padding-bottom: 5px;
}
</style>
