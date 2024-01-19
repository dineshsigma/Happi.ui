<template>
        <div class='col-xs-12 col-md-4'>
            <h5 style='margin: 10px'>Phone Number Verification</h5>
            <div class='form-group' style='margin-bottom: 0px'>
                <v-text-field
                    v-model='phoneNo'
                    class='ps-text-field'
                    placeholder='Enter PhoneNo'
                    height='50'
                    outlined
                    ref='phoneNo'
                    id='phoneNo'
                    autofocus
                />
            </div>
            <v-btn
                class='ma-2'
                :loading='loading4'
                :disabled='loading4'
                color='warning'
                @click="sendOtp()"
            >
                Send OTP
                <template v-slot:loader>
                    <span>Sending...</span>
                </template>
            </v-btn>
            <h5 style='margin: 10px'>OTP</h5>
            <div class='form-group' style='margin-bottom: 1rem'>
                <v-otp-input
                    v-model='otp'
                    length='6'
                    height='50'
                ></v-otp-input>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginCart',
    data: () => {
        return {
            phoneNo: '',
            otp: '',
            loading4: false
        };
    },
    methods:{
        async sendOtp(){
            this.loading4 = true;
            let temp = await this.$store.dispatch(
                'auth/setAuthStatus',
                this.phoneNo
            );
            setTimeout(()=>{
                this.loading4 = false;
            }, 2000)

        }
    }
};
</script>

<style scoped>

</style>