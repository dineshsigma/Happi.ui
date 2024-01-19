<template lang="html">
        <v-app>
            <v-main>
                <header-default id="mobile-mobile-hide" class="mobile-header-hide"/>
                <header-mobile  class="desktop-header-hide" />
                <nuxt></nuxt>
<!--                <notify />-->
                <!-- <newsletters /> -->
                <footer-default />
                <navigation-list />
                <mobile-drawer />
            </v-main>
        </v-app>
</template>

<script>
// import Notify from '~/components/elements/commons/notify';
import NavigationList from '~/components/shared/mobile/NavigationList';
import MobileDrawer from '~/components/shared/mobile/MobileDrawer';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';
import Newsletters from '~/components/partials/commons/Newsletters';
import FooterDefault from '~/components/shared/footers/FooterDefault';

export default {
    components: { FooterDefault, Newsletters, HeaderMobile, HeaderDefault, MobileDrawer, NavigationList,
    //    Notify
    }
};
</script>

<style lang="scss" scoped>
@font-face {
    font-family: oneplusSans;
    src: local('Pacifico Regular'), local('Pacifico-Regular'), url('/fonts/OnePlusSansDisplay-55Rg.ttf');
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
