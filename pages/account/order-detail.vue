<template lang="html">
    <section class="ps-page--my-account" v-if="this.$cookies.get('userDetails')">
        <bread-crumb :breadcrumb="breadCrumb" />
        <invoice-detail />
    </section>
    <section v-else class="ps-page--my-account">
        <bread-crumb :breadcrumb="breadCrumb" />
        <center>
            <invoice-detail v-if="orderListOrderId.length != 0" :orderListOrderId = 'orderListOrderId'/>
        </center>
    </section>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import Newsletters from '~/components/partials/commons/Newsletters';
import InvoiceDetail from '~/components/partials/account/InvoiceDetail';
import TableInvoice from '~/components/partials/account/modules/TableInvoice';

import { mapState } from 'vuex';

export default {
    transition: 'zoom',
    middleware: 'authentication',
    components: {
        InvoiceDetail,
        Newsletters,
        BreadCrumb,
        TableInvoice
    },
    computed: {
        ...mapState({
            eachOrder: state => state.orders.eachOrder,
            orderListOrderId: state => state.orders.orderListOrderId
        })
    },
    async created() {
        const id = this.$route.query.id          
        await this.$store.dispatch('orders/orderDetailsWithOrderId', {
            order_id: id,
        });
        console.log(this.orderListOrderId)
    },
    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Invoice Detail'
                }
            ]
        };
    }
};
</script>

<style lang="scss">
tbody{
    background-color: white;
}
.orderstable{
    border: 1px solid rgba(0,0,0,0.2);
    width: 100%;
}
</style>
