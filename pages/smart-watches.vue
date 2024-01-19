<template>
    <section class='body'>
        <nav class='breadcrumb'></nav>

        <div class="row">
        <section class='col-md-8 col-sm-12 header1 cid-sN6GjcAMxA' id='header01-3m'>
            <div class='container desktop'>
                <div class='row justify-content-md-center'>
                    <div class='col-md-10 align-center'></div>
                    <div class='pt-4 align-center' ><a href="#sw-iframe"  ><img :src='`${image_url}`' alt=''  style='width: 100%;' class='watches-landing-img'>
                    </a></div>
                </div>
            </div>
                 <div class='container mobile '>
                <div class='row justify-content-md-center'>
                    <div class='col-md-10 align-center'></div>
                    <div class='pt-4 align-center'><a href="#sw-iframe"  ><img :src='`${mobile_url}`' alt='' style='width: 100%;' class='watches-landing-img'>
                   </a> </div>

                </div>

                </div>
            </section>
            <section class=' col-md-4 col-sm-12 form cid-sN6DERkjXB' id='formbuilder-3l'>
                <div class='container'>
                    <div class='row'>
                        <div class='col-lg-8 col-md-11 mx-auto mbr-form' data-form-type='formoid'>
                            <form id='leads' action='https://dev-services.happimobiles.com/laptop-leads' method='post'
                                  class='mbr-form form-with-styler' data-form-title='Diwali Dhamaka'
                                 >
                                <div class='form-row'>
                                    <div hidden='hidden' data-form-alert='' class='alert alert-success col-12'>Thanks
                                        for
                                        filling out the form!
                                    </div>
                                    <div hidden='hidden' data-form-alert-danger='' class='alert alert-danger col-12'>
                                        Oops...! some problem!
                                    </div>
                                </div>
                                <div class='dragArea form-row'>

                                    <div class='col-lg-12 col-md-12 col-sm-12 text-center'>
                                        <p class='first-txt'>Smart Watches</p>
                                        <p class='second-txt'>
                                            Please enter your details to receive the latest update
                                        </p>
                                        <p class='third-txt'>
                                            All fields marked (*) are mandatory
                                        </p>
                                    </div>

                                    <input type='hidden' name='utm_source' id='utm_source' value=''>
                                    <input type='hidden' name='utm_medium' id='utm_medium' value=''>
                                    <input type='hidden' name='utm_campaign' id='utm_campaign' value=''>
                                    <input type='hidden' name='type' value='smart-watches'>
                                    <div style='display: none'>
                                        <input type='text' name='token' id='token' value='' required minlength='3'>
                                    </div>
                                    <div class='Prebookdiv'>
                                        <h6 style='margin: 10px'>Enter Your Name</h6>
                                        <div data-for='name' class='col-lg-12 col-md-12 col-sm-12 form-group p-0 ttbox'
                                             style='margin-bottom:0 !important'>
                                            <input type='text' name='name' id='name' placeholder='Name*'
                                                   data-form-field='name' class='form-control display-7' required
                                                   minlength='3'
                                                   value=''>
                                        </div>
                                        <!-- <h6 style='margin: 10px'>Enter Email</h6>
                                  <div data-for='email' class='col-lg-12 col-md-12 col-sm-12 form-group p-0 ttbox'
                                      style='margin-bottom:0 !important'><input type='email' name='email' id='email'
                                          placeholder='Email (optional)' data-form-field='email'
                                          class='form-control display-7' value=''>
                                  </div> -->
                                        <h6 style='margin: 10px'>Enter Your Phone Number</h6>
                                        <div data-for='phone' class='col-lg-12 col-md-12 col-sm-12 form-group p-0 ttbox'

                                             style='margin-bottom:0 !important'>
                                            <input type='tel' name='phone' id='phone'
                                                   placeholder='Phone*' pattern='[0-9]{10}' maxlength='10'
                                                   minlength='10'
                                                   required data-form-field='phone' class='form-control display-7'
                                                   v-model='phoneNo' value=''>
                                        </div>
                                        <!-- <span v-if="OtpSentMessage" style='color:#fff'>OTP has been Sent to your mobile number</span> -->
                                        <!--
                                                                            <h6 style='margin: 10px'>Enter OTP</h6>
                                                                            <div  class='col-lg-12 col-md-12 col-sm-12 form-group p-0 ttbox'
                                                                                style='margin-bottom:0 !important'>
                                                                                <input type='text' name='otp' id='otp'
                                                                                    placeholder='Enter OTP' data-form-field='email' v-model='otp'
                                                                                    class='form-control display-7' value=''  @blur='onOtpEntered()'>
                                                                            </div>
                                                                             <span style='color:red'>{{ OtpMessage }}</span> -->


                                        <div data-for='model' class='col-lg-12 col-md-12 col-sm-12 form-group p-0'>
                                            <h6 style='margin: 10px'>Select Brand</h6>
                                            <aside class=' ttbox'>
                                                <div class='form-group'>
                                                    <select data-form-field='Brand' required value=''
                                                            class='form-control'
                                                            @change='onChanges($event)'>
                                                        <option value='0'>Select Model *</option>
                                                        <option value='NOISE'>NOISE</option>
                                                        <option value='BOAT'>BOAT</option>
                                                        <option value='FIRE BOLTT'>FIRE BOLTT</option>
                                                        <option value='DIZO'>DIZO</option>
                                                    </select>
                                                </div>
                                            </aside>
                                        </div>
                                        <div data-for='model' class='col-lg-12 col-md-12 col-sm-12 form-group p-0'
                                             v-if='NOISEDATA == true'>
                                            <h6 style='margin: 10px'>Select Model Name</h6>
                                            <aside class=' ttbox'>
                                                <div class='form-group'>
                                                    <select name='Brand' data-form-field='Brand' required value=''
                                                            class='form-control' @change='changeModel($event)'>
                                                        <option value='0'>Select NOISE Model *</option>
                                                        <option value='NOISE COLOR FIT BEAT SMART WATCH'>NOISE COLORFIT
                                                            BEAT
                                                            SMART WATCH
                                                        </option>
                                                        <option value='NOISE FIT ICON BUZZ SMART WATCH'>NOISE FIT ICON
                                                            BUZZ
                                                            SMART WATCH
                                                        </option>
                                                        <option value='NOISE GRAND SMARTWATCH'>NOISE GRAND SMART WATCH
                                                        </option>
                                                        <option value='NOISE QUBE SMART WATCH'>NOISE QUBE SMART WATCH
                                                        </option>
                                                    </select>
                                                </div>
                                            </aside>
                                        </div>
                                        <div data-for='model' class='col-lg-12 col-md-12 col-sm-12 form-group p-0'
                                             v-if='BOATDATA == true'>
                                            <h6 style='margin: 10px'>Select Model Name</h6>
                                            <aside class=' ttbox'>
                                                <div class='form-group'>
                                                    <select name='Brand' data-form-field='Brand' required value=''
                                                            class='form-control' @change='changeModel($event)'>
                                                        <option value='0'>Select BOAT Model *</option>
                                                        <option value='BOAT SMART WATCH STROM ACTIVE'>BOAT SMART WATCH
                                                            STROM
                                                            ACTIVE
                                                        </option>
                                                        <option value='BOAT SMART  WATCH  XTEND RTL'>BOAT SMART WATCH 
                                                            XTEND
                                                            RTL
                                                        </option>
                                                        <option value='BOAT SMART WATCH  WAVE PRO'>BOAT SMART WATCH WAVE
                                                            PRO
                                                        </option>
                                                        <option value='BOAT SMART WATCH BLAZE'>BOAT SMART WATCH BLAZE
                                                        </option>
                                                    </select>
                                                </div>
                                            </aside>
                                        </div>

                                        <div data-for='model' class='col-lg-12 col-md-12 col-sm-12 form-group p-0'
                                             v-if='FIREBOLTTDATA'>
                                            <h6 style='margin: 10px'>Select Model Name</h6>
                                            <aside class=' ttbox'>
                                                <div class='form-group'>
                                                    <select name='Brand' data-form-field='Brand' required value=''
                                                            class='form-control' @change='changeModel($event)'>
                                                        <option value='0'>Select FIRE BOLTT Model *</option>
                                                        <option value='FIRE BOLTT SMART WATCH  NINJA PRO MAX '>FIRE
                                                            BOLTT
                                                            SMART WATCH NINJA PRO MAX
                                                        </option>
                                                        <option value='FIREBOLTT SMART WATCH -Ninja Call 2'>FIREBOLTT
                                                            SMART
                                                            WATCH -Ninja Call 2
                                                        </option>
                                                        <option value='FIRE BOLTT SMART WATCH  CALL  '>FIRE BOLTT SMART
                                                            WATCH  CALL 
                                                        </option>
                                                        <option value='FIRE BOLTT INVINCIBLESMART WATCH'>FIRE BOLTT
                                                            INVINCIBLESMART WATCH
                                                        </option>
                                                    </select>
                                                </div>
                                            </aside>
                                        </div>
                                        <div data-for='model' class='col-lg-12 col-md-12 col-sm-12 form-group p-0'
                                             v-if='DIZODATA == true'>
                                            <h6 style='margin: 10px'>Select Model Name</h6>
                                            <aside class=' ttbox'>
                                                <div class='form-group'>
                                                    <select name='Brand' data-form-field='Brand' required value=''
                                                            class='form-control' @change='changeModel($event)'>
                                                        <option value='0'>Select DIZO Model *</option>
                                                        <option value='DIZO WATCH2'>DIZO WATCH2
                                                        </option>
                                                    </select>
                                                </div>
                                            </aside>
                                        </div>
                                        <div class='form-group p-0 captchcls'>
                                            <recaptcha id='captcha' />&nbsp;&nbsp;
                                        </div>


                                        <div>
                                            <button class='btn btncss smartwatches' @click='formValidations'>
                                                <b>Submit</b></button>
                                        </div>

                                    </div>
                                    <div class='col-lg-12 col-md-12 col-sm-12'>
                                        <hr class='hr'>
                                    </div>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </section>
        </div>
        <section  id="sw-iframe" ></section>
              <section   >
            <div class="mt-6">
                <iframe class="smart-watches-frame" src='https://happimobiles.s3.ap-south-1.amazonaws.com/iwatchespage/happimobirise3/index.html'
                   style="-moz-transform-scale(0.5); width: 100%; height: 1630px;"></iframe>
            </div>
        </section>
    </section>
