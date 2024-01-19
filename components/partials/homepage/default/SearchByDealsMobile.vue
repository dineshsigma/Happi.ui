<template lang="html">
    <div class="deal-container-mobile col-12 "> 
        <div class="row align-items-center pt-5 pb-5">    
            <div class="col-12">
                <div class="ps-block__left">
            <h3 class="search-deals search-deals-head">Searh By Deals</h3>
        </div>
        </div>
           
                <div v-for="product in categoriesList" class="col-4 mb-3 deals-cards">
                    <!-- <div> -->
                        <div class="deal-list-card">
                        <nuxt-link :to="`${product.url}`">
                            <img
                                :src="`${product.imgTitle}`"
                                class="deal-image"
                                alt="happimobiles"
                                v-lazy-load
                                />
                            <p class="deal-name">{{product.name}}</p>
                        </nuxt-link>
                    <!-- </div> -->
                </div>
            </div> 
        </div>   
    </div>
</template>
<script>
export default {
    name: 'SearchByDealsMobile',
    components: {
    },
    props: {},
    data() {
        return {
            // carouselSetting: {
            //     // loop: true,
            //     slidesPerView: 8,
            //     spaceBetween: 15,
            //     scrollbar: {
            //         draggable: false,
            //     },
            //     autoplay: {
            //         delay: 3000,
            //         disableOnInteraction: false
            //     },
            //     navigation: {
            //         // nextEl: '.ps-deal-of-day .swiper-next',
            //         // prevEl: '.ps-deal-of-day .swiper-prev'
            //         nextEl: '',
            //         prevEl: '',
            //     },
            //     breakpoints: {
            //         1680: {
            //             slidesPerView: 8,
            //         },
            //         1366: {
            //             slidesPerView: 5,
            //         },
            //         1024: {
            //             slidesPerView: 4,
            //         },
            //         768: {
            //             slidesPerView: 4,
            //             spaceBetween: 10,
            //         },
            //         480: {
            //             slidesPerView: 4,
            //             spaceBetween: 10,
            //         },
            //     },
            // },
            categoriesList: [
                {
                    imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/d930dbfc-aa96-4be9-91e8-be5a4614a5c3.png',
                    name: 'Super Deals',
                    url: '/search?q=iphone',
                },
                {
                    imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/48292efc-8d90-488c-85c3-e5f4cc638484.png',
                    name: 'Discounts',
                    url: '/mobiles/buy-samsung-mobiles-online',
                },
                {
                    imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/2d22e864-06b6-479d-9204-93ad4006fb7a.png',
                    name: 'Brand Offers',
                    url: '/mobiles/oneplus',
                },
                {
                    imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/51c0f4bf-d342-4cee-8589-3cc143358d9d.png',
                    name: 'Instant Discounts',
                    url: '/mobiles/buy-oppo-mobiles-online',
                },
                {
                    imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/6dd72924-5e58-4b60-a526-8e0ba7cee583.png',
                    name: 'Cashbacks',
                    url: '/mobiles/buy-mi-mobiles-online',
                },
                {
                    imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/e46d8864-3644-453c-93fc-b6b1c26355d8.png',
                    name: 'Bank offers',
                    url: '/mobiles/vivo',
                }
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
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
.deals-cards{
    // border-radius: 50px;
}
.deal-name{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 650 !important;
    font-size: 14px !important;
    line-height: 15px;
    /* identical to box height, or 125% */

    text-align: center;

    color: #000000;
}
.deal-image{
    height:30px;
    width:30px;
    margin:24%;
    text-align: center;
}
.search-deals-head{
    font-size:20px !important;
}
.deal-list-card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px 15px;
    gap: 10px;
    isolation: isolate;
 
    height: 100px;

    background: linear-gradient(180deg, rgba(251, 144, 19, 0.28) 0%, #FFE0BC 100%);
}
.deal-container-mobile{
    background-color: #ffffff;
}

</style>
