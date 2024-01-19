<template lang="html">
    <div class="ps-panel--sidebar">
        <div class="ps-panel__header">
            <h3>Menu</h3>
            <a
                href="#"
                class="ps-panel__close"
                @click.prevent="handleClosePanel">
                <i class="icon icon-cross"></i>
            </a>
        </div>
        <div class="ps-panel__content">
            <v-list class="menu--mobile">
                <template v-for="menuItem in menu">
                    <v-list-group v-if="menuItem.subMenu" no-action>
                        <template v-slot:activator>
                            <v-list-item-content>
                                 {{ menuItem.text }}
                            </v-list-item-content>
                        </template>
<!--                        <mobile-submenu :menu="menuItem.subMenu" />-->
                    </v-list-group>
                    <v-list-group v-else-if="menuItem.mega" no-action>
                        <template v-slot:activator>
                            <v-list-item-content>
                                <a
                                    @click.prevent="handleClosePanel(menuItem.url)">
                                    {{ menuItem.text }}
                                </a>
                            </v-list-item-content>
                        </template>
                        <v-list>
                            <template v-for="megaItem in menuItem.megaContent">
                                <v-list-group no-action>
                                    <template v-slot:activator>
                                        <v-list-item-content>

                                                {{ megaItem.heading }}

                                        </v-list-item-content>
                                    </template>
<!--                                    <mobile-submenu-->
<!--                                        :menu="megaItem.megaItems"-->
<!--                                    />-->
                                </v-list-group>
                            </template>
                        </v-list>
                    </v-list-group>
                    <v-list-item v-else>
                        <v-list-item-content>
                            <nuxt-link
                                :to="replaceLocation(menuItem.url)"
                               @click="handleClosePanel(menuItem.url)"
                            >
                                {{ menuItem.text }}
                            </nuxt-link>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
            <div class="ps-site-actions">
                <div class="row">
                    <aside class="widget widget_footer widget_contact-us">
                        <h4 class="widget-title">
                         Contact us
                        </h4>
                        <div class="widget_content">
                            <p>Call us (10AM - 7PM) IST</p>
                            <h4>
                                <a
                                    href="tel:9100412345" target="_parent"
                                    style="color:#fb9013">
                                    +91 9100412345
                                </a>
                            </h4>
                            <h4>
                                <a
                                    href="tel:919100412345"
                                    style="color:#fb9013">
                                    +91 9100412345</a>
                            </h4>
                            <ul class="ps-list--social">
                                <li>
                                    <a
                                        class="facebook"
                                        rel="noreferrer"
                                        target="_blank"
                                        href="https://www.facebook.com/HappiMobiles1/"
                                    >
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="twitter"
                                        rel="noreferrer"
                                        target="_blank"
                                        href="https://twitter.com/happimobiles2"
                                    >
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="google-plus"
                                        rel="noreferrer"
                                        target="_blank"
                                        href="https://www.linkedin.com/company/happi-mobiles-pvt-ltd/"
                                    >
                                        <i class="fa fa-linkedin-in"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="google-plus"
                                        rel="noreferrer"
                                        target="_blank"
                                        href="https://www.youtube.com/channel/UCFlcLoM3mfOA1-2GYdXm50g">
                                        <i class="fa fa-youtube"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="instagram"
                                        rel="noreferrer"
                                        target="_blank"
                                        href="https://www.instagram.com/happimobiles/">
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mainMenu } from '~/static/data/newmenu.json';
import MobileSubmenu from '~/components/shared/mobile/modules/MobileSubmenu';
import MobileCurrencySwitcher from '~/components/shared/mobile/modules/MobileCurrencySwitcher';
import MobileLangugeSwitcher from '~/components/shared/mobile/modules/MobileLangugeSwitcher';

export default {
    name: 'PanelMenu',
    components: {
        MobileLangugeSwitcher,
        MobileCurrencySwitcher,
        MobileSubmenu
    },
    computed: {
        menu() {
            return mainMenu;
        }
    },
    methods: {
        handleClosePanel(url) {
            console.log('handleClosePanel', url);
            this.$store.commit('app/setCurrentDrawerContent', null);
            this.$store.commit('app/setAppDrawer', false);
            return;
            location.replace(url);
        },
        replaceLocation(url){
            return url;
            //location.replace(url);
        }
    }
};
</script>

<style lang="scss" scoped>
.ps-panel__content {
    z-index: 9999;
    background-color: #fff;
    border: 1px solid #fb9013;
}
.ps-site-actions {
    z-index: -1;
    position: absolute;
    width: 97%;
    bottom: 0;
    text-align: center;
    .row {
        margin: 0;
        width: 100%;
        aside {
            width: 100%;
        }
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