</template>

<script>
export default {
    name: 'laptop-offers.vue',
    data() {
        return {
            image_url: 'https://s3.ap-south-1.amazonaws.com/happimobiles/homepage/Happi%20Mobile%20-%20Smart%20Watch%20Landing%20Page%20banner%20%283%29.png ',
            mobile_url: 'https://s3.ap-south-1.amazonaws.com/happimobiles/homepage/Happi%20Mobile%20-%20Smart%20Watch%20Landing%20Banner%20800%20x%20800%281%29.jpg',
            homepageData: {},
            block: 'NOISE COLOR FIT BEAT SMART WATCH',
            NOISEDATA: false,
            BOATDATA: false,
            FIREBOLTTDATA: false,
            DIZODATA: false,
            sendOtpLoading: false,
            prephoneno: '',
            submit_display: false,
            loading: false,
            phoneNo: '',
            name: '',
            // email: '',
            otp: '',
            OtpSentMessage: false,
            OtpMessage: ''


        };
    },

    async created() {
        this.homepageData = await this.$http.$get('/api/homepage');
        this.$nextTick(() => {
            console.log('this.$refs["utm_campaign"]', document.getElementById('utm_campaign').value);
            document.getElementById('utm_campaign').value = this.$route.query.utm_campaign;
            document.getElementById('utm_medium').value = this.$route.query.utm_medium;
            document.getElementById('utm_source').value = this.$route.query.utm_source;
        });
    },
       async asyncData({ $http, $seo }) {
        var homepageData = await $http.$get('https://dev-services.happimobiles.com/api/homepage');
            $seo({
            title: 'Best smart watches online with unbelievable discounts - Happi mobiles',
            templateTitle: '%title% - Happi Mobiles',
            description: 'Best smartwatches online and smart band deals · Apple Watch Series 7 · Garmin Forerunner 245 · Fitbit FB507BKBK Versa 2 · Amazfit T-Rex 2 · Apple Watch SE.',
            keywords: 'top offers on smart watches,smart watches online,best smart watches online,Latest smart watches online.',
            openGraph: {
                site: 'Happi Mobiles',
                type: 'website',
            title: 'Best smart watches online with unbelievable discounts - Happi mobiles',
            description: 'Best smartwatches online and smart band deals · Apple Watch Series 7 · Garmin Forerunner 245 · Fitbit FB507BKBK Versa 2 · Amazfit T-Rex 2 · Apple Watch SE.',
           },
            twitter: {
                site: 'Happi Mobiles',
                type: 'website',
            title: 'Best smart watches online with unbelievable discounts - Happi mobiles',
            description: 'Best smartwatches online and smart band deals · Apple Watch Series 7 · Garmin Forerunner 245 · Fitbit FB507BKBK Versa 2 · Amazfit T-Rex 2 · Apple Watch SE.',
            },
            facebook: {
                appId: '826575227724107',
                pageId: ''
            }
        });
        return {
            homepageData: homepageData
        };
    },
    methods: {
        async sendOtp() {
            if (this.phoneNo == this.prephoneno)
                return;

            this.sendOtpLoading = true;
            await this.$store.dispatch('auth/setAuthStatus', this.phoneNo);
            setTimeout(() => {
                this.prephoneno = this.phoneNo;
                this.sendOtpLoading = false;
                this.otp_display = true;
                this.OtpSentMessage = true;

            }, 3000);

        },
        async onOtpEntered() {
            this.sendOtpLoading = true;
            this.OtpSentMessage = false;
            let tempObj = {
                phone: this.phoneNo,
                otp: this.otp
            };
            let temp = await this.$store.dispatch('auth/setOtpStatus', tempObj);
            if (temp.status) {
                this.submit_display = true;
            } else {
                this.OtpMessage = 'Oops ... Invalid OTP Please try again.';
            }

        },
        changeModel(event) {
            if (event.target.value === 'NOISE') {
                this.image_url = 'https://m.media-amazon.com/images/I/61ju0Nt8bhL._SL1500_.jpg';
            }
            if (event.target.value === 'BOAT') {
                this.image_url = 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/img2.jpg?v=1647765253';
            }
            if (event.target.value === 'FIRE BOLTT') {
                this.image_url = 'https://d34e6224thkkna.cloudfront.net/homepage/Happi%20Mobile%20-%20Samsung%20Galaxy%20S22%20Ultra%20-%20L%20Banner.png';
            }
            if (event.target.value === 'DIZO') {
                this.image_url = 'https://d34e6224thkkna.cloudfront.net/homepage/Happi%20Mobile%20-%20Samsung%20Galaxy%20S22%20Ultra%20-%20L%20Banner.png';
            }
            this.block = event.target.value;
        },
        async formValidations() {
            let token = null;
            try {
                token = await this.$recaptcha.getResponse();
                document.getElementById('token').value = token;
                await this.$recaptcha.reset();
            } catch (error) {
                console.log('Login error:', error);
            }
            console.log('token', token);
            if (token !== null) {
                document.getElementById('leads').submit();
                //alert('Cool...');
                return true;
            } else {
                alert('Please check the Captcha');
                return false;
            }

        },
        onChanges(e) {
            if (e.target.value === 'NOISE') {
                this.NOISEDATA = true;
                this.BOATDATA = false;
                this.FIREBOLTTDATA = false;
                this.DIZODATA = false;
            } else if (e.target.value === 'BOAT') {
                this.BOATDATA = true;
                this.NOISEDATA = false;
                this.FIREBOLTTDATA = false;
                this.DIZODATA = false;

            } else if (e.target.value === 'FIRE BOLTT') {
                this.FIREBOLTTDATA = true;
                this.BOATDATA = false;
                this.NOISEDATA = false;
                this.DIZODATA = false;
            } else if (e.target.value === 'DIZO') {
                this.DIZODATA = true;
                this.FIREBOLTTDATA = false;
                this.BOATDATA = false;
                this.NOISEDATA = false;
            }
        }
    }
};
</script>

