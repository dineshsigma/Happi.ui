<template lang="html">
        <div class="searchcard">
            <form
            class="ps-form--quick-search-desk"
            @submit.prevent="handleSubmit"
            v-click-outside="handleClickOutside">
                <div class="cat_text"> 
                    <i class="icon-layers"></i>All Categories
                </div>
                    <input
                        v-model="searchText"
                        class="form-control"
                        type="text"
                        placeholder="What you are looking for..."
                        @keyup="handleSearchProduct" 
                        v-on:keyup.enter="onEnter"
                        />
                    <v-progress-circular
                        v-if="isLoading"
                        indeterminate
                        color="#fb9013"
                        width="2"
                        size="16"
                    />
                <button class="btn-search" @click.prevent="searchProduct()"><i class="icon-magnifier"></i></button>
                <div :class="(isSearching === true && isLoading === false && searchText) || (searchResults.length > 0) ? 'search-result-card' : 'not-search'">
                    <!-- <div :class="{ 'search-result-card' : (isSearching === true && isLoading === false)} " > -->
                    <template v-if="searchResults && searchResults.length > 0">
                        <product-result
                            v-for="product in searchResults"
                            :product="product"
                            :key="product.objectID"
                        />
                    </template>
                    <span v-else-if="searchText != ''">Not found! Try with another keyword.</span>
                </div>
            </form>            
        </div>
</template>
<script>
import ProductResult from '~/components/elements/product/ProductResult';
export default {
    name: 'SearchHeaderDesktop',
    components: { ProductResult },
    data() {
        return {
            exampleCategories: ['Mobiles', 'Laptops', 'Tvs'],
            isSearching: false,
            isLoading: false,
            searchText: '',
            searchResults: [],
        };
    },
    methods: {
        onEnter() {
            if (this.searchText != '') {
                console.log('SEARCH');
                location.replace(`/search?q=${this.searchText}`);
            }
        },
        searchProduct() {
            if (this.searchText != '') {
                console.log('SEARCH');
                location.replace(`/search?q=${this.searchText}`);
            }
        },
        async handleSearchProduct(e) {
            // console.log(e.target.value);
            this.isSearching = false;
            this.isLoading = true;
            // var latest_filter = {
            //     from:0,
            //     size:24,
            //     'query': {
            //         'bool': {
            //             'must': [{
            //                 'match_phrase': {
            //                     'ispublished': true
            //                 }
            //             }, {
            //                 'wildcard': {
            //                     'name': "*"+e.target.value+"*"
            //                 }
            //             },{
            //                 'range': {
            //                     'payPrice': {
            //                         'gte': 1,
            //                         'lt': null
            //                     }
            //                 }
            //             },{
            //                 'range': {
            //                     'stock': {
            //                         'gte': 1,
            //                         'lt': null
            //                     }
            //                 }
            //             }]
            //         }
            //     },
            //     'sort': [
            //         { 'stock': { 'order': 'desc' } },
            //         { 'sortWeight': { 'order': 'desc' } }
            //     ]
            // };
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
                // response = await this.$http.$get(
                //     `${baseUrl}search?q=${e.target.value}`
                // );
                console.log('response', result);
                this.searchResults = result.data.results.documents;
                this.isSearching = true;
                this.isLoading = false;
            } catch (error) {
                console.log('errorsss', error);
            }
        },
        handleClickOutside() {
            this.searchText = '';
            this.isSearching = false;
            this.isLoading = false;
        },
        handleSubmit() {
            if (this.searchText !== null || this.searchText !== '') {
                location.replace(`/search?q=${this.searchText}`);
            }
        },
    },
};
</script>
<style lang="scss" scoped>
// .ps-form--quick-search button {
//     padding: 0 !important;
//     float: right;
//     padding-top: 5% !important ;
// }
.happi-search-header {
    background-color: #fff;
    border-radius: 50px;
    .all-categories-s-text {
        text-align: center;
        align-items: center;
        margin: auto;
        padding-top: 5%;
    }
}
.allcat-text {
    font-size: 12px !important;
}
.layers-icon-allcat {
    font-size: 12px !important;
    color: #000000 !important;
    margin: 1%;
}
.search-bar {
    margin-left: 1%;
}
.allcategories-desk-button {
    border-radius: 25px 0px 0px 25px !important;
    width: 30% !important;
    padding-left: 0% !important;
}
.search-desk-button {
    border-radius: 0px 25px 25px 0px !important;
}
.ps-panel--search-result {
    padding: 0 !important;
}
.ps-form--quick-search {
    .ps-form__input {
        // position: relative;
        width: 100%;
        .hm-search {
            font-size: 14px !important;
            border-radius: 0px 0px 0px 0px !important;
        }
        .v-progress-circular {
            @include vertical-align();
            right: 10px;
            z-index: 20;
        }
    }
}
</style>