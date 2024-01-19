<template lang="html">
    
    <div class="   pt-0 ">
    <div class="ps-container ">
    <VueSlickCarousel class="deals-container row" v-bind="slickOptions" :arrows="true">
      <div v-for="product in categoriesList" class=" ml-1 col-12">
        <div class="deal-card ">
                    <nuxt-link :to="`${product.url}`" class="">
                     <img :src="`${product.imgTitle}`" alt="happimobiles" v-lazy-load class="deal-cards center-deal-img "/>
                     <h3 class="deal-cards-text mt-3">{{product.name}}</h3>
                     <span class="center-deals "
                        >Shop Now
                        <i
                            data-v-5811f95e=""
                            class="icon-chevron-right right-icon  mt-1 p-1"
                        ></i
                    ></span>
                           <!-- <p>{{product.name}}</p> -->
                    </nuxt-link>
                </div>
      </div>
    </VueSlickCarousel>
  </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: 'HomeDealsMobileCopy',
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
        slidesToShow: 2,
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
                    delay: 5000,
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
                    name: 'Tablets, Smart Phones and More DEALS',
                    url: '/search?q=iphone',
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
    },
};
</script>

<style lang="scss" scoped>

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
    display: flex;
    text-align: center;
    color:#616161;
    font-size:12px;
    font-weight: 600;
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

.deal-card {
    background: #efefef;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // padding: 12px 11px;
    // gap: 16px;

    width: 100%;
    height: 175px;
    // left: 0px;
    // top: 1px;
}

</style>
