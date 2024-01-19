<template>
    <div class="body">
        <div
            class="text-center align-center">
            <div
              class="ps-carousel landingpage-sliders-anv image-height"
              v-swiper:mySwiper="swiperOption"
                >
                <div class="swiper-wrapper" v-if="!isMobile">
                    <div
                        class="swiper-slide"
                        style="cursor: pointer"
                        v-for="(item, index) in bannersDesk"
                        :key="index"
                    >
                        <a href="#smf" class="swiper-images">
                          <img alt="happi" :src="item.pictures" />
                        </a>
                    </div>
                </div>
                <div class="swiper-wrapper" v-if="isMobile">
                    <div
                        class="swiper-slide mob-offer-hide"
                        style="cursor: pointer"
                        v-for="(item, index) in bannersMobile"
                        :key="index"
                    >
                        <a href="#smf" class="swiper-images">
                          <img alt="happi" :src="item.pictures"/>
                        </a>
                    </div>
                </div>
                <div class="swiper-nav">
                    <span class="swiper-arrow swiper-prev"
                      ><i class="icon-chevron-left"></i
                    ></span>
                    <div class="swiper-arrow swiper-next">
                      <i class="icon-chevron-right"></i>
                      </div>
                </div>
            </div>
            <div class="" id="smf">
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
                            <h2>Happi 5th Anniversary Sale Offers</h2>
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
                            <input type='hidden' name='type' value='happi-5th-anniversary-sale'>
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
                                    v-on:keypress="isLetter($event)"
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
                                    v-on:keypress="phoneValidate($event)"
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

            <div class="text-center align-center">
                <a href="#smf" class="anchor-tag">
                    <img
                        :src="`${image_url2d}`"
                        alt=""
                        class="desk-offer-hide landing-image"
                    />
                    <img
                        :src="`${image_url2m}`"
                        alt=""
                        class="mob-offer-hide landing-image"
                    />
                </a>
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
                'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/85f58f8c-434d-41c0-9810-4f8afe1aa7e1.png',
            image_urlm:
                'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/480cc2b6-864b-4c9d-ad4d-615ae04d42e3.png',
            image_url2d:
                'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/602cefdb-7cd1-4914-b952-4e205942523c.PNG',
            image_url2m:
                'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/471033bf-343c-41ec-a657-b0c4752b7b4d.PNG',
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
            bannersMobile: [
              {pictures: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/40c17683-5cf4-4e30-9895-cc12b840bda3.png'},
              {pictures: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/f5766ab9-bb95-49a5-91ef-a7d7a529fef9.png'},
            ],
            bannersDesk: [
              {pictures: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/d81632d6-7672-4f53-b07e-640be1d089f7.png'},
              {pictures: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/dd9210cd-a4ff-44da-a771-3f7d516c3394.png'},
            ],
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
        isMobile: false
        };
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
    },
    async asyncData({ $http, $seo }) {
        var homepageData = await $http.$get(
            'https://dev-services.happimobiles.com/api/homepage'
        );
        $seo({
            title: 'Happi 5th Anniversary Sale',
            templateTitle: 'Happi 5th Anniversary Sale',
            description:
                'Happi 5th Anniversary Sale',
            keywords:
                'airpods pro 2,airpods pro 2 price,airpods pro 2 cost,airpods pro 2 price,airpods pro 2 features.',
            openGraph: {
                site: 'Happi Mobiles',
                type: 'website',
                title: 'Happi 5th Anniversary Sale ',
                description:
                    'Happi 5th Anniversary Sale',
            },
            twitter: {
                site: 'Happi Mobiles',
                type: 'website',
                title: 'Happi 5th Anniversary Sale ',
                description:
                    'Happi 5th Anniversary Sale',
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
        phoneValidate(e){
          let char = String.fromCharCode(e.keyCode); // Get the character
            if(/^[0-9]+$/.test(char)) return true; // Match with regex 
            else e.preventDefault(); // If not match, don't add to input text
        },
        isLetter(e) {
            let char = String.fromCharCode(e.keyCode); // Get the character
            if(/^[A-Za-z ]+$/.test(char)) return true; // Match with regex 
            else e.preventDefault(); // If not match, don't add to input text
        },
    },
};
</script>



<style lang="scss">
.swiper-slide{
    width: 100% !important;
   .swiper-images{
        width: inherit;
        display: -webkit-box;
        img{
            width: 100%;
        }
    }
}
.landingpage-sliders-anv{
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
            background-color:#f39700;
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
    .image-height{
        height: 380px;
    }
}
@media (min-width: 768px) {
    .mob-offer-hide {
        display: none;
    }
    .image-height{
        height: 630px;
    }
}
@media (min-width: 1200px){
    .image-height{
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
  
</style>

