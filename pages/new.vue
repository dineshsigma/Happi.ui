<template>
    <div class="">
        <div class="swiper-div">
            <VueSlickCarousel v-bind="slickOptions" v-if="!isMobile">
                <div v-for="(item, index) in bannersDesk" :key="index">
                    <a>
                        <img alt="happi" :src="item.pictures"/>
                    </a>
                </div>
            </VueSlickCarousel>
            <VueSlickCarousel v-bind="slickOptions" v-else>
                <div v-for="(item, index) in bannersMobile" :key="index">
                    <a>
                        <img alt="happi" :src="item.pictures"/>
                    </a>
                </div>
            </VueSlickCarousel>
        </div>
        <div class="form-div">
            <form
                id="leads"
                action="https://dev-services.happimobiles.com/laptop-leads"
                method="post"
                class="col-md-12"
                data-form-title="Diwali Dhamaka">
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
        <div class="image-div">
            C
        </div>
    </div>
</template>

<script>
import VueImageSlider from 'vue-image-slider';
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import CarouselArrows from '~/components/elements/commons/CarouselArrows';


export default {
    name: "new",
    components: { VueImageSlider, VueSlickCarousel, CarouselArrows },
    data(){
        return {
            isMobile: false,
            imageArray: [
                'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/d81632d6-7672-4f53-b07e-640be1d089f7.png',
                'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/dd9210cd-a4ff-44da-a771-3f7d516c3394.png'
            ],
            bannersDesk: [
              {pictures: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/d81632d6-7672-4f53-b07e-640be1d089f7.png'},
              {pictures: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/dd9210cd-a4ff-44da-a771-3f7d516c3394.png'},
            ],
            bannersMobile: [
              {pictures: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/40c17683-5cf4-4e30-9895-cc12b840bda3.png'},
              {pictures: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/f5766ab9-bb95-49a5-91ef-a7d7a529fef9.png'},
            ],
            slickOptions: {
                dots: true,
                arrows: true,
                dotsClass: "slick-dots custom-dot-class",
                edgeFriction: 0.35,
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 300
                }
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
        // this.$nextTick(() => {
        //     document.getElementById('utm_campaign').value = this.$route.query.utm_campaign;
        //     document.getElementById('utm_medium').value = this.$route.query.utm_medium;
        //     document.getElementById('utm_source').value = this.$route.query.utm_source;
        // });
    },
    // methods: {
    //   showNext() {
    //     this.$refs.carousel.next()
    //   },
    // },
}
</script>

<style lang="scss">
.parent-div{
    display: flex;
    justify-content: center;
}
.swiper-div{
    border: 2px solid red;
    img{
        width: 100%;
    }
}
.form-div{
    margin-top: 2%;
    border: 2px solid rgb(40, 196, 45);
}
.slick-prev{
    color: red !important;
    width: 80px !important;
    height: 80px !important;
    z-index: 999 !important;
}
.slick-next{
    color: red !important;
    width: 80px !important;
    height: 80px !important;
    z-index: 999 !important;
}





</style>