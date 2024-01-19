<template>
    <div class="container-fluid">
        <div class="row d-flex align-item-center justify-content-center">
            <div class="col-md-12 mt-3">
                <div
                    class="row d-flex align-item-center justify-content-center"
                >
                    <div
                        class="
                            col-lg-12 col-md-12
                            text-center
                            align-center
                            mt-5
                        "
                    >
                        <a href="#pfn" class="anchor-tag"
                            ><img
                                :src="`${image_url}`"
                                alt=""
                                class="desk-offer-hide"
                            />
                            <img
                                :src="`${image_urlm}`"
                                alt=""
                                class="mob-offer-hide"
                            />
                        </a>
                    </div>
                    <div class="col-lg-12 col-md-12" id="pfn">
                        <form
                            id="leads"
                            action="https://dev-services.happimobiles.com/laptop-leads"
                            method="post"
                            class="col-md-12"
                            data-form-title="Diwali Dhamaka"
                        >
                            <div class="form-row">
                                <div
                                    hidden="hidden"
                                    data-form-alert=""
                                    class="alert alert-success col-12"
                                >
                                    Thanks for filling out the form!
                                </div>
                                <div
                                    hidden="hidden"
                                    data-form-alert-danger=""
                                    class="alert alert-danger col-12"
                                >
                                    Oops...! some problem!
                                </div>
                            </div>

                            <div class="form-row Prebookdiv2">
                                <div class="col-sm-12 text-center header-text">
                                    <h2>Happi Sankranti offers</h2>
                                    <h3>Get Offer Details, Enquire Now!</h3>
                                    <p>All fields marked (*) are mandatory</p>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <hr class="hr" />
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-12">
                                    <input type='hidden' name='utm_source' id='utm_source' value=''>
                                    <input type='hidden' name='utm_medium' id='utm_medium' value=''>
                                    <input type='hidden' name='utm_campaign' id='utm_campaign' value=''>
                                    <input type='hidden' name='type' value='pongal-offers'>
                                    <div style='display: none'>
                                        <input type='text' name='token' id='token' value='' required minlength='3'>
                                    </div>
                                    <div data-for="name" class="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            v-model="nameReq"
                                            placeholder="Name*"
                                            data-form-field="name"
                                            class="form-control"
                                            required
                                            minlength="3"
                                        />
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-4 col-sm-12">
                                    <div data-for="phone" class="form-group">
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            placeholder="Phone Number*"
                                            data-form-field="phone"
                                            class="form-control"
                                            v-model="phoneNo"
                                            pattern="[0-9]{10}"
                                            maxlength="10"
                                            minlength="10"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-12">
                                    <div data-for="email" class="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Email Id (Optional)"
                                            data-form-field="email"
                                            class="form-control"
                                            v-model="email"
                                            maxlength="25"
                                            minlength="5"
                                        />
                                    </div>
                                </div>

                                <div class="col-sm-12 form-group">
                                    <div
                                        class="
                                            row
                                            d-flex
                                            align-item-center
                                            justify-content-center
                                            mt-2
                                        "
                                    >
                                        <div class="col-md-3 captchcls mb-1">
                                            <recaptcha id="captcha" />
                                        </div>
                                        <div class="col-md-3 form-group">
                                            <button
                                                class="
                                                    btn
                                                    btncss
                                                    btn-smartwatches
                                                "
                                                @click="validate"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-md-12 text-center align-center">
                        <a href="#pfn" class="anchor-tag">
                            <img
                                :src="`${image_url2d}`"
                                alt=""
                                class="desk-offer-hide"
                            />
                            <img
                                :src="`${image_url2m}`"
                                alt=""
                                class="mob-offer-hide"
                            />
                        </a>
                    </div>
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
                'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/5c4c74c3-89e3-4a5e-abce-ad5a08395dda.png',
            image_urlm:
                'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/97a1ab9d-64c3-49bd-98e4-e4391b9c6a53.png',
            image_url2d:
                'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/3aa588db-e442-4aef-baf5-6573235b89ff.png',
            image_url2m:
                'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/cae1b43c-fbd9-4a67-88a3-684a00b8937a.png',
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
        var homepageData = await $http.$get(
            'https://dev-services.happimobiles.com/api/homepage'
        );
        $seo({
            title: 'Best Offer mobiles online | Mobile Phone Offers | Buy mobiles online',
            templateTitle: 'Best Offer mobiles online | Mobile Phone Offers | Buy mobiles online',
            description:
                'Best mobile phone offers from top brands. Limited period offer! Buy mobiles online and pick your favourite mobile at the best price.',
            keywords:
                'airpods pro 2,airpods pro 2 price,airpods pro 2 cost,airpods pro 2 price,airpods pro 2 features.',
            openGraph: {
                site: 'Happi Mobiles',
                type: 'website',
                title: 'Buy APPLE Airpods Pro 2 at the best price - Happi mobiles ',
                description:
                    'Buy the new AirPods Pro 2. Richer audio quality, up to 2x more Active Noise Cancellation, Adaptive Transparency, and Personalised Spatial Audio.',
            },
            twitter: {
                site: 'Happi Mobiles',
                type: 'website',
                title: 'Buy APPLE Airpods Pro 2 at the best price - Happi mobiles ',
                description:
                    'Buy the new AirPods Pro 2. Richer audio quality, up to 2x more Active Noise Cancellation, Adaptive Transparency, and Personalised Spatial Audio.',
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
            // console.log(1, this.nameReq, this.phoneNo)
            if (this.nameReq != '' && this.phoneNo.length == 10 && (/^\d+$/.test(this.phoneNo)) && (/^[a-zA-Z\s.,]+$/.test(this.nameReq))){
                // console.log('True')
                this.formValidations()
            } else {
                // console.log('false')
                alert('Enter Valid Details')
            }
        },
        async formValidations() {
            let token = null;
            try {
                // console.log(token, 'TOKEN');
                token = await this.$recaptcha.getResponse();
                // console.log(token, 'TOKEN');
                document.getElementById('token').value = token;
                await this.$recaptcha.reset();
            } catch (error) {
                console.log('Login error:', error);
            }
            if (token !== null) {
                document.getElementById('leads').submit();
                //alert('Cool...');
                return true;
            } else {
                alert('Please check the Captcha');
                return false;
            }
        },
        navigateto() {
            window.open('/apple-airpods-2-true-wireless-white', '_blank');
        },
    },
};
</script>



<style scoped>
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

form .spinner > div {
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

.Prebookdiv2 {
    background-color: #fb9013;
    width: 100%;
    padding: 3%;
    border-radius: 2px;
    margin: 1%;
}
.Prebookdiv2 .form-control {
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

form .spinner > div {
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
img{
    width:100%;
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

