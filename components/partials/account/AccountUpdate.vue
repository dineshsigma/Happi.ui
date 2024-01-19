<template lang="html">
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
                    Register
                </button>
            </div>
        </div>
    </form>
</template>

<script>
import { email, required } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';

export default {
    name: 'Register',
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
            email: null
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
                        if (temp2.event == "HOME") {
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
          const result = await this.$store.dispatch(
                    'auth/getUserInfo',
                    {id:"cbc10e81-c900-401b-bbcf-c45a24a8ea95"}
                );

                console.log("RES",result);
     }
};
</script>

<style lang="scss" scoped></style>
