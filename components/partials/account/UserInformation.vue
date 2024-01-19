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
                                <AccountLinks :links="accountLinks" />
                            </div>
                        </aside>
                    </div>
                </div>
                <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 mg-tb-15" >
                    <section class="ps-section--account-setting">
                        <div class="ps-section__content">
                            <v-form class="ps-form--edit-address" ref="form">
                                <div class="ps-form__header">
                                    <h3>Update Account</h3>
                                </div>
                                <div class="ps-form__content row">
                                    <div
                                        class=" col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"
                                    >
                                        <div class="form-group">
                                            <label>Name</label>
                                            <v-text-field
                                                v-model="name"
                                                :error-messages="nameErrors"
                                                @input="$v.name.$touch()"
                                                class="ps-text-field"
                                                outlined
                                                height="30"
                                                v-on:keypress="isLetter($event)"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class=" col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"
                                    >
                                        <div class="form-group">
                                            <label>Email</label>
                                            <v-text-field
                                                v-model="email"
                                                :error-messages="emailErrors"
                                                @input="$v.name.$touch()"
                                                class="ps-text-field"
                                                outlined
                                                height="30"
                                                :rules="emailRules"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class=" col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"
                                    >
                                        <div class="form-group">
                                            <label>Phone</label>
                                            <v-text-field
                                                disabled
                                                v-model="phone"
                                                :error-messages="phoneErrors"
                                                @input="$v.phone.$touch()"
                                                class="ps-text-field"
                                                outlined
                                                height="30"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div
                                        class=" col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12"
                                    >
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
                            </v-form>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import AccountLinks from './modules/AccountLinks';
import { validationMixin } from 'vuelidate';
import { email, required } from 'vuelidate/lib/validators';

export default {
    name: 'UserInformation',
    components: { AccountLinks },
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
        emailErrors() {
            const errors = [];
            if (!this.$v.email.$dirty) return errors;
            !this.$v.email.required && errors.push('This field is required');
            return errors;
        }
    },
    data() {
        return {
            accountLinks: [
                {
                    text: 'Account Information',
                    url: '/account/user-information',
                    icon: 'icon-user',
                    active: true
                },
                {
                    text: 'Orders',
                    url: '/account/orders',
                    icon: 'icon-papers'
                },
                {
                    text: 'Address',
                    url: '/account/addresses',
                    icon: 'icon-map-marker'
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
            email: null,
            isEdit: true,
            emailRules: [
                (v) => !!v || 'E-mail is required',
                (v) => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
        };
    },
    validations: {
        name: { required },
        phone: { required },
        email: { required }
    },

    async created() {

      const result = await this.$store.dispatch('auth/getUserInfo');
        if (result !== null) {
          console.log("Account Info",result);
            this.accountInfo = JSON.parse(JSON.stringify(result.data));
            this.name = this.accountInfo.name;
            this.email = this.accountInfo.email;
            this.phone = this.accountInfo.phone;
            return;
        } else {
           await this.$store.dispatch('auth/setUserLogout');
        }
    },
    methods: {
        async handleSubmit() {
            if (this.$refs.form.validate()) {
                this.$v.$touch();
                if (!this.$v.$invalid) {
                // console.log("handleSubmit",this.accountInfo);
                localStorage.setItem("userNameUpdated",this.name)
                this.accountInfo.name = this.name;
                this.accountInfo.email = this.email;
                this.accountInfo.phone = this.phone;

                    let temp = await this.$store.dispatch('auth/updateUserInfo', {
                        tempObj: this.accountInfo
                    });
                    await this.$store.dispatch('auth/updateUserInfo', {
                        tempObj: this.accountInfo
                    });
                    this.$store.dispatch('cart/toastView', {
                show: true,
                htmlTag : `<span> Success : Your have updated your Details </span> `
            });
                setTimeout(() => {
                    this.$store.dispatch('cart/toastView', {
                    show: false,
                    })
                }, 8000);
                    // this.$notify({
                    //     group: 'addCartSuccess',
                    //     title: 'Success!',
                    //     text: `Account Updated!`
                    // });
                // setTimeout(()=>{
                //   location.reload();
                // },2000);
                }
            }
        },
        handleLogout() {
            this.$store.dispatch('auth/logout', false);
        },
        isLetter(e) {
            let char = String.fromCharCode(e.keyCode); // Get the character
            if(/^[A-Za-z]+$/.test(char)) return true; // Match with regex 
            else e.preventDefault(); // If not match, don't add to input text
        }
    }
};
</script>

<style lang="scss" scoped>
.form-group {
    margin-bottom: 0;
}

@media only screen and (max-width: 600px) {
  .mg-tb-15 {
    margin: 15px 0 15px 0;
  }
}

</style>
