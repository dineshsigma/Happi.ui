<template lang="html">
    <ul class="menu--dropdown">
        <template v-for="item in menuCategories">
<!--            <menu-dropdown v-if="item.subMenu.length > 0" :menu-data="item" />-->
            <menu-mega v-if="item.subMenu" :menu-data="item" />
            <li v-else :key="item.text">
                <nuxt-link :to="item.url">
                    {{ item.text }}
                </nuxt-link>
            </li>
        </template>
    </ul>
</template>

<script>
import MenuDefault from '~/components/shared/menu/MenuDefault';
import MenuDropdown from '~/components/shared/menu/MenuDropdown';
import MenuMega from '~/components/shared/menu/MenuMega';

export default {
    name: 'MenuCategories',
    ssr: true,
    components: { MenuMega, MenuDropdown, MenuDefault },
    data() {
        return { menuCategories: [{"icon":"icon-star","text":"Mobiles","url":"/mobiles/all","extraClass":"menu-item-has-children has-mega-menu","subClass":"sub-menu","mega":false,"subMenu":[{"heading":"Mobiles","megaItems":[{"text":"Apple","url":"/mobiles/apple","id":"mobile-apple"},{"text":"Samsung","url":"/mobiles/samsung","id":"mobile-samsung"},{"text":"Nokia","url":"/mobiles/nokia","id":"mobiles-nokia"},{"text":"Oppo","url":"/mobiles/oppo","id":"mobiles-oppo"},{"text":"Realme","url":"/mobiles/realme","id":"mobiles-realme"},{"text":"Vivo","url":"/mobiles/vivo","id":"mobiles-vivo"},{"text":"Xiaomi","url":"/mobiles/xiaomi","id":"mobiles-xiaomi"},{"text":"Oneplus","url":"/mobiles/oneplus","id":"mobiles-oneplus"}]}],"id":"mobile"},{"icon":"icon-star","text":"Accessories","url":"/accessories/all","extraClass":"menu-item-has-children has-mega-menu","subClass":"sub-menu","mega":false,"subMenu":[{"heading":"Accessories","megaItems":[{"text":"Headset","url":"/accessories/headset","id":"accessories-headset"},{"text":"Chargers","url":"/accessories/chargers","id":"accessories-chargers"},{"text":"Data Cables","url":"/accessories/data-cables","id":"accessories-data-cables"},{"text":"Bluetooth","url":"/accessories/bluetooth","id":"accessories-bluetooth"},{"text":"Projectors","url":"/accessories/projectors","id":"accessories-projectors"},{"text":"Smart Watches","url":"/accessories/smart-watches","id":"accessories-smart-watches"},{"text":"Bluetooth Airpods","url":"/bluetooth/airpods","id":"bluetooth-airpods"}]}],"id":"accessories"},{"icon":"icon-star","text":"Tablets","url":"/tablets/all","extraClass":"menu-item-has-children has-mega-menu","subClass":"sub-menu","mega":false,"subMenu":[{"heading":"Tablets","megaItems":[{"text":"Samsung","url":"/tablets/samsung","id":"tablets-samsung"},{"text":"Lenovo","url":"/tablets/lenovo","id":"tablets-lenovo"}]}],"id":"tablets"},{"icon":"icon-star","text":"Tv's","url":"/tvs/all","extraClass":"menu-item-has-children has-mega-menu","subClass":"sub-menu","mega":false,"subMenu":[{"heading":"Tv's","megaItems":[{"text":"Tcl","url":"/tvs/tcl","id":"tvs-tcl"},{"text":"Mi","url":"/tvs/mi","id":"tvs-mi"},{"text":"LG","url":"/tvs/lg","id":"tvs-lg"}]}],"id":"tvs"},{"icon":"icon-star","text":"Laptop","url":"/laptops/all","extraClass":"menu-item-has-children has-mega-menu","subClass":"sub-menu","mega":false,"subMenu":[{"heading":"Laptop","megaItems":[{"text":"Dell","url":"/laptops/dell","id":"laptops-dell"},{"text":"HP","url":"/laptops/hp","id":"laptops-hp"},{"text":"Apple","url":"/laptops/apple","id":"laptops-apple"},{"text":"Mi","url":"/laptops/mi","id":"laptops-mi"}]}],"id":"laptops"},{"icon":"icon-star","text":"Budget Mobiles","url":"/mobiles/all/price-0-10000","extraClass":"menu-item-has-children has-mega-menu","subClass":"sub-menu","mega":false,"subMenu":[{"heading":"Budget Mobiles","megaItems":[{"text":"Below - Rs.10,000","url":"/mobiles/all/price-0-10000","id":"budget-1"},{"text":"Rs.10,001 - Rs.14,999","url":"/mobiles/all/price-10001-14999","id":"budget-2"},{"text":"Rs.15,000 - Rs.19,999","url":"/mobiles/all/price-15000-19999","id":"budget-3"},{"text":"Rs.20,000 - Rs.24,999","url":"/mobiles/all/price-20000-24999","id":"budget-4"},{"text":"Rs.25,000 - Rs.29,000","url":"/mobiles/all/price-25000-29999","id":"budget-5"},{"text":"Rs.30,000 and above","url":"/mobiles/all/price-30000-200000","id":"budget-2"}]}],"id":"budget"}]}
    },
    async asyncData({$http}){

    },
    created: async function () {
        this.menuCategories = (await this.$store.dispatch('collection/getMenu')).menuCategories;
        // const result = await this.$http.$get(`api/cat`);
        // console.log("RESULTTTT", result);
        //
        // commit('setMenu', {menuCategories:result.data});
        // this.menuCategories = result.data
        // return {menuCategories:result.data};
    },
    methods: {
        categoryUrl(url) {
            return `/${url}`;
        }
    },
};
</script>

<style lang="scss" scoped></style>
