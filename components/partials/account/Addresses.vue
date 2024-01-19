<template lang="html">
  <section class="ps-my-account ps-page--account">
    <div class="container">
      <div class="row">
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
          <div class="ps-section__left">
            <aside class="ps-widget--account-dashboard">
              <div class="ps-widget__header">

                <figure v-if="accountInfo != null">
                  <figcaption>
                    {{ accountInfo.name }}
                  </figcaption>
                  <p>{{ accountInfo.email }}</p>
                </figure>
              </div>
              <div class="ps-widget__content">
                <AccountLinks :links="accountLinks"/>
              </div>
            </aside>
          </div>
        </div>
        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
          <div class="ps-section--account-setting" v-if="isEditForm">
            <div class="ps-section__content">
              <div class="row">
                <div class="col-md-12 col-12">
                  <figure class="ps-block--address">
                    <figcaption class="d-flex justify-content-between">
                      Address
                      <span style="text-align:right;">
                                                <span  @click.prevent="addAddress()">
                                                    <a>Add Address</a>
                                                </span>
                                            </span>
                    </figcaption>

                    <div class="ps-block__content">
                      <p
                          v-if="
                                                    accountInfo != null &&
                                                        accountInfo.address !=
                                                            null &&
                                                        accountInfo.address
                                                            .length == 0
                                                "
                      >
                        You Have Not Set Up This Type Of Address Yet.

                      </p>
                    </div>
                  </figure>
                </div>
              </div>
              <div class="row" v-if="accountInfo != null && accountInfo.address">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-grid"
                     v-for="(item, index) in accountInfo.address">
                  <ul style="list-style: none">
                    <li>
                      <b>{{ item.name }}</b>
                    </li>
                    <li>{{ item.phone }}</li>
                    <li>{{ item.street }}</li>
                    <li>{{ item.area }}</li>
                    <li>
                      {{ item.city }} , {{ item.state }}
                    </li>
                    <li>{{ item.pincode }}</li>
                    <!-- <li>{{ item.isDefault }}</li> -->
                  </ul>

                  <div class="edit-btns">
                    <button
                        type="button"
                        class="custom-btn"
                        @click.prevent="editAddress(item, index)">
                      Edit
                    </button>
                    <button
                        type="button"
                        class="custom-btn"
                        @click.prevent="
                                                deleteAddress(index)
                                            "
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="ps-section--account-setting" v-else>
            <div class="ps-section__content">
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
                                                    @keypress="isNumber($event)"

                          outlined
                          maxlength="10"
                          height="30"
                          :rules="phoneRules"
                          hide-spin-buttons
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
                          onKeyPress="if(this.value.length==6) return false;"
                                                    @keypress="isNumber($event)"
                          class="ps-text-field"
                          outlined

                          maxlength="6"
                          inputmode="numeric" 
                          height="30"
                          type="number"
                          hide-spin-buttons
                      />
                    </div>
                  </div>
                  <div class=" col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
                    <div class="form-group submit pb-3">
                      <button
                          type="submit"
                          class="ps-btn ps-btn--fullwidth"
                          @click.prevent="cancel"
                      >
                        Cancel
                      </button>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AccountLinks from './modules/AccountLinks';
import {email, required} from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';

export default {
  name: 'Addresses',
  components: {AccountLinks},
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
      accountLinks: [
        {
          text: 'Account Information',
          url: '/account/user-information',
          icon: 'icon-user'
        },
        {
          text: 'Orders',
          url: '/account/orders',
          icon: 'icon-papers'
        },
        {
          text: 'Address',
          url: '/account/addresses',
          icon: 'icon-map-marker',
          active: true
        },
        {
          text: 'Wishlist',
          url: '/account/wishlist',
          icon: 'icon-heart'
        }
      ],
      accountInfo: null,
      name: null,
      phone: null,
      street: null,
      area: null,
      city: null,
      pincode: null,
      isEdit: false,
      isEditForm: true,
      editIndex : null,
      // phoneRules: [
      //   v => !!v || 'Phone is required',
      //    v => v.length >= 9 || 'Phone number must be atleast 9 characters',
      //   v => v.length <= 10 || 'Phone number must be less than 10 characters',
      //     ],
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
      this.accountInfo = JSON.parse(JSON.stringify(result.data));

    } else {
      await this.$store.dispatch('auth/setUserLogout');
    }

  },
  methods: {
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();;
      } else {
        return true;
      }
    },
    handleLogout() {
      this.$store.dispatch('auth/logout', false);
    },
    async handleSubmit() {
      this.$v.$touch();

      console.log(this.$v.$invalid);
      // return;
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
        if (this.editIndex != null) {
          this.accountInfo.address[this.editIndex] = tempObj;
        } else {
          this.accountInfo.address.push(tempObj);
        }
        await this.$store.dispatch('auth/updateUserInfo', {
          tempObj: this.accountInfo
        });
        this.isEditForm =  true;
        this.editIndex = null;
        // this.$notify({
        //   group: 'addCartSuccess',
        //   title: 'Success!',
        //   text: `Address Added!`
        // });
        // setTimeout(()=>{
        //   location.reload();
        // },2000);
      }
    },
    editAddress(item, index) {
      this.isEdit = true;
      this.isEditForm = false;
      this.editIndex = index;
      this.name = this.accountInfo.address[index].name;
      this.phone = this.accountInfo.address[index].phone;
      this.street = this.accountInfo.address[index].street;
      this.area = this.accountInfo.address[index].area;
      this.city = this.accountInfo.address[index].city;
      this.pincode = this.accountInfo.address[index].pincode;
    },
    addAddress() {
      this.isEditForm =  false;
      this.editIndex = null;
    },
    cancel(){
      this.isEditForm =  true;
      this.editIndex = null;
    },
    async deleteAddress(index) {
      this.accountInfo.address.splice(index,1);
     await this.$store.dispatch(
          'auth/updateUserInfo',
          {
            tempObj : this.accountInfo
          }
      );
      // this.$notify({
      //   group: 'addCartSuccess',
      //   title: 'Success!',
      //   text: `Address Deleted!`
      // });
      // setTimeout(()=>{
      //   location.reload();
      // },2000);
    }
  }
};
</script>

<style lang="scss" scoped>
.d-grid {
  display: grid;
  align-items: flex-end;
  margin-bottom: 1rem;
}

.d-grid .ps-btn {
  padding: 10px;
  font-size: 13px;
  color: #fff;
}

.edit-btns {
  display: flex;
  justify-content: space-between;
}

.edit-btns button {
  width: 48%;
}

.custom-btn {
  background-color: rgb(219, 219, 219);
  padding: 5px;
  border-radius: 5px;
}.form-group {
   margin-bottom: 0;
 }
</style>
