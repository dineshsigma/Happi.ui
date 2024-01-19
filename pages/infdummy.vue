<template>
    <div class="body">
        <div>
            <a href="#smf">
                <img src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/443b3b84-759e-443f-a860-52e4689ed929.jpg" alt="happi_earphones" width="100%"/>
            </a>
        </div>
        <form class="form_reset" onsubmit="return false;">
            <div class="formbody" id="smf">
                <div class="row">
                    <div class="col-12 text-center">
                        <div class="header">
                            <h2>Get Offer Details, Enquire Now!</h2>
                            <p>All fields marked (*) are mandatory</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-sm-6">
                        <div class="form-group"> 
                            <input type='hidden' name='utm_source' id='utm_source' value=''>
                            <input type='hidden' name='utm_medium' id='utm_medium' value=''>
                            <input type='hidden' name='utm_campaign' id='utm_campaign' value=''>
                            <input type="text" class="form-control" id="inputEmail4" placeholder="Name*" v-model="nameReq" required minlength="3" v-on:keypress="isLetter($event)">
                        </div>
                    </div>
                    <div class="col-12 col-sm-6">
                        <div class="form-group"> 
                            <input type="text" class="form-control" placeholder="Phone Number*" v-model="phoneNo" pattern="[0-9]{10}" maxlength="10" minlength="10" required v-on:keypress="phoneValidate($event)">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-sm-6">
                        <div class="form-group"> 
                            <!-- <select id="inputState" class="form-control" label="Select Location*" @change="SelectedLocation(location)" v-model="location">
                                <option v-for="item in cities" :value="item" :key="item">{{ item }}</option>
                            </select> -->
                            <v-select v-model="location" label="Select Location*"
                                    :items="cities" variant="solo"
                                    @change="SelectedLocation(location)"></v-select>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6">
                        <div class="form-group"> 
                            <!-- <select id="inputState" class="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select> -->
                            <v-select :disabled="location === ''" v-model="influencer" label="Select Influencer"
                                    :items="influencersData" variant="solo"></v-select>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-sm-6">
                        <div class="form-group"> 
                            <!-- <select id="inputState" class="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select> -->
                            <v-select :disabled="location === ''" v-model="nearest_store" label="Select Nearest Store"
                                    :items="storeData" variant="solo"></v-select>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6">
                        <div class="form-group"> 
                            <input type="text" name="insta" id="insta_handle" v-model="insta_handle"
                                    placeholder="Instagram Handle*" data-form-field="name" class="form-control insta-handle" required
                                    minlength="3" />
                        </div>
                    </div>
                </div> 

                <div class="row"> 
                    <div class="col-12"> 
                        <div data-for="screenshot" class="form-group">
                                <v-file-input v-model='file' accept="image/png, image/jpg, image/jpeg" label="Upload Screenshot" variant="solo"
                                    @change="uploadSS" prepend-icon="icon-paperclip" append-outer-icon=""
                                    type="file" class="file-input"></v-file-input>
                                    <span class="ss-upload-condition">Supports .jpeg, .png, .jpg format</span>
                            </div> 
                            <!-- {{ dotloader }} -->
                            <span class="spinner" v-show="dotloader">
                                <div class="bounce1"></div>
                                <div class="bounce2"></div>
                                <div class="bounce3"></div>
                            </span>
                            <span class="success-message" v-if="!button_status">Image Uploaded successfully</span>
                            <span class="success-message" v-if="image_error">This Screenshot already uploaded earlier</span>
                            <span class="success-message" v-if="invalid_error">Invalid Screenshot</span>
                    </div> 
                </div>

                <div class="row"> 
                    <div class="col-12">
                        <div class="form-group align-item-center justify-content-center text-center"> 
                            <button class="btn btn-success success_btn" @click="formValidations()" :disabled="button_status">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'laptop-offers.vue',
        data() {
            return {
                cities:[],
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
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true
                },
                swiperOption: {
                    loop: false,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false
                    },
                    slidesPerView: 1,
                    spaceBetween: 1,
                    navigation: {
                        nextEl: '.swiper-next',
                        prevEl: '.swiper-prev'
                    }
                },
                settings: {
                    arrows: true,
                    dots: true,
                },
                isMobile: false,
                numberOne: Number,
                numberTwo: Number,
                captchaSum: Number,
                userSum: '',
                location: '',
                influencer: '',
                nearest_store: '',
                insta_handle: '',
                file: null,
                imageUrl: null,
                upload_response: {},
                button_status: true,
                image_error: false,
                invalid_error: false,
                dotloader: false,
                type: 'influencers',
                influencersData: [],
                influencers: [],
                storeData:[],
            }
        },


        async created() {
            this.homepageData = await this.$http.$get('/api/homepage');
            if (process.client && screen !== undefined) {
                if (screen.width <= 760) {
                    this.isMobile = true;
                } else {
                    this.isMobile = false
                }
            }
            this.$nextTick(() => {
                document.getElementById('utm_campaign').value = this.$route.query.utm_campaign;
                document.getElementById('utm_medium').value = this.$route.query.utm_medium;
                document.getElementById('utm_source').value = this.$route.query.utm_source;
            });
            this.numberOne = Math.floor(Math.random() * 100) + 1;
            this.numberTwo = Math.floor(Math.random() * 100) + 1;
            this.captchaSum = this.numberOne + this.numberTwo;

            var listOfCities;
            try {
                 await this.$http.$get(`https://dev-services.happimobiles.com/influencercitynames`).then((response)=>{
                    console.log("response--",response);
                    this.cities=response.data
                })
            } catch (error) {
                console.log('error', error);
            }
        },
        async asyncData({ $http, $seo }) {
            var homepageData = await $http.$get(
                'https://dev-services.happimobiles.com/api/homepage'
            );
            $seo({
                title: 'Happi Student Tribe',
                templateTitle: 'Happi Student Tribe',
                description:
                    'Happi Student Tribe',
                keywords:
                    'Happi Student tribe',
                openGraph: {
                    site: 'Happi Mobiles',
                    type: 'website',
                    title: 'Happi Student tribe ',
                    description:
                        'Happi Student tribe',
                },
                twitter: {
                    site: 'Happi Mobiles',
                    type: 'website',
                    title: 'Happi Student tribe',
                    description:
                        'Happi Student tribe',
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
                    alert('Please Validate Captcha');
                    this.userSum = '';
                    return false;
                }
            },
            async formValidations() {
                let body = {
                    "name": this.nameReq,
                    "phone": this.phoneNo,
                    "location": this.location,
                    "influencer": this.influencer,
                    "nearest_store": this.nearest_store,
                    "inst_handle": this.insta_handle,
                    "image": this.upload_response,
                    "type": "influencers",
                    "utm_campaign": utm_campaign,
                    "utm_medium": utm_medium,
                    "utm_source": utm_source,
                }

            var resp;
            if (this.nameReq != '' && this.phoneNo.length == 10 && this.insta_handle != '') {
                try {
                    resp = await axios.post(`https://dev-services.happimobiles.com/happicampaign`, body)
                    if (resp.data.status) {
                        setTimeout(window.location.replace(`https://www.happimobiles.com/influencers/thank-you`), 3000);
                    }
                } catch (error) {
                    console.log('error', error);
                }

            } else {
                alert('Please Enter Valid Details');
                return false;
            }
                
                // document.getElementById('leads').submit();
                // if(Number(this.userSum) === this.captchaSum){
                //     console.log('true')
                //     document.getElementById('leads').submit();
                // }else {
                //     alert('Please check the Captcha');
                //     return false;
                // }
                // let token = 'ABCD';
                // try {
                //     // console.log(token, 'TOKEN');
                //     token = await this.$recaptcha.getResponse();
                //     // console.log(token, 'TOKEN');
                //     document.getElementById('token').value = token;
                //     await this.$recaptcha.reset();
                // } catch (error) {
                //     console.log('Login error:', error);
                // }
            },
            // navigateto() {
            //     window.open('/apple-airpods-2-true-wireless-white', '_blank');
            // },
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
                this.numberOne = Math.floor(Math.random() * 100) + 1;
                this.numberTwo = Math.floor(Math.random() * 100) + 1;
                this.captchaSum = this.numberOne + this.numberTwo;
            },
            async SelectedLocation(e) {
                // console.log(e, 'LLL');
               
                // let infData = this.influencersData.filter((item) => {
                //     return item.city === e
                // });
                // console.log(infData, 'III');
                // this.influencers = infData[0]?.influencer_name;
                // console.log(this.influencers, 'BBBBB');
                var listOfInfluencernames;
            try {
               
               await this.$http.$get(`https://dev-services.happimobiles.com/getinfluencernames?city=${e}`).then((response)=>{
                this.influencersData = response.data

               })
            } catch (error) {
                console.log('error', error);
            }

             try {
               
               await this.$http.$get(`https://dev-services.happimobiles.com/getStorenames?city=${e}`).then((response)=>{
                this.storeData = response.data

               })
            } catch (error) {
                console.log('error', error);
            }
            },
            async uploadSS() {
                console.log(this.file);
                let formData = new FormData();
                formData.append('file', this.file);
                let image = formData;
                var resp;
                this.dotloader = true;
                try {
                    resp = await axios.post(`https://dev-services.happimobiles.com/uploadimages`, image)
                } catch (error) {
                    console.log('error', error);
                }
                if (resp.data.status) {
                    this.dotloader = false;
                    this.button_status = false;
                    this.image_error = false;
                    this.invalid_error = false;
                    this.upload_response = resp.data;
                } else {
                    if (resp.data.message == 'Screenshot Already exits') {
                        this.dotloader = false;
                        this.image_error = true;
                        this.button_status = true;
                        this.invalid_error = false;
                        return
                    } else if (resp.data.message == 'Invalid Screen Shot') {
                        this.dotloader = false;
                        this.invalid_error = true;
                        this.image_error = false;
                        this.button_status = true;
                        return
                    }
                    else if(resp.data.message ==  'Only .png,.jpeg,.jpg format is allowed'){
                        this.dotloader = false;
                        this.invalid_error = false;
                        this.image_error = true;
                        this.button_status = true;
                        return
                    }
                }

            }
        },
    };
