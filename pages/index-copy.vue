<template lang='html'>
    <main id='homepage-1'>
        <home-banner :homepageData='homepageData' />
        <!-- <home-ads-columns /> -->

        <div class='ps-container'>
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
                    <!--                    usemap="#workmap" -->
                    <!--                         <map name="workmap"> -->
                    <!--                           <area shape="rect" coords="30,210,530,380" alt="Bajaj Emi" target="_blank"-->
                    <!--                              href="https://www.bajajfinservmarkets.in/stores/happi_mobiles"> -->
                    <!--                         </map> -->

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
        </div>

        <!-- <site-feautures-fullwidth
            class='mob-hide' /> -->
        <home-ad />


        <home-default-deal-of-day
            class='mt-4'
            v-if='newArrivals !== null'
            :newArrivals='newArrivals'
            collection-slug='deal-of-the-day'
            :homepageData='homepageData'
            imageAlign='left'
        />


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
        <home-laptops 
        v-if='laptops != null'
            :newArrivals='laptops'
            collection-slug='deal-of-the-day'
            :homepageData='homepageData'
            />
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
import HomeAd from '~/components/partials/commons/HomeAd';
// import NewArrivals from '~/components/partials/homepage/default/NewArrivals';
import HomeDefaultTopCategories from '~/components/partials/homepage/default/HomeDefaultTopCategories';
import HomeBanner from '~/components/partials/homepage/default/HomeBanner';
import HomeDefaultDealOfDay from '~/components/partials/homepage/default/HomeDefaultDealOfDay';
import HomeByCategories from '~/components/partials/homepage/default/HomeByCategories';
import SearchByBrand from '~/components/partials/homepage/default/SearchByBrand';
import HomeLaptops from '~/components/partials/homepage/default/HomeLaptops';
// import HomeNew from '~/components/partials/homepage/default/HomeNew';

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
        SiteFeauturesFullwidth,
        HomeAd,
        DownloadApp,
        // Newsletters,
        // NewArrivals,
        HomeDefaultTopCategories,
        HomeByCategories,
        SearchByBrand,
        HomeLaptops
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
                title: 'LAPTOPS',
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
