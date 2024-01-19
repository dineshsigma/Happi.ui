<template>
    <div>
        <div class="row p-4">
            <div class='input-group search-bar col-9' v-click-outside='handleClickOutside'>
                <input v-model='searchText' type='text' class='form-control' placeholder='Search'
                    aria-describedby='basic-addon2' style='border-radius:10px; height:40px;'
                    @keyup='handleSearchProduct' v-on:keyup.enter='onEnter'>
            </div>
            <div>
                <v-btn text @click="clearSearch()" class="clear_filter cross-button">
                    <i class="icon icon-cross"></i>
                </v-btn>
            </div>
        </div>
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
                    <!-- <span v-else>Not found! Try with another keyword.</span> -->
                </div>
            </div>
    </div>
</template>
<script>
import ProductResult from '~/components/elements/product/ProductResult';

export default {
    name: 'SearchForMobile',
    components: { ProductResult },
    data() {
        return {
            prevPath: '',
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
    // beforeRouteEnter(to, from, next) {
    //     next(vm => {
    //         vm.prevRoute = from;
    //     });
    // },
    // computed: {
    //     prevRoutePath() {
    //         console.log(this.prevRoute, 'PREVVVV')
    //         return this.prevRoute ? this.prevRoute.path : '/'},
    // },
    methods: {
        clearSearch() {
            location.replace(this.prevPath);
        },
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
          console.log(this.$router, '$router');
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
    },
    mounted(){
        this.prevPath = this.$router.history.current.path;
    }

}
</script>
