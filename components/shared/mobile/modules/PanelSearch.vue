<template lang="html">
    <div class="ps-panel--sidebar" id="panel-search">
        <div class="ps-panel__header">
            <h3>Search</h3>
            <a
                href="#"
                class="ps-panel__close"
                @click.prevent="handleClosePanel"
            >
                <i class="icon icon-cross"></i>
            </a>
        </div>
        <div class="navigation__content">
            <div class="ps-panel__search-results">
                <form class="ps-form--search-mobile ps-form--quick-search w-100" action="/search" method="get">
                    <div class="form-group--nest w-100">
                        <input
                            class="form-control"
                            ref='focusMe'
                            type="text" name="q" @keyup="handleSearchProduct"
                            placeholder="Search something..."
                        />
                        <button >
                            <i class="icon-magnifier" ></i>
                        </button>
                    </div>
                </form>
                <div
                :class="
                    `ps-panel--search-result ${
                        isSearching === true && isLoading === false
                            ? 'active'
                            : ''
                    }`
                "
            >
                <div class="ps-panel__content">
                    <template v-if="searchResults && searchResults.length > 0">
                        <product-result
                            v-for="product in searchResults"
                            :product="product"
                            :key="product.objectID"
                        />
                    </template>
                    <span v-else>
                        Start Searching
                    </span>
                </div>

            </div>
            </div>

        </div>
    </div>
</template>

<script>
import ProductResult from '~/components/elements/product/ProductResult';

export default {
    name: 'PanelSearch',
     components: { ProductResult },
    data() {
        return {
            isSearching: false,
            isLoading: false,
            searchText: '',

            searchResults: []
        }
    },
    mounted(){
        setTimeout(() => {
            this.$refs.focusMe.focus();
        }, 500);
    },
    methods: {
        handleClosePanel() {
            this.$store.commit('app/setCurrentDrawerContent', null);
            this.$store.commit('app/setAppDrawer', false);
        },
         async handleSearchProduct(e) {
            console.log(e.target.value);
            this.isSearching = false;
            this.isLoading = true;
            var response;
            try {
                response = await this.$http.$get(
                    `search?q=${e.target.value}`
                );
                console.log('response', response);
                this.searchResults = response.data;
                this.isSearching = true;
                this.isLoading = false;
            } catch (error) {
                console.log('error', error);
            }
        },
    },

};
</script>

<style lang="scss" scoped>
#panel-search {
    .navigation__content {
        padding: 10px;
    }
    i {
        color:#fff;
    }
    button {
        i {
            color: #fa9012;
            font-weight: bold;
        }
    }
}
.ps-form--search-mobile {
    input {
        height: 40px;
        background-color: #ffffff;
        border: 1px solid #ddd;
        border-radius: 0;
    }

    button {
        min-width: 40px;
        height: 40px;
        color: #fa9012;
        background: #fff;
        border: none;

        i {
            color: #fa9012;
            font-weight: bold;
        }
    }
}
.ps-product--wide {
    margin-bottom: 10px;
    flex-flow: initial;
}
</style>
