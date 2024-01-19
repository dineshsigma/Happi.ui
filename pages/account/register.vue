<template lang="html">
    <section class="ps-page--my-account">
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="ps-my-account">
            <div class="container">
                <div class="ps-form--account  pb-5 pt-3">
                    <ul class="ps-tab-list">
                        <li class="active">
                            <h3>
                                 Register
                            </h3>
                        </li>
                        
                    </ul>
                    <div class="ps-tab active">
                        <register />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import Login from '~/components/partials/account/Login';
import Register from '~/components/partials/account/Register';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';

export default {
    transition: 'zoom',
    components: {
        HeaderMobile,
        Register,
        Login,
        BreadCrumb
    },
     middleware: 'nonAuthentication',
    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Register'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.ps-my-account {
    height:auto;
    .ps-tab-list {
    padding-left: 0;
}
}
</style>
