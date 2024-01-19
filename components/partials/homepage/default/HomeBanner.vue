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
                            class="swiper-slide desktop-view  banner-bg"
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
                            class="swiper-slide mobile-view "
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
                    <!-- <div
                        class="swiper-pagination swiper-pagination-bullets"
                    ></div> -->
            </div>
            </div>
        </div>
        <div class="carousel-wrapper">
    <!-- <VueSlickCarousel v-bind="slickOptions" :arrows="true" :dots="true">
      <div  v-for="(item, index) in bannersMobile" :key="i" class="img-wrapper slick-track">
        <img :src="`${bannersMobile[index].pictures}`" />
      </div>
    </VueSlickCarousel> -->
  </div>
  


    </div>

    

</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: 'HomeBanner',
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
        dots: true
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

        // setTimeout(() =>{
        //     console.log("bannersDesk", this.bannersDesk)
        // })
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
//          setBoundries(slick, state) {
//       if (state === "default") {
//          slick.find("ul.slick-dots li").eq(4).addClass("n-small-1");
//       }

//       var slickSlider = $(".slick-track");
//    var maxDots = 4;
//    var transformXIntervalNext = -18;
//    var transformXIntervalPrev = 18;

//    slickSlider.on("init", function (event, slick) {
//       $(this)
//          .find("ul.slick-dots")
//          .wrap("<div class='slick-dots-container'></div>");
//       $(this)
//          .find("ul.slick-dots li")
//          .each(function (index) {
//             $(this).addClass("dot-index-" + index);
//          });
//       $(this).find("ul.slick-dots").css("transform", "translateX(0)");
//       setBoundries($(this), "default");
//    });

//    var transformCount = 0;
//    slickSlider.on(
//       "beforeChange",
//       function (event, slick, currentSlide, nextSlide) {
//          var totalCount = $(this).find(".slick-dots li").length;
//          if (totalCount > maxDots) {
//             if (nextSlide > currentSlide) {
//                if (
//                   $(this)
//                      .find("ul.slick-dots li.dot-index-" + nextSlide)
//                      .hasClass("n-small-1")
//                ) {
//                   if (
//                      !$(this)
//                         .find("ul.slick-dots li:last-child")
//                         .hasClass("n-small-1")
//                   ) {
//                      transformCount = transformCount + transformXIntervalNext;
//                      $(this)
//                         .find("ul.slick-dots li.dot-index-" + nextSlide)
//                         .removeClass("n-small-1");
//                      var nextSlidePlusOne = nextSlide + 1;
//                      $(this)
//                         .find("ul.slick-dots li.dot-index-" + nextSlidePlusOne)
//                         .addClass("n-small-1");
//                      $(this)
//                         .find("ul.slick-dots")
//                         .css(
//                            "transform",
//                            "translateX(" + transformCount + "px)"
//                         );
//                      var pPointer = nextSlide - 3;
//                      var pPointerMinusOne = pPointer - 1;
//                      $(this)
//                         .find("ul.slick-dots li")
//                         .eq(pPointerMinusOne)
//                         .removeClass("p-small-1");
//                      $(this)
//                         .find("ul.slick-dots li")
//                         .eq(pPointer)
//                         .addClass("p-small-1");
//                   }
//                }
//             } else {
//                if (
//                   $(this)
//                      .find("ul.slick-dots li.dot-index-" + nextSlide)
//                      .hasClass("p-small-1")
//                ) {
//                   if (
//                      !$(this)
//                         .find("ul.slick-dots li:first-child")
//                         .hasClass("p-small-1")
//                   ) {
//                      transformCount = transformCount + transformXIntervalPrev;
//                      $(this)
//                         .find("ul.slick-dots li.dot-index-" + nextSlide)
//                         .removeClass("p-small-1");
//                      var nextSlidePlusOne = nextSlide - 1;
//                      $(this)
//                         .find("ul.slick-dots li.dot-index-" + nextSlidePlusOne)
//                         .addClass("p-small-1");
//                      $(this)
//                         .find("ul.slick-dots")
//                         .css(
//                            "transform",
//                            "translateX(" + transformCount + "px)"
//                         );
//                      var nPointer = currentSlide + 3;
//                      var nPointerMinusOne = nPointer - 1;
//                      $(this)
//                         .find("ul.slick-dots li")
//                         .eq(nPointer)
//                         .removeClass("n-small-1");
//                      $(this)
//                         .find("ul.slick-dots li")
//                         .eq(nPointerMinusOne)
//                         .addClass("n-small-1");
//                   }
//                }
//             }
//          }
//       }
//    );

//    $(".slick-track").slick({
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       dots: true,
//       focusOnSelect: true,
//       infinite: false
//    });

