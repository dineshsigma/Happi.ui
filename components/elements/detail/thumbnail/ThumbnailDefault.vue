<template lang="html">
    <client-only>
        <div class="ps-product__thumbnail dd" data-vertical="true" v-if='product != null'>
            <figure>
                <div class="ps-wrapper">

                    <div class="ps-product__gallery">
                        <div
                            class=" ps-carousel inside swiper"
                            v-swiper:swiperGallery="swiperOptionTop"
                            ref="mySwiper"
                        >
                            <div class="swiper-wrapper">
                                <div
                                    class="swiper-slide"
                                    v-if="product.pictures != null && product.pictures_new == null"
                                    v-for="image in product.pictures"
                                >
                                    <img :src="`https://happimobiles.s3.ap-south-1.amazonaws.com/happi/${image}.jpg`" :alt='product.name' />
<!--                                    <img :src="`https://d3dfpp6nfjsq5w.cloudfront.net/fit-in/411x450/happi/${image}.jpg`" :alt='product.name' />-->
                                </div>

                                <div
                                    class="swiper-slide"
                                    v-if="product.pictures_new.length != 0"
                                    v-for="image in product.pictures_new"
                                >
                                    <img :src="`${image}`"  :alt='product.name' />
                                </div>
                            </div>
                            <div class="swiper-nav">
                                <span class="swiper-arrow swiper-prev" @click="leftClick()">
                                    <i class="icon-chevron-left"></i>
                                </span>
                                <div class="swiper-arrow swiper-next" @click="rightClick()">
                                    <i class="icon-chevron-right"></i>
                                </div>
                            </div>
                            <div class="swiper-pagination swiper-pagination-bullets"></div>
                        </div>
                    </div>
                </div>
            </figure>
            <!--Variants-->
            <div class="ps-product__variants">
                <div class="ps-carousel swiper" v-swiper:swiperVariants="swiperOptionThumbs">
                    <div class="swiper-wrapper">
                        <div v-if="product.pictures_new == null && product.pictures != null" v-for="(image, index) in product.pictures"  :class="`swiper-slide ${ activeSlide === index ? 'active' : '' } `"
                            @click="handleClickSlide(index)"
                        >
                            <img :src="`https://happimobiles.s3.ap-south-1.amazonaws.com/happi/${image}.jpg`" :alt='product.name' />
                        </div>
                        <div
                            v-if="product.pictures_new.length != 0"
                            v-for="(image, index) in product.pictures_new"
                            :class="`swiper-slide ${ activeSlide === index ? 'active' : ''} `"
                            @click="handleClickSlide(index)"
                        >
                            <img :src="`${image}`"  :alt='product.name'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </client-only>
</template>

<script>

export default {
    name: 'ThumbnailDefault',
    props: {
        product: {
            type: Object,
            require: true,
            default: () => {}
        }
    },
    data() {
        return {
            swiperOptionTop: {
                loop: false,
                slidesPerView: 1,
                // navigation: {
                //     nextEl: '.swiper-next',
                //     prevEl: '.swiper-prev'
                // }
            },
            swiperOptionThumbs: {
                direction: 'vertical',
                loop: false,
                spaceBetween: 20,
                slidesPerView: 5,
                slideToClickedSlide: false,
                centeredSlides:true
            },
            activeSlide: 0
        };
    },
    methods: {
        handleClickSlide(index) {
            this.activeSlide = index;
            this.swiperVariants.activeIndex = index;
            this.swiperGallery.slideTo(index, 500, false);
        },
        leftClick() {
            if(this.activeSlide != 0){
                this.activeSlide -= 1;
                this.swiperVariants.activeIndex -= 1;
                this.swiperGallery.slideTo(this.activeSlide, 500, false);
                // this.swiperVariants.slideTo(this.activeSlide, 500, false);
            }  
        },
        rightClick() {
            if (this.product.pictures_new.length) {
                if (this.activeSlide != this.product.pictures_new.length - 1) {
                    this.activeSlide += 1;
                    this.swiperVariants.activeIndex += 1;
                    this.swiperGallery.slideTo(this.activeSlide, 500, false);
                    // this.swiperVariants.slideTo(this.activeSlide, 200, true);
                }
            } else {
                if (this.activeSlide != this.product.pictures - 1) {
                    this.activeSlide += 1;
                    this.swiperVariants.activeIndex += 1;
                    this.swiperGallery.slideTo(this.activeSlide, 500, false);
                    // this.swiperVariants.slideTo(this.activeSlide, 200, true);
                }
            }
        },
    },
};
</script>

<style lang="scss" scoped>
 .ps-product__thumbnail {
        figure {
            .ps-carousel {
                .swiper-wrapper {
                    text-align: center;
                    img {
                        height: 450px !important;
                    }
                }
                .swiper-nav {
                    .swiper-arrow {
                        opacity: 1;
                        visibility: visible;
                    }
                }
            }
        }
    }

@media (max-width: 767px) {
    .ps-product__thumbnail {
        margin-bottom: 0 !important;
        padding-bottom: 0;
        figure {
            margin-bottom: 0 !important;
            .ps-carousel {
                margin-bottom: 0 !important;
                padding-bottom: 0;
                .swiper-wrapper {
                    text-align: center;
                    img {
                        height: 250px !important;
                    }
                }
                .swiper-nav {
                    .swiper-arrow {
                        opacity: 1;
                        visibility: visible;
                    }
                }
            }
        }
    }
}
</style>
