<template>
    <li class=" menu-item-has-children has-mega-menu">
        <nuxt-link :to="categoryUrl(menuData.url)">
            {{ menuData.text }}
        </nuxt-link>
        <div class="mega-menu">
            <div
                v-for="item in menuData.subMenu"
                class="mega-menu__column"
                :key="item.heading"
            >
                <h4>{{ item.heading }}</h4>
                <ul class="mega-menu__list">
                    <li v-for="subItem in item.megaItems" :key="subItem.text">
                        <nuxt-link :to="subItem.url">
                            {{ subItem.text }}
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    name: 'MenuMega',
    props: {
        menuData: {
            type: Object,
            default: {}
        }
    },methods: {
        categoryUrl(url) {
            //console.log("URLSSSSSS", url );
            return `${url}`;
        }
    },
};
</script>

<style scoped>
/* .menu ul li{
    font-size: 14px;;
} */

</style>
