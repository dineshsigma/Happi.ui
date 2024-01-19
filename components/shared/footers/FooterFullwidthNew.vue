<template lang="html">
    <footer class="ps-footer bg-white">
      <div class="ps-container bg-white">
        <FooterWidgetsNew />
        <br>
        <FooterLogosNew />
        <br>
        <hr>
        <FooterCopyrightNew />
        <br>        
        <hr>
        <span class="footerviecssh">About Us:</span>
        <p class="footerviecss">
Happi Mobiles an online mobile store, is a one-stop solution for all your Mobiles, Tablets, Mobile Accessories, & Appliances requirements, having its presence in both Telugu states i.e., AP & Telangana. To say proudly, we are close to our 60+ stores in a span of 24 months with 10,00,000+ Happi customers. The belief of the customer and satisfaction of the customer are the two factors which drive us to deliver impeccable services across our stores located in Ananthapur, Kurnool, Mahbubnagar, Warangal, Sangareddy, Bhimavaram, Rajahmundry, Karimnagar, Nalgonda, Guntur, Adilabad, Nizamabad, Siddipet, Hyderabad, Visakhapatnam, Srikakulam, Ongole, Vijayawada, and the list goes on. Since now is the trend of online shopping, Happi mobiles bought you the shopping platform where you can buy the latest mobile phones online at your convenience. Be it Samsung mobiles, Apple mobiles, android phones or dual sim phones, or whichever brand it is, "you name it and have it".
</p><br>
        <span class="footerviecssh">*Conditions Apply:</span>
        <p class="footerviecss">
Our Happi deals, Happi Prices, Happi EMI, Happi Exchange may change at any time without prior notice. Availability of color & stock will be confirmed by our executive while processing your shipment (or) Purchase. 
        </p>
        <br>
        <hr>
        <div class="row">
            
            <img class="happi-logo-bottom mt-4"
            src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/045db0e5-67ee-40e2-a7f4-fddbce95468e.png"
            alt="happimobiles"/>
            <p class="copyright">
                Copyright © 2021 Happi Mobiles Private Limited . All Rights Reserved.v3.6
            </p>
        </div>
    </div>
        <div class="ps-container bg-grey" >
        </div>
        <a  v-on:click.prevent="NavToWhatsapp($event)" rel="noreferrer" title='whatapp'  target="_blank" class="float">
            <i class="fa fa-whatsapp my-float"></i>
        </a>
        <br>

    </footer>

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
    .copyright{
        width: 1237.57px;
        height: 16px;
        position: absolute;
        margin-top:2.675%;

        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        text-align: right;

        color: #000000;
    }
    .happi-logo-bottom{
        width: 152.43px;
        height: 44px;
        
    }
    .footerviecss
    {
       /* color: #000!important;
      display: inline!important;
      font-weight: 200!important;
      padding-left: 5px!important;
      line-height: 18px!important;
      font-size: 14px!important; */
        font-family: 'Open Sans' !important;
        font-style: normal !important;
        font-weight: 500 !important;
        font-size: 15px !important;
        line-height: 23px !important;
        /* or 153% */


        color: rgba(0, 0, 0, 0.75) !important;
    }
     .footerviecssh
    {
      /* color: #000!important;
      display: inline!important;
      font-weight: bold!important;

      line-height: 18px!important;
      font-size: 14px!important; */
      font-family: 'Open Sans' !important;
        font-style: normal !important;
        font-weight: 700 !important;
        font-size: 15px !important;
        line-height: 23px !important;
        /* or 153% */


        color: rgba(0, 0, 0, 0.75) !important;
    }

</style>
<script>
import FooterWidgets from '~/components/shared/footers/modules/FooterWidgets';
import FooterWidgetsNew from '~/components/shared/footers/modules/FooterWidgetsNew';
import FooterCopyright from '~/components/shared/footers/modules/FooterCopyright';
import FooterCopyrightNew from '~/components/shared/footers/modules/FooterCopyrightNew';
import FooterLinks from '~/components/shared/footers/modules/FooterLinks';
import FooterCateInfo from '~/components/shared/footers/modules/FooterCateInfo';
import FooterLogosNew from '~/components/shared/footers/modules/FooterLogosNew';

export default {
    components: {
        FooterWidgets,
        FooterWidgetsNew,
        FooterCopyright,
        FooterLinks,
        FooterCateInfo,
        FooterCopyrightNew,
        FooterLogosNew
    },
    methods: {
        isMobile() {
            console.log('isMobile process.client', process.client);
            if (process.client && screen !== undefined) {
                if (screen.width <= 600) {
                    return true;
                } else {
                    return false;
                }
            }
            //return true;
        },
        NavToWhatsapp(e){
            if(this.isMobile()){
                window.open("whatsapp://send?text=hii&phone=919121863666", "_blank")
            }else{
                window.open("https://wa.me/919121863666", "_blank")
            }
        }
    },
};
</script>

<style>
.float{
    position:fixed;
    width:60px;
    height:60px;
    bottom:10px;
    right:20px;
    background-image:linear-gradient(90deg, #09d261, #09d261);
    color:#FFF;
    border-radius:50px;
    text-align:center;
    box-shadow: 2px 2px 3px #999;
    z-index:999;
}
@media (max-width: 767px) {
  .float{

    bottom:60px;
  }
}
.my-float{
    margin-top:18px;
    font-size:22px;
    color:#FFF;
}
.float:hover{
    background-image:linear-gradient(90deg, #075E54, #075E54);
}
.bg-grey {
  background-color: #e7e7e7;
}
.fixedsocial {
    z-index: 999;
    position: fixed;
    padding: 0;
    margin: 0;
    list-style-type: none;
}
.fixedsocial.whatsapp_ripple {
    bottom: 30% !important;
}
.fixedsocial.bottomLeft {
    right: 10px;
}
a.whatsapp, a.whatsapp:hover {
    color: #fff;
}
.greenBg {
    background-color: #09d261 !important;
    background-image: linear-gradient(
        90deg, #09d261, #09d261);
}
.fixedsocial .share i.fa {
    height: 50px;
    text-align: center;
    border-radius: 50%;
}

.intro-banner-vdo-play-btn .ripple {
    position: absolute;
    width: 80px;
    height: 80px;
    z-index: -1;
    left: 50%;
    top: 50%;
    transform: translate(-50% -50%);
    opacity: 0;
    margin: -40px 0 0 -40px;
    border-radius: 100px;
    -webkit-animation: ripple 1.8s infinite;
    animation: ripple 1.8s infinite;
}
.intro-banner-vdo-play-btn .ripple:nth-child(2) {
    animation-delay: .3s;
    -webkit-animation-delay: .3s;
}
.greenBg {
    background-color: #09d261 !important;
    background-image: linear-gradient(
        90deg, #09d261, #09d261);
}
</style>
