<template lang='html'>
    <main id='homepage-1'>
        <!--Desktop view-->
        <div class="mob-hide">
            <home-banner :homepageData='homepageData' />
            <!-- <HomeCarouselNew /> -->
            <!-- <div class='ps-container'>
            <div class='row'>
                <div class='col-12 col-md-4'>
                    <a :href='homepageData.imagelinktl' :title='homepageData.titletl'>
                        <img :src='homepageData.imageurltl' :alt='homepageData.titletl' v-lazy-load>
                    </a>
                    <a :href='homepageData.imagelinkbl' :title='homepageData.titlebl'>
                        <img :src='homepageData.imageurlbl' :alt='homepageData.titlebl' v-lazy-load>
                    </a>
                </div>
                <div class='col-12 col-md-4'>
                    <img :src='homepageData.imageurlc' :alt='homepageData.titlec' v-lazy-load>
                </div>
                <div class='col-12 col-md-4'>
                    <a :href='homepageData.imagelinktr' :title='homepageData.titletr'>
                        <img :src='homepageData.imageurltr' :alt='homepageData.titletr' v-lazy-load>
                    </a>
                    <a :href='homepageData.imagelinkbr' :title='homepageData.titlebr'>
                        <img :src='homepageData.imageurlbr' :alt='homepageData.titlebr' v-lazy-load>
                    </a>
                </div>
            </div>
            </div> -->
        <!-- <site-feautures-fullwidth/> -->
        <HomeDealsDesktop/>
        <home-slider-with-ad 
            v-if='laptops != null'
                :newArrivals='newArrivals'
                collection-slug='deal-of-the-day'
                :homepageData='homepageData'
                />
        <!-- <HomeAd /> -->
        <HomeAdSingle />
        <home-slider-without-ad 
            v-if='laptops != null'
                :newArrivals='laptops'
                collection-slug='deal-of-the-day'
                :homepageData='homepageData'
                />
        <HomeBrandsCategories/>
        <!-- <home-laptops 
            v-if='laptops != null'
                :newArrivals='newArrivals'
                collection-slug='deal-of-the-day'
                :homepageData='homepageData'
                v-lazy-load
                /> -->
        
        <HomeEntertainmentDesktop
                v-if='newArrivals !== null'
                :newArrivals='istvs'
                collection-slug='deal-of-the-day'
                :homepageData='homepageData'
                imageAlign='left'
                 />
        <!-- <HomeAd /> -->
        <HomeAdSingleTwo />
        <!-- <home-slider-without-ad 
            v-if='laptops != null'
                :newArrivals='laptops'
                collection-slug='deal-of-the-day'
                :homepageData='homepageData'
                /> -->
        <!-- <HomeAd /> -->
        <home-slider-without-ad 
            v-if='laptops != null'
                :newArrivals='isHomeSuper'
                collection-slug='deal-of-the-day'
                :homepageData='homepageData'
                />
        <HomeVideoPlayDesktop :homepageData='homepageData'/>
        <HomeDeskFullAd />
        <HomeTabView 
            v-if='laptops != null'
                :newTab1='isBudgetAbove50'
                :newTab2="laptops"
                :newTab3="istvs"
                :newTab4="isHomeSuper"
                collection-slug='deal-of-the-day'
                :homepageData='homepageData' />
        <!-- <site-feautures-fullwidth/> -->
        <site-feautures-desktop/>
        <!-- <fdm/> -->
        
        
        <!-- <home-default-deal-of-day
            class='mt-4'
            v-if='newArrivals !== null'
            :newArrivals='newArrivals'
            collection-slug='deal-of-the-day'
            :homepageData='homepageData'
            imageAlign='left'
        /> -->
        <!-- <home-default-deal-of-day
            v-if='laptops != null'
            :newArrivals='laptops'
            collection-slug='deal-of-the-day'
            :homepageData='homepageData'
            imageAlign='right'
        /> -->
        <!-- <home-default-top-categories /> -->

        <!-- <home-default-deal-of-day
            v-if='isBudgetBelow10 != null'
            :newArrivals='isBudgetBelow10'
            collection-slug='deal-of-the-day'
            imageAlign='right'
            :homepageData='homepageData'
        /> -->
        <!-- <home-default-deal-of-day
            v-if='istvs != null'
            :newArrivals='istvs'
            collection-slug='deal-of-the-day'
            imageAlign='left'
            :homepageData='homepageData'
        /> -->

        <!-- <home-default-deal-of-day
            v-if='isBudget15To50 != null'
            :newArrivals='isBudget15To50'
            collection-slug='deal-of-the-day'
            imageAlign='left'
            :homepageData='homepageData'
        /> -->
        <!-- <home-default-deal-of-day
            v-if='isHomeSuper != null'
            :newArrivals='isHomeSuper'
            collection-slug='deal-of-the-day'
            imageAlign='right'
            :homepageData='homepageData'
        /> -->
        <!-- <home-default-deal-of-day
            v-if='isBudgetAbove50 != null'
            :newArrivals='isBudgetAbove50'
            collection-slug='deal-of-the-day'
            imageAlign='left'
            :homepageData='homepageData'
        /> -->
        </div>


        <!--Mobile view-->
        <div class="desktop-hide" >
            <home-categories-mobile />
            <home-banner :homepageData='homepageData' />
            <HomeDealsMobileCopy class="pt-5" :homepageData='homepageData' />
            <home-laptops 
            v-if='laptops != null'
                :newArrivals='newArrivals'
                collection-slug='deal-of-the-day'
                :homepageData='homepageData'
                />
            <HomeAd/>
            <home-laptops 
            v-if='laptops != null'
                :newArrivals='laptops'
                collection-slug='deal-of-the-day'
                :homepageData='homepageData'
                />
            <HomeAdTwo />
            <HomeBrandsMobile />
            <HomeAd />
            <!-- <SearchByDealsMobile v-lazy-load/> -->
            <HomeEntertainmentMobile 
                class='mt-4'
                v-if='newArrivals !== null'
                :newArrivals='istvs'
                collection-slug='deal-of-the-day'
                :homepageData='homepageData'
                imageAlign='left'
            />
            <HomeAdTwo />
            <!-- <HomeVideoPlay :homepageData='homepageData' v-lazy-load /> -->
            <HomeVideoPlayMobile :homepageData='homepageData' />
            <home-laptops 
            v-if='laptops != null'
                :newArrivals='isHomeSuper'
                collection-slug='deal-of-the-day'
                :homepageData='homepageData'
            />
        </div>



        
        
        <!-- <home-ads-columns /> -->

        <!-- <div class='ps-container'>
            <div class='row'>
                <div class='col-12 col-md-4'>

                    <a :href='homepageData.imagelinktl' :title='homepageData.titletl'>
                        <img :src='homepageData.imageurltl' :alt='homepageData.titletl' v-lazy-load>
                    </a>
                    <a :href='homepageData.imagelinkbl' :title='homepageData.titlebl'>
                        <img :src='homepageData.imageurlbl' :alt='homepageData.titlebl' v-lazy-load>
                    </a>
                </div>
                <div class='col-12 col-md-4'>
                    <img :src='homepageData.imageurlc' :alt='homepageData.titlec' v-lazy-load>
                </div>

                <div class='col-12 col-md-4'>
                    <a :href='homepageData.imagelinktr' :title='homepageData.titletr'>
                        <img :src='homepageData.imageurltr' :alt='homepageData.titletr' v-lazy-load>
                    </a>
                    <a :href='homepageData.imagelinkbr' :title='homepageData.titlebr'>
                        <img :src='homepageData.imageurlbr' :alt='homepageData.titlebr' v-lazy-load>
                    </a>
                </div>
            </div>
        </div> -->

        <!-- <site-feautures-fullwidth
            class='mob-hide' /> -->
        


        <!-- <home-default-deal-of-day
            v-if='laptops != null'
            :newArrivals='laptops'
            collection-slug='deal-of-the-day'
            :homepageData='homepageData'
            imageAlign='right'
        /> -->
