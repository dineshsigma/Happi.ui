<template lang="html">
    <div v-if="!isLoggedIn" class="ps-block--user-header">
        <div class="ps-block__left">
            <i class="icon-user happi-icon"></i>
            <!-- <span v-if="this.userName">Hi , {{this.userName}}AAA</span>
            <span v-else>Hi , {{name}}BBB</span> -->
        </div>
        <div class="ps-block__right">
            <nuxt-link to="/account/login">Login <br>/Register</nuxt-link>

        </div>
    </div>
    <div v-else class="ps-block--user-account">
        <!-- <div class="user-logo-actions">
            <a @click="storeManagement()">
                <i class="icon-user happi-icon"></i>
            </a>
            <a href="/account/user-information">
                My Account
                <span v-if="this.userName">Hi, {{this.userName}}</span>
                <span v-else>Hi, {{name}}</span>
            </a>    
        </div> -->

        <div class="user_profiledd">
            <!-- <i class="fa-solid fa-circle-user"></i>
            <div class="icon-background" >
                <a @click="storeManagement()">
                    <i class="fa-solid fa-circle-user"></i>                </a>
            </div> -->
            <div class="avatar-icon">
                <a @click="storeManagement()">
                <img src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/e088fabc-6c97-4b63-a72f-619fcd985a4c.png" />                    
                </a>
            </div>
            <div class="up-content ml-1">
                <a href="">
                    <h1>My Account </h1>                    
                    <!-- <span v-if="this.userName">Hi, {{this.userName}}</span> -->
                    <span >Hi, {{name}}</span>
                </a>
            </div>
        </div>
        <!-- {{userName}}A
        {{name}}B -->
        <div class="ps-block__content">
            <ul class="ps-list--arrow">
                <li v-show="userName"  style="padding-top: 10px;margin-bottom: 0;">
                    Hi , {{this.userName}}
                </li>
                 <li  style="padding-top: 10px;margin-bottom: 0;">
                    Hi , {{name}}
                </li>
                 <li class="ps-block__footer">
                    <a href="/account/user-information">
                        Account
                    </a>
                </li>
                <li class="ps-block__footer">
                    <a href="/account/orders">
                        Orders
                    </a>
                </li>
                <li class="ps-block__footer">
                    <a href="/account/wishlist">
                        Wishlist
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'HeaderUserArea',
    computed: {
        ...mapState({
            isLoggedIn: (state) => state.auth.isLoggedIn,
            userDetails: (state) => state.cart.userDetails,
            setStoreManage: state => state.stores.setStoreManage,
        }),
    },
    data() {
        return {
            accountLinks: [
                {
                    text: 'Account Information',
                    url: '/account/user-information',
                },
                {
                    text: 'Notifications',
                    url: '/account/notifications',
                },
                {
                    text: 'Orders',
                    url: '/account/invoices',
                },
                {
                    text: 'Address',
                    url: '/account/addresses',
                },
                {
                    text: 'Recent Viewed Product',
                    url: '/account/recent-viewed-product',
                },
                {
                    text: 'Wishlist',
                    url: '/account/wishlist',
                },
            ],
            name: '',
            userName: '',
        };
    },
    methods: {
        handleLogout() {
            this.$store.dispatch('auth/logout', false);
        },
        async storeManagement(){
            let userData = this.$cookies.get('userDetails');
            let phone = userData.phone;
            await this.$store.dispatch('stores/getStoreDetails',phone);
            localStorage.setItem("storeStatus",this.setStoreManage.status)
            if(this.setStoreManage.status == true){
                this.$router.push('/account/user-information');
                localStorage.setItem("storeCode",this.setStoreManage.data.RetailerLocalityArea)
                localStorage.setItem("storeNumber",this.setStoreManage.data.MobileNumber)
            }
            else{
                this.$router.push('/account/user-information');
            }
        }
    },
    async created() {
        let userData = this.$cookies.get('userDetails');
        this.userName = localStorage.getItem('userNameUpdated');
        if (userData) {
            //console.log('IS LOG IS ', this.isLoggedIn);
            await this.$store.dispatch('auth/getUserInfo', {
                id: this.$cookies.get('userDetails').id,
            });
            this.name = this.$cookies.get('userDetails').name;
        } else {
            await this.$store.dispatch('auth/setUserLogout');
            // console.log('IS LOG ISssssss ', this.isLoggedIn);
        }
    },
};
</script>

<style lang="scss" scoped>
.user-logo-actions{
    display: flex;
}
.happi-icon{
    color: #fff;
    :hover {
        color:#000;
    }
}

</style>
