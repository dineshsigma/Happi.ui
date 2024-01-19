<template>
    <section class='body'>
        <nav class='breadcrumb'></nav>

        <div class="row">
            <section class='col-md-12 col-sm-12 header1 cid-sN6GjcAMxA' id='header01-3m'>
                <div class='container desktop'>
                    <div class='row justify-content-md-center pt-5'>
                        <!-- <vue-image-slider class="slider-vue-image" :images="imageArray" :intervalVal=5000 :width=1200
                            :height=350 /> -->
                        <a href="#formbuilder-3l">
                        <img :src="`${imageArray[0]}`" alt="happi" />
                        </a>

                        <!-- <div class='col-md-10 align-center'></div>
                    <div class='pt-4 align-center' ><img :src='`${image_url}`' alt=''  style='width: 100%;' class='watches-landing-img'>
                    </div> -->
                    </div>
                </div>
                <div class='container mobile '>
                    <div class='row justify-content-md-center'>
                        <!-- <div class='col-md-10 align-center'></div>
                    <div class='pt-4 align-center'><img :src='`${mobile_url}`' alt='' style='width: 100%;' class='watches-landing-img'>
                    </div> -->
                        <!-- <vue-image-slider class="slider-vue-image" :images="imageMobileArray" :intervalVal=5000 :width=400
                            :height=auto /> -->
                            <a href="#formbuilder-3l">
                            <img :src="`${imageMobileArray[0]}`" alt="happi" />
                            </a>
                    </div>

                </div>
            </section>
            <section>
                <div class='container desktop'>


                </div>
            </section><br><br>
            <section class=' col-md-6 offset-md-3 col-sm-12 form cid-sN6DERkjXB' id='formbuilder-3l'>
                <div class='container'>
                    <div class='row mt-5'>
                        <div class='col-lg-8 col-md-11 mx-auto mbr-form' data-form-type='formoid'>
                            <form id='leads' action='https://dev-services.happimobiles.com/laptop-leads' method='post'
                                class='mbr-form form-with-styler' data-form-title='Diwali Dhamaka'>
                                <div class='form-row'>
                                    <div hidden='hidden' data-form-alert='' class='alert alert-success col-12'>Thanks
                                        for
                                        filling out the form!
                                    </div>
                                    <div hidden='hidden' data-form-alert-danger='' class='alert alert-danger col-12'>
                                        Oops...! some problem!
                                    </div>
                                </div>

                                <div class='dragArea form-row mt-8'>


                                    <div class='Prebookdiv'>
                                        <div class='col-lg-12 col-md-12 col-sm-12  text-center'>
                                            <p class='first-txt'>Apple iPhone 14 </p>

                                            <p class='third-txt'>
                                                <b>Get Offer Details, Enquire Now!</b>

                                            </p>
                                            <p class='second-txt'>
                                                All fields marked (*) are mandatory

                                            </p>
                                        </div>
                                        <div class='col-lg-12 col-md-12 col-sm-12'>
                                            <hr class='hr'>
                                        </div>

                                        <input type='hidden' name='utm_source' id='utm_source' value=''>
                                        <input type='hidden' name='utm_medium' id='utm_medium' value=''>
                                        <input type='hidden' name='utm_campaign' id='utm_campaign' value=''>
                                        <input type='hidden' name='type' value='iphone-14'>
                                        <div style='display: none'>
                                            <input type='text' name='token' id='token' value='' required minlength='3'>
                                        </div>
                                        <!-- <h6 style='margin: 10px'>Enter Your Name</h6> -->
                                        <div data-for='name' class='col-lg-12 col-md-12 col-sm-12 form-group p-0 ttbox'
                                            style='margin-bottom:0 !important'>
                                            <input 
                                            type='text'
                                            name='name' 
                                            id='name' 
                                            placeholder='Name*'
                                            data-form-field='name' 
                                            class='form-control' 
                                            required minlength='3'
                                            value=''
                                            v-model="nameReq"
                                            v-on:keypress="isLetter($event)"
                                            >
                                        </div>
                                        <!-- <h6 style='margin: 10px'>Enter Email</h6>
                                  <div data-for='email' class='col-lg-12 col-md-12 col-sm-12 form-group p-0 ttbox'
                                      style='margin-bottom:0 !important'><input type='email' name='email' id='email'
                                          placeholder='Email (optional)' data-form-field='email'
                                          class='form-control display-7' value=''>
                                  </div> -->
                                        <!-- <h6 style='margin: 10px'>Enter Your Phone Number</h6> -->
                                        <div data-for='phone'
                                            class='col-lg-12 col-md-12 col-sm-12 form-group p-0 ttbox pt-2'
                                            style='margin-bottom:0 !important'>
                                            <input 
                                            type='tel' 
                                            name='phone' 
                                            id='phone' 
                                            placeholder='Phone Number*'
                                            pattern='[0-9]{10}' 
                                            maxlength='10' 
                                            minlength='10' 
                                            required
                                            data-form-field='phone' 
                                            class='form-control display-7' 
                                            v-model='phoneNo'
                                            value=''
                                            v-on:keypress="phoneValidate($event)"
                                            >
                                        </div>
                                        <div data-for='model' class='col-lg-12 col-md-12 col-sm-12 form-group p-0'>
                                            <h6 style='margin: 10px'></h6>
                                            <aside class=' ttbox'>
                                                <div class='form-group'>
                                                    <select data-form-field='Brand' required value='' class='form-control'
                                                        @change='onChanges($event)'>
                                                        <option value='0'>Select Model *</option>
                                                        <option value='iphone14'>APPLE iPhone14</option>
                                                        <option value='iphone14plus'>APPLE iPhone 14 Plus</option>
                                                        <option value='iphone14pro'>APPLE iPhone 14 Pro</option>
                                                        <option value='iphone14promax'> APPLE iPhone 14 Pro Max </option>

                                                    </select>
                                                </div>
                                            </aside>
                                        </div>
                                        <!-- <div data-for='model' class='col-lg-12 col-md-12 col-sm-12 form-group p-0'
                                             v-if='appleiphone14plus == true'>
                                            <h6 style='margin: 10px'>Select Model Name</h6>
                                            <aside class=' ttbox'>
                                                <div class='form-group'>
                                                    <select name='Brand' data-form-field='Brand' required value=''
                                                            class='form-control' @change='changeModel($event)'>
                                                        <option value='0'>Select Phone 14 Plus Model *</option>
                                                        <option value='APPLE iPhone 14 Plus Blue 128GB'>APPLE iPhone 14 Plus Blue 128GB
                                                        </option>
                                                        <option value='APPLE iPhone 14 Plus Red 128GB'>APPLE iPhone 14 Plus Red 128GB
                                                        </option>
                                                        <option value='APPLE iPhone 14 Plus Midnight 128GB'>APPLE iPhone 14 Plus Midnight 128GB
                                                        </option>
                                                        <option value='APPLE iPhone 14 Plus Purple128GB'>APPLE iPhone 14 Plus Purple128GB
                                                        </option>
                                                           <option value='APPLE iPhone 14 Plus Starlight128GB '>APPLE iPhone 14 Plus Starlight128GB

                                                        </option>

                                                            <option value='APPLE iPhone 14 Plus Starlight 256GB'>APPLE iPhone 14 Plus Starlight 256GB
                                                        </option>
                                                        <option value='APPLE iPhone 14 Plus Purple 256GB'>APPLE iPhone 14 Plus Purple 256GB
                                                        </option>
                                                        <option value='APPLE iPhone 14 Plus Midnight 256GB'>APPLE iPhone 14 Plus Midnight 256GB
                                                        </option>
                                                        <option value='APPLE iPhone 14 Plus Red 256GB'>APPLE iPhone 14 Plus Red 256GB
                                                        </option>
                                                           <option value='APPLE iPhone 14 Plus Blue 256GB '>APPLE iPhone 14 Plus Blue 256GB


                                                        </option>

                                                            <option value='APPLE iPhone 14 Plus Blue 512GB'>APPLE iPhone 14 Plus Blue 512GB
                                                        </option>
                                                        <option value='APPLE iPhone 14 Plus Red 512GB'>APPLE iPhone 14 Plus Red 512GB
                                                        </option>
                                                        <option value='APPLE iPhone 14 Plus Midnight 512GB'>APPLE iPhone 14 Plus Midnight 512GB

                                                        </option>
                                                        <option value='APPLE iPhone 14 Plus Purple 512GB'>APPLE iPhone 14 Plus Purple 512GB
                                                        </option>
                                                           <option value='APPLE iPhone 14 Plus Starlight 512GB '>APPLE iPhone 14 Plus Starlight 512GB

                                                        </option>
                                                    </select>
                                                </div>
                                            </aside>
                                        </div>
                                        <div data-for='model' class='col-lg-12 col-md-12 col-sm-12 form-group p-0'
                                             v-if='appleiphone14pro == true'>
                                            <h6 style='margin: 10px'>Select Model Name</h6>
                                            <aside class=' ttbox'>
                                                <div class='form-group'>
                                                    <select name='Brand' data-form-field='Brand' required value=''
                                                            class='form-control' @change='changeModel($event)'>
                                                        <option value='0'>Select BOAT Model *</option>
                                                        <option value='APPLE iPhone 14 Pro Gold 128GB'>APPLE iPhone 14 Pro Gold 128GB

                                                        </option>
                                                        <option value='APPLE iPhone 14 Pro Deep Purple 128GB'>APPLE iPhone 14 Pro Deep Purple 128GB

                                                        </option>
                                                        <option value='APPLE iPhone 14 Pro Silver 128GB'>APPLE iPhone 14 Pro Silver 128GB
                                                        </option>
                                                        <option value='APPLE iPhone 14 Pro Space Black 128GB'>APPLE iPhone 14 Pro Space Black 128GB
                                                        </option>
                                                                <option value='APPLE iPhone 14 Pro Deep Purple 128GB'>APPLE iPhone 14 Pro Deep Purple 128GB

                                                        </option>
                                                        <option value='APPLE iPhone 14 Pro Silver 128GB'>APPLE iPhone 14 Pro Silver 128GB
                                                        </option>
                                                        <option value='APPLE iPhone 14 Pro Space Black 128GB'>APPLE iPhone 14 Pro Space Black 128GB
                                                        </option>
                                                                <option value='APPLE iPhone 14 Pro Deep Purple 128GB'>APPLE iPhone 14 Pro Deep Purple 128GB

                                                        </option>
                                                        <option value='APPLE iPhone 14 Pro Silver 128GB'>APPLE iPhone 14 Pro Silver 128GB
                                                        </option>
                                                        <option value='APPLE iPhone 14 Pro Space Black 128GB'>APPLE iPhone 14 Pro Space Black 128GB
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
                                        </div> -->

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


                                        <div class='form-group p-0 captchcls'>
                                            <recaptcha id='captcha' />&nbsp;&nbsp;

                                            <br> <br>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-12 col-md-12">

                                                <button class='btn btncss smartwatches' @click='formValidations'>
                                                    <b>Submit</b></button> <br><br>
                                                <!-- <br><br> <p class="text-center" style="font-size:20px">(or)</p><br><br>  -->
                                            </div>
                                            <!-- <div class="col-lg-12 col-md-12">
 <button class='btn btncss '   v-on:click.prevent='navigateto()'>
                                                <b>Buy Now</b></button></div> -->

                                        </div>

                                    </div>
                                    <div class='col-lg-12 col-md-12 col-sm-12'>
                                        <hr class='hr'>
                                    </div>
                                </div>
                            </form>
                            <br>


                        </div>
                    </div>
                </div>
            </section>
        </div>
        <section>
            <div class="container"
                style="min-height: 100vh; color: #000000; background-color: #fcfcfc; font-family: arial,helvetica,sans-serif;width:100%;">


                <div style="text-align: center;  max-inline-size: 100%;
            block-size: auto;"><img
                        src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/b4dd3826-6afa-4d7d-93d6-f2d5ac3e9986.jpg">
                </div>

                <div style="text-align: center;width:100%">
                    <img
                        src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/4b062489-b743-4d55-9cf8-55f935b647e3.jpg" />

                </div>
                <div style="text-align: center;width:100%;">
                    <img
                        src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/ea45feb2-424c-4feb-8358-e05842540a8d.jpg">

                </div>
                <div style="text-align: center;width:100%;"><img
                        src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/65ff1011-99bd-4007-8368-55eecbcd6b6b.jpg">
                </div>
                <div style="text-align: center;">

                    <div style="text-align: center;">
                        <img
                            src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/cf7b3fae-8b2f-4dd9-b5a0-f7a605d601fd.jpg">
                    </div>
                    <div style="text-align: center;">
                        <img
                            src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/711edea0-76a9-45dc-a8d2-c3320ad291ac.jpg">
                    </div>

                    <div style="text-align: center;width:100%">
                        <img
                            src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/ce18d689-f510-4d1a-a3cc-6ecc55c8e0cf.jpg">

                    </div>
                    <div style="text-align: center;width:100%">
                        <img
                            src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/0ec06a81-edf5-4dc8-8866-05c89c7540c4.jpg">
                    </div>
                    <div style="text-align: center;width:100%">
                        <img
                            src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/14e45f9f-b352-4129-9f7d-4eedd7e8e0c1.jpg">

                    </div>
                    <div style="text-align: center;width:100%">
                        <img
                            src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/0d1acc7f-2fa5-4c9e-8cc6-5400647c7a17.jpg">

                    </div>
                    <div style="text-align: center;width:100%">
                        <img
                            src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/2e7f17b6-b761-49a8-b512-0d7ebcc5e00c.jpg">

                    </div>

                </div>

            </div>

        </section>

        <!-- <section  id="sw-iframe" ></section>
              <section   >
            <div class="mt-6"> 
                <iframe class="smart-watches-frame" src='https://happimobiles.s3.ap-south-1.amazonaws.com/iwatchespage/happimobirise3/index.html'
                   style="-moz-transform-scale(0.5); width: 100%; height: 1630px;"></iframe>
            </div>
        </section> -->
    </section>
