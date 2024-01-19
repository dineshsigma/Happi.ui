<template lang="html">
    <section class="ps-page--my-account">
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="ps-my-account" style="background-color:#fff">
            <section class="container">
                <h3>
                    My Account
                </h3>
                <div class="">
                    <div class="table-responsive">
                        <table
                            class="table table-bordered ps-table ps-table--specification"
                        >
                            <tbody class="row">
                                <tr
                                    class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 "
                                >
                                    <td>Name:</td>
                                    <td>Rakesh</td>
                                </tr>
                                <tr
                                    class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 "
                                >
                                    <td>Email:</td>
                                    <td>rakesh@iipl.work</td>
                                </tr>
                                <tr
                                    class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 "
                                >
                                    <td>Phone:</td>
                                    <td>8099592649</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <br />
                <div class="row profile-btn-b">
                    <ul>
                           <li> <a href="#" class="profile-btn"> My Wishlist </a> </li>
                           <li> <a href="#" class="profile-btn"> My Orders </a> </li>
                           <li> <a href="/account/update-account" class="profile-btn">   Update Account  </a> </li>
                           <li> <a href="/" class="profile-btn"> Continue Shopping </a> </li>
                           <li> <a   href="#" @click.prevent="handleLogout" class="profile-btn"   >  Logout  </a> </li>
                       
                    </ul>
                   
                </div>
            </section>
        </div>
    </section>
</template>
<script>

import BreadCrumb from '~/components/elements/BreadCrumb';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';

export default {
    name: 'AccountUpdate',
    components: {
        HeaderMobile,

        BreadCrumb
    },

    data() {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'My Account'
                }
            ]
        };
    },

    async created() {
        const result = await this.$store.dispatch('auth/getUserInfo', {
                           id: this.$cookies.get('userDetails').id
        });
        this.name = result.name;
        this.email = result.email;
        // console.log('RES', result);
    },
    methods: {
        handleLogout() {
            this.$store.dispatch('auth/logout', false);
        }
    }
};
</script>

<style lang="scss" scoped>
.profile-btn-b {
    ul {
        list-style:none;
        .profile-btn {
//  margin-bottom: 0.5rem;
//     padding: 1rem;
//     background-color: red;
//     border-radius: 5px;
        }
    }
}

</style>
