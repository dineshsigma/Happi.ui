<template>
    <div class="container-fluid">
        <div class="row d-flex align-item-center justify-content-center">
            <div class="row d-flex align-item-center justify-content-center">
                <div class="
                            col-lg-12 col-md-12
                            text-center
                            align-center
                        ">
                    <a href="#pfn" class="anchor-tag"><img :src="`${image_url}`" alt="" class="desk-offer-hide" />
                        <img :src="`${image_urlm}`" alt="" class="mob-offer-hide" />
                    </a>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12" id="pfn">
                    <form id="leads" action="https://dev-services.happimobiles.com/laptop-leads" method="post"
                        class="" data-form-title="Happi Summer Sale Offers">
                        <div class="form-row">
                            <div hidden="hidden" data-form-alert="" class="alert alert-success col-12">
                                Thanks for filling out the form!
                            </div>
                            <div hidden="hidden" data-form-alert-danger="" class="alert alert-danger col-12">
                                Oops...! some problem!
                            </div>
                        </div>

                        <div class="form-row Prebookdiv-ugadhi">
                            <div class="col-sm-12 text-center header-text">
                                <h2>Happi Summer Sale Offers</h2>
                                <h3>Get Offer Details, Enquire Now!</h3>
                                <p>All fields marked (*) are mandatory</p>
                            </div>
                            <div class="col-lg-12 col-md-12">
                                <hr class="hr" />
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12">
                                <input type='hidden' name='utm_source' id='utm_source' value=''>
                                <input type='hidden' name='utm_medium' id='utm_medium' value=''>
                                <input type='hidden' name='utm_campaign' id='utm_campaign' value=''>
                                <input type='hidden' name='type' value='summer-sale'>
                                <!-- <div style='display: none'>
                                        <input type='text' name='token' id='token' value='' required minlength='3'>
                                    </div> -->
                                <div data-for="name" class="form-group">
                                    <input type="text" name="name" id="name" v-model="nameReq" placeholder="Name*"
                                        data-form-field="name" class="form-control" required minlength="3"
                                        v-on:keypress="isLetter($event)" />
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-12">
                                <div data-for="phone" class="form-group">
                                    <input type="tel" name="phone" id="phone" placeholder="Phone Number*"
                                        data-form-field="phone" class="form-control" v-model="phoneNo" pattern="[0-9]{10}"
                                        maxlength="10" minlength="10" required v-on:keypress="phoneValidate($event)" />
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12">
                                <div data-for="email" class="form-group">
                                    <input type="email" name="email" id="email" placeholder="Email Id (Optional)"
                                        data-form-field="email" class="form-control" v-model="email" maxlength="25"
                                        minlength="5" />
                                </div>
                            </div>

                            <div class="col-sm-12 form-group">
                                <div class="
                                            row
                                            d-flex
                                            align-item-center
                                            justify-content-center
                                            mt-2
                                        ">
                                    <div class="col-md-3 captchcls mb-1">
                                        <!-- <recaptcha id="captcha" /> -->
                                        <div class="number-captcha-block d-flex">
                                            {{ numberOne }} + {{ numberTwo }} &nbsp;= &nbsp;
                                            <input type="number" name="captcha" id="captcha"
                                                class="form-control captcha-form" v-model="userSum" maxlength="3"
                                                minlength="1" required />
                                            <button type="button" class="refresh-button" @click="refreshCaptcha">
                                                <i class="fa fa-refresh"></i> Refresh
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-md-3 form-group">
                                        <button class="
                                                    btn
                                                    btncss
                                                    btn-smartwatches
                                                " @click="validate">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="text-center align-center" style="width:100%">
                    <a href="#pfn" class="anchor-tag">
                        <img :src="`${image_url2d}`" alt="" class="desk-offer-hide pb-5" />
                        <img :src="`${image_url2m}`" alt="" class="mob-offer-hide pb-5" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'laptop-offers.vue',
    data() {
        return {
            image_url:
                'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/23931de2-6065-4c83-97ec-5ed9ea9b4529.jpg',
            image_urlm:
                'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/fc8f501b-6336-46a7-9e4b-5ee3c7d74238.png',
            image_url2d:
                'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/156cc36e-e170-459e-8c17-25b82484f245.jpg',
            image_url2m:
                'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/019b3eba-b85d-4a2c-9537-4c0972df9235.jpg',
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
            nameReq: '',
            name: '',
            email: '',
            otp: '',
            OtpSentMessage: false,
            OtpMessage: '',
            numberOne: Number,
            numberTwo: Number,
            captchaSum: Number,
            userSum: '',
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
        this.numberOne = Math.floor(Math.random() * 9) + 1;
        this.numberTwo = Math.floor(Math.random() * 9) + 1;
        this.captchaSum = this.numberOne + this.numberTwo;
    },
    async asyncData({ $http, $seo }) {
        var homepageData = await $http.$get(
            'https://dev-services.happimobiles.com/api/homepage'
        );
        $seo({
            title: 'Happi Summer Sale Offers | Best Offer mobiles online | Mobile Phone Offers | Buy mobiles online',
            templateTitle: 'Happi Summer Sale Offers | Best Offer mobiles online | Mobile Phone Offers | Buy mobiles online',
            description:
                'Best mobile phone offers from top brands. Limited period offer! Buy mobiles online and pick your favourite mobile at the best price.',
            keywords:
                'Happi Summer Sale Offers',
            openGraph: {
                site: 'Happi Mobiles',
                type: 'website',
                title: 'Happi Summer Sale Offers - Happi mobiles ',
                description:
                    'Happi Summer Sale Offers',
            },
            twitter: {
                site: 'Happi Mobiles',
                type: 'website',
                title: 'Happi Summer Sale Offers - Happi mobiles ',
                description:
                    'Happi Summer Sale Offers',
            },
            facebook: {
                appId: '826575227724107',
                pageId: '',
            },
        });
        return {
            homepageData: homepageData,
        };
    },
    methods: {
        async validate() {
            if (Number(this.userSum) === this.captchaSum) {
                if (this.nameReq != '' && this.phoneNo.length == 10 && (/^\d+$/.test(this.phoneNo)) && (/^[a-zA-Z\s.,]+$/.test(this.nameReq)) && Number(this.userSum) === this.captchaSum) {
                    this.formValidations();
                } else {
                    alert('Please Enter valid Name & Phone No');
                    return false;
                }
            } else {
                // console.log('false')
                alert('Please Validate Captcha');
                this.userSum = '';
                return false;
            }
        },
        async formValidations() {
            document.getElementById('leads').submit();
            // let token = null;
            // try {
            //     // console.log(token, 'TOKEN');
            //     token = await this.$recaptcha.getResponse();
            //     // console.log(token, 'TOKEN');
            //     document.getElementById('token').value = token;
            //     await this.$recaptcha.reset();
            // } catch (error) {
            //     console.log('Login error:', error);
            // }
            // if (token !== null) {
            //     document.getElementById('leads').submit();
            //     //alert('Cool...');
            //     return true;
            // } else {
            //     alert('Please check the Captcha');
            //     return false;
            // }
        },
        navigateto() {
            window.open('/apple-airpods-2-true-wireless-white', '_blank');
        },
        phoneValidate(e) {
            let char = String.fromCharCode(e.keyCode); // Get the character
            if (/^[0-9]+$/.test(char)) return true; // Match with regex 
            else e.preventDefault(); // If not match, don't add to input text
        },
        isLetter(e) {
            let char = String.fromCharCode(e.keyCode); // Get the character
            if (/^[A-Za-z ]+$/.test(char)) return true; // Match with regex 
            else e.preventDefault(); // If not match, don't add to input text
        },
        async refreshCaptcha() {
            this.numberOne = Math.floor(Math.random() * 9) + 1;
            this.numberTwo = Math.floor(Math.random() * 9) + 1;
            this.captchaSum = this.numberOne + this.numberTwo;
        }
    },
};
</script>



