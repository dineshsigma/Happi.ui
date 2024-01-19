<template lang="html">
    <div class="header__actions">
        <!-- <nuxt-link to="/account/compare">
            <a class="header__extra">
                <i class="icon-chart-bars"></i>
                <span>
                    <i>{{ compareTotal ? compareTotal : 0 }}</i>
                </span>
            </a>
        </nuxt-link> -->
        <header-user-area />

            <!-- <a v-on:click.prevent="NavToWhatsapp($event)"
               target="_blank" rel="noreferrer" class="header__extra">
                <i class="fa fa-whatsapp happi-icon gwhatsapp" aria-hidden="true"></i>
            </a> -->
            <a href='/account/wishlist' class="header__extra">
                <i class="icon-heart happi-icon gwishlist" ></i>
                <span class="selected-number notifi-indicator  pulsate " v-if="wishlistTotal">
                    <!-- <i>{{ wishlistTotal ? wishlistTotal : 0 }}</i> -->
                </span>
            </a>
        <mini-cart />
    </div>
</template>
<script>
import MiniCart from './MiniCart';
import { mapState } from 'vuex';
import HeaderUserArea from '~/components/shared/headers/modules/HeaderUserArea';
export default {
    name: 'HeaderActions',
    components: { HeaderUserArea, MiniCart },
    computed: {
        ...mapState({
            total: state => state.cart.total,
            wishlistTotal: state => state.wishlist.total,
            compareTotal: state => state.compare.total
        })
    },
        methods: {
        isMobile() {
            console.log('isMobile process.client', process.client);
            if (process.client && screen !== undefined) {
                if (screen.width <= 600) {
                    return true;
                } else {
                    return false;
                }
            }
            //return true;
        },
        NavToWhatsapp(e){
            if(this.isMobile()){
                window.open("whatsapp://send?text=hii&phone=919121863666", "_blank")
            }else{
                window.open("https://wa.me/919121863666", "_blank")
            }
        }
    },
};
</script>
<style lang="scss" scoped>
.header{ 
    .header__extra { 
       .gwishlist {
    font-size: 21px;
    line-height: 42px;
}
// .selected-number{
//     font-size: 10px !important;

// }
}}

.happi-icon{
    color: #fff;
    :hover {
        color:#000;
    }
}
</style>