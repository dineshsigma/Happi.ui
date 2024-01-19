<template lang="html">
    <form class="ps-form--edit-address">
        <div class="ps-form__header">
            <h3 v-if="isEdit">Edit address</h3>
            <h3 v-else>Add address</h3>
        </div>
        <div class="ps-form__content row">
            <div class=" col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                    <label>Name</label>
                    <v-text-field
                        v-model="name"
                        :error-messages="nameErrors"
                        @input="$v.name.$touch()"
                        class="ps-text-field"
                        outlined
                        height="30"
                    />
                </div>
            </div>
            <div class=" col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                    <label>Phone</label>
                    <v-text-field
                        v-model="phone"
                        :error-messages="phoneErrors"
                        @input="$v.phone.$touch()"
                        class="ps-text-field"
                        outlined
                        height="30"
                    />
                </div>
            </div>

            <div class=" col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                    <label>Street</label>
                    <v-text-field
                        v-model="street"
                        :error-messages="streetErrors"
                        @input="$v.street.$touch()"
                        class="ps-text-field"
                        outlined
                        height="30"
                    />
                </div>
            </div>
            <div class=" col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                    <label>Area</label>
                    <v-text-field
                        v-model="area"
                        :error-messages="areaErrors"
                        @input="$v.area.$touch()"
                        class="ps-text-field"
                        outlined
                        height="30"
                    />
                </div>
            </div>
            <div class=" col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                    <label>City</label>
                    <v-text-field
                        v-model="city"
                        :error-messages="cityErrors"
                        @input="$v.city.$touch()"
                        class="ps-text-field"
                        outlined
                        height="30"
                    />
                </div>
            </div>
            <div class=" col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                    <label>Pincode</label>
                    <v-text-field
                        v-model="pincode"
                        :error-messages="pincodeErrors"
                        @input="$v.pincode.$touch()"
                        class="ps-text-field"
                        outlined
                        height="30"
                    />
                </div>
            </div>
            <div class=" col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
                <div class="form-group submit pb-3">
                    <button
                        type="submit"
                        class="ps-btn ps-btn--fullwidth"
                        @click.prevent="handleSubmit"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import { email, required } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';

export default {
    name: 'FormEditAddress',
    computed: {
        nameErrors() {
            const errors = [];
            if (!this.$v.name.$dirty) return errors;
            !this.$v.name.required && errors.push('This field is required');
            return errors;
        },
        phoneErrors() {
            const errors = [];
            if (!this.$v.phone.$dirty) return errors;
            !this.$v.phone.required && errors.push('This field is required');
            return errors;
        },
        streetErrors() {
            const errors = [];
            if (!this.$v.street.$dirty) return errors;
            !this.$v.street.required && errors.push('This field is required');
            return errors;
        },
        areaErrors() {
            const errors = [];
            if (!this.$v.area.$dirty) return errors;
            !this.$v.area.required && errors.push('This field is required');
            return errors;
        },
        cityErrors() {
            const errors = [];
            if (!this.$v.city.$dirty) return errors;
            !this.$v.city.required && errors.push('This field is required');
            return errors;
        },
        pincodeErrors() {
            const errors = [];
            if (!this.$v.pincode.$dirty) return errors;
            !this.$v.pincode.required && errors.push('This field is required');
            return errors;
        }
    },
    data() {
        return {
            name: null,
            phone: null,
            street: null,
            area: null,
            city: null,
            pincode: null,
            accountInfo: null,
            isEdit: false,
            editAddress:null
        };
    },
    validations: {
        name: { required },
        phone: { required },
        street: { required },
        area: { required },
        city: { required },
        pincode: { required }
    },
    async created() {
      const result = await this.$store.dispatch('auth/getUserInfo');
      if (result !== null) {
        console.log("Account Info", result);
        this.accountInfo = JSON.parse(JSON.stringify(result.data));

      } else {
        await this.$store.dispatch('auth/setUserLogout');
      }
        // this.accountInfo = await this.$store.dispatch('auth/getUserInfo', {
        //                    id: this.$cookies.get('userDetails').id
        // });
        // console.log(this.accountInfo, 'DDD');
    },
    methods: {
        async handleSubmit() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                let tempObj = {
                    name: this.name,
                    phone: this.phone,
                    street: this.street,
                    area: this.area,
                    city: this.city,
                    pincode: this.pincode,
                    isDefault:false
                };

                let temp = await this.$store.dispatch(
                    'auth/updateUserInfo',
                    {tempObj:tempObj,isEdit :this.isEdit,index:this.editAddress == null ? 'no_index' : this.editAddress.index}
                );
                // console.log('Teeeeeeep', temp);
                // this.$notify({
                //     group: 'addCartSuccess',
                //     title: 'Success!',
                //     text: `Address Added!`
                // });
                 this.$cookies.remove('edit_address');
                this.$router.push('/account/addresses');
            }
        }
    },
    async created() {
        if (this.$cookies.get('edit_address')) {
            this.isEdit = true;
            this.editAddress = this.$cookies.get('edit_address');
            this.name = this.editAddress.item.name;
            this.phone = this.editAddress.item.phone;
            this.street = this.editAddress.item.street;
            this.area = this.editAddress.item.area;
            this.city = this.editAddress.item.city;
            this.pincode = this.editAddress.item.pincode;
        } else {
            this.isEdit = false;
        }
      
    }
};
</script>

<style lang="scss" scoped>
.form-group {
    margin-bottom: 0;
}
</style>
