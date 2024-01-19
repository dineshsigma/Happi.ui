<template lang='html'>
    <client-only>
        <v-app>
            <v-main>
                <header-default id="mobile-mobile-product-hide" class="mobile-header-hide"/>
                <header-mobile  class="desktop-header-hide" />
                <nuxt></nuxt>
                <footer-fullwidth id="mobile-mobile-hide" class="mobile-header-hide"/>
                <FooterFullwidthMobile class="desktop-header-hide"/>
                <!-- <footer-fullwidth /> -->
<!--                <navigation-list />-->
                <!-- <mobile-drawer /> -->
<!--                <notify />-->
            </v-main>
        </v-app>
    </client-only>
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
    name: 'layout-product',
    components: {
        FooterFullwidth,
        MobileDrawer,
        NavigationList,
        HeaderMobile,
        HeaderDefault,
        //Notify
    },
    methods: {
        initFreshChat() {
            window.fcWidget.init({
                "config": {
                    "cssNames": {
                        "widget": "custom_fc_frame"
                    }
                },
                token: "12cd32c2-2107-4b6e-bb09-2f119ec99bef",
                host: "https://wchat.freshchat.com"
            });
        },
        initialize(i, t) {
            var e;
            i.getElementById(t) ? this.initFreshChat() : ((e = i.createElement("script")).id = t, e.async = !0, e.src = "https://wchat.freshchat.com/js/widget.js", e.onload = this.initFreshChat, i.head.appendChild(e))
        },
        initiateCall() {
            let self = this;
            setTimeout(function() {
                self.initialize(document, "freshchat-js-sdk")
            }, 1000);
        }
    },
    mounted() {
        this.initiateCall()
    }
};
</script>

<style lang='scss' scoped>

#mobile-mobile-product-hide{
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
    #mobile-mobile-product-hide{
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
