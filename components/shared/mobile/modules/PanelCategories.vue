<template lang="html">
    <div class="ps-panel--sidebar">
        <div class="ps-panel__header">
            <h3>Categories</h3>
            <a
                href="#"
                class="ps-panel__close"
                @click.prevent="handleClosePanel('/')"
            >
                <i class="icon icon-cross" style="color: rgb(255, 255, 255);font-size: 21px;font-weight: 900;"></i>
            </a>
        </div>
        <div class="ps-panel__content">

            <v-list class="menu--mobile">
                <template v-for="menuItem in menuCategories.menuCategories">
                    <v-list-group v-if="menuItem.subMenu" no-action>
                        <template v-slot:activator>
                            <v-list-item-content class="hide-extra">
<!--                                <a-->
<!--                                    @click.prevent="handleClosePanel(menuItem.id, menuItem.url)"-->
<!--                                >-->
                                    <div class="d-flex justify-content-between">
                                      {{ menuItem.text }}
                                      <i class="icon icon-chevron-down" ></i>
<!--                                      <i class="icon icon-arrow-up" @click.prevent="hideAndCollapse('close')" v-else ></i>-->
                                    </div>

<!--                                </a>-->
                            </v-list-item-content>
                        </template>
                        <mobile-submenu :menu="menuItem.subMenu[0].megaItems" />
                    </v-list-group>
                    <v-list-group v-else-if="menuItem.mega" no-action>
                        <template v-slot:activator>
                            <v-list-item-content>
<!--                                <a-->
<!--                                    @click.prevent="handleClosePanel(menuItem.id, menuItem.url)"-->
<!--                                >-->
                                    {{ menuItem.text }}
<!--                                </a>-->
                            </v-list-item-content>
                        </template>
                        <v-list>
                            <template v-for="megaItem in menuItem.megaContent">
                                <v-list-group no-action>
                                    <template v-slot:activator>
                                        <v-list-item-content>
                                            <span
                                                @click.prevent="handleClosePanel(menuItem.id, menuItem.url)"
                                            >
                                                {{ menuItem.text }}
                                            </span>

                                        </v-list-item-content>
                                    </template>
                                    <mobile-submenu
                                        :menu="megaItem.megaItems"
                                    />
                                </v-list-group>
                            </template>
                        </v-list>
                    </v-list-group>
                    <v-list-item v-else>
                        <v-list-item-content>
                            <a
                                @click.prevent="handleClosePanel(menuItem.id, menuItem.url)"
                            >
                                {{ menuItem.text }}
                            </a>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
        </div>
    </div>
</template>

<script>
import MobileSubmenu from '~/components/shared/mobile/modules/MobileSubmenu';
import { mapState } from 'vuex';

export default {
    name: 'PanelCategories',
     components: {
        MobileSubmenu
    },
  computed: {
    ...mapState({
      menuCategories: state => state.collection.menu
    })
  }, data() {
    return {
      openIcon: true
    };
  },
  created: async function () {

  },
    methods: {
      hideAndCollapse(action) {
        this.openIcon = !this.openIcon;
        if (action == 'open')
          return 'icon-arrow-down';
         else
        return 'icon-arrow-up';
      },
        handleClosePanel(url) {
            this.$store.commit('app/setCurrentDrawerContent', null);
            this.$store.commit('app/setAppDrawer', false);

            // if(url != null){
            //     location.replace(url);
            // }else{
            //     location.replace(`${url}`);
            // }

        },

    }
};
</script>

<style lang="scss" scoped>
.hide-extra {
  i {
    color: #000;font-size:15px;
    position: absolute;
    right: 0;
  }
}
.ps-panel--sidebar {
    font-size: 18px;
    .v-list-group__header {
        a {
font-weight: 600;
        }

    }

}


</style>