<style scoped>


.ma-watches {
    font-size: 1.1vw !important;
    background-color: #fff !important;
    color: black !important;
    margin-left: 35% !important;
    width: 30% !important;
    border-radius: 5px;

}

.ma-watches:hover {
    color: #fb9013 !important;
}

a {
    color: #0000ee;
    text-decoration: underline;
}

a:hover {
    color: #0000ee;
    text-decoration: underline;
}

.u-row {
    display: flex;
    flex-wrap: nowrap;
    margin-left: 0;
    margin-right: 0;
}

.u-row .u-col {
    position: relative;
    width: 100%;
    padding-right: 0;
    padding-left: 0;
}

.u-row .u-col.u-col-50 {
    flex: 0 0 50%;
    max-width: 50%;
}

.u-row .u-col.u-col-100 {
    flex: 0 0 100%;
    max-width: 100%;
}

@media (max-width: 767px) {
    .desktop {
        display: none;
    }

    .smart-watches-frame {
        height: 173vh !important;
    }

    .smart-watches-frame {
        height: 550vh !important;
    }

    .u-row:not(.no-stack) {
        flex-wrap: wrap;
    }

    .u-row:not(.no-stack) .u-col {
        flex: 0 0 100% !important;
        max-width: 100% !important;
    }
}

