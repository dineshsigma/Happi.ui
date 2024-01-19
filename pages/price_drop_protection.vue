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
                    text: 'Price Drop Protection'
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
            url: 'https://dev-happi-static.mobirisesite.com/Price-drop-protection.html'
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
            title: "Price Drop",
            templateTitle: '%title% - Happi Mobiles',
            description: "",
            keywords: "Price Drop",
            openGraph: {
                site: 'Happi Mobiles',
                type: 'website',
                title: "Price Drop - Happimobiles",
                description: "",
            },
            twitter: {
                site: 'Happi Mobiles',
                type: 'website',
                title: "Price Drop - Happimobiles",
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

