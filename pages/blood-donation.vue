<template>
<iframe src="https://old.happimobiles.com/blood-donation-happi/" height='100%'></iframe>
</template>

<script>
export default {
    name: 'blood-donation',
    layout: 'layout-default-ssr',
    // head() {
    //     return {
    //         title: 'Blood Donation - Your donation can make a family Happi',
    //         meta: [
    //             { hid: 'og-title', property: 'og:title', content: 'Blood Donation - Your donation can make a family Happi' },
    //             { hid: 'og-description', property: 'og:description', content: 'At Happi we encouraged customers to share their blood group. We Believe this noble cause, we need more people to help us' },
    //             { hid: 'description', property: 'description', content: 'At Happi Mobiles with our Motto to spread Happiness took an initiative to be a part of Akshaya Patra\'s Mid Day Meal Scheme.' },
    //             { hid: 'keywords', property: 'keywords', content: 'blood donation, donation, happi customers' },
    //         ],
    //         link: [
    //             {
    //                 rel: 'stylesheet',
    //                 href: 'https://unpkg.com/instantsearch.css@7.1.0/themes/algolia-min.css'
    //             }
    //         ]
    //     };
    // }
    async asyncData({  $seo }) {
        $seo({
            title: "Blood Donation - Your donation can make a family Happi",
            templateTitle: '%title% - Happi Mobiles',
            description: "At Happi we encouraged customers to share their blood group. We Believe this noble cause, we need more people to help us",
            keywords: "blood donation, donation, happi customers",
            openGraph: {
                site: 'Happi Mobiles',
                type: 'website',
                title: "Blood Donation - Your donation can make a family Happi- Happimobiles",
                description: "",
            },
            twitter: {
                site: 'Happi Mobiles',
                type: 'website',
                title: "Blood Donation - Your donation can make a family Happi- Happimobiles",
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

<style scoped>

</style>
