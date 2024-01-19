<template lang="html">
    <div class="ps-page--single">
        <bread-crumb :breadcrumb="breadCrumb" />
        <main-contact-map />
        <!-- <contact-info /> -->
        <main-contact-form />
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import MainContactMap from '~/components/partials/page/MainContactMap';
import ContactInfo from '~/components/partials/page/ContactInfo';
import MainContactForm from '~/components/partials/page/MainContactForm';

export default {
    components: {
        MainContactForm,
        ContactInfo,
        MainContactMap,
        BreadCrumb
    },
    transition: 'zoom',
    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Contact Us'
                }
            ]
        };
    },
    async asyncData({  $seo }) {
        $seo({
            title: "Contact us",
            templateTitle: '%title% - Happi Mobiles',
            description: `Contact us Happi Mobiles`,
            keywords: "Contact us, Happi Mobiles",
            openGraph: {
                site: 'Happi Mobiles',
                type: 'website',
                title: "Contact us - Happimobiles",
                description: "contact us",
            },
            twitter: {
                site: 'Happi Mobiles',
                type: 'website',
                title: "Contact us - Happimobiles",
                description: ""
            },
            facebook: {
                appId: '826575227724107',
                pageId: ''
            }
        });

    }
};
</script>

<style lang="scss" scoped></style>
