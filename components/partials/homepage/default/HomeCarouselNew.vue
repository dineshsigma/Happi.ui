<template>
    <div>
    <VueSlickCarousel :arrows="true" :dots="true">
                        <div
                            class="swiper-slide mobile-view"
                            style="cursor: pointer"
                            v-if="bannersMobile != null"
                            v-for="(item, index) in bannersMobile"
                            :key="index"
                            v-on:click="nav(bannersMobile[index].link)"
                        >

                            <div
                                class="ps-banner"
                                :lazy-background="`${bannersMobile[index].pictures}`"
                                :style="{
                                    backgroundSize:     'cover',
                                    backgroundRepeat:   'no-repeat',
                                    backgroundPosition: 'center center',
                                }"
                            ></div>

                        </div>


      <!-- <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div> -->
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: 'HomeCarouselNew',
    components: { VueSlickCarousel },
    ssr: true,
    props: {
        homepageData: {
            type: Object,
            require: true,
            default: () => {
            }
        }
    },
    data() {
        return {
            bannersMobile: [],
            bannersDesk: [],
            // swiperOption: {
            //     loop: true,
            //     autoplay: {
            //         delay: 5000,
            //         disableOnInteraction: false
            //     },
            //     slidesPerView: 1,
            //     spaceBetween: 1,
            //     navigation: {
            //         nextEl: '.swiper-next',
            //         prevEl: '.swiper-prev'
            //     }
            // }
        };
    },
    created(){
        this.bannersMobile = this.homepageData.bannerMobile;
        this.bannersDesk = this.homepageData.bannerDesktop;

        setTimeout(() =>{
            console.log("bannersDesk", this.bannersDesk)
        })
    },
    methods: {
        urlFormatOptimization(url){
            url = url.replace('https://d34e6224thkkna.cloudfront.net/', 'https://d3dfpp6nfjsq5w.cloudfront.net/fit-in/500x250/');
            //console.log("BANNER URL", url);
            return url;
        },
        nav(url){
            window.open(
                url, "_blank");
        }
    },

}
</script>
<style lang="scss">
.ps-section__left {
    max-width: 100% !important;
    width: 100% !important;
}
#homepage-1 .ps-home-banner .swiper-container {
    // height: 430px !important;
    // height: 100% !important;

    .swiper-wrapper {
        // height: 430px !important;
    // height: 100% !important;

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
        background-size:100% 200px;
        // height:300px !important;
    }
    #homepage-1 .ps-home-banner .swiper-container {
    height: 200px !important;
    .swiper-wrapper {
        height: 200px !important;
    }
}
}
</style>
