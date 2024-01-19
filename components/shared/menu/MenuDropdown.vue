<template>
    <li class="menu-item-has-children dropdown">
        <nuxt-link :to="menuData.url">
            {{ menuData.text }}
        </nuxt-link>
        <ul v-if="menuData.subMenu.megaItems"  class="sub-menu">
            <li class="menu-item-has-children dropdown" v-for="item in menuData.subMenu.megaItems">
                <nuxt-link :to="item.url">
                    {{ item.text }}
                </nuxt-link>
            </li>
        </ul>
    </li>
</template>

<script>
export default {
    name: 'MenuDropdown',
    props: {
        menuData: {
            type: Object,
            default: {}
        }
    },
    data: () => {
        return {};
    },
    created: async function () {
        console.log("MENU DRPDWN", JSON.stringify(this.menuData));
    },
};
</script>

<style scoped></style>
