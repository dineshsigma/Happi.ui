<template lang="html">
    <footer class="bg-white">
        <div class="ps-container bg-white">
        <FooterWidgets />
        <span class="footerviecssh">About Us SSSSS:</span>
        <p class="footerviecss">
          Happi Mobiles an online mobile store, is a one-stop solution for all your Mobiles,
          Tablets, Mobile Accessories, & Appliances requirements, having its presence in both Telugu
          states i.e., AP & Telangana. To say proudly, we are close to our 60+ stores in a span of 24
          months with 10,00,000+ Happi customers. The belief of the customer and satisfaction of the
          customer are the two factors which drive us to deliver impeccable services across our stores
          located in Ananthapur, Kurnool, Mahbubnagar, Warangal, Sangareddy, Bhimavaram, Rajahmundry,
          Karimnagar, Nalgonda, Guntur, Adilabad, Nizamabad, Siddipet, Hyderabad, Visakhapatnam,
          Srikakulam, Ongole, Vijayawada, and the list goes on. Since now is the trend of online
          shopping, Happi mobiles bought you the shopping platform where you can buy the latest mobile
          phones online at your convenience. Be it Samsung mobiles, Apple mobiles, android phones or
          dual sim phones, or whichever brand it is, "you name it and have it".</p><br>
        <span class="footerviecssh">*Conditions Apply:</span>
        <p class="footerviecss">
           Our Happi deals, Happi Prices, Happi EMI, Happi Exchange may change at
          any time without prior notice. Availability of color & stock will be confirmed by our
          executive while processing your shipment (or) Purchase.
        </p>
        <FooterCopyright />
      </div>
      <div class="ps-container bg-grey" >
        <FooterLinks />
        <FooterCateInfo/>
      </div>
     
      <a v-on:click.prevent="NavToWhatsapp($event)" rel="noreferrer" title='whatapp'  target="_blank" class="float">
        <i class="fa fa-whatsapp my-float"></i>
      </a>
    </footer>
</template>
<script>
import FooterWidgets from '~/components/shared/footers/modules/FooterWidgets';
import FooterCopyright from '~/components/shared/footers/modules/FooterCopyright';
import FooterLinks from '~/components/shared/footers/modules/FooterLinks';
import FooterCateInfo from '~/components/shared/footers/modules/FooterCateInfo';


export default {
    name: 'FooterDefault',
    components: { FooterWidgets, FooterCopyright, FooterLinks,FooterCateInfo },
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

<style lang="scss" scoped>
 .footerviecss
    {
      color: #000!important;
      display: inline!important;
      font-weight: 200!important;
      padding-left: 5px!important;
      line-height: 18px!important;
      font-size: 14px!important;
    }
     .footerviecssh
    {
      color: #000!important;
      display: inline!important;
      font-weight: bold!important;
     
      line-height: 18px!important;
      font-size: 14px!important;
    }
.float{
    position:fixed;
    width:60px;
    height:60px;
    bottom:60px;
    right:20px;
    background-image:linear-gradient(90deg, #09d261, #09d261);
    color:#FFF;
    border-radius:50px;
    text-align:center;
    box-shadow: 2px 2px 3px #999;
    z-index:99;
}

.my-float{
    margin-top:22px;
    font-size:22px;
    color:#FFF;
}
.bg-grey {
  background-color: #e7e7e7;
}
.float:hover{
    background-image:linear-gradient(90deg, #25D366, #09d261);
}

</style>
