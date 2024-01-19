<template lang="html">
    <v-list>
        <template v-for="menuItem in menu">
            <v-list-item v-if="!menuItem.subMenu">
                <v-list-item-content>
                    <a
                        @click.prevent="handleClosePanel(menuItem.url)">
                         {{ menuItem.text }}
                    </a>
                </v-list-item-content>
            </v-list-item>
            <v-list-group v-else no-action>
                <template v-slot:activator>
                    <v-list-item-content>
                        <a
                            @click.prevent="handleClosePanel(menuItem.url)">
                           {{ menuItem.text }}
                        </a>
                    </v-list-item-content>
                </template>
                <mobile-submenu :menu="menuItem.subMenu" />
            </v-list-group>
        </template>
    </v-list>
</template>

<script>
export default {
    name: 'MobileSubmenu',
    props: {
        menu: {
            type: Array,
            default: () => {}
        }
    },
    methods: {
        handleClosePanel(url) {
            this.$store.commit('app/setCurrentDrawerContent', null);
            this.$store.commit('app/setAppDrawer', false);
            if(url.indexOf('/') === 0){
                location.replace(`${url}`);
            }else{
                location.replace(`/${url}`);
            }

        },
    },
};
</script>

<style lang="scss" scoped>
a {
  font-size: 15px;
}
</style>
