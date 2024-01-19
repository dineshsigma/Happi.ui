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
    name:'return-refund-policy-happi',
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
                    text: 'Return & Refund Policy'
                }
            ],
            varhtml: '<p>Loading...</p>'
        };
    },
    head(){

    },
    async asyncData(){

    },
    async created() {
        var axios = require('axios');
        var self = this;
        var data = JSON.stringify({
            url: 'https://dev-happi-static.mobirisesite.com/Returns-and-Refunds.html'
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

    }
};
</script>

<style lang="scss" scoped>



</style>

