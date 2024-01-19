<template lang="html">
    <form>
        <div class="ps-form__content">
            <h5>Register An Account</h5>
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
            <div class="form-group submit pb-3 txt-center">
                <a
                    href="#"
                    class="ps-btn ps-btn--fullwidth"
                    v-bind:class="{ buttonLoading: isActive }"
                    @click.prevent="handleSubmit"
                    ><span>Register</span></a
                >
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
            !this.$v.email.email && errors.push('Please enter a vaild email');
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
        email: { required, email }
    },
    methods: {
        validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        async handleSubmit() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                this.isActive = true;

                let tempObj = {
                    name: this.name,
                    email: this.email
                };
                let temp = await this.$store.dispatch('auth/setRegisterStatus',tempObj);

                if (temp.status) {
                    let tempObj2 = { otp: 'REGISTER_USER' };
                    let temp2 = await this.$store.dispatch(
                        'auth/setOtpStatus',
                        tempObj2
                    );
                    this.isActive = false;
                    // console.log('final Result', temp2);
                    if (temp2.status) {
                        if (temp2.event == 'HOME') {
                            if (
                                this.$cookies.get('redirectLogin') &&
                                this.$cookies.get('redirectLogin') !=
                                    undefined &&
                                this.$cookies.get('redirectLogin') != null
                            ) {
                                this.$router.push(
                                    this.$cookies.get('redirectLogin')
                                );
                            } else {
                                this.$router.push('/');
                            }
                        } else {
                            if (
                                this.$cookies.get('redirectLogin') &&
                                this.$cookies.get('redirectLogin') !=
                                    undefined &&
                                this.$cookies.get('redirectLogin') != null
                            ) {
                                this.$router.push(
                                    this.$cookies.get('redirectLogin')
                                );
                            } else {
                                this.$router.push('/');
                            }
                        }
                    }
                } else {
                    // this.$notify({
                    //     group: 'addCartSuccess',
                    //     title: 'error!',
                    //     text: `${temp.message}`
                    // });
                }
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.txt-center {
    text-align: center;
}
.button {
    display: block;
    text-decoration: none;
    font-size: 1em;
    line-height: 1;
    margin: 0;
    cursor: pointer;
    border-width: 1px;
    border-style: solid;
    border-radius: 3px;
    background: #0085ba;
    border-color: #0073aa #006799 #006799;
    box-shadow: 0 1px 0 #006799;
    color: #fff;
    text-decoration: none;
    text-shadow: 0 -1px 1px #006799, 1px 0 1px #006799, 0 1px 1px #006799,
        -1px 0 1px #006799;
    &:hover {
        background: #008ec2;
    }
    span {
        display: block;
        padding: 10px 20px;
    }
    transition-duration: 0.1s;
}

.buttonLoading,
.buttonLoading:after {
    width: 2.1em;
    height: 2.1em;
    border-radius: 50%;
}

.buttonLoading {
    transition-property: width height padding box-shadow border-width background
        opacity;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;

    background: transparent;
    box-shadow: 0 0 0 #fb9013;
    border-top: 4px solid #fb9013;
    border-right: 4px solid #bfe7f3;
    border-bottom: 4px solid #fb9013;
    border-left: 4px solid #bfe7f3;

    transform: translateZ(0);
    animation: load8 1s infinite linear;
    animation-delay: 0.2s;

    span {
        display: none;
    }

    &:hover {
        background: transparent;
    }
}

@-webkit-keyframes load8 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@keyframes load8 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
.ps-btn,
button.ps-btn {
    padding: 11px;
}
</style>
