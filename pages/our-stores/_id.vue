<template lang="html">
    <div class="ps-page--single">
        <!-- <post-detail-has-background /> -->
        <contact-map :storeObj="storeObj" v-if="storeObj !== null" />
        <contact-info :storeObj="storeObj" v-if="storeObj !== null" />
        <contact-form />
    </div>
</template>

<script>
import { mapState } from 'vuex';

import BreadCrumb from '~/components/elements/BreadCrumb';
// import PostDetailHasBackground from '../../components/elements/post/PostDetailHasBackground';
// import PostComments from '../../components/partials/post/PostComments';
import ContactMap from '~/components/partials/page/ContactMap';
import ContactInfo from '~/components/partials/page/ContactInfo';
import ContactForm from '~/components/partials/page/ContactForm';
export default {
    name: 'default',
    components: {
        // PostComments,
        ContactForm,
        ContactInfo,
        ContactMap,
        // PostDetailHasBackground,
        BreadCrumb,
    },
    transition: 'zoom',
    computed: {
        ...mapState({
            storesList: (state) => state.stores.storesList,
            citiesList: (state) => state.stores.citiesList,
            storeObj: (state) => state.stores.storeObj,
        }),
    },
    async created() {
        await this.$store.dispatch(
            'stores/getStoreById',
            this.$route.params.id
        );
        console.log('this selected store', this.storeObj);
    },
    async asyncData({ query, store, params, $http, $seo, redirect }) {
        if (params.id === 'undefined' || params.id === undefined) {
            return;
        }
        
        let response;
        try {
                   response = await $http.$get('getStoreById?RetailerLocalityArea='+params.id);
                //    console.log("seoooooooooooooooooooo",response)

        } catch (e) {
            console.log(
                'URL',
                `https://dev-services.happimobiles.com/api/product/${params.slug}`
            );
            console.log(e);
        }
         $seo({
            title: response.data.RetailerLocalityArea.substring(0, 50),
            templateTitle: '%title% - Happi Mobiles',
            description: `response.data.RetailerLocalityArea`,
            keywords: response.data.RetailerLocalityArea,
            openGraph: {
                site: 'Happi Mobiles',
                type: 'website',
                title: response.data.RetailerLocalityArea,
                description: response.data.RetailerLocalityArea,
                // image: picture_url,
                // price: {
                //     currency: 'INR',
                //     amount: response.product.payPrice + '.00',
                // },
            },
            
            twitter: {
                site: 'Happi Mobiles',
                type: 'website',
                title: response.data.RetailerLocalityArea,
                description: response.data.RetailerLocalityArea,
            },
            facebook: {
                appId: '826575227724107',
                pageId: '',
            },
            // jsonld: {
            //     '@context': 'https://schema.org',
            //     '@type': 'Product',
            //     productID: params.slug,
            //     name: response.product.name,
            //     description: response.product.name,
            //     url: 'https://www.happimobiles.com/' + params.slug,
            //     image: picture_url,
            //     offers: [
            //         {
            //             '@type': 'Offer',
            //             price: '' + response.product.payPrice,
            //             priceCurrency: 'INR',
            //             itemCondition: 'https://schema.org/NewCondition',
            //             availability: 'https://schema.org/InStock',
            //         },
            //     ],
            // },
        });
        
    },
    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/',
                },
                {
                    text: 'Our Stores',
                    url: '/our-stores',
                },
                {
                    text: 'Store Detail',
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped></style>
