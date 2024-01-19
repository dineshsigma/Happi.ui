<template>
  
        <section>
            <div>
                
                <iframe src='https://iipl.retool.com/embedded/public/99b52cb9-3143-4898-93fb-8d3e801bd487'
                    style='width: 100%; height: 60vh;'></iframe>
            </div>
        </section>
</template>

<script>
export default {
    name: 'student-offers.vue',
    data() {
        return {
            image_url: 'https://s3.ap-south-1.amazonaws.com/happimobiles/homepage/Happi%20Mobile%20-%20Smart%20Watch%20Landing%20Page%20banner%20%282%29.png',
            homepageData: {},
            block: 'NOISE COLOR FIT BEAT SMART WATCH',
            NOISEDATA: false,
            BOATDATA: false,
            FIREBOLTTDATA: false,
            DIZODATA: false,
            sendOtpLoading: false,
            submit_display: false,
            loading: false,
            phoneNo: '',
            name: '',
            email: '',
            otp: '', 
            OtpSentMessage: false,
            OtpMessage: ''
      

        };
    },

   
    

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

