<template lang="html">
    <div class="ps-home-banner ps-home-banner--1 mt-0 pt-0">
        <div class="ps-container p-0">
            <div class="ps-section__left row m-0 w-100 pr-0" v-if="bannersDesk && bannersMobile && bannersDesk.length !== 0 && bannersMobile.length !== 0">
                <div
                    class="ps-carousel col-12 p-0"
                    v-swiper:mySwiper="swiperOption"
                >
                    <div class="swiper-wrapper">
                        <div
                            class="swiper-slide desktop-view"
                            style="cursor: pointer"
                            v-if="bannersDesk != null"
                            v-for="(item, index) in bannersDesk"
                            v-on:click="nav(bannersDesk[index].link)"
                        >
                            <div
                                class="ps-banner"
                                :style="{
                                    backgroundSize:     'contain',
                                    backgroundRepeat:   'no-repeat',
                                    backgroundPosition: 'center center',
                                    backgroundImage: `url(${bannersDesk[index].pictures})`
                                }"
                            ></div>
                        </div>

                        <div
                            class="swiper-slide mobile-view"
                            style="cursor: pointer"
                            v-if="bannersMobile != null"
                            v-for="(item, index) in bannersMobile"
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
                    </div>
                    <!--Carousel controls-->
                    <div class="swiper-nav">
                        <span class="swiper-arrow swiper-prev"
                            ><i class="icon-chevron-left"></i
                        ></span>
                        <div class="swiper-arrow swiper-next">
                            <i class="icon-chevron-right"></i>
                        </div>
                    </div>
                    <div
                        class="swiper-pagination swiper-pagination-bullets"
                    ></div>
            </div>
            </div>
        </div>
    <!-- <VueSlickCarousel v-bind="slickOptions" :arrows="true">
      <div  v-for="(item, index) in bannersMobile" :key="i" class="img-wrapper">
        <img :src="`${bannersMobile[index].pictures}`" />
      </div>
    </VueSlickCarousel> -->
    <div class="slick-slider" id="small-preview">
        <div  v-for="(item, index) in bannersMobile" :key="i" class="img-wrapper">
        <img :src="`${bannersMobile[index].pictures}`" />
      </div>
</div>
  </div>

    

</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: 'HomeBannerCopy',
    ssr: true,
    components: { VueSlickCarousel },
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
            slickOptions: {
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        speed:500,
        infinite: true,
        dots:true
      },
            bannersMobile: [],
            bannersDesk: [],
            pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true
                },
            swiperOption: {
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                },
                slidesPerView: 1,
                spaceBetween: 1,
                navigation: {
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev'
                }
            },
        settings: {
          arrows: true,
          dots: true,
        },
    }
},

    async fetch() {
        // console.log("TEST FETCH");
        // var response = await axios('https://dev-services.happimobiles.com/banner');
        // //this.posts = await this.$http.$get('https://api.nuxtjs.dev/posts')
        // this.bannersMobile = response.data.bannerMobile;
        // this.bannersDesk = response.data.bannerDesktop;
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
        },

        setBoundries(slick, state) {
      if (state === "default") {
         slick.find("ul.slick-dots li").eq(4).addClass("n-small-1");
      }
   var slickSlider = $(".slick-slider");
   var maxDots = 4;
   var transformXIntervalNext = -18;
   var transformXIntervalPrev = 18;

   slickSlider.on("init", function (event, slick) {
      $(this)
         .find("ul.slick-dots")
         .wrap("<div class='slick-dots-container'></div>");
      $(this)
         .find("ul.slick-dots li")
         .each(function (index) {
            $(this).addClass("dot-index-" + index);
         });
      $(this).find("ul.slick-dots").css("transform", "translateX(0)");
      setBoundries($(this), "default");
   });

   var transformCount = 0;
   slickSlider.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
         var totalCount = $(this).find(".slick-dots li").length;
         if (totalCount > maxDots) {
            if (nextSlide > currentSlide) {
               if (
                  $(this)
                     .find("ul.slick-dots li.dot-index-" + nextSlide)
                     .hasClass("n-small-1")
               ) {
                  if (
                     !$(this)
                        .find("ul.slick-dots li:last-child")
                        .hasClass("n-small-1")
                  ) {
                     transformCount = transformCount + transformXIntervalNext;
                     $(this)
                        .find("ul.slick-dots li.dot-index-" + nextSlide)
                        .removeClass("n-small-1");
                     var nextSlidePlusOne = nextSlide + 1;
                     $(this)
                        .find("ul.slick-dots li.dot-index-" + nextSlidePlusOne)
                        .addClass("n-small-1");
                     $(this)
                        .find("ul.slick-dots")
                        .css(
                           "transform",
                           "translateX(" + transformCount + "px)"
                        );
                     var pPointer = nextSlide - 3;
                     var pPointerMinusOne = pPointer - 1;
                     $(this)
                        .find("ul.slick-dots li")
                        .eq(pPointerMinusOne)
                        .removeClass("p-small-1");
                     $(this)
                        .find("ul.slick-dots li")
                        .eq(pPointer)
                        .addClass("p-small-1");
                  }
               }
            } else {
               if (
                  $(this)
                     .find("ul.slick-dots li.dot-index-" + nextSlide)
                     .hasClass("p-small-1")
               ) {
                  if (
                     !$(this)
                        .find("ul.slick-dots li:first-child")
                        .hasClass("p-small-1")
                  ) {
                     transformCount = transformCount + transformXIntervalPrev;
                     $(this)
                        .find("ul.slick-dots li.dot-index-" + nextSlide)
                        .removeClass("p-small-1");
                     var nextSlidePlusOne = nextSlide - 1;
                     $(this)
                        .find("ul.slick-dots li.dot-index-" + nextSlidePlusOne)
                        .addClass("p-small-1");
                     $(this)
                        .find("ul.slick-dots")
                        .css(
                           "transform",
                           "translateX(" + transformCount + "px)"
                        );
                     var nPointer = currentSlide + 3;
                     var nPointerMinusOne = nPointer - 1;
                     $(this)
                        .find("ul.slick-dots li")
                        .eq(nPointer)
                        .removeClass("n-small-1");
                     $(this)
                        .find("ul.slick-dots li")
                        .eq(nPointerMinusOne)
                        .addClass("n-small-1");
                  }
               }
            }
         }
      }
   );

   $(".slick-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      focusOnSelect: true,
      infinite: false
   });

   }
    },
};

</script>

<style lang="scss" scoped>

* {
  box-sizing: border-box;
}

body {
   background: #2d3436;
}
.slide {
   height: 300px;
   background: #ccc;
   text-align: center;
   line-height: 300px;
}

.slick-slider {
  margin: 25px auto;
   width: 500px;
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



</style>