</script>



<style lang="scss">
.spinner {
    margin: 100px auto 0;
    width: 70px;
    text-align: center;
}

.spinner>div {
    width: 18px;
    height: 18px;
    background-color: #333;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
}

.spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {

    0%,
    80%,
    100% {
        -webkit-transform: scale(0)
    }

    40% {
        -webkit-transform: scale(1.0)
    }
}

@keyframes sk-bouncedelay {

    0%,
    80%,
    100% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }

    40% {
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
    }
}

.success-message {
    display: flex;
    justify-content: flex-start;
    margin-top: 0 !important;
    padding: 0 !important;
    color: white;
    font-weight: 400;
    letter-spacing: 1px;
}

.v-application--is-ltr .v-input__prepend-outer {
    margin-right: 0;
}

.v-input__icon {
    position: absolute;
    color: black;
    z-index: 2;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 28%;
}

.v-input__prepend-outer {
    background-color: #fff;
}

.icon-paperclip::before {
    // font-weight: 200;
    color: #000;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.8rem;
}

.v-input .v-label {
    // line-height: 1.5rem !important;
}

.theme--light.v-file-input .v-file-input__text {
    padding: 4px 6% !important;
    height: 50px !important;
}

// .v-input__control>.v-input__slot>.v-text-field__slot {
//     height: 7vh;
// }

