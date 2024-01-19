<template lang='html'>
    <div class='col-md-8'>
        <h3>Delivery Type</h3>
        <div class='col-md-4'>
            <button class='ps-btn ps-btn--fullwidth' v-model='freedelivery'>Free Home Delivery</button>
        </div>
        <div class='col-md-4'>
            <button class='ps-btn ps-btn--fullwidth' v-model='pickupstore'>Pick-Up At Store</button>
        </div>
        <ul v-if="type === 'freedelivery'">
            <li>
                <div>
                    PICK-UP AT STORE Add Address
                    <select v-model='selected'>
                        <option disabled value=''>Please select one</option>
                        <option>Hyderabad</option>
                        <option>Secundrabad</option>
                        <option>Guntur</option>
                    </select>
                </div>
            </li>
            <li>
                <div>
                    Select Store
                    <select v-model='selected'>
                        <option disabled value=''>Please select one</option>
                        <option>Kuaktpally</option>
                        <option>Sr Nagar</option>
                        <option>Ameerpet</option>
                    </select>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'deliverytype'
};
</script>

<style scoped>
</style>