<!-- 
        <div class="row">
            <search-by-brand />
            <home-by-categories />
            <home-by-categories />
        </div> -->
        
        
        <!-- <home-new/> -->


        <!-- <div class="">
        <div class="row">
            <div class="col-6">
            <home-default-top-categories />
            </div>
            <div class="col-3">
            <home-by-categories />
            </div>
            <div class="col-3">
            <home-by-categories />
            </div>
        </div>
        </div> -->

        <!-- <home-default-deal-of-day
            v-if='isBudgetBelow10 != null'
            :newArrivals='isBudgetBelow10'
            collection-slug='deal-of-the-day'
            imageAlign='right'
            :homepageData='homepageData'
        /> -->


        <!-- <home-default-deal-of-day
            v-if='istvs != null'
            :newArrivals='istvs'
            collection-slug='deal-of-the-day'
            imageAlign='left'
            :homepageData='homepageData'
        /> -->

        <!-- <home-default-deal-of-day
            v-if='isBudget15To50 != null'
            :newArrivals='isBudget15To50'
            collection-slug='deal-of-the-day'
            imageAlign='left'
            :homepageData='homepageData'
        /> -->

        <!-- <home-default-deal-of-day
            v-if='isHomeSuper != null'
            :newArrivals='isHomeSuper'
            collection-slug='deal-of-the-day'
            imageAlign='right'
            :homepageData='homepageData'
        /> -->

        <!-- <home-default-deal-of-day
            v-if='isBudgetAbove50 != null'
            :newArrivals='isBudgetAbove50'
            collection-slug='deal-of-the-day'
            imageAlign='left'
            :homepageData='homepageData'
        /> -->


        <!-- <home-ads /> -->
        <!--        <LazyHydrate when-visible>-->
        <!--            <new-arrivals-->
        <!--                v-if='collections !== null'-->
        <!--                collection-slug='new-arrivals-products'-->
        <!--            />-->
        <!--        </LazyHydrate>-->
        <!--         <download-app />-->
        <!--        <messaging />-->

        <!-- <newsletters layout='fullwidth' /> -->
    </main>