@media (max-width: 1020px) {


    .smart-watches-frame{
        /* height:119vh !important; */
    }

}

body,
html {
    padding: 0;
    margin: 0
}

html {
    box-sizing: border-box
}

*,
:after,
:before {
    box-sizing: inherit
}

html {
    font-size: 14px;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
}

body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    color: #373a3c;
    background-color: #fff
}

p {
    margin: 0
}

form .error-field {
    -webkit-animation-name: shake;
    animation-name: shake;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both
}

form .error-field input,
form .error-field textarea {
    border-color: #a94442 !important;
    color: #a94442 !important
}

form .field-error {
    padding: 5px 10px;
    font-size: 14px;
    font-weight: 700;
    position: absolute;
    top: -20px;
    right: 10px
}

form .field-error:after {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(136, 183, 213, 0);
    border-top-color: #ebcccc;
    border-width: 5px;
    margin-left: -5px
}

form .spinner {
    margin: 0 auto;
    width: 70px;
    text-align: center
}

form .spinner > div {
    width: 12px;
    height: 12px;
    background-color: hsla(0, 0%, 100%, .5);
    margin: 0 2px;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both
}

form .spinner .bounce1 {
    -webkit-animation-delay: -.32s;
    animation-delay: -.32s
}

form .spinner .bounce2 {
    -webkit-animation-delay: -.16s;
    animation-delay: -.16s
}

