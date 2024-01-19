<template>
    <div class="entertainment-box">
        <body><head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
  </head>
    </body>
        <div class="container">
            <h3 class="title-entertainment text-center">Home Entertainments</h3>
            <!-- <HomeCarousel/> -->
            <div class="row align-items-end">
                <div class="col-7 slider-box p-0 animate__animated animate__fadeInRight">
                    <div class="row ml-0 mr-0">
                        <div>
                            <div class="tv-card">
                                <div class="row">
                                    <div class="col-5 tv-image">
                                        <img src="https://s3.ap-south-1.amazonaws.com/happimobiles/product-main-images/71WDdKKrkEL._SL1500_.webp" alt="TV"/>
                                    </div>
                                    <div class="col-7 tv-text-box">
                                        <p class="tv-brand-title">TVS-SAMSUNG</p>
                                        <h3 class="tv-name">Samsung - Smart TV - 1m 46cm (58") Crystal 4K UHD (Ultra HD) Smart TV (UA58AUE70)</h3>
                                        <h3 class="tv-price">₹ 52,499.00</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="tv-card">
                                <div class="row">
                                    <div class="col-5 tv-image">
                                        <img src="https://s3.ap-south-1.amazonaws.com/happimobiles/product-main-images/71WDdKKrkEL._SL1500_.webp" alt="TV"/>
                                    </div>
                                    <div class="col-7 tv-text-box">
                                        <p class="tv-brand-title">TVS-SAMSUNG</p>
                                        <h3 class="tv-name">Samsung - Smart TV - 1m 46cm (58") Crystal 4K UHD (Ultra HD) Smart TV (UA58AUE70)</h3>
                                        <h3 class="tv-price">₹ 52,499.00</h3>
                                    </div>
                                </div>
                            </div>
                        </div>  
                        <div>
                            <div class="tv-card">
                                <div class="row">
                                    <div class="col-5 tv-image">
                                        <img src="https://s3.ap-south-1.amazonaws.com/happimobiles/product-main-images/71WDdKKrkEL._SL1500_.webp" alt="TV"/>
                                    </div>
                                    <div class="col-7 tv-text-box">
                                        <p class="tv-brand-title">TVS-SAMSUNG</p>
                                        <h3 class="tv-name">Samsung - Smart TV - 1m 46cm (58") Crystal 4K UHD (Ultra HD) Smart TV (UA58AUE70)</h3>
                                        <h3 class="tv-price">₹ 52,499.00</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="tv-card">
                                <div class="row">
                                    <div class="col-5 tv-image">
                                        <img src="https://s3.ap-south-1.amazonaws.com/happimobiles/product-main-images/71WDdKKrkEL._SL1500_.webp" alt="TV"/>
                                    </div>
                                    <div class="col-7 tv-text-box">
                                        <p class="tv-brand-title">TVS-SAMSUNG</p>
                                        <h3 class="tv-name">Samsung - Smart TV - 1m 46cm (58") Crystal 4K UHD (Ultra HD) Smart TV (UA58AUE70)</h3>
                                        <h3 class="tv-price">₹ 52,499.00</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-5">
                            <div>
                                <img class="w-100" src="https://s3.ap-south-1.amazonaws.com/happimobiles/product-main-images/71WDdKKrkEL._SL1500_.webp" alt="TV"/>
                            </div>
                            <div class="center">
                                <button class="btn shop-button"><span class="button-text">SHOP NOW</span></button>
                            </div>
                </div>    -->
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { CarouselPlugin } from 'bootstrap-vue'
import HomeCarousel from '~/components/partials/homepage/default/HomeCarousel'

Vue.use(CarouselPlugin)
export default {
    name: 'HomeEntertainmentsNew',
    components: {
        HomeCarousel
    },
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
.button-text{
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.06em;
    text-transform: uppercase;

    color: #FFFFFF;
}
.shop-button{
    width: 144px;
    height: 39px;

    background: #FB9013;
    border-radius: 30px;
    padding: 10px 30px;
    margin:10px !important;

    font-family: 'Open Sans';
}
.slider-box{
    // text-align: left;
    align-items: left !important;
    // margin-top: 100px !important;
}
.tv-image-2{
    width: 500px;
    height: 400px;

    // background: url(da-banner-3-1.png);
    transform: matrix(-1, 0, 0, 1, 0, 0);
}
.tv-price{
    width: 185px;
    height: 27px;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;

    color: #333333;
}
.tv-name{
    width: 185px;
    height: 76px;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;

    color: #333333;
}
.tv-text-box{
    margin-top: 15px;
}
.tv-brand-title{
    width: 185px;
    height: 14px;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    /* identical to box height, or 100% */

    text-transform: uppercase;

    color: rgba(0, 0, 0, 0.75);
}
.tv-image{
    width: 185px;
    height: 128px;
}
.tv-card{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 15px 10px;
    gap: 10px;
    isolation: isolate;

    width: 350px;
    height: 170px;

    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.05);
}
.entertainment-box{
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    padding: 50px 0;

    // width: 100%;
    // height: 600px;

    background: linear-gradient(180deg, #F3EDED 0%, #EAEAEB 100%);
}
.title-entertainment{
    // width: 1420px;
    // height: 33px;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    margin-bottom: 5% !important;
    // font-size: 24px;
    // line-height: 33px;
    // padding-top:20px;
    /* identical to box height */

    // text-align: center;
    text-transform: uppercase;

    color: #323232;
}

</style>