<style lang="scss">
.number-captcha-block {
    align-items: center;
    height: 100%;
    background-color: #FFFFFF;
    padding: 4%;
    font-size: 2.25rem;
    border-radius: 4px;
    border-color: #fb9013;
    gap: 5px;

    .captcha-form {
        width: 80px;
        font-size: 20px;
    }

    .refresh-button {
        font-size: 13px;
        height: auto;
        padding: 3px 5px;
    }
}

@media (max-width: 767px) {
    .desk-offer-hide {
        display: none;
    }
}

@media (min-width: 768px) {
    .mob-offer-hide {
        display: none;
    }
}

form .error-field {
    -webkit-animation-name: shake;
    animation-name: shake;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}

form .error-field input,
form .error-field textarea {
    border-color: #a94442 !important;
    color: #a94442 !important;
}

form .field-error {
    padding: 5px 10px;
    font-size: 14px;
    font-weight: 700;
    position: absolute;
    top: -20px;
    right: 10px;
}

form .field-error:after {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(136, 183, 213, 0);
    border-top-color: #ebcccc;
    border-width: 5px;
    margin-left: -5px;
}

form .spinner {
    margin: 0 auto;
    width: 70px;
    text-align: center;
}

form .spinner>div {
    width: 12px;
    height: 12px;
    background-color: hsla(0, 0%, 100%, 0.5);
    margin: 0 2px;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.header-text h2,
.header-text h3,
.header-text p {
    font-size: 0.95rem;
    color: #fff;
    margin: 0;
    letter-spacing: 0.075rem;
    font-weight: 400;
}

.header-text h2 {
    font-size: 2.5rem;
    margin: 0.5rem 0;
    font-weight: 600;
}

.header-text h3 {
    font-size: 2rem;
    font-weight: 500;
}

.heading {
    font-size: 45px;
    text-align: center;
    color: whitesmoke;
    font-family: 'Open Sans', sans-serif;
    top: 20px;
}

.captchcls {
    display: inline-block;
    text-align: center;
    width: 100%;
}

.Prebookdiv-ugadhi {
    background-color: #fb9013;
    width: 100%;
    padding: 3%;
    border-radius: 2px;
    margin-top: 1%;
    margin-bottom: 1%;
}

.Prebookdiv-ugadhi .form-control {
    border-radius: 4px;
    margin-bottom: 1%;
}

.horizontal-form {
    background-color: #fb9013;
    width: 100%;
    padding-top: 3%;
    padding-left: 3%;
    padding-right: 3%;
    padding-bottom: 3%;
    border-radius: 10px;
}

.btncss {
    font-size: 1.1vw !important;
    background-color: #fff !important;
    border-color: #fb9013;
    border-radius: 4px;
}

.btncss:hover {
    color: #fb9013 !important;
}

form .error-field {
    -webkit-animation-name: shake;
    animation-name: shake;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}

form .error-field input,
form .error-field textarea {
    border-color: #a94442 !important;
    color: #a94442 !important;
}

form .field-error {
    padding: 5px 10px;
    font-size: 14px;
    font-weight: 700;
    position: absolute;
    top: -20px;
    right: 10px;
}

form .field-error:after {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(136, 183, 213, 0);
    border-top-color: #ebcccc;
    border-width: 5px;
    margin-left: -5px;
}

form .spinner {
    margin: 0 auto;
    width: 70px;
    text-align: center;
}

form .spinner>div {
    width: 12px;
    height: 12px;
    background-color: hsla(0, 0%, 100%, 0.5);
    margin: 0 2px;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.btn-smartwatches {
    width: 100% !important;
    margin: auto !important;
    padding: 2.25rem;
    letter-spacing: 0.05rem;
    font-size: 2rem !important;
    font-weight: 600;
}

.form-group {
    margin-bottom: 0rem !important;
}

.anchor-tag {
    display: block;
}

img {
    width: 100%;
}

@media (max-width: 767px) {
    .btn-smartwatches {
        padding: 1.25rem;
        font-size: 1.5rem !important;
    }
}

.form-control {
    padding: 3px 20px !important;
    border: 1px solid #dddddd;
}
</style>