@-webkit-keyframes sk-bouncedelay {

    0%,
    80%,
    to {
        -webkit-transform: scale(0)
    }

    40% {
        -webkit-transform: scale(1)
    }
}

@keyframes sk-bouncedelay {

    0%,
    80%,
    to {
        -webkit-transform: scale(0);
        transform: scale(0)
    }

    40% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }
}

@-webkit-keyframes shake {

    0%,
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }

    10%,
    30%,
    50%,
    70%,
    90% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0)
    }

    20%,
    40%,
    60%,
    80% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0)
    }
}

@keyframes shake {

    0%,
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }

    10%,
    30%,
    50%,
    70%,
    90% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0)
    }

    20%,
    40%,
    60%,
    80% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0)
    }
}

@media only screen and (max-width: 480px) {
    .container {
        max-width: 100% !important
    }

}

.container {
    width: 100%;
    padding-right: 0;
    padding-left: 0;
    margin-right: auto;
    margin-left: auto
}

@media (min-width: 576px) {
    .container {
        max-width: 540px
    }
}

@media (min-width: 768px) {
    .container {
        max-width: 720px
    }

    .mobile {
        display: none;
    }
}

@media (min-width: 992px) {

    .container {
        max-width: 960px
    }
}

@media (min-width: 1200px) {
    .container {
        max-width: 1140px
    }
}

a[onclick] {
    cursor: pointer;
}


.new_img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    /* height: 30px;  */
    width: 50px;
}

.heading {
    font-size: 45px;
    text-align: center;
    color: whitesmoke;
    font-family: 'Open Sans', sans-serif;
    top: 20px;

}

.btn1 {
    margin: 0;
    position: relative;
    top: 56px;
    font-size: 1.25vw;
    left: 300px;
    margin-bottom: 90px;
    background-color: #FB9013;
    border: 0;
    color: white;
    font-family: 'Open Sans', sans-serif;
    transform: translateY(-50%);
}

.img {
    background-color: #FB9013;
    position: relative;
}

.get_offr {
    text-align: center;
}

.ofrbtn {
    background-color: #333333;
    border-radius: 20px;
    color: white;
    font-size: 7vw;
    bottom: 17px;
}

/* .display-5{
    text-align: center;
} */
/* .ltd-offr{
    color: rgba(255, 255, 255, 0.966);
    padding-top:20px;
     font-family: Arial, Helvetica, sans-serif;
      font-family: "Times New Roman", Times, serif;
} */
/* .othr-offr{
    color: rgba(255, 255, 255, 0.966);
    padding-top:390px;
    font-family: "Times New Roman", Times, serif;
}  */

.first-txt {
    margin-top: 2rem;
    font-size: 30px;
    color: #000;
    font-weight: bold;
    margin-bottom: 0px;
}

.second-txt {
    margin-bottom: 0px;

}

.third-txt {
    font-size: 16px;
    color: #f39700;
    margin: 0 0 0px 0;

}

@media only screen and (max-width: 600px) {
    .centre {
        left: 28%;
    }

    .display-4 {
        font-size: 5rem !important;
        line-height: 4rem !important;
    }

    .btn1 {
        left: 28%;
        font-size: 7vw !important;
        left: 129px;
        top: 60px;
    }

    .centre {
        left: 28%;
    }

    .s_oppo {
        left: 7px;
        top: 0px;
    }

    .laptop {
        font-size: 5rem;
    }
}

