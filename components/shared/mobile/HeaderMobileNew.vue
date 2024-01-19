<template lang='html'>
    <header class='header header--mobile' data-sticky='true' id='headerStickyMobile'>
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
                <span @click.prevent="handleOpenDrawer('categories')">
                    <img alt='Happi Mobiles' style='height:30px;padding-right: 30px'
                    src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/4f4e1f14-d167-4b78-acc7-2274e404672e.png"/>
                </span>
                <!-- https://d34e6224thkkna.cloudfront.net/retool-upload/5211e4d3-13b4-40cc-bcf4-d908fb2959a2.webp -->
                <nuxt-link to='/' class='ps-logo'>
                    <img
                        src='https://d34e6224thkkna.cloudfront.net/retool-upload/bddeb445-21bd-4bd8-a2fa-c54da259929e.webp'
                        alt='Happi Mobiles'
                    />
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
        <div class="search-bar-mob">
            <div class='input-group search-bar' v-click-outside='handleClickOutside'>
                <input v-model='searchText' type='text' class='form-control' placeholder='Search'
                       aria-describedby='basic-addon2'
                       style='border-radius:10px; height:40px;' @keyup='handleSearchProduct' v-on:keyup.enter='onEnter'>
            </div>
            <div v-if='isSearching'
                 :class="
                    `ps-panel--search-result ${
                        isSearching === true && isLoading === false
                            ? 'active'
                            : ''
                    }`
                "
            >
                <div class='ps-panel__content'>
                    <template v-if='searchResults && searchResults.length > 0'>
                        <product-result
                            v-for='product in searchResults'
                            :product='product'
                            :key='product'
                        />
                    </template>
                    <span v-else>Not found! Try with another keyword.</span>
                </div>

            </div>
        </div>
    </header>
</template>

<script>
import MobileHeaderActions from '~/components/shared/mobile/modules/MobileHeaderActions';
import { stickyHeader, mobileStickyHeader } from '~/utilities/common-helpers';
import { mapState } from 'vuex';
import ProductResult from '~/components/elements/product/ProductResult';

export default {
    name: 'HeaderMobileNew',
    components: { MobileHeaderActions, ProductResult },
    data() {
        return {
            isSearching: false,
            isLoading: false,
            searchText: '',
            searchResults: []
        };
    },
    computed: {
        ...mapState({
            isToast: state => state.cart.isToast
        })
    },

    methods: {
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
                        fields: ['name',"category"]
                    }
                }
            };
            console.log('latest_filter', JSON.stringify(latest_filter));

            var config_es = {
                method: 'post',
                url: 'https://happi-mobile.ent.us-central1.gcp.cloud.es.io/api/as/v1/engines/happi-meta/query_suggestion',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer search-fhf8xsbbzyadbi9vj4ne3avr'
                },
                data: JSON.stringify(latest_filter)
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
                itemName: ''
            });
        }
    },
    mounted() {
        window.addEventListener('scroll', mobileStickyHeader);
    }

};
</script>

<style lang='scss' scoped>

@media (max-width: 1200px) {
    .ps-logo {
        img {
            height: 40px !important;
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
            height: 26px !important;
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


