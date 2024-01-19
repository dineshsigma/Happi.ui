<template lang="html">
    <div class="ps-product__desc">


        <div id="DeliveryMessage" class="a-section a-spacing-mini" v-if="deliveryinfo != null">

            <span>FREE delivery:</span>
            <b>{{deliveryinfo.etd}}</b>
            <a href="#" target="">Pincode </a><br>
                <div class="a-section a-spacing-top-mini">
                    <span id="upsell-message">
                        <span class="a-color-secondary">
                            Order within  <span id="Countdown" class="CountdownClass">5 hrs and 39 mins</span>
                        </span>
                    </span>
                    <a href="#" target="">Details</a>
                </div>
        </div>
        <div v-if="deliveryinfo == null">
            <p v-if="product.stock != 0" style="font-size: 17px;"> Order Now & get the product delivered between <b>{{dates}}</b> <br>Fulfilled by
            <img src="https://d34e6224thkkna.cloudfront.net/retool-upload/f931fc69-1d39-46f8-8a19-4b1c46313150.svg" alt='happi shiprocket' style="height:21px" /></p>
        </div>

        <div class="emi-options" >
            <span class="a-hidden">
            <b>EMI</b> starts at ₹{{minimumAmount}} per month.
            </span>
            <a href="#" style='text-decoration: underline;color: #fb9011;font-weight: 600;'
               @click.prevent='emi_dialog = true;'>EMI Options</a>
        </div>

        <v-dialog
            v-model="emi_dialog"
            width="500"
        >


            <v-card>
                <v-card-title class="text-h3">
                    EMI Options
                </v-card-title>

                <v-card-text>
                    <br><br>
                    <v-row
                        align="center"
                        justify="center"
                    >

                        <v-btn-toggle
                            v-model="toggle_exclusive"
                            mandatory
                        >
                            <v-btn v-for="(bank, index) in emi_data" v-on:click="selectedIndex = index" v-bind:key="bank.bank_name"  style='font-size:14px'>
                                {{bank.bank_name}}
                            </v-btn>
                        </v-btn-toggle>
                    </v-row>
                    <br><br>
                    <div v-for="(bank, index) in emi_data" v-if='selectedIndex == index'>
                        <v-simple-table dense   >
                            <template v-slot:default>
                                <thead>
                                <tr>
                                    <th class="text-left" style='font-size:18px'>
                                        EMI Plan
                                    </th>
                                    <th class="text-left" style='font-size:18px'>
                                        Months
                                    </th>
                                    <th class="text-left" style='font-size:18px'>
                                        Intrest
                                    </th>

                                    <th class="text-left" style='font-size:18px'>
                                        Total
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr
                                    v-for="item in bank.rate"
                                    :key="item.name"
                                >
                                    <td style='font-size:14px'>{{ item.monthly }}</td>
                                    <td style='font-size:14px'>{{ item.month }}m</td>
                                    <td style='font-size:14px'>{{ item.intrest }} ({{item.val}}%)</td>
                                    <td style='font-size:14px'>{{ item.total }}m</td>
                                </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </div>

                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        text
                        @click="emi_dialog = false"
                    >
                        close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </div>
</template>

<script>

export default {
    name: 'ModuleProductDetailDesc',
    props: {
        product: {
            type: Object,
            default: {}
        }

    },
    data: () => {
        return {
            deliveryinfo: null,
            dates: "",
            emi_dialog: false,
            emi_data: [],
            minimumAmount:"",
            selectedIndex: 0,
            toggle_exclusive: ""
        };
    },
    async created() {
        var self = this;
        setTimeout(function() {
            self.fetchEMI();
        }, 2000)
        var monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


        var dt = new Date();
        dt.setDate(dt.getDate() + 3);
        let tdyDt = new Date();


        this.dates = `${tdyDt.getDate()} ${monthArray[tdyDt.getMonth()]} ${tdyDt.getFullYear()} - ${dt.getDate()} ${monthArray[dt.getMonth()]} ${dt.getFullYear()}`

        if(this.$cookies.get('DELIVERY_PINCODE') != null){
            try{
                var data = JSON.stringify({
                    "pickup_postcode": 500081,
                    "delivery_postcode": this.$cookies.get('DELIVERY_PINCODE'),
                    "cod": 0,
                    "weight": ".7",
                    mode: "Air"
                });

                var config = {
                    method: 'post',
                    url: 'https://dev/dev/shipping-info',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data : data
                };
                // var result = await axios(config);
                //
                // this.deliveryinfo = result.data.data.available_courier_companies[0];
                // console.log(this.deliveryinfo)
             }catch{
                 location.reload();
             }
        }
    },
    methods: {
        async fetchEMI(){
            var emi_data = await this.$http.$get(`api/emi?amount=${this.product.payPrice}`)
            this.emi_data = emi_data.data;
        //   console.log(emi_data)
            this.minimumAmount = emi_data.data.minimumAmount;
        }
    }
};
</script>
<style>
    .ps-product__desc {
        border-bottom: 0 !important;
    }
    #DeliveryMessage{
            font-size: 14px;
            margin-top: -2%;

    }
    .emi-options{
        font-size: 14px;
    }
</style>
<style lang="scss" scoped></style>
