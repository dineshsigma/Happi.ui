<template lang="html">
    <div class="ps-container bg-grey" >
        <FooterLinks />
        <!-- <FooterCateInfo/> -->
    </div>
</template>

<script>
import FooterLinks from '~/components/shared/footers/modules/FooterLinks';
import FooterCateInfo from '~/components/shared/footers/modules/FooterCateInfo';

export default {
    name: 'sitemap',
    components:{
        FooterLinks,
        FooterCateInfo
    },
    async asyncData({  $seo }) {
        $seo({
            title: "latest-mobile-blogs",
            templateTitle: '%title% - Happi Mobiles',
            description: "",
            keywords: "latest-mobile-blogs",
            openGraph: {
                site: 'Happi Mobiles',
                type: 'website',
                title: "latest-mobile-blogs | Happi Mobiles - Happimobiles",
                description: "",
            },
            twitter: {
                site: 'Happi Mobiles',
                type: 'website',
                title: "latest-mobile-blogs| Happi Mobiles - Happimobiles",
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

<style lang="scss" scoped></style>
