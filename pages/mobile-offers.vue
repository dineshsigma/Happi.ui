<template>
    <section class="body">
        <nav class="breadcrumb"></nav>

        <section class="header1 cid-sN6GjcAMxA" id="header01-3m">
            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col-md-10 align-center"></div>
                    <!-- <div class='pt-4 align-center'><img
                        src='https://d34e6224thkkna.cloudfront.net/retool-upload/52d0b405-99df-4ce3-a81c-f562579e7f34.png'
                        alt='' style='width: 100%;' class=''></div> -->
                    <div class="pt-4 align-center">
                        <img
                            :src="homepageData.mobileurl"
                            alt="Happi Mobile"
                            style="width: 100%"
                            class=""
                        />
                    </div>
                </div>
            </div>
        </section>
        <section class="form cid-sN6DERkjXB" id="formbuilder-3l">
            <div class="container">
                <div class="row">
                    <div
                        class="col-lg-8 mx-auto mbr-form"
                        data-form-type="formoid"
                    >
                        <form action='https://dev-services.happimobiles.com/laptop-leads'                            method="post"
                            class="mbr-form form-with-styler"
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
                            <div class="dragArea form-row">
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <h4
                                        class="mbr-fonts-style pt-7 display-5 get_offr"
                                    >
                                        Get Offer Details, Enquire Now!
                                    </h4>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <hr />
                                </div>
                                <input
                                    type="hidden"
                                    name="utm_source"
                                    id="utm_source"
                                    value=""
                                />
                                <input
                                    type="hidden"
                                    name="utm_medium"
                                    id="utm_medium"
                                    value=""
                                />
                                <input
                                    type="hidden"
                                    name="utm_campaign"
                                    id="utm_campaign"
                                    value=""
                                />
                                <input
                                    type="hidden"
                                    name="type"
                                    value="mobile"
                                />

                                <div
                                    data-for="name"
                                    class="col-lg-12 col-md-12 col-sm-12 form-group"
                                >
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                        data-form-field="name"
                                        class="form-control display-7"
                                        required
                                        minlength="3"
                                        value=""
                                    />
                                </div>
                                <div
                                    data-for="phone"
                                    class="col-lg-12 col-md-12 col-sm-12 form-group"
                                >
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        placeholder="Phone"
                                        pattern="[0-9]{10}"
                                        maxlength="10"
                                        minlength="10"
                                        required
                                        data-form-field="phone"
                                        class="form-control display-7"
                                        value=""
                                    />
                                </div>
                                <div
                                    data-for="Brand"
                                    class="col-lg-12 col-md-12 col-sm-12 form-group"
                                >
                                    <div class="form-control-label"></div>
                                    <div class="form-check form-check-inline">
                                        <input
                                            type="radio"
                                            name="Brand"
                                            data-form-field="Brand"
                                            class="form-check-input display-7"
                                            value="oneplus"
                                            checked="checked"
                                            id="Brand-formbuilder-3l"
                                        /><label
                                            class="form-check-label display-7"
                                            >OnePlus
                                        </label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input
                                            type="radio"
                                            name="Brand"
                                            data-form-field="Brand"
                                            class="form-check-input display-7"
                                            value="Realme"
                                            id="Brand-formbuilder-3l"
                                        /><label
                                            class="form-check-label display-7"
                                            >Realme</label
                                        >
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input
                                            type="radio"
                                            name="Brand"
                                            data-form-field="Brand"
                                            class="form-check-input display-7"
                                            value="Vivo"
                                            id="Brand-formbuilder-3l"
                                        /><label
                                            class="form-check-label display-7"
                                            >Vivo</label
                                        >
                                    </div>
                                    <div
                                        class="form-check form-check-inline d2"
                                    >
                                        <input
                                            type="radio"
                                            name="Brand"
                                            data-form-field="Brand"
                                            class="form-check-input display-7"
                                            value="Samsung"
                                            id="Brand-formbuilder-3l"
                                        /><label
                                            class="form-check-label display-7"
                                            >Samsung</label
                                        >
                                    </div>

                                    <div
                                        class="form-check form-check-inline s_oppo"
                                    >
                                        <input
                                            type="radio"
                                            name="Brand"
                                            data-form-field="Brand"
                                            class="form-check-input display-7"
                                            value="Oppo"
                                            id="Brand-formbuilder-3l"
                                        /><label
                                            class="form-check-label display-7"
                                            >Oppo</label
                                        >
                                    </div>
                                </div>
                                <div class="form-group p-0 captchcls">
                                    <recaptcha id="captcha" />&nbsp;&nbsp;
                                </div>
                                <br />
                                <div></div>
                                <button
                                    class="btn btn-primary display-7 btn1"
                                    style="margin-left: 0; margin-right: 0"
                                    @click="formValidations"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <div class="img">
            <section class="cid-sN7XRWlLU7" id="content02-3y">
                <div class="container">
                    <!-- <div class='container align-center'> -->

                    <div
                        class="row"
                        v-for="block in homepageData.mobileimages"
                        :key="block"
                    >
                        <div class="col-12">
                            <h4 class="heading">
                                {{ block.title }}
                            </h4>
                        </div>
                        <div
                            class="col-12 col-md-6 col-lg-4 pt-5 align-center new_img"
                            v-for="item in block.images"
                            :key="item"
                        >
                            <a href="#formbuilder-3l" class=""
                                ><img :src="item" alt="Happi Mobile"
                            /></a>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <center>
                                <div>
                                    <div class="mbr-section-btn pt-10">
                                        <a
                                            class="btn btn-md btn-black display-4 ofrbtn"
                                            href="#formbuilder-3l"
                                            >Get Offer&nbsp;</a
                                        >
                                    </div>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
