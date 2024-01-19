<template lang="html">
    <section class="ps-page--my-account">
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="ps-my-account">
            <div class="container">
                <div class="ps-form--account pb-5 pt-3">
                    <ul class="ps-tab-list">
                           <ul class="ps-tab-list">
                        <li class="active">
                            <h3>
                                 OTP Verify
                            </h3>
                        </li>
                        
                    </ul>
                    </ul>
                    <div class="ps-tab active">
                        <otpverify />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';

import Otpverify from '~/components/partials/account/Otpverify';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';

export default {
    components: {
        HeaderMobile,
        BreadCrumb,
        Otpverify
    },
    transition: 'zoom',
     middleware: 'nonAuthentication',
    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'OTP Verify'
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
