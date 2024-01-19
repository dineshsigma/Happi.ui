<template lang='html'>
    <header class='header header--mobile header-mobile-new' data-sticky='true' id='headerStickyMobile'>
        <div class='header__top' style='display:none'>
            <div class='header__left'>
                <p>Welcome to Happimobiles Online Shopping Store !</p>
            </div>
            <div class='header__right'>
                <ul class='navigation__extra'>
                    <li>
                        <nuxt-link to='/account/orders'>
                            Tract your order
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class='navigation--mobile fff'>
            <div class='navigation__left'>
                <span @click.stop="drawer = !drawer" class="menue-icon-mobile" style=''>
                <!-- <span @click.prevent="handleOpenDrawer('categories')" class="menue-icon-mobile" style=''> -->
                    <!-- <img alt='Happi Mobiles' 
                    src='https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/4f4e1f14-d167-4b78-acc7-2274e404672e.png'/>
                    -->
                    <div class="hamburger first"></div>
                    <div class="hamburger second"></div>
                    <div class="hamburger third"></div>
                </span>
                <!-- https://d34e6224thkkna.cloudfront.net/retool-upload/5211e4d3-13b4-40cc-bcf4-d908fb2959a2.webp -->
                <nuxt-link to='/' class='ps-logo'>
                    <img src='https://d34e6224thkkna.cloudfront.net/retool-upload/bddeb445-21bd-4bd8-a2fa-c54da259929e.webp'
                        alt='Happi Mobiles' />
                </nuxt-link>
            </div>
            <mobile-header-actions />
        </div>
        <div data-sticky='true' v-if='isToast != null && isToast.show' class='success-top-toast '
            style='background-color: green;'>
            <div class='text-block' v-html='isToast.htmlTag'>
            </div>
            <span @click.prevent='closeSuccessPopup()'> X </span>
        </div>
        <div class="section sbcat_section">
            <div class="row">
                <div class="col-md-12">
                    <div class="sbcat_card">
                        <button class="sbcat_btn"
                        @click.prevent="handleOpenDrawer('categories')">
                            <div class="icon">
                                <i class="icon-layers"></i>
                            </div>
                            <h1>Shop by Department</h1>
                        </button>
                        <div class="searchicon" >
                            <button @click="searchAction()">
                            <i class="icon-magnifier"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <v-dialog transition="dialog-bottom-transition" fullscreen v-model="this.searchMobileNew" width="100%"
            class="col-sm-12 filterMobile">
            <v-card class="container filt mobileFilterPopup">
                <div class="mobile-filter-body">
                    <div class="card col-12">
                        <SearchForMobile/>
                        <!-- <div>
                            <v-btn text @click="clearSearch()" class="clear_filter cross-button">
                                <i class="icon icon-cross"></i>
                            </v-btn>
                            <div>
                                <div class='input-group search-bar' v-click-outside='handleClickOutside'>
                                    <input v-model='searchText' type='text' class='form-control' placeholder='Search'
                                        aria-describedby='basic-addon2' style='border-radius:10px; height:40px;'
                                        @keyup='handleSearchProduct' v-on:keyup.enter='onEnter'>
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>
            </v-card>
        </v-dialog>
        <v-navigation-drawer
        v-model="drawer"
        class="navigation-drawer"
        absolute
        left
        temporary
      >
      
      <MobileNavLeft class="desktop-hide"/>
      <!-- <div class="navigation-content" data-sticky='true' id='navigateStickyMobile'>
        <div class="ps-logo pt-5">
            <img 
            src='https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/01408631-c58e-4c67-a578-b2b656948bf1.png'
            alt='Happi Mobiles' />
        </div>
        <p class="navigate-disc">Don't have an account yet ? Click here to 
            <span>Signup</span></p>
      </div>

        <hr class="line-break"></hr>


        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <v-list-item-title>Foo</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Bar</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Fizz</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Buzz</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Foo</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Bar</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Fizz</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Buzz</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Foo</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Bar</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Fizz</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Buzz</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Foo</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Bar</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Fizz</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Buzz</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Foo</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Bar</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Fizz</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Buzz</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list> -->
      </v-navigation-drawer>


        <div v-if='isSearching' :class="
            `ps-panel--search-result ${isSearching === true && isLoading === false
                ? 'active'
                : ''
            }`
        ">
            <div class='ps-panel__content'>
                <template v-if='searchResults && searchResults.length > 0'>
                    <product-result v-for='product in searchResults' :product='product' :key='product' />
                </template>
                <span v-else>Not found! Try with another keyword.</span>
            </div>
        </div>
    </header>