</template>
<script>

import { mapState } from 'vuex';
import DownloadApp from '~/components/partials/commons/DownloadApp';
// import Newsletters from '~/components/partials/commons/Newsletters';
import SiteFeauturesFullwidth from '~/components/partials/commons/SiteFeauturesFullwidth';
import SiteFeauturesDesktop from '~/components/partials/commons/SiteFeauturesDesktop';
import HomeDealsDesktop from '~/components/partials/commons/HomeDealsDesktop';
import HomeBrandsCategories from '~/components/partials/commons/HomeBrandsCategories';
import HomeAd from '~/components/partials/commons/HomeAd';
import HomeAdTwo from '~/components/partials/commons/HomeAdTwo';
import HomeAdSingle from '~/components/partials/commons/HomeAdSingle';
import HomeAdSingleTwo from '~/components/partials/commons/HomeAdSingleTwo';
// import NewArrivals from '~/components/partials/homepage/default/NewArrivals';
import HomeDefaultTopCategories from '~/components/partials/homepage/default/HomeDefaultTopCategories';
import HomeBrandsMobile from '~/components/partials/homepage/default/HomeBrandsMobile';
import SearchByDealsMobile from '~/components/partials/homepage/default/SearchByDealsMobile';
import HomeDealsMobile from '~/components/partials/homepage/default/HomeDealsMobile';
import HomeDealsMobileCopy from '~/components/partials/homepage/default/HomeDealsMobileCopy';
import HomeVideoPlay from '~/components/partials/homepage/default/HomeVideoPlay';
import HomeVideoPlayDesktop from '~/components/partials/homepage/default/HomeVideoPlayDesktop';
import HomeVideoPlayMobile from '~/components/partials/homepage/default/HomeVideoPlayMobile';
import HomeTabView from '~/components/partials/homepage/default/HomeTabView';
import HomeDeskFullAd from '~/components/partials/homepage/default/HomeDeskFullAd';
import HomeCategoriesMobile from '~/components/partials/homepage/default/HomeCategoriesMobile';
import HomeBannerLaptops from '~/components/partials/homepage/default/HomeBannerLaptops';
import HomeBanner from '~/components/partials/homepage/default/HomeBanner';
import HomeBannerCopy from '~/components/partials/homepage/default/HomeBannerCopy';
import HomeCarouselNew from '~/components/partials/homepage/default/HomeCarouselNew';
import HomeDefaultDealOfDay from '~/components/partials/homepage/default/HomeDefaultDealOfDay';
import HomeByCategories from '~/components/partials/homepage/default/HomeByCategories';
import SearchByBrand from '~/components/partials/homepage/default/SearchByBrand';
import HomeLaptops from '~/components/partials/homepage/default/HomeLaptops';
import HomeSliderWithAd from '~/components/partials/homepage/default/HomeSliderWithAd';
import HomeSliderWithoutAd from '~/components/partials/homepage/default/HomeSliderWithoutAd';
import HomeLaptopsCopy from '~/components/partials/homepage/default/HomeLaptopsCopy';
import HomeEntertainmentMobile from '~/components/partials/homepage/default/HomeEntertainmentMobile';
import HomeEntertainmentDesktop from '~/components/partials/homepage/default/HomeEntertainmentDesktop';
// import HomeNew from '~/components/partials/homepage/default/HomeNew';
import FDM from '~/components/shared/footers/modules/FDM';

