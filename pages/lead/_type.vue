<template>
    <div class="body">
        <!-- Top Banner for single Image-->
        <div v-if="pageData.topbanner_desktop.image_url.length == 1">
            <a href="#smf">
                <img :src="pageData.topbanner_desktop.image_url[0].image" alt="happi_banner" width="100%"
                    class="d-none d-sm-block" />
                <img :src="pageData.topbanner_mobile.image_url[0].image" alt="happi_banner" width="100%"
                    class="d-block d-sm-none" />
            </a>
        </div>
        <!-- top banner Carousel Div for type image-->
        <div v-else-if="pageData.topbanner_desktop.image_url.length > 1" class="ps-carousel mb-0"
            v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper mb-0" v-if="!isMobile">
                <div class="swiper-slide" style="cursor: pointer"
                    v-for="(item, index) in pageData.topbanner_desktop.image_url" :key="index">
                    <a href="#smf" class="swiper-images">
                        <img alt="happi" :src="item.image" />
                    </a>
                </div>
            </div>
            <div class="swiper-wrapper mb-0" v-if="isMobile">
                <div class="swiper-slide" style="cursor: pointer"
                    v-for="(item, index) in pageData.topbanner_mobile.image_url" :key="index">
                    <a href="#smf" class="swiper-images">
                        <img alt="happi" :src="item.image" />
                    </a>
                </div>
            </div>
            <div v-if="pageData.topbanner_desktop.image_url.length > 1" class="swiper-nav">
                <span class="swiper-arrow swiper-prev"><i class="icon-chevron-left"></i></span>
                <div class="swiper-arrow swiper-next">
                    <i class="icon-chevron-right"></i>
                </div>
            </div>
        </div>
        <!-- top banner Div for type video-->
        <div v-else-if="pageData.topbanner_desktop.type == 'video'">
            <a href="#smf">
                <video autoplay loop muted width="100%" class="d-none d-sm-block">
                    <source :src="pageData.topbanner_desktop.video_url[0]" type="video/mp4">
                </video>
                <video autoplay loop muted width="100%" class="d-block d-sm-none">
                    <source :src="pageData.topbanner_mobile.video_url[0]" type="video/mp4">
                </video>
            </a>
        </div>
        <!-- FORM -->
        <form class="form_reset_lp mt-0" id="leads" action="https://dev-services.happimobiles.com/laptop-leads"
            method="post">
            <div class="formbody" id="smf">
                <div class="row">
                    <div class="col-12 text-center">
                        <div class="header">
                            <h2>{{pageData?.heading}}</h2>
                            <p>All fields marked (*) are mandatory</p>
                        </div>
                    </div>
                </div>

                <div class="row d-flex justify-content-center align-item-center">
                    <div class="col-12 col-sm-4 col-md-4" v-if="pageData?.fields?.name">
                        <div class="form-group">
                            <input type='hidden' name='utm_source' id='utm_source' value=''>
                            <input type='hidden' name='utm_medium' id='utm_medium' value=''>
                            <input type='hidden' name='utm_campaign' id='utm_campaign' value=''>
                            <input type='hidden' name='type' :value='type'>
                            <input type="text" name="name" id="name" v-model="nameReq" placeholder="Name*"
                                data-form-field="name" class="form-control" required minlength="3"
                                v-on:keypress="isLetter($event)">
                        </div>
                    </div>
                    <div class="col-12 col-sm-4 col-md-4" v-if="pageData?.fields?.phone">
                        <div class="form-group">
                            <input type="tel" name="phone" id="phone" placeholder="Phone Number*" data-form-field="phone"
                                class="form-control" v-model="phoneNo" pattern="[0-9]{10}" maxlength="10" minlength="10"
                                required v-on:keypress="phoneValidate($event)">
                        </div>
                    </div>
                    <div class="col-12 col-sm-4 col-md-4" v-if="pageData?.fields?.email">
                        <div class="form-group">
                            <input type="email" name="email" id="email" placeholder="Email Id (Optional)"
                                data-form-field="email" class="form-control" v-model="email" maxlength="25" minlength="5">
                        </div>
                    </div>
                </div>
                <div class="row d-flex align-item-center justify-content-center">
                    <div class="col-12 col-sm-4" v-if="pageData?.fields?.dropdown">
                        <div class="form-group custom-dropdown">
                            <select name="Brand" id="cars" class="form-control" required v-model="brand">
                                <option value="" disabled selected>{{ pageData.fields.dropdown_label }}</option>
                                <option v-for="(item, index) in pageData.fields.dropdown_values" :key="index" :value="item">{{ item }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-12 col-sm-4  col-md-4" v-if="pageData?.fields?.captcha">
                        <div class="form-group align-item-center justify-content-center text-center">
                            <div class="captchcls d-flex align-item-center justify-content-center">
                                <div class="text"> {{ numberOne }} + {{ numberTwo }} &nbsp;= &nbsp;</div>
                                <input type="number" name="captcha" id="captcha" class="form-control captcha-form"
                                    v-model="userSum" maxlength="3" minlength="1" required />
                                <button type="button" class="refresh-button" @click="refreshCaptcha">
                                <i class="fa fa-refresh"></i> Refresh</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-4 col-md-4">
                        <div class="form-group align-item-center justify-content-center text-center">
                            <button class="btn btn-success success_btn btn_fwidth" @click="validate">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <!-- Bottom Banner-->
        <div>
            <a href="#smf">
                <img :src="pageData.bottombanner_desktop.image_url" alt="happi_banner" width="100%"
                    class="d-none d-sm-block" />
                <img :src="pageData.bottombanner_mobile.image_url" alt="happi_banner" width="100%"
                    class="d-block d-sm-none" />
            </a>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    // transition: 'zoom',
    // layout: 'layout-default-ssr',
    ssr: true,
    data() {
        return {
            type: "",
            meta: [
                {
                    'Url': 'mobiles/apple',
                    'Title': 'Buy  Apple Mobiles Online',
                    'Description': 'Buy Mobile Online. Read Product Specifications, Features And Customer Reviews. *One Year Of Brand Warranty * Emi Available',
                    'Keyword': 'latest Apple mobiles, Apple mobiles online, Apple mobile price, Apple mobiles offers'
                },
                {
                    'Url': 'mobiles/samsung',
                    'Title': 'Buy Samsung Mobiles Online in India | Best Samsung Mobiles at Best Prices',
                    'Description': 'Explore the full range of Samsung Mobile devices and android smartphones. Buy samsung mobiles online at best prices in India.',
                    'Keyword': 'latest SAMSUNG mobiles, SAMSUNG mobiles online, SAMSUNG mobile price, SAMSUNG mobiles offers'
                },
                {
                    'Url': 'mobiles/xiaomi',
                    'Title': 'Buy Mi Mobiles Online in India | Xiaomi MI Mobiles at Best Prices',
                    'Description': 'Buy Xiaomi MI Mobiles online from a variety of choices depending on colors, features, specifications, design and much more.',
                    'Keyword': 'latest MI mobiles, MI mobiles online, MI mobile price, MI mobiles offers, Xiaomi mobiles'
                },
                {
                    'Url': 'mobiles/vivo',
                    'Title': 'Buy Vivo Mobiles Online in India | Vivo Mobiles at Best Prices',
                    'Description': 'Buy Vivo latest smartphones and accessories online at Happi Mobiles at best prices and exciting offers',
                    'Keyword': 'latest vivo mobiles, vivo mobiles online, vivo mobile price, vivo mobiles offers'
                },
                {
                    'Url': 'mobiles/oppo',
                    'Title': 'Buy Oppo Mobiles Online in India | Best Oppo Mobiles at Best Prices',
                    'Description': 'Explore the range of Oppo Mobile devices which has great features and specifications. Buy Oppo mobiles online at best prices in India.',
                    'Keyword': 'latest oppo mobiles, oppo mobiles online, oppo mobile price, oppo mobiles offers'
                },
                {
                    'Url': 'mobiles/realme',
                    'Title': 'Buy Realme Mobiles Online in India | Realme Smartphones at Best Prices',
                    'Description': 'Buy Realme Mobiles online at best prices in India. Read Product Specifications, Features and much more.',
                    'Keyword': 'realme oppo mobiles, realme mobiles online, realme mobile price, realme mobiles offers'
                },
                {
                    'Url': 'mobiles/buy-realme-mobiles-online',
                    cat: 'mobiles/realme',
                    'Title': 'Buy Realme Mobiles Online in India | Realme Smartphones at Best Prices',
                    'Description': 'Buy Realme Mobiles online at best prices in India. Read Product Specifications, Features and much more.',
                    'Keyword': 'realme oppo mobiles, realme mobiles online, realme mobile price, realme mobiles offers'
                },
                {
                    'Url': 'mobiles/buy-oppo-mobiles-online',
                    cat: 'mobiles/oppo',
                    'Title': 'Buy Oppo Mobiles Online in India | Best Oppo Mobiles at Best Prices',
                    'Description': 'Explore the range of Oppo Mobile devices which has great features and specifications. Buy Oppo mobiles online at best prices in India.',
                    'Keyword': 'latest oppo mobiles, oppo mobiles online, oppo mobile price, oppo mobiles offers'
                },
                {
                    'Url': 'mobiles/nokia',
                    'Title': 'Nokia Mobiles: Buy Online at Discounted Prices | Offers in India',
                    'Description': 'Buy Latest Nokia mobile phones online at the best price in india with multiple payment options, home delivery, emi option from happimobiles.',
                    'Keyword': 'latest nokia mobiles, nokia mobiles online, nokia mobile price, nokia mobiles offers'
                },
                {
                    'Url': 'mobiles/oneplus',
                    'Title': 'OnePlus Mobiles: Buy Online at Discounted Prices | Offers in India',
                    'Description': 'Buy latest oneplus mobile phones online at the best price in india with multiple payment options, home delivery, emi option from happimobiles.',
                    'Keyword': 'latest oneplus mobiles, oneplus mobiles online, oneplus mobile price, oneplus mobiles offers'
                },
                {
                    'Url': 'mobiles/buy-vivo-mobiles-online',
                    cat: 'mobiles/vivo',
                    'Title': 'Buy Vivo Mobiles Online in India | Vivo Mobiles at Best Prices',
                    'Description': 'Buy Vivo latest smartphones and accessories online at Happi Mobiles at best prices and exciting offers',
                    'Keyword': 'latest vivo mobiles, vivo mobiles online, vivo mobile price, vivo mobiles offers'
                },
                {
                    'Url': 'mobiles/buy-mi-mobiles-online',
                    cat: 'mobiles/xiaomi',
                    'Title': 'Buy Mi Mobiles Online in India | Xiaomi MI Mobiles at Best Prices',
                    'Description': 'Buy Xiaomi MI Mobiles online from a variety of choices depending on colors, features, specifications, design and much more.',
                    'Keyword': 'latest MI mobiles, MI mobiles online, MI mobile price, MI mobiles offers, Xiaomi mobiles'
                },
                {
                    'Url': 'mobiles/buy-samsung-mobiles-online',
                    cat: 'mobiles/samsung',
                    'Title': 'Buy Samsung Mobiles Online in India | Best Samsung Mobiles at Best Prices',
                    'Description': 'Explore the full range of Samsung Mobile devices and android smartphones. Buy samsung mobiles online at best prices in India.',
                    'Keyword': 'latest SAMSUNG mobiles, SAMSUNG mobiles online, SAMSUNG mobile price, SAMSUNG mobiles offers'
                },
                {
                    'Url': 'mobiles/motorola',
                    'Title': 'Motorola Mobiles | Buy Online at Best Prices in India',
                    'Description': 'Buy motorola mobile phones online at the best price in india with multiple payment options, home delivery, emi option from happimobiles.',
                    'Keyword': 'latest MOTOROLA mobiles, motorola mobiles online, motorola mobile price, motorola mobiles offers'
                },
                {
                    'Url': 'mobiles/honor',
                    'Title': 'Honor Mobiles: Buy Online at Discounted Prices | Offers in India',
                    'Description': 'Buy honor mobile phones online at the best price in india with multiple payment options, home delivery, emi option from happimobiles.',
                    'Keyword': 'latest honor mobiles, honor mobiles online, honor mobile price, honor mobiles offers'
                },
                {
                    'Url': 'mobiles/lg',
                    'Title': 'LG Mobiles: Buy Online at Discounted Prices | Offers in India',
                    'Description': 'Buy LG mobile phones online at the best price in india with multiple payment options, home delivery, emi option from happimobiles.',
                    'Keyword': 'LG honor mobiles, LG mobiles online, LG mobile price, LG mobiles offers'
                },
                {
                    'Url': 'mobiles/all',
                    'Title': 'Buy Latest Mobiles Online at best prices only at Happi Mobiles',
                    'Description': 'Shop latest mobiles, android mobiles, branded mobiles online at best prices in India. Read product specifications and offers before purchase.',
                    'Keyword': 'latest mobiles, best mobiles, online mobile store, android mobiles'
                },
                {
                    'Url': 'accessories/headset',
                    'Title': 'Headsets | Buy Headphones | Earphones Online at Happi Mobiles',
                    'Description': 'Buy headset online at best prices. Shop all branded wired and wireless headphones and earphones in India at happi mobiles.',
                    'Keyword': 'headset, headphones, earphones, earbuds, latest headphones, wireless earphones'
                },
                {
                    'Url': 'accessories/storage-drivers',
                    'Title': 'Storage Drivers | Buy Storage Devices Online at Best Prices',
                    'Description': 'Get latest storage drivers online at discounted prices. Shop from all top brands accessories with best offers at happi mobiles.',
                    'Keyword': 'storage driver, happi mobiles, storage devices'
                },
                {
                    'Url': 'accessories/data-cables',
                    'Title': 'Data Cable | Buy Mobile Cables Online at best prices in India',
                    'Description': 'Buy data cable online at happimobiles. Read product specifications, features and customer reviews. one year of brand warranty emi available.',
                    'Keyword': 'data cables, mobile cable, mobile dat cable. best data cable'
                },
                {
                    'Url': 'accessories/bluetooth',
                    'Title': 'Bluetooth | Buy Bluetooth Devices, Accessories Online at Happi Mobiles',
                    'Description': 'Get latest bluetooth devices online at discounted prices. Shop from all top brands accessories with best offers at happi mobiles.',
                    'Keyword': 'bluetooth earphone, bluetooth devices, bluetooth'
                },
                {
                    'Url': 'accessories/projectors',
                    'Title': 'Projectors | Buy HD Led Projector at best prices | Happi Mobiles',
                    'Description': 'Buy latest LED projectors online at the best price in india with multiple payment options, home delivery, emi option from happimobiles.',
                    'Keyword': 'projector, hd projector, led projector'
                },
                {
                    'Url': 'accessories/smart-watches',
                    'Title': 'Smart Watch | Buy Premium Watches for Men | Women',
                    'Description': 'Buy latest smart watches online at the best price in india with multiple payment options, home delivery, emi option from happimobiles.',
                    'Keyword': 'smart watch, health watch, android watch, latest smart watch, mens smart watch, womens smart watches'
                },
                {
                    'Url': 'accessories/chargers',
                    'Title': 'Buy Chargers Online at Best Prices only at Happi Mobiles',
                    'Description': 'Buy mobile chargers online at happimobiles. Read product specifications, features and customer reviews. one year of brand warranty emi available.',
                    'Keyword': 'chargers,mobile chargers, best charger, online charger store'
                },
                {
                    'Url': 'accessories/all',
                    'Title': 'Buy All type Accessories Chargers Headsets Storage Drivers Happi Mobiles',
                    'Description': 'Buy mobile chargers online at happimobiles. Read product specifications, features and customer reviews. one year of brand warranty emi available.',
                    'Keyword': 'chargers,mobile chargers, best charger, online charger store'
                },
                {
                    'Url': 'tablets/all',
                    'Title': 'Buy Tablets Online at Best Prices in India | Happi Mobiles',
                    'Description': 'Get latest tablets online at best | discounted prices. Shop all top brands tablets with free home delivery at happi mobiles.',
                    'Keyword': 'latest tablets , buy tablet online, tablet online store'
                },
                {
                    'Url': 'tvs/mi',
                    'Title': 'Mi TV | Buy Xiaomi LED Televisions Online at Best Prices',
                    'Description': 'Buy mi tv online at best | discounted prices at happi mobiles. Read product specifications, features and customer reviews.',
                    'Keyword': 'mi tv, mi tv online, best mi tv for home, latest mi tv, mi televisions'
                },
                {
                    'Url': 'tvs/lg',
                    'Title': 'LG TV |  Buy Smart HD LED TV\'s Online at Best Prices | Happi Mobiles',
                    'Description': 'Buy lg tv online at best | discounted prices at happi mobiles. Read product specifications, features and customer reviews.',
                    'Keyword': 'lg tv, lg tv online, best lg tv for home, latest lg tv, lg televisions'
                },
                {
                    'Url': 'tvs/tcl',
                    'Title': 'Buy TCL Smart TV\'s Online at Best Prices | Happi Mobiles',
                    'Description': 'Buy tcl tv hd smart online at best | discounted prices at happi mobiles. Read product specifications, features and customer reviews.',
                    'Keyword': 'tcl tv, tcl tv online, best tcl tv for home, latest tcl tv, tcl televisions'
                },
                {
                    'Url': 'tvs/all',
                    'Title': 'Latest | Smart Android TV\'s Online at Best Prices | Happi Mobiles',
                    'Description': 'Buy latest | smart android tv online at best | discounted prices. Shop all brands televisions with free home delivery at happi mobiles.',
                    'Keyword': 'smart tv, latest tv, led tv, android tv, hd tv, best tv, televisions'
                },
                {
                    'Url': 'laptops/all',
                    'Title': 'Buy Laptops Online at Best Prices in India | Happi Mobiles',
                    'Description': 'Get latest laptops online at best | discounted prices. Shop all top brands laptop with free home delivery at happi mobiles.',
                    'Keyword': 'branded laptops, latest laptops, laptop'
                },
                {
                    'Url': 'pages/blood-donation',
                    'Title': 'Blood Donation - Your donation can make a family Happi',
                    'Description': 'At Happi we encouraged customers to share their blood group. We Believe this noble cause, we need more people to help us',
                    'Keyword': 'blood donation, donation, happi customers'
                },
                {
                    'Url': 'akshaya-patra',
                    'Title': 'Akshaya Patra\'s Mid Day Meal Scheme | Happi Mobiles',
                    'Description': 'At Happi Mobiles with our Motto to spread Happiness took an initiative to be a part of Akshaya Patra s Mid Day Meal Scheme.',
                    'Keyword': 'akshaya patra, mid day meal scheme at happi mobiles'
                }
            ],
            priceRangeList: [],
            loading: false,
            phoneNo: '',
            nameReq: '',
            name: '',
            email: '',
            brand: '',
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
                    delay: 50000,
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
            type: '',
            influencersData: [],
            influencers: [],
            storeData: [],
            userExits: false,
            termsShow: false,
            submitting: false,
            termsCheck: false
        };
    },
    async created() {
        // console.log('LEAD', this.type, this.pageData);
        // this.pageData = {
        //     "title": "dasara-offers",
        //     "topbanner_desktop": {
        //         "type": "image",
        //         "image_url": [
        //             {
        //                 "image": "https://s3.ap-south-1.amazonaws.com/happimobiles/landingpages/Banner_desk_image1a_top.jpg",
        //                 "id": "bd8ac760-6990-11ee-9ace-5f5e5f629e5c"
        //             }
        //         ],
        //         "video_url": [
        //             ""
        //         ],
        //         "youtube_url": ""
        //     },
        //     "topbanner_mobile": {
        //         "type": "image",
        //         "image_url": [
        //             {
        //                 "image": "https://s3.ap-south-1.amazonaws.com/happimobiles/landingpages/Banner_Mobile_image1a_top.jpg",
        //                 "id": "c5fd1a10-6990-11ee-9ace-5f5e5f629e5c"
        //             }
        //         ],
        //         "video_url": [
        //             ""
        //         ],
        //         "youtube_url": ""
        //     },
        //     "bottombanner_desktop": {
        //         "type": "image",
        //         "image_url": "https://s3.ap-south-1.amazonaws.com/happimobiles/landingpages/Banner_desk_image2a_bottom.jpg"
        //     },
        //     "bottombanner_mobile": {
        //         "type": "image",
        //         "image_url": "https://s3.ap-south-1.amazonaws.com/happimobiles/landingpages/Banner_mobile_image2a_bottom.jpg"
        //     },
        //     "fields": {
        //         "name": true,
        //         "phone": true,
        //         "email": true,
        //         "dropdown": true,
        //         "dropdown_label": "Select Product",
        //         "dropdown_values": ["iphone", "iphone-15", "iphone-13"]
        //     },
        //     "created_at": "2023-10-13T06:23:45.166Z",
        //     "id": "0fd202e0-6991-11ee-9ace-5f5e5f629e5c"
        // }
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
        this.numberOne = Math.floor(Math.random() * 10) + 1;
        this.numberTwo = Math.floor(Math.random() * 10) + 1;
        this.captchaSum = this.numberOne + this.numberTwo;

        // var listOfCities;
        // try {
        //     await this.$http.$get(`https://dev-services.happimobiles.com/influencercitynames`).then((response) => {
        //         // console.log("response--", response);
        //         this.cities = response.data
        //     })
        // } catch (error) {
        //     console.log('error', error);
        // }
    },

    async asyncData({ params, redirect, $axios, route, $http }) {
        // console.log('route', route);
        let response;
        let payload = {
            "title": route.params.type
        }
        try {
            response = await $http.$post(`https://dev-services.happimobiles.com/getLandingPageDetails`, payload);
        } catch (e) {
            console.log(e);
        }
        // console.log(response.data, 'response-DATA');
        return {
            type: route.params.type,
            pageData: response.data,
        }
    },
    methods: {
        //Validate FORM
        async validate() {
            if (this.pageData?.fields?.captcha) {
                if (Number(this.userSum) === this.captchaSum) {
                    if (this.nameReq != '' && this.phoneNo.length == 10 && (/^\d+$/.test(this.phoneNo)) && (/^[a-zA-Z\s.,]+$/.test(this.nameReq)) && Number(this.userSum) === this.captchaSum) {
                        if (this.pageData.fields.dropdown == true) {
                            if (this.brand != '') {
                                this.formValidations();
                            } else {
                                alert('Please Select any product');
                                return false;
                            }
                        }
                        else {
                            this.formValidations();
                        }
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
            } else {
                if (this.nameReq != '' && this.phoneNo.length == 10 && (/^\d+$/.test(this.phoneNo)) && (/^[a-zA-Z\s.,]+$/.test(this.nameReq))) {
                    if (this.pageData.fields.dropdown == true) {
                        if (this.brand != '') {
                            this.formValidations();
                        } else {
                            alert('Please Select any product');
                            return false;
                        }
                    }
                    else {
                        this.formValidations();
                    }
                } else {
                    alert('Please Enter valid Name & Phone No');
                    return false;
                }
            }
        },
        //Form Submit function
        async formValidations() {
            document.getElementById('leads').submit();
        },
        //Phone Number validation
        phoneValidate(e) {
            let char = String.fromCharCode(e.keyCode); // Get the character
            if (/^[0-9]+$/.test(char)) return true; // Match with regex 
            else e.preventDefault(); // If not match, don't add to input text
        },
        //Name Validation
        isLetter(e) {
            let char = String.fromCharCode(e.keyCode); // Get the character
            if (/^[A-Za-z ]+$/.test(char)) return true; // Match with regex 
            else e.preventDefault(); // If not match, don't add to input text
        },
        //Captcha numbers refresh function
        async refreshCaptcha() {
            this.numberOne = Math.floor(Math.random() * 10) + 1;
            this.numberTwo = Math.floor(Math.random() * 10) + 1;
            this.captchaSum = this.numberOne + this.numberTwo;
        },
        //to fetch list of influencers based on selected city
        async SelectedLocation(e) {
            var listOfInfluencernames;
            try {
                await this.$http.$get(`https://dev-services.happimobiles.com/getinfluencernames?city=${e}`).then((response) => {
                    this.influencersData = response.data
                })
            } catch (error) {
                console.log('error', error);
            }

            try {

                await this.$http.$get(`https://dev-services.happimobiles.com/getStorenames?city=${e}`).then((response) => {
                    this.storeData = response.data
                })
            } catch (error) {
                console.log('error', error);
            }
        },
        //Screenshot upload function
        async uploadSS() {
            // console.log(this.file);
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
                this.upload_response = resp;
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
                else if (resp.data.message == 'Only .png,.jpeg,.jpg format is allowed') {
                    this.dotloader = false;
                    this.invalid_error = false;
                    this.image_error = true;
                    this.button_status = true;
                    return
                }
            }

        },
        //To show Terms and condtions
        termsAndConditions() {
            this.termsShow = !this.termsShow;
        }
    },

};
</script>

<style lang="scss">
.custom-dropdown{
    select{
        appearance: auto;
    }
}
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

.v-select__selections {
    height: 7vh;
}

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

// .number-captcha-block {
//     align-items: center;
//     height: 100%;
//     background-color: #FFFFFF;
//     padding: 4%;
//     font-size: 2.25rem;
//     border-radius: 4px;
//     border-color: #fb9013;
//     gap: 5px;

//     .captcha-form {
//         width: 80px;
//         font-size: 20px;
//     }

//     .refresh-button {
//         font-size: 13px;
//         height: auto;
//         padding: 3px 5px;
//     }
// }

.swiper-slide {
    width: 100% !important;

    .swiper-images {
        width: inherit;
        display: -webkit-box;

        img {
            width: 100% !important;
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
    .swiper-wrapper {
        height: 255px;
    }
}

// @media (max-width: 767px) {
//     .desk-offer-hide {
//         display: none;
//     }

//     .image-height {
//         height: 250px;
//     }
// }

// @media (min-width: 768px) {
//     .mob-offer-hide {
//         display: none;
//     }

//     .image-height {
//         height: 630px;
//     }
// }

// @media (min-width: 1200px) {
//     .image-height {
//         height: 510px;
//     }
// }

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
    text-align: center;
    width: 100%;
    padding: 2px .5rem;
    border-radius: 4px;
    background: #FFF;
    gap: 0.5rem;
    align-items: center;

    .text {
        white-space: nowrap;
    }

    .captcha-form {
        height: 42px;
        max-width: 90px;
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
}

.btn_fwidth {
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


.form_reset_lp {
    background: #F90;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem 0;
    flex-direction: column;

    .formbody {
        width: 60%;
        margin: auto;
        padding: 2rem;

        .form-group {
            margin-bottom: 2rem !important;

            .form-control {
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

    .header {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
        margin-bottom: 3rem;

        h2 {
            font-size: 2rem;
            font-weight: 500;
            color: #fff;
            margin: 0;
            letter-spacing: 0.075rem;
        }

        p {
            font-size: 1.25rem;
            color: #fff;
            margin: 5px 0 10px;
        }
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }

    .success_btn {
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
    .form_reset_lp {
        .formbody {
            width: 94% !important;
        }
    }
}

.v-text-field__details {
    display: none;
}

.insta-handle {
    height: 54px !important;
}

.ss-upload-condition {
    margin-left: 1rem;
    gap: 1px;
    letter-spacing: 1px;
    color: #fff;
}

.v-label {
    left: 8px !important;
}

.v-file-input .v-label {
    left: 0px !important;
}

.v-select__selections {
    height: 50px !important;
}

.user-exists {
    color: rgb(153, 31, 31);
    font-weight: 400;
    letter-spacing: 1px;
}

.assistance {
    color: white;
    font-weight: 400;
    letter-spacing: 1px;
}

.v-select__slot {
    height: 50px !important;

    input {
        padding: 0 16px !important;
        top: -14px !important;
    }
}

.terms-submit {
    display: flex;
    flex-direction: column;
}

.terms-and-conditions {
    cursor: pointer;
    border-bottom: 1px solid;
}

.checkbox-terms {
    height: 12px;
}
</style>

