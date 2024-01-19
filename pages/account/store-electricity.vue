<template>
    <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 mg-tb-15">
        <section class="ps-section--account-setting">
            <div class="ps-section__content">
                <!-- <form class="ps-form--edit-address"
                                <div class="ps-form__header">
                                    <h3>Store Electricity</h3>
                                </div>
                                <div class="ps-form__content row">
                                    
                                    
<iframe :src="url"   height="500" 
>
</iframe>

                                </div>


                           
                            </form> -->
                <template>
                    <div class="row m-0 card-layout">
                        <div
                            class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 pb-0 pt-3"
                        >
                            <v-form ref="form" v-model="valid" lazy-validation>
                                <h3>{{ this.store_code }}</h3>
                                <h5 style="float:left">{{this.store_number}}</h5>
                                <h5 style="float:right">{{this.currentDate}}</h5>
                                <br>
                                <br>

                                <div class="row">
                                    <!-- <div
                                        class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
                                    > <label>Store Code</label> <p>{{this.store_code}}</p>
                                         <v-text-field
                                            v-model="store_code"
                                            
                                            label="Store Code"
                                            required
                                            readonly
                                        ></v-text-field> 
                                    </div> -->
                                    <!-- <div
                                        class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
                                    > <label>Store Number</label> <p>{{this.store_number}}</p>
                                        <v-text-field
                                            v-model="store_number"
                                            
                                            label="Store Number"
                                            required
                                            readonly
                                        ></v-text-field>
                                    </div> -->

                                    <!-- <div
                                        class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
                                    >
                                        <label style="color:#00000099">Date</label>
                                        <br>
                                                                                                              <!-- <input style="border-bottom:1px solid rgba(0,0,0,0.4);" v-model="currentDate" readonly required> -->

                                        <!-- <input  v-model="currentDate" readonly required>
                                    </div> --> 
    
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
                                        
                                        <!-- <v-overflow-btn
                                            class="my-2"
                                            :items="
                                                items
                                            "
                                            label="Select Type"
                                            :rules="[
                                                (
                                                    v
                                                ) =>
                                                    !!v ||
                                                    'Type is required',
                                            ]"
                                            v-model="
                                                electricityType
                                            "
                                        ></v-overflow-btn> -->
                                        <v-select
                                        v-model="electricityType"
                                        :rules="[
                                                (
                                                    v
                                                ) =>
                                                    !!v ||
                                                    'Type is required',
                                            ]"
                                        :items="items"
                                        label="Select Type"
                                        ></v-select>
                                    </div>
                                    <div
                                        class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
                                    >
                                        <!-- <v-text-field
                                        type="number" 
                                        label="Units"
                                        v-model="units"
                                        ></v-text-field> -->
                                        <v-text-field
                                            v-model="units"
                                            label="Enter Meter Reading"
                                            :rules="unitRules"
                                            type="number"
                                            required
                                        ></v-text-field>
                                    </div>

                                    
                                    
                             

                                    
                                </div>
                                <br>
                                <v-btn
                                    style="
                                        font-size: 18px;
                                        font-weight: bold;
                                        width: 100%;
                                        margin-bottom: 15px;
                                    "
                                    color="warning"
                                    large
                                    :disabled="!valid"
                                    @click="electricityRecordSubmit()"
                                    >Submit
                                </v-btn>
                                <p style="color:green;">{{ this.responceMessage }}</p>
                                <p style="color:green;" v-if="this.responceMessageUnits"> You have changed {{ this.responceMessageUnits }} units</p>

                            </v-form>
                        </div>
                    </div>
                    <h3 class="records">Previous Records</h3>
                    <div id="currenttable">
                    <v-simple-table class='row-height-50' v-if="getHistoryData.response.length != 0" v-for="item in this.getHistoryData.response"
                            :key="item._id"> 
                    <template v-slot:default>
                        
                        <thead>
                            <tr>
                                <th class="text-left" id="header">
                                <b>Date</b>
                                </th>
                                <th id="header">O.R</th>
                                <th id="header">C.R</th>
                                <th id="header"><b>Total Units</b></th>
                            </tr>
                        </thead> 
                        <tbody>
                            <tr>
                               <td id="Tdata" v-if="item">{{ dateFormat(item.onlydate) }}</td> 
                               <td id="Tdata" v-if="item">{{ item.openUnits }}</td> 
                               <td id="Tdata" v-if="item.closedStatus">{{ item.closedUnits }}</td>
                               <td id="Tdata" v-else> - </td> 
                               <td id="Tdata" v-if="item.closedStatus">{{ item.unitsDiff }}</td> 
                               <td id="Tdata" v-else> - </td>
                            </tr>
                        </tbody>
                    </template>
                    </v-simple-table>
                    </div>
                </template>
            </div>
        </section>
    </div>
