OrganicBanner<template lang="html">
    <div class="ps-product-list ps-deal-of-day ps-section--carousel-outside pb-12">
        <div class="ps-container">
            <div class="ps-section__header mb-3">
                <div class="ps-block--countdown-deal">
                    <div class="ps-block__left">
                        <h3>HOME ENTERTAINMENT</h3>
                    </div>
                    <!-- <div class="ps-block__right">
                        <figure>
                            <figcaption>End in:</figcaption>
                            <count-down-simple
                                time="12 30 2020, 12:00 am"
                                format="MM DD YYYY, h:mm a"
                            />
                        </figure>
                    </div> -->
                </div>
                <nuxt-link to="/shop">
                    View All
                </nuxt-link>
            </div>
            <div class="ps-section__content pt-4">
                <carousel-arrows type="simple" />
                <div
                    class="ps-carousel"
                    v-swiper:dealOfDayCarousel="carouselSetting"
                >
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="product in istvs.products">
                            <product-inner
                                :product="product"
                                :key="product.id"
                            />
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { carouselFullwidth } from '~/utilities/carousel-helpers.js';
import ProductDefault from '../../../elements/product/ProductDefault';
import { getColletionBySlug } from '../../../../utilities/product-helper';
import CarouselArrows from '~/components/elements/commons/CarouselArrows';
import ProductInner from '~/components/elements/product/ProductInner';

import { istvs } from '~/static/data/homepage';

export default {
    components: { CarouselArrows, ProductDefault,ProductInner },
    props: {
        collectionSlug: {
            type: String,
            default: ''
        }
    },
    computed: {
        ...mapState({
            collections: state => state.collection.collections
        }),

        products() {
            return getColletionBySlug(this.collections, this.collectionSlug);
        }
    },
    data() {
        return {
              istvs : istvs,
            carouselSetting: {
                ...carouselFullwidth,
                navigation: {
                    nextEl: '.ps-garden-kitchen .swiper-next',
                    prevEl: '.ps-garden-kitchen .swiper-prev'
                }
            }
        };
    }
};
</script>
