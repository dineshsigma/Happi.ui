<template lang="html">
    <div class="ps-page--single">
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="ps-section--custom">
            <div class="container">

                <div class="ps-section__content">
                 <div v-html="varhtml"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';

export default {
    components: {
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
                    text: 'Privacy Policy'
                }
            ],
             varhtml: '<p>Loading...</p>'
        };
    },

    async asyncData(){

    },
    async created() {
        var axios = require('axios');
        var self = this;
        var data = JSON.stringify({
            url: 'https://dev-happi-static.mobirisesite.com/Privacy-Policy.html'
        });

        var config = {
            method: 'post',
            url: 'https://dev-services.happimobiles.com/fetch-page',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function(response) {
                self.varhtml = response.data;
            })
            .catch(function(error) {
                console.log(error);
            });

    },
      async asyncData({  $seo }) {
        $seo({
            title: "Primary Policy",
            templateTitle: '%title% - Happi Mobiles',
            description: "",
            keywords: "Primary Policy",
            openGraph: {
                site: 'Happi Mobiles',
                type: 'website',
                title: "Primary Policy - Happimobiles",
                description: "",
            },
            twitter: {
                site: 'Happi Mobiles',
                type: 'website',
                title: "Primary Policy - Happimobiles",
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
.mbr-section-title.mbr-regular.align-left.mbr-fonts-style.display-5 {
    font-size: 19px !important;
    font-weight: bold;
}
.mbr-text.align-left.mbr-fonts-style.display-7 {
font-size: 14px!important;
}
#title01-3 {
    background-color: red!important;
}
.cid-sGxahmqZiD{
    background-color: red!important;;
}
</style>
