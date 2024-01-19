<template lang="html">
    <div class="   pt-0 ">
    <div class="ps-container ">
        <h3 class="ent-mobile">WHAT'S TRENDING</h3>
        <br></br>
    
    <div v-for="product in categoriesList">
        <div class="item-6">
        <nuxt-link :to="`https://www.youtube.com/watch?v=4BV9xnNvqQE`" class="card video-thumb">
        <!--    <p>This page uses HTML5 Video and captions to demonstrate the possibilities and potentials of the platform. Please note that it uses APIs that are still in development and that may change with little or no warning.  I deemed the risk acceptable for the benefits that we get using them now.</p> 

        <h2>Starting point</h2>

        <p>This is the video we will work with. It uses a movie from the Blender Foundation (thanks :) )</p>-->
        <div class="vide-container">
            <video class='video' controls="controls" preload='none' width="100%" poster="`${product.imgTitle}`">
            <source id='mp4' src="`${product.url}`" type='video/mp4' />
            <source id='webm' src="`${product.url}`" type='video/webm' />
            <source id='ogv' src="`${product.url}`" type='video/ogg' />
            <!--
            Track to be used for accessibility using the VTT standard. 

            See https://www.html5rocks.com/en/tutorials/track/basics/ for more information on how to use text tracks
            -->
            <track kind="subtitles" label="English subtitles" src="subtitles_en.vtt" srclang="en" default>
            </track>
            <!-- 
            We can also add more than one text track and let the user choose which one to play. There is now way to 
            currently do this with the built in controls so it'll have to be scripted -->
            <track kind="subtitles" label="Deutsche Untertitel" src="subtitles_de.vtt" srclang="de">
            </track>

            <!-- 
            We're not using Flash as a fallback option. It should be coverage enough to 
            -->
            <p>Your user agent does not support the HTML5 Video element.</p>
            </video>
            <div id="extras"></div> <!-- End Extras -->
        </div> <!-- End Container -->
        </nuxt-link>
        <article>
        <h6 class="deal-cards-text mt-3">{{product.name}}</h6>

        <span>
            <i class="fas fa-lg fa-video" style="color: inherit;"></i> video&nbsp;
            <span class="date">
            16 Jan
            </span>
        </span>
        </article>
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
  </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: 'HomeVideoPlay',
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
        infinite: true
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
                    delay: 50000,
                    disableOnInteraction: false
                },
                slidesPerView: 2,
                spaceBetween: 0,
                navigation: {
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev'
                }
            },
        settings: {
          arrows: true,
          dots: true,
        },
        categoriesList: [
                {
                    imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/36bf843c-f56c-480e-bad2-be79859ad617.png',
                    name: 'boAt Aavante Bar 1280 | Best Bluetooth Soundbar under ₹6000',
                    url: 'https://www.youtube.com/watch?v=4BV9xnNvqQE',
                },
                {
                    imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/1f62d658-92fb-468c-9e37-1450a306c1d9.png',
                    name: 'CATCH BIG DEALS ON THE  GADGETS',
                    url: '/mobiles/buy-samsung-mobiles-online',
                },
                {
                    imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/36bf843c-f56c-480e-bad2-be79859ad617.png',
                    name: 'Tablets, Smart Phones and More DEALS',
                    url: '/search?q=iphone',
                },
                {
                    imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/1f62d658-92fb-468c-9e37-1450a306c1d9.png',
                    name: 'CATCH BIG DEALS ON THE  GADGETS',
                    url: '/mobiles/buy-samsung-mobiles-online',
                }
            ]
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
    },
};
</script>

<style lang="scss" scoped>

.card {
  background: white;
  text-decoration: none;
  color: #444;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  min-height: 100%;
  
  position: relative;
  top: 0;
  transition: all .1s ease-in;
}

.card:hover {
  top: -2px;
  box-shadow: 0 4px 5px rgba(0,0,0,0.2);
}

.card article {
  padding: 20px;
}

.card .video-thumb {
}

/* typography */
.card h1 {
  font-size: 20px;
  margin: 0;
  color: #333;
}

.card p { 
  line-height: 1.4;
}

.card span {
  font-size: 12px;
  font-weight: bold;
  color: #999;
  text-transform: uppercase;
  letter-spacing: .05em;
  margin: 2em 0 0 0;
}

.date {
  white-space:nowrap;
}

.right-icon{
    font-size:8px;
}
.slide {
   height: 300px;
   background: #ccc;
   text-align: center;
   line-height: 300px;
}

.slick-track {
  margin: 25px auto;
  width: 160px;
  background: #F00;
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
.center-deals {
    text-align: center;
    display: flex;
    justify-content:center ;
    
}
.center-deal-img {
    text-align: center;
    width:50%;
    display: flex;
    justify-content:center ;

    margin-left: auto;
    margin-right: auto;
    

}

.deal-cards {
    margin-top: 12%;
    
}
.slick-slide {
    width:100px !important;
}
.deal-cards-text {
    padding: 5%;
    text-align: center;
    color:#616161;
    font-size:12px;
    text-transform: uppercase;
    b{
        color:#000000;
    }

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

.video-card {
    background: #efefef;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // padding: 12px 11px;
    // gap: 16px;

    width: 100%;
    height: 350px;
    // left: 0px;
    // top: 1px;
}

</style>
