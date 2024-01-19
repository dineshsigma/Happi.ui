<template lang="html">
    <section class="ps-store-list m-t-4">
        <div class="container">
            <div class="ps-section__header p-0">
                <h3>Our Stores</h3>
            </div>

            <div class="ps-section__content">
                <div class="ps-section__search row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <button>
                                <i class="icon-magnifier"></i>
                            </button>
                            <input
                                class="form-control"
                                type="text"
                                placeholder="Search stores..."
                                v-model="query"
                                v-on:keydown.enter.prevent="search"
                            />
                        </div>
                    </div>
                </div>

                <div class="row m-0" v-if="storesList != 0">
                    <div>
                        <h1>Telangana</h1>
                        <div
                            class="each-store-view"
                            v-for="(city, index) in tsCities"
                        >
                            <h4 class="mb-5 store-city-name" v-if="">
                                {{ city }}
                            </h4>
                            <div class="row">
                                <template
                                    v-for="(item, index) in tsStores.get(city)"
                                >
                                    <template>
                                        <article
                                            class="stores-b col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                                        >
                                            <div class="ps-block--store-2">
                                                <div
                                                    class="ps-block__content bg--cover"
                                                    :style="{
                                                        background:
                                                            'url(/img/vendor/store/default-store-banner.png)',
                                                    }"
                                                >
                                                    <figure>
                                                        <h5>
                                                            {{
                                                                item.RetailerLocalityArea
                                                            }}
                                                        </h5>

                                                        <p class="address-v">
                                                            {{
                                                                item.FullPostalAddress
                                                            }}
                                                            <br />
                                                        </p>

                                                        <p>
                                                            <i
                                                                class="icon-telephone"
                                                            ></i>
                                                            (+91)
                                                            {{
                                                                item.MobileNumber
                                                            }}
                                                        </p>
                                                    </figure>
                                                </div>
                                                <div class="ps-block__author">
                                                    <a
                                                        class="ps-block__user"
                                                        href="javascript:void()"
                                                        style="cursor: default"
                                                    >
                                                        <img
                                                            src="/static/img/vendor/store/vendor-150x150.jpg"
                                                            alt="martfury"
                                                        />
                                                    </a>
                                                    <a
                                                        :href="`/our-stores/${item.RetailerLocalityArea}`"
                                                    >
                                                        <div
                                                            class="ps-btn"
                                                            href="store-detail.html"
                                                        >
                                                            Visit Store
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </article>
                                    </template>
                                </template>
                            </div>
                            
                        </div>
                    </div>
                    <div>
                        <h1>Andhra Pradesh</h1>
                        <div
                            class="each-store-view"
                            v-for="(city, index) in apCities"
                        >
                            <h4 class="mb-5 store-city-name" v-if="">
                                {{ city }}
                            </h4>
                            <div class="row">
                                <template
                                    v-for="(item, index) in apStores.get(city)"
                                >
                                    <template>
                                        <article
                                            class="stores-b col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                                        >
                                            <div class="ps-block--store-2">
                                                <div
                                                    class="ps-block__content bg--cover"
                                                    :style="{
                                                        background:
                                                            'url(/img/vendor/store/default-store-banner.png)',
                                                    }"
                                                >
                                                    <figure>
                                                        <h5>
                                                            {{
                                                                item.RetailerLocalityArea
                                                            }}
                                                        </h5>

                                                        <p class="address-v">
                                                            {{
                                                                item.FullPostalAddress
                                                            }}
                                                            <br />
                                                        </p>

                                                        <p>
                                                            <i
                                                                class="icon-telephone"
                                                            ></i>
                                                            (+91)
                                                            {{
                                                                item.MobileNumber
                                                            }}
                                                        </p>
                                                    </figure>
                                                </div>
                                                <div class="ps-block__author">
                                                    <a
                                                        class="ps-block__user"
                                                        href="javascript:void()"
                                                        style="cursor: default"
                                                    >
                                                        <img
                                                            src="/static/img/vendor/store/vendor-150x150.jpg"
                                                            alt="martfury"
                                                        />
                                                    </a>
                                                    <a
                                                        :href="`/our-stores/${item.RetailerLocalityArea}`"
                                                    >
                                                        <div
                                                            class="ps-btn"
                                                            href="store-detail.html"
                                                        >
                                                            Visit Store
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </article>
                                    </template>
                                </template>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <!-- <div v-for="(city, index) in tsCities">
                        <h1>{{city}}</h1>
                        <div v-for="(stores, index) in tsStores.get(city)">
                        <h4> {{stores.RetailerLocalityArea}}</h4>
                        </div>
                                            </div></div> -->

                <div v-else class="text-center mt-4">
                    <h5>No Data found</h5>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'StoreList2',
    data() {
        return {
            query: '',
            tsCities: [],
            apCities: [],
            tsStores: new Map(),
            apStores: new Map(),
        };
    },
    computed: {
        ...mapState({
            storesList: (state) => state.stores.storesList,
            citiesList: (state) => state.stores.citiesList,
        }),
    },
    async created() {
        await this.$store.dispatch('stores/getStoreList', {});
        console.log('stores', this.storesList);
        // console.log('citiesList', this.citiesList);
        let AP = this.storesList[0].state;
        let TS = this.storesList[1].state;
        console.log('Telanagana', TS);
        // this.tsStates = [...new Set(TS.map((item) => item.city))];
        // this.apStates = [...new Set(AP.map((item) => item.city))];
        // console.log('city', this.tsStates);
        // console.log('city', this.apStates);
        const tsMap = new Map();
        for (let i = 0; i < TS.length; i++) {
            var stores =
                tsMap.get(TS[i].city) != undefined ? tsMap.get(TS[i].city) : [];
            stores.push(TS[i]);
            tsMap.set(TS[i].city, stores);
        }
        this.tsCities = tsMap.keys();
        this.tsStores = tsMap;
        const apMap = new Map();
        for (let i = 0; i < AP.length; i++) {
            var stores =
                apMap.get(AP[i].city) != undefined ? apMap.get(AP[i].city) : [];
            stores.push(AP[i]);
            apMap.set(AP[i].city, stores);
        }
        this.apCities = apMap.keys();
        this.apStores = apMap;
    },
    methods: {
        search() {
            this.$store.dispatch('stores/getStoreList', { q: this.query });
        },
    },
};
</script>
<style lang="scss" scoped>
.each-store-view {
    width: 100% !important;
    // display:flex !important;
    .stores-b {
        // display: flex;
        // flex-wrap: wrap;
        .ps-block--store-2 {
            max-height: 302px !important;
            min-height: 302px !important;
            height: 302px !important;
            display: grid;
            align-items: self-end;
            .ps-block__content {
                padding-bottom: 25px !important;
                border-bottom: 0 !important;

                // .address-v {
                // overflow: hidden;
                // text-overflow: ellipsis;
                // display: -webkit-box;
                // -webkit-line-clamp: 3; /* number of lines to show */
                // -webkit-box-orient: vertical;
                // }
            }
        }
    }
}
.store-city-name {
    font-size: 1.8em !important;
}
</style>