</template>
<script>
import MobileHeaderActions from '~/components/shared/mobile/modules/MobileHeaderActions';
import MobileNavLeft from '~/components/shared/mobile/modules/MobileNavLeft';
import { stickyHeader, mobileStickyHeader, mobileStickyNavbar } from '~/utilities/common-helpers';
import { mapState } from 'vuex';
import ProductResult from '~/components/elements/product/ProductResult';
import SearchForMobile from '~/components/shared/headers/modules/SearchForMobile';

export default {
    name: 'HeaderMobile',
    components: {
        MobileHeaderActions, 
        ProductResult, 
        MobileNavLeft,
        SearchForMobile },
    data() {
        return {
            isSearching: false,
            isLoading: false,
            searchText: '',
            searchResults: [],
            searchMobileNew: false,
            drawer: false,
            group: null
        };
    },
    watch: {
    group () {
      this.drawer = false
    },
  },
    computed: {
        ...mapState({
            isToast: (state) => state.cart.isToast,
        }),
    },
    methods: {
        clearSearch() {
            this.searchMobileNew = false;
        },
        searchAction() {
            console.log('SEARCH');
            this.searchMobileNew = true;
        },
        onEnter() {
            location.replace(`/search?q=${this.searchText}`);
        },
        searchProduct() {
            console.log('SEARCH');
            location.replace(`/search?q=${this.searchText}`);
        },
        async handleSearchProduct(e) {
            // console.log(e.target.value);
            this.isSearching = false;
            this.isLoading = true;
            var latest_filter = {
                query: e.target.value,
                size: 5,
                types: {
                    documents: {
                        fields: ['name', 'category'],
                    },
                },
            };
            console.log('latest_filter', JSON.stringify(latest_filter));
            var config_es = {
                method: 'post',
                url: 'https://happi-mobile.ent.us-central1.gcp.cloud.es.io/api/as/v1/engines/happi-meta/query_suggestion',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer search-fhf8xsbbzyadbi9vj4ne3avr',
                },
                data: JSON.stringify(latest_filter),
            };
            var response;
            try {
                var result = await this.$axios(config_es);
                console.log('response', result);
                this.searchResults = result.data.results.documents;
                this.isSearching = true;
                this.isLoading = false;
            } catch (error) {
                console.log('errorsss', error);
            }
        },
        handleClickOutside() {
            console.log('OUT SIDE');
            this.searchText = '';
            this.isSearching = false;
            this.isLoading = false;
        },
        handleSubmit() {
            if (this.searchText !== null || this.searchText !== '') {
                location.replace(`/search?q=${this.searchText}`);
            }
        },
        handleOpenDrawer(drawer) {
            console.log('ok');
            this.$store.commit('app/setCurrentDrawerContent', drawer);
            this.$store.commit('app/setAppDrawer', !this.appDrawer);
        },
        closeSuccessPopup() {
            this.$store.dispatch('cart/toastView', {
                show: false,
                itemName: '',
            });
        },
    },
    mounted() {
        window.addEventListener('scroll', mobileStickyHeader);
        window.addEventListener('scroll', mobileStickyNavbar);
    },
};
</script>
<style lang='scss' scoped>

