<template lang="html">
    <v-app v-if="!loading">
        <v-main>
            <header-default id="headerSticky" class="mobile-header-hide"/>
            <!-- <header-mobile  class="desktop-header-hide" /> -->

            <header-mobile  class="desktop-header-hide" />
            <nuxt />
            <!-- <footer-fullwidth id="mobile-mobile-hide" class="mobile-header-hide"/> -->
            <FooterFullwidthDesktop id="mobile-mobile-hide" class="mobile-header-hide"/>
            <FDM class="desktop-header-hide"/>
            <!-- <StartBuying class="desktop-header-hide"/> -->
            <FooterFullwidthMobile class="desktop-header-hide"/>
<!--                <navigation-list />-->
            <mobile-drawer />
<!--                <notify />-->
        </v-main>
    </v-app>
</template>
<script>
// v-if="!loading"
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';
import NavigationList from '~/components/shared/mobile/NavigationList';
import MobileDrawer from '~/components/shared/mobile/MobileDrawer';
import FooterFullwidth from '~/components/shared/footers/FooterFullwidth';
import FDM from '~/components/shared/footers/modules/FDM';
import StartBuying from '~/components/shared/footers/modules/StartBuying';
import FooterFullwidthMobile from '~/components/shared/footers/FooterFullwidthMobile';
import FooterFullwidthDesktop from '~/components/shared/footers/FooterFullwidthDesktop';
// import Notify from '~/components/elements/commons/notify';
export default {
name: 'layout-default',
components: {
    FooterFullwidth,
    MobileDrawer,
    NavigationList,
    HeaderMobile,
    HeaderDefault,
    FDM,
    StartBuying,
    FooterFullwidthMobile,
    FooterFullwidthDesktop
    // Notify
},
data: () => ({
    loading: true
}),
created(){
    this.$nextTick(function() {
        this.loading = false
    })
    this.$store.dispatch('cart/getCartItems', []);
    //this.$store.dispatch('cart/getCartItems', []);
},
methods: {
    initFreshChat() {
        if(window){
            // window.fcWidget.init({
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
        //var e;
        //i.getElementById(t) ? this.initFreshChat() : ((e = i.createElement("script")).id = t, e.async = !0, e.src = "https://wchat.freshchat.com/js/widget.js", e.onload = this.initFreshChat, i.head.appendChild(e))
    },
    initiateCall() {
        let self = this;
        // setTimeout(function() {
        //     self.initialize(document, "freshchat-js-sdk")
        // }, 1000);
    }
},
mounted() {
    //this.initiateCall();
    // if(this.$localStorage.getItem("syncTime")  == null){
    //     this.$localStorage.clear();
    //     this.$localStorage.setItem("syncTime", new Date().getTime());
    // }else{
    //     var myCurrentDate=new Date();
    //     var myPastDate=new Date(myCurrentDate);
    //     myPastDate.setDate(myPastDate.getDate() - 4);
    //     if(this.$localStorage.getItem("syncTime") < myPastDate.getTime()){
    //         this.$localStorage.clear();
    //         this.$localStorage.setItem("syncTime", new Date().getTime());
    //     }
    // }
}
};
</script>
<style lang="scss" scoped>
/* Media Query for Mobile Devices */
#mobile-mobile-hide{
    display: none;
}
@media (max-width: 1200px) {
    .mobile-header-hide {
        display: none;           
     }
    }
@media (min-width: 1200px) {
    .desktop-header-hide{
        display: none;
    }
    #mobile-mobile-hide{
            display: block;
    }   
}
.v-application{
background-color: #F3F6F9
}
.navigation{
background-color: #fff
}
.custom_fc_frame {
right: 50px !important;
bottom: 130px !important;
}

</style>