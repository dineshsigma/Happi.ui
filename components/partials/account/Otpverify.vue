<template lang="html">
    <form>
        <div class="ps-form__content">
            <h5>Verify OTP</h5>
            <p>*Dear Customer, You will get OTP via call</p>

            <div class="form-group">
                <v-text-field
                    v-model="otp"
                    type="number"
                    class="ps-text-field"
                    :error-messages="otpErrors"
                    @input="$v.otp.$touch()"
                    placeholder="Please enter OTP"
                    height="50"
                    outlined
                    autofocus
                    v-on:keydown.enter.prevent='handleSubmit'
                    hide-spin-buttons
                    onKeyPress="if(this.value.length==6) {return false;}"
                />
            </div>
            <p style="color:red;" v-if="this.otpErrorMessage.length > 2">{{ this.otpErrorMessage }}</p>
            <p v-if="!this.resent && !this.isActive " class="txt-center resend-otp" @click="resendOtp">Resend OTP</p>
            <p v-if="this.resent" class="txt-center resent-otp">OTP Resent</p>

            <div class="form-group submit pb-3 txt-center">
                <a
                    href="#"
                    class="ps-btn ps-btn--fullwidth"
                    v-bind:class="{ buttonLoading: isActive }"
                    @click.prevent="handleSubmit"
                    ><span>Verify</span></a
                >
            </div>
        </div>
    </form>
</template>

<script>
import { email, required } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';
import { mapState } from 'vuex';

export default {
    name: 'Login',
    computed: {
        otpErrors() {
            const errors = [];
            if (!this.$v.otp.$dirty) return errors;
            !this.$v.otp.required && errors.push('This field is required');
            return errors;
        },
        ...mapState({
            otpVerify: state => state.auth.isOtpVerified,
        })
    },

    data() {
        return {
            otp: null,
            isActive : false,
            otpErrorMessage : " ",
            phoneNo: null,
            resent: false,
        };
    },
    async created() {
       if(this.otp < 6){
         this.otpErrorMessage = " "
       }
    },
    validations: {
        otp: { required }
    },
    methods: {
        async handleSubmit() {
            this.$v.$touch();
            
            if (!this.$v.$invalid) {
                this.isActive = true;
                let tempObj = {
                    otp: this.otp
                };
                let temp = await this.$store.dispatch(
                    'auth/setOtpStatus',
                    tempObj
                ); 
                if(this.otpVerify.status == false){
                    this.otpErrorMessage = "Invalid OTP"
                }
                this.isActive = false;
                if (temp.status) {
                    if (temp.event == 'REGISTER_USER') {
                        this.$router.push('/account/register');
                    } else {
                        // this.$notify({
                        //     group: 'addCartSuccess',
                        //     title: 'Success!',
                        //     text: `Welcome happimobiles`
                        // });
                        if (this.$cookies.get('redirectLogin') && this.$cookies.get('redirectLogin') != undefined && this.$cookies.get('redirectLogin') != null) {
                            //this.$router.push(this.$cookies.get('redirectLogin'));
                            
                            location.replace(this.$cookies.get('redirectLogin'))
                        } else {
                            location.replace('/')
                            //this.$router.push('/');
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
        },
        //Resend OTP Function
        async resendOtp(){
            this.phoneNo = this.$cookies.get('userLoginPhone').toString();
            this.isActive = true;
            let temp = await this.$store.dispatch(
                'auth/setAuthStatus',
                this.phoneNo
            );
            this.isActive = false;
            this.resent = true;
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