.navigation-drawer{
    display: flex;
    justify-content: flex-start;
    text-align: left;
    width:80% !important;
}
.sbcat_section {
    position: relative !important;
    background: #d86615;
    padding: 0.5rem 1rem !important;
    .row{margin: auto -15px auto -15px !important;}
    .sbcat_card {
        display: flex !important;
        align-items: center !important;
        justify-content: space-between !important;
        gap: 1rem !important;
        .sbcat_btn {
            display: flex !important;
            align-items: center !important;
            justify-content: flex-start !important;
            gap: 1rem !important;
            width: 100%;
            padding: 0.5rem !important;
            color: #fff;
            .icon {
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                i {
                    font-size: 18px;
                }
            }
            h1 {
                margin: 0;
                padding: 0;
                color: #fff;
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 1;
            }
        }
        .searchicon {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
            width: 32px !important;
            height: 32px !important;
            color: #fff;
            i {
                margin: 0;
            }
        }
    }
}
.menue-icon-mobile {
    padding-right: 10px;
}

.menue-icon-layer-mobile {
    margin-left: -3%;
    padding-right: 1px;
}

.hamburger {
    width: 21px;
    height: 3px;
    border-radius: 5px;
    background-color: rgb(255, 255, 255);
    margin: 6px 0;
}

.second {
    width: 15px !important;
    height: 3px;
    //   border-radius: 5px 0 0 0 ;
    border-radius: 5px;
    background-color: rgb(255, 255, 255);
    margin: 6px 0;
}

.icon-search-mobile {
    font-size: 18px !important;
}

.shop-by-categories {
    margin-top: 1%;
}

.cross-button {
    float: right;
    font-size: 16px;
}

.icon-layer {
    height: 20px;
}

.shop-icon {
    line-height: 15px !important;
    height: 30px !important;
    width: 30px !important;
    // margin-top:2%;
    margin-left: 2%;
    color: #fff;
}

.shop-text {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 650 !important;
    font-size: 14px !important;
    line-height: 15px !important;
    /* identical to box height, or 107% */
    padding-top: 5%;
    padding-left: 10px;
    margin-right: 47px;
    margin-top: 10%;
    color: #ffffff !important;
}

.mobile-shop-categories {
    justify-content: left;
    background-color: #d86615;
    height: 54px;
}

.search-bar-mob {
    margin-top: 2%;
    padding-top: 2%;
    background-color: #d86615;
    width: 100%;
    height: 45px;
}

.mobile-shop-search {
    float: right;
    font-size: 20px;
    justify-content: right;
    background-color: #d86615;
    width: 100%;
    height: 54px;
}

.header-mobile-new {
    background-color: #f07720;
}

@media (max-width: 1200px) {
    .ps-logo {
        img {
            height: 28px !important;
            width: fit-content;
            margin-left: 20%;
        }
    }
}

.success-top-toast {
    padding: 0 1rem;
    height: 70px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    letter-spacing: 1px;
    width: 100%;
    z-index: 99999;
    top: 0;
    position: fixed;

    .text-block {
    }

    span {
        font-weight: bold;
    }
}

.ps-panel--search-result {
    position: absolute;
    width: 100%;
    background-color: #fff;
}

@media (max-width: 767px) {
    .ps-logo {
        img {
            // height: 26px !important;
            height: 26px !important;
            margin-left: 2%;
            width: auto;
        }
    }

    .w-100 {
        width: 95%;
    }

    .search-bar {
        padding: 5px;
    }

    .success-top-toast {
        height: 110px;

        .text-block {
            width: 100%;
            display: grid;

            span:last-child {
                cursor: pointer;
                background-color: #fff;
                color: #000;
                padding: 5px;
                border-radius: 5px;
                font-weight: 500;
                font-size: 14px;
            }
        }
    }

    .checkout-class {
        cursor: pointer;
        background-color: #fff;
        color: #000;
        padding: 5px;
        border-radius: 5px;
        font-weight: 500;
        font-size: 14px;
    }
}
</style>