//    }
    },
};
</script>

<style lang="scss" scoped>
.swiper-arrow {
    width: 15px;
    height: 15px;
    border: 2px solid #000;        background-color:#fff;

    border-radius: 50px;
      
    &:hover{
        background-color:#f07720;

    }
}
.ps-carousel .swiper-arrow i {
    font-size: 13px;
}
.swiper-arrow {
    // display: inline-block;
    // vertical-align: top;
    // position: relative;
    width: 25px;
    height: 25px;
    border: none;
    // background-color: #000;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // border-radius: 0;
    // z-index: 100;
    // cursor: pointer;
    // transition: all 0.25s ease;
    // outline: none;
}
    .swiper-nav {
//  float: right;
    // display: flex;
    // flex-flow: wrap-reverse;
    top: 56%;
    // width: 35%;
    /* padding-top: 2%; */
    // justify-content: space-between;
    // align-items: flex-end;
    height: 0;
    }
.slide {
   height: 300px;
   background: #ccc;
   text-align: center;
   line-height: 300px;
}

.slick-track {
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


.slick-track{
height: 180px;
}
.slick-dots{
    overflow: hidden;
  display: block;
  padding: 0;
  margin: 0.625rem auto;
  height: 0.875rem;
  position: relative;
}
// .carousel-wrapper {
//   padding: 40px;
// }
// .img-wrapper img {
//   margin: auto;
//   width: 200px;
//   height: 100px;
//   background-image: linear-gradient(gray 100%, transparent 0);
// }
// html,
// body {
//   height: 100%;
//   margin: 0px;
// }

// .slider-container {
//   background: linear-gradient(
//     149deg,
//     rgb(247, 0, 255) 0%,
//     rgb(255, 145, 0) 100%
//   );
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 100%;
// }

// // /
// .slides {
//   display: flex;
//   overflow-x: scroll;
//   position: relative;
//   scroll-behavior: smooth;
//   scroll-snap-type: x mandatory;
// }

// .slide:nth-of-type(even) {
//   background-color: rgb(250, 246, 212);
// }

// .slide {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-shrink: 0;
//   width: 100%;
//   height: 400px;
//   scroll-snap-align: center;
//   margin-right: 0px;
//   box-sizing: border-box;
//   background: white;
//   transform-origin: center center;
//   transform: scale(1);
// }

// .slide__text {
//   font-size: 40px;
//   font-weight: bold;
//   font-family: sans-serif;
// }

// .slide a {
//   background: none;
//   border: none;
// }

// a.slide__prev,
// .slider::before {
//   transform: rotate(135deg);
//   -webkit-transform: rotate(135deg);
//   left: 5%;
// }

// a.slide__next,
// .slider::after {
//   transform: rotate(-45deg);
//   -webkit-transform: rotate(-45deg);
//   right: 5%;
// }

// .slider::before,
// .slider::after,
// .slide__prev,
// .slide__next {
//   position: absolute;
//   top: 48%;
//   width: 35px;
//   height: 35px;
//   border: solid black;
//   border-width: 0 4px 4px 0;
//   padding: 3px;
//   box-sizing: border-box;
// }

// .slider::before,
// .slider::after {
//   content: "";
//   z-index: 1;
//   background: none;
//   pointer-events: none;
// }

// .slider__nav {
//   box-sizing: border-box;
//   position: absolute;
//   bottom: 5%;
//   left: 50%;
//   width: 200px;
//   margin-left: -100px;
//   text-align: center;
// }

// .slider__navlink {
//   display: inline-block;
//   height: 15px;
//   width: 15px;
//   border-radius: 50%;
//   background-color: black;
//   margin: 0 10px 0 10px;
// }








// .read-article{
//   position: absolute;
//   top: 10px;
//   left: 10px;
//   z-index: 999;
//   color: #000;
//   background: white;
//   padding: 10px 20px;
//   border-radius: 10px;
//   font-family: arial;
//   text-decoration: none;
//   box-shadow: rgb(50 50 93 / 25%) 0 0 100px -20px, rgb(0 0 0 / 30%) 0 0 60px -15px;
// }
// .read-article:hover{
//     background: #d5d5d5;
//     box-shadow: rgb(50 50 93 / 25%) 0 0 100px -20px, rgb(0 0 0 / 30%) 0 0 60px 0px;
// }
// iframe[sandbox] .read-article{
//   display: none;
// }
.ps-section__left {
    max-width: 100% !important;
    width: 100% !important;
}
#homepage-1 .ps-home-banner .swiper-container {
    height: 100% !important;
    .swiper-wrapper {
        height: 450px !important;
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
        background-size:100%;
        background-color: #3498db !important;
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
