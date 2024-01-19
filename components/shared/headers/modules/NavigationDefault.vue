<template lang="html">
    <nav class="navigation">
        <div class="ps-container">
            <div class="navigation__left">
                <div class="menu--product-categories">
                    <div class="menu_toggle">
                        <span> <i class="icon-menu"></i>Shop by Department</span>
                    </div>
                    <div class="menu__content">
                        <menu-categories />
                    </div>
                </div>
            </div>
            <div class="navigation__right nav-bar">
                <menu-default />

                <ul class="navigation__extra">
                    <!-- <li>
                        <a href="/mobile-offers">
                            Mobile Offers
                        </a>
                    </li>
                    <li>
                        <a href="/laptop-offers">
                            Laptop Offers
                        </a>
                    </li>
                     <li>
                        <a href="/smart-watches">
                            Watch Offers
                        </a>
                    </li>
                    <li>
                        <a href="/air-pods">
                            AirPods 2 Offers
                        </a>
                    </li> -->


                     <!-- <li>
                        <a to="/mobile-offers">
                           Mobile Offers
                        </a>
                    </li> -->

                    <!-- <li>
                        <a to="/page/faqs">
                           Faq
                        </a>
                    </li> -->


                        <!-- <li>
                        <a to="/our-stores">
                            Our Stores
                        </a>
                    </li>  -->
                    <!-- <li>
                        <a to="/page/latest-mobile-blogs">
                            Blog
                        </a>
                    </li> -->

                    <!-- <li>
                        <a to="/page/blood-donation">
                            Blood Donations
                        </a>
                    </li> -->

                    <!-- <li>
                        <a to="/page/contact-us">
                           Contact
                        </a>
                    </li> -->

                    <!-- <li>
                        <CurrencyDropdown />
                    </li> -->
                    <!-- <li>
                        <LanguageSwicher />
                    </li> -->
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import CurrencyDropdown from './CurrencyDropdown';
import LanguageSwicher from './LanguageSwicher';
import MenuDefault from '~/components/shared/menu/MenuDefault';
import MenuCategories from '~/components/shared/menu/MenuCategories';
export default {
    name: 'NavigationDefault',
    components: {
        MenuCategories,
        MenuDefault,
        LanguageSwicher,
        CurrencyDropdown
    }
};
</script>

<style lang="scss" scoped>
.navigation {
    background-color: #fff !important;
   border-bottom: 1px solid #fafafa ;
   margin-bottom:1px;
    position: relative;
    // top: 58px;
    // width: 100%;
    z-index: 1000 !important;
    // border-bottom: none;
    // padding: 10px 0;

    .ps-container{
        display: flex;
        flex-flow: row nowrap;
        // border:2px dashed red;
	        z-index: 3;
    }
}
.menu--product-categories {
    .menu__toggle {
        span {
            color:black;
        }
    }
}
.navigation__extra {
    li {
        a {
            color:black;
            font-size: 1.3rem;
        }

        a:hover {
            background-color: #fb9013;
            padding: 5px;
            border-radius: 10px;
          }
    }

    :after {
        background-color:black;
    }
    .navigation__left{
        max-width:250px !important;
        position:relative;
        right: 10px;

    }




}

@media only screen and(max-width:1440px){
.navigation__left{
    max-width: 300px !important;
}
.ps-container{
        padding: 0px 12px;
}
.navigation__right{
    padding-left: 0px !important;

 }
.nav-bar{
         padding: 5px;
         position: relative;
}
.navigation__extra{
    margin-top: 13px;
}
.navigation .navigation__right{
align-items: baseline;
}
}


</style>
