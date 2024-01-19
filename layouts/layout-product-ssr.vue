<template lang='html'>
        <v-app >
            <v-main>
                <!-- <header-default v-if='!loadingProduct' />
                <header-mobile v-if='!loadingProduct' /> -->
                <header-default v-if='!loadingProduct' id="mobile-header-product-slug-hide" class="mobile-header-hide"/>
                <header-mobile  v-if='!loadingProduct' class="desktop-header-hide" />
                <nuxt ></nuxt>
                <!-- <footer-fullwidth /> -->
<!--                <navigation-list />-->
                <mobile-drawer v-if='!loadingProduct' />
<!--                <notify v-if='!loadingProduct' />-->
                <footer-fullwidth id="mobile-mobile-hide" class="mobile-header-hide"/>
                <FooterFullwidthMobile class="desktop-header-hide"/>
            </v-main>
        </v-app>
</template>

<script>
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';
import NavigationList from '~/components/shared/mobile/NavigationList';
import MobileDrawer from '~/components/shared/mobile/MobileDrawer';
import FooterFullwidth from '~/components/shared/footers/FooterFullwidth';
import FooterFullwidthMobile from '~/components/shared/footers/FooterFullwidthMobile';

// import Notify from '~/components/elements/commons/notify';

export default {
    name: 'layout-product-ssr',
    components: {
        FooterFullwidth,
        MobileDrawer,
        NavigationList,
        HeaderMobile,
        HeaderDefault,
        FooterFullwidthMobile
        // Notify
    },
    data: () => ({
        loadingProduct: true,
    }),
    async created(){
        this.$nextTick(function() {
            this.loadingProduct = false
        });
    },
    methods: {
        initFreshChat() {
            // if(process.client){
            //     window.fcWidget.init({
            //         "config": {
            //             "cssNames": {
            //                 "widget": "custom_fc_frame"
            //             }
            //         },
            //         token: "12cd32c2-2107-4b6e-bb09-2f119ec99bef",
            //         host: "https://wchat.freshchat.com"
            //     });
            // }

        },
        initialize(i, t) {
            // var e;
            // i.getElementById(t) ? this.initFreshChat() : ((e = i.createElement("script")).id = t, e.async = !0, e.src = "https://wchat.freshchat.com/js/widget.js", e.onload = this.initFreshChat, i.head.appendChild(e))
        },
        initiateCall() {

            // let self = this;
            // setTimeout(function() {
            //     self.initialize(document, "freshchat-js-sdk")
            // }, 1000);
        }
    },
    mounted() {
       // if(process.client) this.initiateCall()
    }
};
</script>

<style lang='scss' scoped>

#mobile-header-product-slug-hide{
    display: none;
}
@media (max-width: 767px) {
    .mobile-header-hide {
        display: none;           
     }
    }
@media (min-width: 768px) {
    .desktop-header-hide{
        display: none;
    }
    #mobile-header-product-slug-hide{
            display: block;
    }   
}


@font-face {
    font-family: oneplusSans;
    src: local('Pacifico Regular'), local('Pacifico-Regular'),url('/fonts/OnePlusSansDisplay-55Rg.ttf');
    font-display: swap;
}

.custom_fc_frame {
    right: 50px !important;
    bottom: 130px !important;
}

</style>
