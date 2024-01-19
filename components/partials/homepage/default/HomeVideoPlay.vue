<template lang="html">
    <div>
        <h3 class="trending-title-mobile pt-3">WHAT'S TRENDING</h3>
        <div class="video-container m-3">
            <div
                class="ps-carousel col-12 p-0"
                v-swiper:mySwiper="swiperOptionVideo"
            >
                <div class="swiper-wrapper">
                    <div
                        class="swiper-slide trending-card mobile-view"
                        style="cursor: pointer"
                        v-for="product in categoriesList"

                    >
                    <div class="p-3">
                        <!-- <video width="100%" height="240" controls >
  <source :src="`${product.url}`" type="video/mp4">
</video> -->
                    <iframe width="100%" height="320" :src="`${product.imgTitle}`"  
                    title="happimobiles"
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <!-- <iframe width="100%" height="320" :src="`${product.imgTitle}`"
                         frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                         <img class="video-image p-1"
                        :src="`${product.imgTitle}`"
                        alt="happimobiles"
                        v-on:click="nav(product.link)"
                        /> -->
                        <!-- <h6 class="video-cards-text">{{product.name}}</h6> -->
                        <!-- <div class="ps-product__rating video-rating center mb-5"> 
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i> 
                        </div> -->
                    </div>
                     
                    <!--Carousel controls-->
                    <div class="swiper-nav vedio-swiper-nav-mobile">
                        <span class="swiper-arrow swiper-prev"
                            ><i class="icon-chevron-left"></i
                        ></span>
                        <div class="swiper-arrow swiper-next">
                            <i class="icon-chevron-right"></i>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- <VueSlickCarousel class="deals-container row" v-bind="slickOptions" :arrows="true">
      <div v-for="product in categoriesList" class=" ml-1 col-12">
        <div class="video-card ">
                    <nuxt-link :to="`${product.url}`" class="">
                     <img :src="`${product.imgTitle}`" alt="happimobiles" v-lazy-load class="deal-cards center-deal-img "/>
                     <h6 class="deal-cards-text mt-3">{{product.name}}</h6>
                        
                    <div class="ps-product__rating deal-cards-text mt-3"> 
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i> 
                </div>
                    </nuxt-link>
                </div>
      </div>
    </VueSlickCarousel> -->
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
    name: 'HomeVideoPlay',
    ssr: true,
    components: { VueSlickCarousel },
    props: {
        homepageData: {
            type: Object,
            require: true,
            default: () => {},
        },
    },
    data() {
        return {
            bannersMobile: [],
            bannersDesk: [],
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
            },
            swiperOptionVideo: {
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: true,
                },
                slidesPerView: 1,
                spaceBetween: 0,
                navigation: {
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev',
                },
            },
            settings: {
                arrows: true,
                dots: true,
            },

            categoriesList: [
                {
                    imgTitle: 'https://www.youtube.com/embed/1bwHGRk8GQ8',
                    name: 'A boAt Aavante Bar 1280 | Best Bluetooth Soundbar under ₹6000',
                    url: 'https://www.youtube.com/embed/1bwHGRk8GQ8',
                    link: 'https://www.youtube.com/embed/1bwHGRk8GQ8',
                },
                {
                    imgTitle: 'https://www.youtube.com/embed/9c_V31gcP1E',
                    name: 'B boAt Aavante Bar 1280 | Best Bluetooth Soundbar under ₹6000',
                    url: 'https://www.youtube.com/embed/9c_V31gcP1E',
                    link: 'https://www.youtube.com/embed/9c_V31gcP1E',
                },
                {
                    imgTitle: 'https://www.youtube.com/embed/1bwHGRk8GQ8',
                    name: 'A boAt Aavante Bar 1280 | Best Bluetooth Soundbar under ₹6000',
                    url: 'https://www.youtube.com/embed/1bwHGRk8GQ8',
                    link: 'https://www.youtube.com/embed/1bwHGRk8GQ8',
                },
                {
                    imgTitle: 'https://www.youtube.com/embed/9c_V31gcP1E',
                    name: 'B boAt Aavante Bar 1280 | Best Bluetooth Soundbar under ₹6000',
                    url: 'https://www.youtube.com/embed/9c_V31gcP1E',
                    link: 'https://www.youtube.com/embed/9c_V31gcP1E',
                }
                // {
                //     imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/2dde90fa-1e1e-4e2f-aaad-3e3c1723a037.png',
                //     name: 'C boAt Aavante Bar 1280 | Best Bluetooth Soundbar under ₹6000',
                //     url: 'https://www.youtube.com/watch?v=4BV9xnNvqQE',
                //     link: 'https://www.youtube.com/watch?v=4BV9xnNvqQE'
                // },
                // {
                //     imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/2dde90fa-1e1e-4e2f-aaad-3e3c1723a037.png',
                //     name: 'D boAt Aavante Bar 1280 | Best Bluetooth Soundbar under ₹6000',
                //     url: 'https://www.youtube.com/watch?v=4BV9xnNvqQE',
                //     link: 'https://www.youtube.com/watch?v=4BV9xnNvqQE'
                // }
            ],
        };
    },

    async fetch() {
        // console.log("TEST FETCH");
        // var response = await axios('https://dev-services.happimobiles.com/banner');
        // //this.posts = await this.$http.$get('https://api.nuxtjs.dev/posts')
        // this.bannersMobile = response.data.bannerMobile;
        // this.bannersDesk = response.data.bannerDesktop;
    },
    created() {
        this.bannersMobile = this.homepageData.bannerMobile;
        this.bannersDesk = this.homepageData.bannerDesktop;

        setTimeout(() => {
            console.log('bannersDesk', this.bannersDesk);
        });
    },
    methods: {
        urlFormatOptimization(url) {
            url = url.replace(
                'https://d34e6224thkkna.cloudfront.net/',
                'https://d3dfpp6nfjsq5w.cloudfront.net/fit-in/500x250/'
            );
            //console.log("BANNER URL", url);
            return url;
        },
        nav(url) {
            window.open(url, '_blank');
        },
    },
};
</script>

