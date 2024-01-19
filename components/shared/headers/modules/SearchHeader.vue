<template lang="html">
    <div>
        <form
            class="ps-form--quick-search"
            @submit.prevent="handleSubmit"
            v-click-outside="handleClickOutside"
        >
            <div class="ps-form__input">
                <input
                    v-model="searchText"
                    class="form-control hm-search"
                    type="text"
                    placeholder="I'm shopping for..."
                    @keyup="handleSearchProduct"
                    style='border-radius: 4px 0 0 4px'
                    v-on:keyup.enter="onEnter"
                />
                <v-progress-circular
                    v-if="isLoading"
                    indeterminate
                    color="#fb9013"
                    width="2"
                    size="16"
                />
            </div>
            <button style="background-color: #fff;color: #fb9013;font-size:14px;" @click.prevent="searchProduct()">Search</button>
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
                    <span v-else>Not found! Try with another keyword.</span>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import ProductResult from '~/components/elements/product/ProductResult';
export default {
    name: 'SearchHeader',
    components: { ProductResult },
    data() {
        return {
            exampleCategories: [
                'Mobiles',
                'Laptops',
                'Tvs',
            ],
            isSearching: false,
            isLoading: false,
            searchText: '',
            searchResults: []
        };
    },
    methods: {
        onEnter(){
            if(this.searchText != ''){
                console.log('SEARCH');
            location.replace(`/search?q=${this.searchText}`);
            }
        },
        searchProduct() {
            if(this.searchText != ''){
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
                  fields: ['name',"category"]
              }
            }
          };
          console.log("latest_filter", JSON.stringify(latest_filter));
            var config_es = {
                method: 'post',
                url: 'https://happi-mobile.ent.us-central1.gcp.cloud.es.io/api/as/v1/engines/happi-meta/query_suggestion',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':'Bearer search-fhf8xsbbzyadbi9vj4ne3avr'
                },
                data : JSON.stringify(latest_filter)
            };
            var response;
            try {
                var result = await this.$axios(config_es);
                // response = await this.$http.$get(
                //     `${baseUrl}search?q=${e.target.value}`
                // );
                console.log('response', result);
                this.searchResults =  result.data.results.documents;
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
        }
    }
};
</script>
<style lang="scss" scoped>
.ps-panel--search-result {
  padding: 0 !important;
}
.ps-form--quick-search {
    .ps-form__input {
        position: relative;
        width: 100%;
        .hm-search{
            font-size: 14px !important;
        }
        .v-progress-circular {
            @include vertical-align();
            right: 10px;
            z-index: 20;
        }
    }
}
</style>