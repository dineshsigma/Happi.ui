<template lang="html">
        <v-app >
            <v-main>
                <header-default  v-if='!loading' id="mobile-mobile-ssr-hide" class="mobile-header-hide" />
                <header-mobile v-if='!loading'  class="desktop-header-hide"/>
                <nuxt  />
                <footer-fullwidth id="mobile-mobile-hide" class="mobile-header-hide"/>
                <FooterFullwidthMobile class="desktop-header-hide"/>
                <!-- <footer-fullwidth   /> -->
<!--                <navigation-list />-->
                <!-- <mobile-drawer  v-if='!loading' /> -->
<!--                <notify v-idrawerf='!loading'  />-->
            </v-main>
        </v-app>
</template>

<script>
//
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';
import NavigationList from '~/components/shared/mobile/NavigationList';
import MobileDrawer from '~/components/shared/mobile/MobileDrawer';
import FooterFullwidth from '~/components/shared/footers/FooterFullwidth';
import FooterFullwidthMobile from '~/components/shared/footers/FooterFullwidthMobile';
// import Notify from '~/components/elements/commons/notify';

export default {
    name: 'layout-default-ssr',
    components: {
        FooterFullwidth,
        FooterFullwidthMobile,
        MobileDrawer,
        NavigationList,
        HeaderMobile,
        HeaderDefault
        // Notify
    },
    data: () => ({
        loading: true,
    }),
    // mobiles/all/price-0-10000
    created(){
        this.$nextTick(function() {
            this.loading = false
        })
        //this.$store.dispatch('cart/getCartItems', []);

    },

    methods: {
        initFreshChat() {
            if(window){
            //     window.fcWidget.init({
            //     "config": {
            //         "cssNames": {
            //             "widget": "custom_fc_frame"
            //         }
            //     },
            //     token: "12cd32c2-2107-4b6e-bb09-2f119ec99bef",
            //     host: "https://wchat.freshchat.com"
            // });
            }

        },
        initialize(i, t) {
            var e;
            i.getElementById(t) ? this.initFreshChat() : ((e = i.createElement("script")).id = t, e.async = !0, e.src = "https://wchat.freshchat.com/js/widget.js", e.onload = this.initFreshChat, i.head.appendChild(e))
        },
        initiateCall() {
            // let self = this;
            // setTimeout(function() {
            //     self.initialize(document, "freshchat-js-sdk")
            // }, 1000);
        }
    },
    mounted() {
        //this.initiateCall()
    }
};
</script>

<style lang="scss" scoped>

#mobile-mobile-ssr-hide{
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
    #mobile-mobile-ssr-hide{
            display: block;
    }   
}
.v-application{
    background-color: #F3F6F9
}
.custom_fc_frame {
    right: 50px !important;
    bottom: 130px !important;
}
</style>