</template>
<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import Invoices from '~/components/partials/account/Invoices';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';
import { mapState } from 'vuex';

export default {
    transition: 'zoom',
    middleware: 'authentication',
    name: 'StoreElectricity',
    computed: {
        ...mapState({
            storeElectricResponse: state => state.stores.storeElectricResponse,
            getHistoryData : state => state.stores.getHistoryData,
        }),
    },
    components: {
        HeaderMobile,
        Invoices,
        BreadCrumb,
    },
    data() {
        return {
            store_code: '',
            valid: false,
            store_number: '',
            url: '',
            responceMessage: '',
            responceMessageUnits :'',
            units:0,
            electricityType:'Open Readings',
            currentDate:'',
            unitRules: [
                (v) => !!v || 'Units are required',
            ],
            openData : [],
            closeData:[],
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/',
                },
                {
                    text: 'account',
                },
            ],
            items:[
                'Open Readings','Closed Readings'
            ]
        };
    },

    async created() {
        this.store_code = localStorage.getItem('storeCode');
        this.store_number = localStorage.getItem('storeNumber');
        this.currentDate = new Date().toDateString();
        await this.$store.dispatch('stores/getElectricCurrentHistory', {
            phone: this.store_number,
        });
            
    },
    methods: {
        async electricityRecordSubmit(){
            if (this.$refs.form.validate()) {

                await this.$store.dispatch('stores/sendStoreData', {
                    storeElectricData: {
                        units: this.units,
                        storecode: this.store_code,
                        mobile: this.store_number,
                        type: this.electricityType,
                    },
                    
                });
                console.log("responce electric city",this.storeElectricResponse)
                if(this.storeElectricResponse.message){
                   this.responceMessage = this.storeElectricResponse.message
                }
                if(this.storeElectricResponse.status){
                   this.responceMessageUnits = this.storeElectricResponse.units
                }
                
            }
        },
        DateTimeFormat(item) { 
            var dt_string = new Date(item);;
            var d_object = dt_string.toLocaleTimeString();
            return d_object;
         },

         dateFormat(item){
            
            var year = item.substring(0, 4);
            var month = item.substring(4, 6);
            var day = item.substring(6, 8);
            var displayDate = day + '-' + month + '-' + year;
            return displayDate;
         }
    }
};
</script>
<style scoped>
h3 {
    text-align: center;
    font-size: 24px;
    color: #fb8c00;
}
h5{
    text-align: center;
}
#currenttable{  
    max-height: 300px;
    overflow: auto;
}
label{
    font-weight:700;
    color:#666;
}
.records{
    color:#fb8c00;
    text-align: left;
}

::-webkit-scrollbar {
    width: 3px;
}

/* Track */
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #fb9013;
    border-radius: 10px;
}

.theme--light.v-overflow-btn.theme--light.v-overflow-btn > .v-input__control > .v-input__slot {
    border-color: rgba(0, 0, 0, 0.12);
    border-top: 1px solid #fff !important;
}
.v-select__slot:before{
    border-top: 1px solid #fff !important;

}
#header{
    background-color: rgb(252 202 12);
    border-color: 1px solid rgba(0,0,0,0.4);
    font-size: 12px;
    height: 25px !important;
}
#Tdata{
    background-color: #f1f1f17d;
    font-size: 12px;
}
/* .v-simple-table .row-height-50{
    height: 18px !important;
} */
</style>