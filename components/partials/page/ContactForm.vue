<template lang="html">
    <div class="ps-contact-form">
        <div class="container">
            <div class="row">
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 " style="margin-bottom:90px">
                    <form class="ps-form--contact-us" action="/" method="get">
                        <h3>Get In Touch</h3>

                        <div class="row">
                            <div
                                class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 "
                            >
                                <div class="form-group">
                                    <input v-model="getInTouch.name"
                                        class="form-control"
                                        type="text"
                                        placeholder="Name"
                                    />
                                </div>
                            </div>
                            <div
                                class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 "
                            >
                                <div class="form-group">
                                    <input v-model="getInTouch.email"
                                        class="form-control"
                                        type="text"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                            <div
                                class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                            >
                                <div class="form-group">
                                    <input
                                    v-model="getInTouch.phoneNo"
                                        class="form-control"
                                        type="text"
                                        placeholder="Phone"
                                    />
                                </div>
                            </div>
                            <div
                                class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                            >
                                <div class="form-group">
                                    <textarea
                                    v-model="getInTouch.comment"
                                        class="form-control"
                                        rows="5"
                                        placeholder="Comment"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="form-group submit">
                            <button class="ps-btn "   @click.prevent="getInTouchSumbit()">Send message</button>
                        </div>
                    </form>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 " >
                    <form class="ps-form--contact-us" action="/" method="get">
                    <div><h3 style="margin-bottom:90px" >Find Store</h3></div>

                        
                        <div class="row">
                            <div 
                                class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                             style="margin-bottom:10px">
                                <div class="form-group" style="margin-bottom:15px">
                                    <select
                                        class="form-control"
                                        v-model="selectedcity"
                                        @click.prevent="getLocalStoreArea()"
                                    >
                                        <option 
                                            v-for="(item, index) in citiesList"
                                            >{{ item }}</option
                                        >
                                    </select>
                                </div>
                            </div>
                            <div
                                class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 " style="margin-bottom:10px" >
                                <div class="form-group" >
                                    <select
                                        class="form-control"
                                        v-model="selectedStore"
                                        @click.prevent="getLocalStoreArea()">
                                        <option
                                            v-for="(item,
                                            index) in selectedCityStore"
                                            >{{ item.RetailerLocalityArea }}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group submit">
                                                <div  @click.prevent="locateUrl(selectedStore)" class="ps-btn">Locate</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'ContactForm',
    computed: {
        ...mapState({
            storesList: state => state.stores.storesList,
            citiesList: state => state.stores.citiesList
        })
    },
   async created() {
      await  this.$store.dispatch('stores/getStoreList', []);
       this.selectedcity = this.citiesList[0]
    },
    methods: {
        getLocalStoreArea() {
            var self = this;
            // this.storesList = [];
            try {
                if (this.selectedcity) {
                    self.selectedCityStore = [];
                    this.storesList.filter(locationsList => {
                        var selectedLocation = JSON.parse(
                            JSON.stringify(locationsList)
                        );
                        if (this.selectedcity === selectedLocation.city) {
                            self.selectedCityStore.push(locationsList);
                        }
                    });
                }
            } catch (e) {
                console.error('Failed to log in', e);
            }
        },
        locateUrl(item) {
            // console.log(item);
            if (item != null) {
                return location.href = `/our-stores/${item}`;
            }
            return null;
        },
        getInTouchSumbit() {
            console.log(this.getInTouch);
        }
    },
    data: () => {
        return {
            selectedcity: null,
            selectedCityStore: [],
            selectedStore:null,
            getInTouch : {
                name : null,
                email:null,
                phoneNo :null,
                comment : null
            }
        };
    }
};
</script>

<style lang="scss" scoped></style>