// .v-input__prepend-outer {
//     display: none;
// }

.theme--light.v-label {
    padding: 4px 3% !important;
    height: 36px !important;
    // background: #f90;
    // height: auto !important;
}

.v-select__selection--comma {
    padding-left: 5%;
}

// .v-select__selections {
//     height: 7vh;
// }

.v-text-field>.v-input__control>.v-input__slot:before {
    display: none !important;
}

.v-label.v-label--active.theme--light.primary--text,
.v-label--active {
    display: none !important;
}

.v-input {
    padding: 0
}

.v-input__slot {
    background-color: #FFFFFF;
    border-radius: 4px !important;
}

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

.swiper-slide {
    width: 100% !important;

    .swiper-images {
        width: inherit;
        display: -webkit-box;

        img {
            width: 100%;
        }
    }
}

.landingpage-sliders-anv {
    .swiper-arrow {
        display: inline-block;
        vertical-align: top;
        position: relative;
        font-size: 10px !important;
        width: 30px;
        height: 30px;
        border: none;
        background-color: #fff;
        border-radius: 50px !important;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99;
        cursor: pointer;
        transition: all 0.25s ease;
        outline: none;

        i {
            font-size: 20px;
        }

        &:hover {
            background-color: #f39700;
            color: #fff;
        }

        &.swiper-prev {
            left: 0;
        }

        &.swiper-next {
            right: 0;
        }

        &.simple {
            color: #ccc;
            background-color: transparent;

            i {
                font-size: 30px;
            }

            &:hover {
                background-color: transparent;
                color: $color-heading;
            }
        }
    }

    // a.landing-image{
    // .img{
    //     min-width: 100% !important;
    //     height: auto !important;
    //     border: 2px solid red !important;
    //     width: 100% !important;
    // }
    // }

    .swiper-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 99;
        left: 0;
        width: 100%;
        height: 0;

        @include vertical-align();
    }
}

