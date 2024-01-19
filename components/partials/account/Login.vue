<template lang="html">
    <form  >
        <div class="ps-form__content">
            <h5>Phone Number Verification</h5>
            <div class="form-group">
                <v-text-field
                    v-model="phoneNo"
                    type="number"
                    class="ps-text-field"
                    :error-messages="phoneNoErrors"
                    @input="$v.phoneNo.$touch()"
                    placeholder="Enter PhoneNo"
                    height="50"
                    outlined
                    ref="phoneNo"
                    id="phoneNo"
                    autofocus
                    v-on:keydown.enter.prevent='handleSubmit'
                    hide-spin-buttons
                    onKeyPress="if(this.value.length==10) return false;"
                />
            </div>
            <p v-if="this.error != ''" style="color:red">{{ this.error }}</p>

            <div class="form-group submit pb-3  txt-center">
                <a
                    href="#"
                    class="ps-btn ps-btn--fullwidth"
                    v-bind:class="{ buttonLoading: isActive }"
                    @click.prevent="handleSubmit"
                    ><span>Login</span></a
                >
            </div>
        </div>
    </form>
</template>

<script>
import { email, required } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';

export default {
    name: 'Login',
    computed: {
        phoneNoErrors() {
            const errors = [];
            if (!this.$v.phoneNo.$dirty) return errors;
            !this.$v.phoneNo.required && errors.push('This field is required');
            return errors;
        }
    },
    data() {
        return {
            phoneNo: null,
            isActive: false,
            error: '',
        };
    },
    validations: {
        phoneNo: { required }
    },
    created(){
        //this.$refs.phoneNo.focus();
        //document.getElementById('#phoneNo').focus();

    },
    methods: {
        async handleSubmit() {
            if(this.phoneNo.length != 10){
                this.error = 'Please enter valid number';
            }
            this.$v.$touch();
            if (!this.$v.$invalid) {
                this.isActive = true;
                let temp = await this.$store.dispatch(
                    'auth/setAuthStatus',
                    this.phoneNo
                );
                this.isActive = false;
                if (temp.status) {
                    this.$router.push('/account/otpverify');

                    // console.log('COOKIEEE', this.$cookies.get('user_exist'));
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
// Button
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
