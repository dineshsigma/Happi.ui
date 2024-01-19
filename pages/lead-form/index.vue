<template>
  <section class='body'>
    <nav class='breadcrumb'></nav>
    <section class='header1 cid-sN6GjcAMxA' id='header01-3m'>
      <div class='container'>
        <div class='row justify-content-md-center'>
          <div class='col-md-10 align-center'></div>

        </div>
      </div>
    </section>
    <section class='form cid-sN6DERkjXB' id='formbuilder-3l'>
      <div class='container'>
        <div class='row'>
          <div class='col-lg-8 mx-auto mbr-form' data-form-type='formoid'>
            <form id="leads" action='https://dev-services.happimobiles.com/laptop-leads' method='post'
                  class='mbr-form form-with-styler'
                  data-form-title='Diwali Dhamaka'>
              <div class='dragArea form-row'>
                <div class='col-lg-12 col-md-12 col-sm-12 text-center'>
                  <p class='third-txt'>
                    All fields marked (*) are mandatory
                  </p>
                </div>

                <input type='hidden' name='utm_source' id='utm_source' value=''>
                <input type='hidden' name='utm_medium' id='utm_medium' value=''>
                <input type='hidden' name='utm_campaign' id='utm_campaign' value=''>
                <input type='hidden' name='type' value='mobile'>
                <input type='hidden' name='token' id='token' value=''>
                <div class='Prebookdiv'>
                  <h6 style='margin: 10px'>Enter Your Name</h6>
                  <div data-for='name' class='col-lg-12 col-md-12 col-sm-12 form-group p-0 ttbox'
                       style='margin-bottom:0 !important'>
                    <input type='text'
                           name='name'
                           id='name'
                           placeholder='Name*'
                           data-form-field='name'
                           class='form-control display-7'
                           required
                           minlength='3'
                           value=''>
                  </div>
                  <h6 style='margin: 10px'>Enter Your Phone Number</h6>
                  <div data-for='phone' class='col-lg-12 col-md-12 col-sm-12 form-group p-0 ttbox'
                       style='margin-bottom:0 !important'><input type='tel'
                                                                 name='phone'
                                                                 id='phone'
                                                                 placeholder='Phone*'
                                                                 pattern='[0-9]{10}'
                                                                 maxlength='10'
                                                                 minlength='10'
                                                                 required
                                                                 data-form-field='phone'
                                                                 class='form-control display-7'
                                                                 value=''>
                  </div>
                  <h6 style='margin: 10px'>Enter Email</h6>
                  <div data-for='email' class='col-lg-12 col-md-12 col-sm-12 form-group p-0 ttbox'
                       style='margin-bottom:0 !important'><input type='email'
                                                                 name='email'
                                                                 id='email'
                                                                 placeholder='Email (optional)'
                                                                 data-form-field='email'
                                                                 class='form-control display-7'
                                                                 value=''>
                  </div>
                  <div data-for='model' class='col-lg-12 col-md-12 col-sm-12 form-group p-0'>
                    <h6 style='margin: 10px'>&nbsp;&nbsp;&nbsp;</h6>

                  </div>

                  <div class='form-group p-0 captchcls'>
                    <recaptcha id='captcha'/>&nbsp;&nbsp;
                  </div>
                  <div>
                    <button class='btn btncss' @click='formValidations'><b>Submit</b></button>
                  </div>
                </div>
                <style>

                  .captchcls {
                    display: inline-block;
                    text-align: center;
                    margin-left: 18% !important;
                    margin-top: -6%;
                  }

                  .Prebookdiv {
                    background-color: #fb9013;
                    width: 64%;
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
                </style>
                <div class='col-lg-12 col-md-12 col-sm-12'>
                  <hr>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>


  </section>
</template>

<script>
export default {


  name: 'laptop-offers.vue',
  data() {
    return {
      homepageData: {}
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
    async formValidations() {
      let token = null;
      try {
        token = await this.$recaptcha.getResponse();
        document.getElementById('token').value = token;
        await this.$recaptcha.reset();
      } catch (error) {
        console.log('Login error:', error);
      }
      console.log("token", token);
      if (token !== null) {
        document.getElementById('leads').submit();
      } else {
        return false;
      }

    }
  }
};
</script>

<style scoped>
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


</style>

