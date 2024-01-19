<template lang="html">
    <client-only>
        <v-app>
            <v-main>
                <header-default id="mobile-mobile-ssr-hide" class="mobile-header-hide" />
                <header-mobile  class="desktop-header-hide"/>
                <nuxt></nuxt>
                <FooterFullwidthDesktop id="mobile-mobile-hide" class="mobile-header-hide"/>
                <FooterFullwidthMobile class="desktop-header-hide"/>
            </v-main>
        </v-app>
    </client-only>
</template>

<script>
// import Notify from '~/components/elements/commons/notify';
import NavigationList from '~/components/shared/mobile/NavigationList';
import MobileDrawer from '~/components/shared/mobile/MobileDrawer';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';
import HeaderMobileNew from '~/components/shared/mobile/HeaderMobileNew';
import Newsletters from '~/components/partials/commons/Newsletters';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import FooterFullwidthMobile from '~/components/shared/footers/FooterFullwidthMobile';
import FooterFullwidthDesktop from '~/components/shared/footers/FooterFullwidthDesktop';
import FooterFullwidth from '~/components/shared/footers/FooterFullwidth';
import FDM from '~/components/shared/footers/modules/FDM';

export default {
    components: {
        FooterDefault,
        Newsletters,
        // HeaderMobile,
        HeaderMobileNew,
        HeaderDefault,
        MobileDrawer,
        NavigationList,
        HeaderMobile,
        FooterFullwidthMobile,
        FooterFullwidthDesktop,
        FDM
    //    Notify
    },
    methods: {
        initFreshChat() {
            // console.log(window.location.pathname.includes('spin-and-win'), 'WINODWWWW');
            if(window !== undefined && window.location.pathname.includes('spin-and-win') != true){
                window.fcWidget.init({
                    "config": {
                        "cssNames": {
                            "widget": "custom_fc_frame"
                        }
                    },
                    token: "12cd32c2-2107-4b6e-bb09-2f119ec99bef",
                    host: "https://wchat.freshchat.com"
                });
            }
        },
        initialize(i, t) {
            var e;
            i.getElementById(t) ? this.initFreshChat() : ((e = i.createElement("script")).id = t, e.async = !0, e.src = "https://wchat.freshchat.com/js/widget.js", e.onload = this.initFreshChat, i.head.appendChild(e))
        },
        initiateCall() {
            this.initialize(document, "freshchat-js-sdk")
        }
    },
    mounted() {
        this.initiateCall()
    }
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: oneplusSans;
  src: local('Pacifico Regular'), local('Pacifico-Regular'),url('/fonts/OnePlusSansDisplay-55Rg.ttf');
    font-display: swap;
}
.v-application{
    background-color: #F3F6F9
}

.custom_fc_frame {
    right: 50px !important;
    bottom: 130px !important;
}

</style>
