<template lang="html">
    <div class="table-repsonsive">
        <table class="table table-bordered order-list">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Quantity</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody v-if="orderList != null">
                <tr v-for="item in orderList" :key="item.id">
                    <td>
                        <nuxt-link style="color:#1976d2; text-decoration:underline"
                            :to="`/account/order-detail?id=${item.order_id}`">
                            {{ item.order_id }}
                        </nuxt-link>
                    </td>
                    <td>
                    {{item.gateway}}
<!--                        <span-->
<!--                            v-for="(cartItem, index) in item.payment_info.cart-->
<!--                                .items"-->
<!--                        >-->
<!--                            <span>-->
<!--                                {{ index + 1 }}.-->
<!--                                <img-->
<!--                                    :src="-->
<!--                                        `https://happimobiles.s3.ap-south-1.amazonaws.com/happi/${cartItem.pictures[0]}.jpg`-->
<!--                                    "-->
<!--                                    :alt="cartItem.name"-->
<!--                            /></span>-->
<!--                            {{ cartItem.name }} <br />-->
<!--                        </span>-->
                    </td>
                    <td>{{ localDateFormat(item.createdOn) }}</td>
                    <td>{{ priceFormat(item.CartSubtotal) }}</td>

                    <td>{{ item.CartQuantity }}</td>
                    <td>{{ item.tag }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import moment from 'moment';
moment().format();

export default {
    name: 'TableInvoices',
    computed: {
        ...mapState({
            orderList: state => state.orders.orderList
        })
    },
    async created() {
        let userData = this.$cookies.get('userDetails');
        if (userData) {
            await this.$store.dispatch('orders/getOrders');
        } else {
            await this.$store.dispatch('auth/setUserLogout');
        }
    },
    methods: { 
        priceFormat(item) {
            if(item == null){
                item = "1";
            }
            item = item.toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR',
              });
             return item;
            },
        // localDateFormat(item){
        //     const date = new Date(item);
        //     const timestampWithOffset = date.getTime();
        //     const offset = date.getTimezoneOffset() * 60 * 1000;
        //     const dateWithOffset = new Date(timestampWithOffset);
        //     return dateWithOffset;
        // }
        localDateFormat(item){
            const date = new Date(item);
            const timestampWithOffset = date.getTime();
            const req_date = moment(timestampWithOffset).format("DD-MM-YYYY h:mm:ss a");
            return req_date
         }
    }
};
</script>

<style lang="scss" scoped>
.order-list {
    img {
        height: auto;
        width: 30px;
        margin-bottom: 6px;
    }
}
</style>