</template>

<script>
import VueImageSlider from 'vue-image-slider'

export default {
    name: 'laptop-offers.vue',
    components: {
        VueImageSlider
    },
    data() {
        return {
            image_url: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/ba5ef2a5-86e7-471a-a038-3b8ae6edd9a7.png',
            mobile_url: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/c3df9c7e-9431-4983-b6f9-14636517c78c.png',
            homepageData: {},
            block: 'NOISE COLOR FIT BEAT SMART WATCH',
            appleiphone14plus: false,
            appleiphone14pro: false,
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
            OtpMessage: '', imageArray: [
                'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/599ff96c-e046-4403-b49d-3e85add5809c.png'
            ],

            imageMobileArray: [
                'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/9ad588f4-ede6-4f1f-9eb3-dc0771b2f85d.png',
            ]


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
        async asyncData({ $http, $seo }) {
            var homepageData = await $http.$get('https://dev-services.happimobiles.com/api/homepage');
            $seo({
                title: 'Buy the brand new iPhone 14 and iPhone 14 Pro - Happi mobiles',
                templateTitle: '%title% - Happi Mobiles',
                description: 'Find the Best Mobile Phone offers Online. Explore the best mobBuy the brand new iPhone 14 series and brand new apple mobile phones online at Happi mobiles. Get the latest Apple mobile phones at great prices online.',
                keywords: 'iphone 14,iphone 14 price,Apple mobile phones,buy iphone 14 online,buy iphone 14 pro max,buy iphone 14 pro.',
                openGraph: {
                    site: 'Happi Mobiles',
                    type: 'website',
                    title: 'Buy the brand new iPhone 14 and iPhone 14 Pro - Happi mobiles',
                    description: 'Find the Best Mobile Phone offers Online. Explore the best mobBuy the brand new iPhone 14 series and brand new apple mobile phones online at Happi mobiles. Get the latest Apple mobile phones at great prices online.',
                },
                twitter: {
                    site: 'Happi Mobiles',
                    type: 'website',
                    title: 'Buy the brand new iPhone 14 and iPhone 14 Pro - Happi mobiles',
                    description: 'Find the Best Mobile Phone offers Online. Explore the best mobBuy the brand new iPhone 14 series and brand new apple mobile phones online at Happi mobiles. Get the latest Apple mobile phones at great prices online.'
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
        navigateto() {

            window.open("/mobiles/apple/", "_blank")
        },
        onChanges(e) {
            if (e.target.value === 'iphone14plus') {
                this.appleiphone14plus = true;
                this.appleiphone14pro = false;
                this.FIREBOLTTDATA = false;
                this.DIZODATA = false;
            } else if (e.target.value === 'iphone14pro') {
                this.appleiphone14pro = true;
                this.appleiphone14plus = false;
                this.FIREBOLTTDATA = false;
                this.DIZODATA = false;

            } else if (e.target.value === 'FIRE BOLTT') {
                this.FIREBOLTTDATA = true;
                this.appleiphone14pro = false;
                this.appleiphone14plus = false;
                this.DIZODATA = false;
            } else if (e.target.value === 'DIZO') {
                this.DIZODATA = true;
                this.FIREBOLTTDATA = false;
                this.appleiphone14pro = false;
                this.appleiphone14plus = false;
            }
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
    }
};
</script>

<style scoped>
.ma-watches {
    font-size: 1.1vw !important;
    background-color: #fff !important;
    color: black !important;
    margin-left: 30% !important;
    width: 40% !important;
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


    .smart-watches-frame {
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

form .spinner>div {
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
    /* left: 300px; */
    margin-bottom: 90px;
    background-color: #ffffff;
    border: 0;
    color: #FB9013 !important;
    font-family: 'Open Sans', sans-serif;
    transform: translateY(-50%);
}

.btn1:hover {
    background-color: #fff;
    border: 0;
    color: #000000 !important;
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
    /* margin-top: 2rem; */
    font-size: 30px;
    color: #fff;
    font-weight: bold;
    margin-bottom: 0px;
}

.second-txt {
    margin-bottom: 0px;

}

.third-txt {
    font-size: 18px;
    color: #fff;
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
    margin-left: 0% !important;
    margin-top: -6%;
    width: 100%;
}

.Prebookdiv {
    background-color: #fb9013;
    width: 95%;
    padding-top: 3%;
    padding-left: 3%;
    padding-right: 3%;
    margin-left: 15%;
    padding-bottom: 3%;
    border-radius: 10px;
}

.btncss {
    font-size: 1.1vw !important;
    background-color: #fff !important;
    color: black !important;
    margin-left: 18% !important;
    width: 60% !important;
    margin-top: -7% !important;
    border-radius: 5px;

}

.btncss:hover {
    color: #fb9013 !important;
}

.ttbox input {
    height: 38px !important;
    border-radius: 5px;
    width: 100%;
    margin-left: 0%;
    padding-left: 2%;
}

.ttbox select {
    height: 38px !important;
    border-radius: 5px;
    margin-bottom: 50PX !important;
    padding-left: 2%;

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
        margin-left: 0% !important;
        width: 95% !important;
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
        /* background-color: #fb9013; */
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
        width: 65% !important;
        padding-top: 3%;
        padding-left: 3%;
        padding-right: 3%;
        margin-left: 20% !important;
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
        color: rgb(255, 255, 255);
    }

    .first-txt {
        /* margin-top: 2rem; */
        font-size: 32px;
        color: rgb(255, 255, 255);
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

.u-row .u-col.u-col-100 {
    flex: 0 0 100%;
    max-width: 100%;
}

@media (max-width: 767px) {
    .u-row:not(.no-stack) {
        flex-wrap: wrap;
    }

    .u-row:not(.no-stack) .u-col {
        flex: 0 0 100% !important;
        max-width: 100% !important;
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

form .spinner>div {
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

@media only screen and (max-width:480px) {
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

@media (min-width:576px) {
    .container {
        max-width: 540px
    }
}

@media (min-width:768px) {
    .container {
        max-width: 720px
    }
}

@media (min-width:992px) {
    .container {
        max-width: 960px
    }
}

@media (min-width:1200px) {
    .container {
        max-width: 1140px
    }
}

a[onclick] {
    cursor: pointer;
}

body {
    font-family: arial, helvetica, sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    color: #000000;
    background-color: #e7e7e7;
}

a {
    color: #0000ee;
    text-decoration: underline;
}

a:hover {
    color: #0000ee;
    text-decoration: underline;
}</style>

