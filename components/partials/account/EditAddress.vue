<template lang="html">
    <section class="ps-my-account ps-page--account">
        <div class="container">
            <div class="row pb-5">
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                    <div class="ps-section__left">
                        <aside class="ps-widget--account-dashboard">
                            <div class="ps-widget__header">
                               
                               <figure v-if="accountInfo !=  null">
                                    <figcaption>{{accountInfo.name}}</figcaption>
                                    <p>{{accountInfo.email}}</p>
                                </figure>
                            </div>
                            <div class="ps-widget__content">
                                <AccountLinks :links="accountLinks" />
                            </div>
                        </aside>
                    </div>
                </div>
                <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                    <div class="ps-section--account-setting">
                         <div class="ps-section__content">
                               <FormEditAddress />
                         </div>

                    </div>
                  
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import AccountLinks from './modules/AccountLinks';
import FormEditAddress from '~/components/partials/account/modules/FormEditAddress';

export default {
    name: 'EditAddress',
    components: { AccountLinks, FormEditAddress },
       data() {
        return {
            accountLinks: [
                {
                    text: 'Account Information',
                    url: '/account/user-information',
                    icon: 'icon-user'
                },
                {
                    text: 'Orders',
                    url: '/account/orders',
                    icon: 'icon-papers'
                },
                {
                    text: 'Address',
                    url: '/account/addresses',
                    icon: 'icon-map-marker',
                     active: true
                },
                {
                    text: 'Wishlist',
                    url: '/account/wishlist',
                    icon: 'icon-heart'
                }
            ],
            accountInfo : null
        };
    },
    async created() {
        const result = await this.$store.dispatch('auth/getUserInfo', {
                           id: this.$cookies.get('userDetails').id
        });
        this.accountInfo = result;
    },
    methods: {
        handleLogout() {
            this.$store.dispatch('auth/logout', false);
        }
    }
};
</script>

<style lang="scss" scoped></style>
