<template lang="html">
    <div class="lightgray-bg sec-30px">
        <div class="ps-container pb-5">
            
            <div class="d-flex align-item-center justify-content-between">
                <h3 class="trending-title-mobile pt-3">WHAT'S TRENDING</h3>
                
                <!--Carousel controls--> 
                    <!-- <div class="swiper-nav vedio-swiper-nav d-flex align-item-center justify-content-between">
                        <div class="swiper-arrow swiper-prev justify-content-center mr-2"
                            ><i class="icon-chevron-left"></i
                        ></div>
                        <div class="swiper-arrow swiper-next justify-content-center">
                            <i class="icon-chevron-right"></i>
                        </div>
                    </div> -->
               </div> 

            <div class="video-container m-3">
                <div
                    class="ps-carousel col-12 p-0"
                    v-swiper:myVideoSwiper="swiperOptionVideo"
                >
                    <div class="swiper-wrapper">
                        <div
                            class="swiper-slide trending-card"
                            style="cursor: pointer"
                            v-for="product in categoriesList"
                        >
                        <div class="col-12 p-2">
                            <iframe 
                            width="auto" height="350px" 
                            :src="`${product.imgTitle}`"  
                            title="happimobiles"
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>
                        </div>
                        </div>
                        
                    </div>
                 
                </div>
            </div>
        </div> </div>    
</template>

<script>
export default {
    name: 'HomeVideoPlayMobile',
    ssr: true,
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
                    delay: 8000,
                    disableOnInteraction: true,
                },
                slidesPerView: 1,
                spaceBetween: 0,
                // navigation: {
                //     nextEl: '.swiper-next',
                //     prevEl: '.swiper-prev',
                // },
            },
            settings: {
                arrows: true,
                dots: true,
            },

            categoriesList: [
            {
                    imgTitle: 'https://www.youtube.com/embed/GwbcNNLD5LA',
                    name: 'Happi Mobiles 5th Anniversary Celebrations | 2023',
                    url: 'https://www.youtube.com/embed/GwbcNNLD5LA',
                    link: 'https://www.youtube.com/embed/GwbcNNLD5LA',
                },
                {
                    imgTitle: 'https://www.youtube.com/embed/ApW64gYX8kY',
                    name: '5 Years Anniversary offers | Buy 1 & Get 5 | 2023',
                    url: 'https://www.youtube.com/embed/ApW64gYX8kY',
                    link: 'https://www.youtube.com/embed/ApW64gYX8kY',
                },
                {
                    imgTitle: 'https://www.youtube.com/embed/ob6P_iAqz0A',
                    name: 'Samsung Galaxy S23 Ultra | Offer | Buds2 Pro, Watch5 | Now Available In Happi Stores Near You',
                    url: 'https://www.youtube.com/embed/1bwHGRk8GQ8',
                    link: 'https://www.youtube.com/embed/1bwHGRk8GQ8',
                },
                // {
                //     imgTitle: 'https://www.youtube.com/embed/-dw0Of8iyIs',
                //     name: 'The All New Samsung Galaxy S23 Series | Now Available At Happi Stores Near you',
                //     url: 'https://www.youtube.com/embed/9c_V31gcP1E',
                //     link: 'https://www.youtube.com/embed/9c_V31gcP1E',
                // }
                // {
                //     imgTitle: 'https://www.youtube.com/embed/1bwHGRk8GQ8',
                //     name: 'A boAt Aavante Bar 1280 | Best Bluetooth Soundbar under ₹6000',
                //     url: 'https://www.youtube.com/embed/1bwHGRk8GQ8',
                //     link: 'https://www.youtube.com/embed/1bwHGRk8GQ8',
                // },
                // {
                //     imgTitle: 'https://www.youtube.com/embed/9c_V31gcP1E',
                //     name: 'B boAt Aavante Bar 1280 | Best Bluetooth Soundbar under ₹6000',
                //     url: 'https://www.youtube.com/embed/9c_V31gcP1E',
                //     link: 'https://www.youtube.com/embed/9c_V31gcP1E',
                // },
                // {
                //     imgTitle: 'https://www.youtube.com/embed/hgALj8Q7dLo',
                //     name: 'A boAt Aavante Bar 1280 | Best Bluetooth Soundbar under ₹6000',
                //     url: 'https://www.youtube.com/embed/1bwHGRk8GQ8',
                //     link: 'https://www.youtube.com/embed/1bwHGRk8GQ8',
                // },
                // {
                //     imgTitle: 'https://www.youtube.com/embed/_8JV7TxH9kk',
                //     name: 'B boAt Aavante Bar 1280 | Best Bluetooth Soundbar under ₹6000',
                //     url: 'https://www.youtube.com/embed/9c_V31gcP1E',
                //     link: 'https://www.youtube.com/embed/9c_V31gcP1E',
                // }
                // {
                //     imgTitle: 'https://www.youtube.com/embed/1bwHGRk8GQ8',
                //     name: 'A boAt Aavante Bar 1280 | Best Bluetooth Soundbar under ₹6000',
                //     url: 'https://www.youtube.com/embed/1bwHGRk8GQ8',
                //     link: 'https://www.youtube.com/embed/1bwHGRk8GQ8',
                // },
                // {
                //     imgTitle: 'https://www.youtube.com/embed/9c_V31gcP1E',
                //     name: 'B boAt Aavante Bar 1280 | Best Bluetooth Soundbar under ₹6000',
                //     url: 'https://www.youtube.com/embed/9c_V31gcP1E',
                //     link: 'https://www.youtube.com/embed/9c_V31gcP1E',
                // },
                // {
                //     imgTitle: 'https://www.youtube.com/embed/1bwHGRk8GQ8',
                //     name: 'A boAt Aavante Bar 1280 | Best Bluetooth Soundbar under ₹6000',
                //     url: 'https://www.youtube.com/embed/1bwHGRk8GQ8',
                //     link: 'https://www.youtube.com/embed/1bwHGRk8GQ8',
                // },
                // {
                //     imgTitle: 'https://www.youtube.com/embed/9c_V31gcP1E',
                //     name: 'B boAt Aavante Bar 1280 | Best Bluetooth Soundbar under ₹6000',
                //     url: 'https://www.youtube.com/embed/9c_V31gcP1E',
                //     link: 'https://www.youtube.com/embed/9c_V31gcP1E',
                // },
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

        // setTimeout(() => {
        //     console.log('bannersDesk', this.bannersDesk);
        // });
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
.vedio-cont {
    background: #fff !important;
}
  
.swiper-arrow {
    width:26px;
    height: 26px;    display: flex;
    align-items: center;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25); 
    background-color: #fff; 
    border-radius: 100px;
    &:hover {
        background-color: #f07720;
    }
}
.ps-carousel .swiper-arrow i {
    font-size: 13px;
} 
.swiper-nav {
    // height: 0;
    align-items: center;
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
    // height: auto;
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
