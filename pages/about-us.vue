<template lang="html">
    <div class="ps-page--single" style="text-align:center;">
        <img src="https://d34e6224thkkna.cloudfront.net/happi_media/APPDLPDT-1617435522045.png" alt=""  />
        <!-- <bread-crumb :breadcrumb="breadCrumb" />
        <our-team /> -->
        <about-content />
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import OurTeam from '~/components/partials/page/OurTeam';
import AboutAwards from '~/components/partials/page/AboutAwards';
import AboutContent from '~/components/partials/page/AboutContent';

export default {
    components: {
        AboutAwards,
        OurTeam,
        BreadCrumb,
        AboutContent
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
                    text: 'About Us'
                }
            ]
        };
    },
       async asyncData({  $seo }) {
        $seo({
            title: "about us",
            templateTitle: '%title% - Happi Mobiles',
            description: "",
            keywords: "about us",
            openGraph: {
                site: 'Happi Mobiles',
                type: 'website',
                title: "about us - Happimobiles",
                description: "",
            },
            twitter: {
                site: 'Happi Mobiles',
                type: 'website',
                title: "about us - Happimobiles",
                description: "",
            },
            facebook: {
                appId: '826575227724107',
                pageId: ''
            }
        });

    }
};
</script>

<style lang="scss" scoped>
.ps-page--single {
    text-align:center;
    img {
        height:400px;
    }
}
@media (max-width: 767px) { 
    .ps-page--single {
    text-align:center;
    img {
        height:200px;
    }
}
}
</style>