export default {
    name: 'laptop-offers.vue',
    data() {
        return {
            homepageData: {},
        };
    },

    async created() {
        this.homepageData = await this.$http.$get('/api/homepage');
        this.$nextTick(() => {
            console.log(
                'this.$refs["utm_campaign"]',
                document.getElementById('utm_campaign').value
            );
            document.getElementById('utm_campaign').value =
                this.$route.query.utm_campaign;
            document.getElementById('utm_medium').value =
                this.$route.query.utm_medium;
            document.getElementById('utm_source').value =
                this.$route.query.utm_source;
        });
    },
    async asyncData({ $http, $seo }) {
        var homepageData = await $http.$get('https://dev-services.happimobiles.com/api/homepage');
            $seo({
            title: 'Best Mobile Phone offers online at the best price - Happi mobiles',
            templateTitle: '%title% - Happi Mobiles',
            description: 'Find the Best Mobile Phone offers Online. Explore the best mobile phone offers online on top mobile brands like Samsung, Oppo, Vivo, Apple, and much more available here.',
            keywords: 'Mobile phone offers,Mobile phone offers online,Best mobile Phone offers Online,Best mobile Phone offers  .',
            openGraph: {
                site: 'Happi Mobiles',
                type: 'website',
            title: 'Best Mobile Phone offers online at the best price - Happi mobiles',
                 description: 'Find the Best Mobile Phone offers Online. Explore the best mobile phone offers online on top mobile brands like Samsung, Oppo, Vivo, Apple, and much more available here.'
           },
            twitter: {
                site: 'Happi Mobiles',
                type: 'website',
            title: 'Best Mobile Phone offers online at the best price - Happi mobiles',
                 description: 'Find the Best Mobile Phone offers Online. Explore the best mobile phone offers online on top mobile brands like Samsung, Oppo, Vivo, Apple, and much more available here.'
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
            } else {
                return false;
            }
        },
    },
};
</script>

<style scoped>
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
    position: inherit;
    top: 56px;
    font-size: 2vw;
    left: 300px;
    margin-bottom: 90px;
    background-color: #fb9013;
    border: 0;
    color: white;
    font-family: 'Open Sans', sans-serif;
    transform: translateY(-50%);
}
.img {
    background-color: #fb9013;
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
@media only screen and (min-width: 600px) {
    .btn1 {
        margin-top: 90px;
        position: inherit;
        top: 56px;
        font-size: 16px !important;
        left: 300px;
        margin-bottom: 90px;
        background-color: #fb9013;
        border: 0;
        color: white;
        font-family: 'Open Sans', sans-serif;
        transform: translateY(-50%);
    }
}

@media only screen and (max-width: 600px) {
    .centre {
        left: 28%;
    }
    .display-4 {
        font-size: 5rem !important ;
        line-height: 4rem !important;
    }
    .btn1 {
        position: inherit;
        margin-left: 35% !important;

        margin-bottom: 90px;
        background-color: #fb9013;
        border: 0;
        color: white;
        font-family: 'Open Sans', sans-serif;
        transform: translateY(-50%);
        left: 28%;
        font-size: 5vw !important;
        left: 129px;
        position: inherit;
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
    .captchcls {
        margin-left: 0% !important;
        margin-top: 2% !important;
    }
}

.captchcls {
    display: inline-block;
    text-align: center;

    margin-top: -3%;
}
</style>