<style lang="scss" scoped>
.ps-carousel .swiper-nav.vedio-swiper-nav-mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    background: rgb(200, 19, 19);
    left: 0;
    width: 100%;
    height: 0;
    position: absolute;
    top: 50% !important;
    transform: translateY(-50%);
}

.swiper-arrow {
    width: 15px;
    height: 15px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    // border: 1px solid #000 !important;
    background-color: #fff;

    border-radius: 50px;

    &:hover {
        background-color: #f07720;
    }
}
.ps-carousel .swiper-arrow i {
    font-size: 13px;
}
.swiper-arrow {
    width: 25px;
    height: 25px;
    border: none;
}
.swiper-nav {
    height: 0;
}
.video-image {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
}
.trending-title-mobile {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 33px;
    text-align: left;
    margin-left: 2%;
}
.video-rating {
    width: fit-content !important;
    height: 14px !important;
}

.trending-card {
    border: 1px solid rgba(0, 0, 0, 0.1);
    height: auto;
}
.video-container {
    // border:1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    // height:fit-content;
}

.ps-section__left {
    max-width: 100% !important;
    width: 100% !important;
}
#homepage-1 .ps-home-banner .swiper-container {
    height: 300px !important;
    .swiper-wrapper {
        height: 300px !important;
        background: #f00 !important;
    }
}
.desktop-view {
    display: block;
}
.mobile-view {
    display: none;
}
@media (max-width: 767px) {
    .desktop-view {
        display: none;
    }
    .mobile-view {
        display: block;
    }
    .ps-banner {
        background-size: 100% 200px;
        // height:300px !important;
    }
    #homepage-1 .ps-home-banner .swiper-container {
        height: 300px !important;
        background: #f00 !important;
        .swiper-wrapper {
            height: 300px !important;
        }
    }
}
.center-deals {
    text-align: center;
    display: flex;
    justify-content: center;
}
.center-deal-img {
    text-align: center;
    width: 50%;
    display: flex;
    justify-content: center;

    margin-left: auto;
    margin-right: auto;
}

.deal-cards {
    margin-top: 12%;
}
.slick-slide {
    width: 100px !important;
}
.video-cards-text {
    padding: 4%;
    text-align: center;
    color: #333333;
    font-size: 15px;
    font-weight: 600;
    font-family: 'Open Sans';
    font-style: normal;
}
.deals-container {
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;
    // gap: 10px;

    // width: 100%;
    // height: 190px;
    // overflow-x: scroll;

    background: #ffffff;
}

// .video-card {
//     background: #efefef;
//     border-radius: 5px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     // padding: 12px 11px;
//     // gap: 16px;

//     width: 100%;
//     height: 350px;
//     // left: 0px;
//     // top: 1px;
// }
</style>
