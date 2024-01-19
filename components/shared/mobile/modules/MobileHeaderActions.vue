<template lang="html">
    <div class="navigation__right">
        <div v-if="isLoggedIn">
<!--            <a-->
<!--                href="https://web.whatsapp.com/send?phone=919121863666&amp;text=Hi"-->
<!--                target="_blank"-->
<!--                class="header__extra">-->
<!--                <i class="fa fa-whatsapp happi-icon" aria-hidden="true"></i>-->
<!--            </a>-->
<!--                <i class="icon-bubble-alert happi-icon"></i>-->
            <nuxt-link to="/account/wishlist" class="header__extra">
                <i class="icon-heart happi-icon" style="font-weight:bold"></i>
                <!-- <span v-show= "wishlistTotal" class="span-number"> -->
                    <!-- <i>{{ wishlistItems }}</i> -->
                    <!-- <i class="number-wc">{{ wishlistTotal ? wishlistTotal : 0 }}</i> -->
                <!-- </span> -->
            </nuxt-link>

            <nuxt-link to="/cart" class="header__extra">
                <i class="icon-cart happi-icon" style="font-weight:bold"></i>
                <!-- <span>
                    <i class="number-wc">{{ total }}</i>
                </span> -->
            </nuxt-link>

             <!-- <a href="#" @click="storeManagement()" class="header__extra loginRegister">
                <i class="icon-user happi-icon"></i>
            </a> -->
        </div>
        <div v-else>
<!--            <a-->
<!--                href="https://web.whatsapp.com/send?phone=919121863666&amp;text=Hi"-->
<!--                target="_blank"-->
<!--            class="header__extra">-->
<!--                <i class="fa fa-whatsapp happi-icon" aria-hidden="true"></i>-->
<!--            </a>-->
<!--            -->
            <nuxt-link to="/account/wishlist" class="header__extra">
                <i class="icon-heart happi-icon cartIcon" style="font-weight:bold"></i>
            </nuxt-link>
            <!-- <nuxt-link to="/cart" class="header__extra loginRegister">
                <i class="icon-cart happi-icon" style="font-weight:bold"></i>C
            </nuxt-link> -->
            <nuxt-link to="/account/login" class="header__extra loginRegister">
                <i class="icon-user happi-icon" style="font-weight:bold"></i>
            </nuxt-link>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import ProductMiniCart from '~/components/elements/product/ProductMiniCart';
export default {
    name: 'MobileHeaderActions',
    components: { ProductMiniCart },
    computed: {
        ...mapState({
            total: (state) => state.cart.total,
            wishlistTotal: state => state.wishlist.total,
            amount: (state) => state.cart.amount,
            loading: (state) => state.cart.loading,
            cartItems: (state) => state.cart.cartItems,
            isLoggedIn: (state) => state.auth.isLoggedIn,
            appDrawer: (state) => state.app.appDrawer,
            setStoreManage: (state) => state.stores.setStoreManage,
        }),
        baseUrl() {
            return baseUrl;
        },
    },
    async created() {
        this.$store.dispatch('product/getCartProducts');
        // await this.$store.dispatch('cart/getCartItems');
        await this.$store.dispatch('auth/getUserInfo');
        //   await  this.$store.commit('cart/initCart', {});
        // console.log('Total ', this.cartItems);
    },
    methods: {
        handleOpenDrawer(drawer) {
            console.log('ok');
            this.$store.commit('app/setCurrentDrawerContent', drawer);
            this.$store.commit('app/setAppDrawer', !this.appDrawer);
        },
        async storeManagement() {
            let userData = this.$cookies.get('userDetails');
            let phone = userData.phone;
            await this.$store.dispatch('stores/getStoreDetails', phone);
            localStorage.setItem('storeStatus', this.setStoreManage.status);
            if (this.setStoreManage.status == true) {
                this.$router.push('/account/user-information');
                localStorage.setItem(
                    'storeCode',
                    this.setStoreManage.data.RetailerLocalityArea
                );
                localStorage.setItem(
                    'storeNumber',
                    this.setStoreManage.data.MobileNumber
                );
            } else {
                this.$router.push('/account/user-information');
            }
        },
    },
};
</script>
<style lang="scss" scoped>
.number-wc{
    font-size:10px !important;
}
.span-number{
    height:5px !important;
    width:5px !important;
}
.happi-icon {
    color: #fff;
    font-size: 18px !important;
    :hover {
        color: #000;
    }
}
</style>