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
                    text: 'Terms & Conditions'
                }
            ],
            varhtml: '<p>Loading...</p>'
        };
    },

    async asyncData() {},
    async created() {
        var axios = require('axios');
        var self = this;
        var data = JSON.stringify({
            url:
                'https://dev-happi-static.mobirisesite.com/Terms-and-Conditions.html'
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
                //    <link rel="stylesheet" href="https://r.mobirisesite.com/147195/assets/tether/tether.min.css">
                //   <link rel="stylesheet" href="https://r.mobirisesite.com/147195/assets/bootstrap/css/bootstrap.min.css">
                //   <link rel="stylesheet" href="https://r.mobirisesite.com/147195/assets/bootstrap/css/bootstrap-grid.min.css">
                //   <link rel="stylesheet" href="https://r.mobirisesite.com/147195/assets/bootstrap/css/bootstrap-reboot.min.css">
                response.data = response.data.replace('<link rel="stylesheet" href="https://r.mobirisesite.com/147195/assets/tether/tether.min.css">','');
                response.data = response.data.replace('<link rel="stylesheet" href="https://r.mobirisesite.com/147195/assets/bootstrap/css/bootstrap.min.css">','');
                response.data = response.data.replace('<link rel="stylesheet" href="https://r.mobirisesite.com/147195/assets/bootstrap/css/bootstrap-grid.min.css">','');
                response.data = response.data.replace('<link rel="stylesheet" href="https://r.mobirisesite.com/147195/assets/bootstrap/css/bootstrap-reboot.min.css">','');


                self.varhtml = response.data;
            })
            .catch(function(error) {
                console.log(error);
            });
    },
       async asyncData({  $seo }) {
        $seo({
            title: "terms and conditions",
            templateTitle: '%title% - Happi Mobiles',
            description: "terms and conditions",
            keywords: "terms conditions",
            openGraph: {
                site: 'Happi Mobiles',
                type: 'website',
                title: "terms and conditions - Happimobiles",
                description: "",
            },
            twitter: {
                site: 'Happi Mobiles',
                type: 'website',
                title: "terms and conditions - Happimobiles",
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