.captchcls {
    display: inline-block;
    text-align: center;
    /* margin-left: 18% !important; */
    margin-top: -6%;
    width:100%;
}

.Prebookdiv {
    background-color: #fb9013;
    width: 75%;
    padding-top: 3%;
    padding-left: 3%;
    padding-right: 3%;
    margin-left: 18%;
    padding-bottom: 3%;
    border-radius: 10px;
}

.btncss {
    font-size: 1.1vw !important;
    background-color: #fff !important;
    color: black !important;
    margin-left: 35% !important;
    width: 30% !important;
    margin-top: -7% !important;
    border-radius: 5px;

}

.btncss:hover {
    color: #fb9013 !important;
}

.ttbox input {
    height: 38px !important;
    border-radius: 5px;

}

.ttbox select {
    height: 38px !important;
    border-radius: 5px;
    margin-bottom: 50PX !important;

}

@media screen and (max-width: 1200px) {
    .Prebookdiv {
        background-color: #fb9013;
        width: 86%;
        padding-top: 3%;
        padding-left: 3%;
        padding-right: 3%;
        margin-left: 7%;
        padding-bottom: 3%;
        border-radius: 10px;
    }

    .btncss {
        font-size: 4vw !important;
        background-color: #fff !important;
        color: black !important;
        margin-left: 30% !important;
        width: 40% !important;
        margin-top: -7% !important;
    }

    .ttbox input {
        height: 35px !important;
        margin: 0% 4% !important;
        width: 90% !important;
    }

    .ttbox select {
        height: 35px !important;
        margin: 0% 4% !important;
        width: 90% !important;
    }

    .captchcls {
        margin-left: 0% !important;
        margin-top: 2% !important;
    }
}


@media all and (width: 1024px) and (height: 768px) and (orientation: landscape) {
    .smart-watches-frame {
        height: 266vh;
    }

    p {
        font-size: 1rem !important;
        line-height: 1.6em;
        color: #000;
    }

    .first-txt[data-v-df9adce0] {

        font-size: 20px !important;


    }

    .watches-landing-img {
        position: inherit;
        height: auto;
        max-height: 100%;
    }

}

@media all and (height: 1024px) and (width: 768px) and (orientation: portrait) {
    .smart-watches-frame {
        height: 266vh !important;
    }

}

@media (min-width: 900px) and (max-width: 1080px) {
    .smart-watches-frame {
        /* height:173vh !important; */
    }

    .Prebookdiv {
        background-color: #fb9013;
        width: 70% !important;
        padding-top: 3%;
        padding-left: 3%;
        padding-right: 3%;
        margin-left: 20% !important;
        padding-bottom: 3% !important;
        margin-right: 15%;
        border-radius: 10px;
    }

    .third-txt[data-v-df9adce0] {
        font-size: 1rem;
        color: #f39700;
        margin: 0 0 0px 0;
    }

    p {
        font-size: 1rem;
        line-height: 1.6em;
        color: #000;
    }

    .first-txt {
        margin-top: 2rem;
        font-size: 20px;
        color: #000;
        font-weight: bold;
        margin-bottom: 0px;
    }

    .col-lg-8 {
        padding: 0px !important;
    }

    .hr {
        display: none;
    }

    .v-application .pt-4 {
        padding-top: 21px !important;
    }

}

@media screen and (min-width: 1080px) {
    .smart-watches-frame {
        /* height:173vh !important; */
    }

    .Prebookdiv {
        background-color: #fb9013;
        width: 95% !important;
        padding-top: 3%;
        padding-left: 3%;
        padding-right: 3%;
        margin-left: 2% !important;
        padding-bottom: 3% !important;
        margin-right: 5%;
        border-radius: 10px;
    }

    .third-txt[data-v-df9adce0] {
        font-size: 1rem;
        color: #f39700;
        margin: 0 0 0px 0;
    }

    p {
        font-size: 1rem;
        line-height: 1.6em;
        color: #000;
    }

    .first-txt {
        margin-top: 2rem;
        font-size: 20px;
        color: #000;
        font-weight: bold;
        margin-bottom: 0px;
    }

    .col-lg-8 {
        padding: 0px !important;
    }

    .hr {
        display: none;
    }

    .v-application .pt-4 {
        padding-top: 21px !important;
    }

}
</style>