//import Messaging from '~/components/shared/Messaging.vue';
// import {
//     newArrivals,
//     istvs,
//     isHomeSuper,
//     isHomeDual,
//     isHomeGaming
// } from '~/static/data/homepage';


export default {
    components: {
        HomeDefaultDealOfDay,
        HomeBanner,
        HomeBannerCopy,
        SiteFeauturesFullwidth,
        HomeAd,
        HomeAdTwo,
        DownloadApp,
        // Newsletters,
        // NewArrivals,
        HomeDefaultTopCategories,
        HomeByCategories,
        SearchByBrand,
        HomeLaptops,
        HomeBrandsMobile,
        HomeDealsMobile,
        HomeDealsMobileCopy,
        HomeCategoriesMobile,
        SearchByDealsMobile,
        HomeEntertainmentMobile,
        HomeCarouselNew,
        HomeLaptopsCopy,
        HomeBannerLaptops,
        HomeVideoPlay,
        HomeDealsDesktop,
        HomeBrandsCategories,
        HomeEntertainmentDesktop,
        HomeVideoPlayDesktop,
        HomeDeskFullAd,
        HomeTabView,
        SiteFeauturesDesktop,
        HomeSliderWithAd,
        HomeSliderWithoutAd,
        HomeAdSingle,
        HomeAdSingleTwo,
        FDM,
        HomeVideoPlayMobile
        //Messaging
    },

    transition: 'zoom',
    layout: 'layout-default',
    data() {
        return {
            newArrivals: {
                title: 'LATEST LAUNCHES',
                type: 'ALGOLIA',
                products: []
            },
            isHomeSuper: {
                title: 'TRENDING GADGETS',
                type: 'ALGOLIA',
                products: []
            },
            //isHomeGaming: isHomeGaming,
            isHomeGaming: {
                'title': 'EMERGING MODELS',
                type: 'ALGOLIA',
                products: []
            },
            istvs: {
                title: 'HOME ENTERTAINMENT',
                type: 'ALGOLIA',
                products: []
            },
            //isHomeDual: isHomeDual,
            isHomeDual: {
                'title': 'DUAL CAMERA PHONES',
                type: 'ALGOLIA',
                products: []
            },
            laptops: {
                title: 'LATEST LAPTOPS',
                type: 'ALGOLIA',
                products: []
            },
            isBudgetBelow10: {
                title: 'BUDGET SMARTPHONES',
                type: 'ALGOLIA',
                products: []
            },
            isBudget15To50: {
                title: 'FAST MOVING SMARTPHONES',
                type: 'ALGOLIA',
                products: []
            },
            isBudgetAbove50: {
                title: 'PREMIUM SMARTPHONES',
                type: 'ALGOLIA',
                products: []
            },
            homepageData: {}
        };
    },
    computed: {
        ...mapState({
            collections: state => state.collection.collections,
            wishlistItems: state => state.wishlist.wishlistItems
        })
    },
    async asyncData({ $http, $seo }) {
        var homepageData = await $http.$get('https://dev-services.happimobiles.com/api/homepage');
        $seo({
            title: 'Buy Mobile Phones & Accessories Online | Buy Mobiles Online at Best Prices in India | Get 2hrs Delivery',
            templateTitle: '%title% - Happi Mobiles',
            description: 'Buy Mobile Phones & Accessories Online At Lowest Prices In India At Happi mobiles.nearby Happi mobiles showroom with unmatched quality, affordable price, and exciting offers.',
            keywords: 'Happi Mobiles,Buy Mobile Phones ,Accessories Online,Buy Mobiles Online at Best Prices in India .',
            openGraph: {
                site: 'Happi Mobiles',
                type: 'website',
                title: 'Buy Mobile Phones & Accessories Online | Buy Mobiles Online at Best Prices in India | Get 2hrs Delivery - Happimobiles',
                description: 'Buy Mobile Phones & Accessories Online At Lowest Prices In India At Happi mobiles.nearby Happi mobiles showroom with unmatched quality, affordable price, and exciting offers.'
            },
            twitter: {
                site: 'Happi Mobiles',
                type: 'website',
                title: 'Buy Mobile Phones & Accessories Online | Buy Mobiles Online at Best Prices in India | Get 2hrs Delivery - Happimobiles',
                description: 'Buy Mobile Phones & Accessories Online At Lowest Prices In India At Happi mobiles.nearby Happi mobiles showroom with unmatched quality, affordable price, and exciting offers.'
            },
            facebook: {
                appId: '826575227724107',
                pageId: ''
            }
        });
        return {
            homepageData: homepageData
        };
    },

    async created() {
        // console.log(this.homepageData, 'HOME PAGE DATA NEW');
        let userData = this.$cookies.get('userDetails');
        if (userData) {
            // const result = await this.$store.dispatch('wishlist/getWishlist', {
            //     user_id: userData.phone
            // });
            // this.$fire.analytics.setUserId(userData.phone);
            return;
        } else {
            await this.$store.dispatch('auth/setUserLogout');
        }
    },
    async mounted() {
        this.fetchHomePageData();
        const workbox = await window.$workbox;
        if (workbox) {
            workbox.addEventListener('installed', (event) => {
                if (event.isUpdate) {
                    setTimeout(() => location.reload(), 2500);
                }
            });
        }
        window.addEventListener('scroll', this.mobileData() );
    },
    methods: {
        async fetchHomePageData() {
            //this.homepageData = await this.$http.$get("/api/homepage");
            if (process.client && screen !== undefined) {
                if (screen.width <= 760) {
                        window.addEventListener('scroll', ()=>{
                            if(this.newArrivals.products === []){
                                this.newArrivals.products = this.homepageData.NewArrivals.results || [];
                                this.laptops.products = this.homepageData.Laptops.results || [];
                                this.isBudgetBelow10.products = this.homepageData.BudgetBelow10.results || [];
                                this.isBudget15To50.products = this.homepageData.Budget15To50.results || [];
                                this.isBudgetAbove50.products = this.homepageData.PremiumProducts.results || [];
                                this.istvs.products = this.homepageData.HomeEntertainments.results || [];
                                this.isHomeSuper.products = this.homepageData.TrendingGadgets.results || [];
                            }
                        });

                } else {
                    this.newArrivals.products = this.homepageData.NewArrivals.results || [];
                    this.laptops.products = this.homepageData.Laptops.results || [];
                    this.isBudgetBelow10.products = this.homepageData.BudgetBelow10.results || [];
                    this.isBudget15To50.products = this.homepageData.Budget15To50.results || [];
                    this.isBudgetAbove50.products = this.homepageData.PremiumProducts.results || [];
                    this.istvs.products = this.homepageData.HomeEntertainments.results || [];
                    this.isHomeSuper.products = this.homepageData.TrendingGadgets.results || [];
                }
            }
        },
        mobileData() {
            this.newArrivals.products = this.homepageData.NewArrivals.results || [];
            this.laptops.products = this.homepageData.Laptops.results || [];
            this.isBudgetBelow10.products = this.homepageData.BudgetBelow10.results || [];
            this.isBudget15To50.products = this.homepageData.Budget15To50.results || [];
            this.isBudgetAbove50.products = this.homepageData.PremiumProducts.results || [];
            this.istvs.products = this.homepageData.HomeEntertainments.results || [];
            this.isHomeSuper.products = this.homepageData.TrendingGadgets.results || [];
        }
    }
};
</script>
<style>
/* .moblie{
    text-align: center;
} */
.brands-style{
    height: 50%;
}

</style>