@media (max-width: 767px) {
    .desk-offer-hide {
        display: none;
    }

    .image-height {
        height: 380px;
    }
}

@media (min-width: 768px) {
    .mob-offer-hide {
        display: none;
    }

    .image-height {
        height: 630px;
    }
}

@media (min-width: 1200px) {
    .image-height {
        height: 510px;
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

.Prebookdiv2 {
    background-color: #fb9013;
    width: 100%;
    padding: 3% 14%;
    border-radius: 2px;
    margin: auto;
    // margin: 1%;
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

// img{
//     width:100%;
// }
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


.form_reset{
    background: #F90;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:4rem 0;
    margin-bottom: 5rem;
    flex-direction: column;
    .formbody{ 
        width: 60%;
        margin: auto;        
        padding: 2rem;
        .form-group{
            margin-bottom: 2rem !important;
            .form-control{
                border-radius: 4px !important;
            }
            
            .v-text-field .v-label {  
                line-height: 2 !important;
            }
            .v-input__icon { 
                top: 20%;
                right: 2.5%;
            }
            .v-input__append-outer {
                margin-left: 0px; 
            }
        } 
    }
    .header{ 
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-bottom:1px solid rgba(0,0,0,.1);
        margin-bottom: 3rem;

        h2{
            font-size: 2rem;
            font-weight: 500;
            color: #fff;
            margin: 0;
            letter-spacing: 0.075rem;
        }
        p{
            font-size: 1.25rem; 
            color: #fff;
            margin:5px 0 10px; 
        }
    }
    .row{        
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }
    .success_btn{
        background: white;
        border-color: white;
        color: #000;
        padding: 1.5rem 4rem;
        line-height: 1;
        font-size: 16px;
        font-weight: 600;
    }
}
@media (max-width: 768px) {
    .form_reset{
        .formbody {width: 94% !important;}
    }
}

.v-text-field__details{
    display: none;
}
.insta-handle{
    height: 54px !important;
}
.ss-upload-condition{
    margin-left: 1rem;
    gap: 1px;
    letter-spacing: 1px;
    color: #fff;
}
.v-label{
    left:8px !important;
}
.v-file-input .v-label{
    left:0px !important;
}
.v-select__selections{
    height: 50px !important;
}
</style>

