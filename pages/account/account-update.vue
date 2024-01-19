<template lang="html">
    <section class="ps-page--my-account">
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="ps-my-account">
            <div class="container">
                <div class="ps-form--account  pb-5 pt-3">
                    <ul class="ps-tab-list">
                        <li class="active">
                            <h3>
                                Account Update
                            </h3>
                        </li>
                    </ul>
                    <div class="ps-tab active">
                        <form>
                            <div class="ps-form__content">
                                <h5>Update An Account</h5>
                                <div class="form-group">
                                    <v-text-field
                                        v-model="name"
                                        :error-messages="nameErrors"
                                        @input="$v.name.$touch()"
                                        placeholder="Username"
                                        class="ps-text-field"
                                        outlined
                                        height="50"
                                    />
                                </div>
                                <div class="form-group">
                                    <v-text-field
                                        v-model="email"
                                        :error-messages="emailErrors"
                                        @input="$v.email.$touch()"
                                        placeholder="Email Address"
                                        class="ps-text-field"
                                        outlined
                                        height="50"
                                    />
                                </div>

                                <div class="form-group submit pb-3">
                                    <button
                                        type="submit"
                                        class="ps-btn ps-btn--fullwidth"
                                        @click.prevent="handleSubmit"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

import BreadCrumb from '~/components/elements/BreadCrumb';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';

export default {
    name: 'AccountUpdate',
    components : {
          HeaderMobile,
       
        BreadCrumb
    }, middleware: 'nonAuthentication',
    computed: {
        nameErrors() {
            const errors = [];
            if (!this.$v.name.$dirty) return errors;
            !this.$v.name.required && errors.push('This field is required');
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
            name: null,
            email: null,
              breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Account Update'
                }
            ]
        };
    },
    validations: {
        name: { required },
        email: { required }
    },
    methods: {
        async handleSubmit() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                let tempObj = {
                    name: this.name,
                    email: this.email
                };
                let temp = await this.$store.dispatch(
                    'auth/setRegisterStatus',
                    tempObj
                );

                if (temp.status) {
                    let tempObj2 = { otp: 'REGISTER_USER' };
                    let temp2 = await this.$store.dispatch(
                        'auth/setOtpStatus',
                        tempObj2
                    );
                    // console.log('final Result', temp2);
                    if (temp2.status) {
                        if (temp2.event == 'HOME') {
                            this.$router.push('/');
                        } else {
                            this.$router.push('/');
                        }
                    }
                }
            }
        }
    },
    async created() {
        const result = await this.$store.dispatch('auth/getUserInfo', {
                           id: this.$cookies.get('userDetails').id
        });
        this.name = result.name;
        this.email = result.email;
        // console.log('RES', result);
    }
};
</script>

<style lang="scss" scoped>


</style>
