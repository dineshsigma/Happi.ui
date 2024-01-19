<template lang="html">
    <div class="ps-footer__copyright footer-class">
<div class="row">

    <div class="col-4">         
        <div class="row">
            <div class="col-1 col-offset-1 icon-support">
                <a href="tel:9100412345"><i class="fa fa-phone-square" aria-hidden="true"></i></a>      
                



                <!-- <i data-v-627f56d0="" class="icon-rocket"></i>    -->
                <!-- <img class="support-icon" src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/c490ae56-cfec-4b36-bd2b-ec015c60c8d2.png"   alt="happi safe payment"  /> &nbsp; -->
 </div>
  <div class="col-10">         
   
    <div class="payment desciption">
        <a href="tel:9100412345">
            <h4 class="payment-new">NEED HELP? CALL US: 9100412345</h4>
            <p class="timings-new">Avialable timing form Monday - Sunday </p>
            <p class="timings-new">(10 AM - 7 PM) IST </p>
        </a>
        </div>  </div>          
        </div>       
     
    </div>

    <div class="col-5">    <div class="payment" >
            	<h6 style="text-align:center" class="payemt-text footer-heading payment-new" >PAYMENT OPTION </h6>
                <img class=" footer-payment-card-img" src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/dfbe2f5f-3151-4362-a87d-be59f0981179.webp"   alt="happi safe payment"  />
        </div>
        </div>
        <div class="col-3">    
        <div class="emi-partners-img " style="align-items:center; text-slign:center">
					<h6 style="text-align:center" class="footer-heading payment-new" >OUR EMI OPTIONS</h6>
                    <img class="footer-payment-card-img" src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/3cbdd653-e830-4768-b52a-bda047a2a6fa.png"    alt="happi safe payment"  /> 

			 <!-- <img class="footer-image-emi" src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/e4bcd882-3800-4f10-9a22-62b4f71f3dfa.webp"   alt="happi safe payment"  /> &nbsp;
                     <img class="footer-image-emi" src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/59532ca9-e676-46d8-bded-0be173e0627b.webp "    alt="happi safe payment"  /> 
                                          <img class="footer-image-emi" src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/009cf25a-1dd7-4cb4-a8b5-882f3e1267da.webp"    alt="happi safe payment"  />  -->


					</div></div>

</div>

<!-- 
        <div class="payment">

            <img class="mike-icon" src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/c490ae56-cfec-4b36-bd2b-ec015c60c8d2.png"   alt="happi safe payment"  /> &nbsp;
        </div>
        <div class="payment desciption">
            <h4 class="payment-new">NEED HELP? CALL US: 04035616279</h4>
            <p class="timings-new">Avialable timing form Monday - Sunday </p>
            <p class="timings-new">(10 AM - 7 PM) IST </p>
        </div>
        <div class="payment" >
            	<h6 style="text-align:center" class="payemt-text footer-heading payment-new" >PAYMENT OPTION </h6>
                <img class=" footer-payment-card-img" src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/dfbe2f5f-3151-4362-a87d-be59f0981179.webp"   alt="happi safe payment"  />
        </div>
        <div class="emi-partners-img " style="align-items:center; text-slign:center">
					<h6 style="text-align:center" class="footer-heading payment-new" >OUR EMI OPTIONS</h6>
			 <img class="footer-image-emi" src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/e4bcd882-3800-4f10-9a22-62b4f71f3dfa.webp"   alt="happi safe payment"  /> &nbsp;
                     <img class="footer-image-emi" src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/59532ca9-e676-46d8-bded-0be173e0627b.webp "    alt="happi safe payment"  /> 
                                          <img class="footer-image-emi" src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/009cf25a-1dd7-4cb4-a8b5-882f3e1267da.webp"    alt="happi safe payment"  /> 


					</div> -->
        
        </div>
</template>

<script>
export default {
    name: 'FooterCopyrightNew'
};
</script>

<style scoped>
.icon-support{
    width: 100%;
    display: flex;
    margin: auto;
    padding: 0;
    font-size: 60px;
    color:#FB9013;
}
.desciption{
    margin-left:2%;
}
.support-icon{
    /* height: 39px;
    width: 37px; */
    /* position: absolute; */
    /* left: 0%;
    right: 0%;
    top: 2.27%;
    bottom: 2.27%
    padding: 3px; */ 

    /* background: #ffffff;
    margin-top:1%;
    padding-right: 29%;
    padding:0px */
}

.timings-new{
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 14px;
    line-height: 23px;
    /* or 128% */
    color: rgba(0, 0, 0, 0.75);
}
.payment-new{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    /* or 128% */

    text-transform: uppercase;

    color: #000000;
}
.footer-image-emi{
      height: 29%;
   
    width: 31%;

}
.footer-image {
    /*background-color:#e7e7e7;*/
        height: 54%;
    width: auto;

}
.footer-payment-card-img{
width: 600px;
    height: 30%;
}
.copyright{
    margin-top: 2px;
    text-align: left !important;
    font-size: 9px;
    color: #000;
    font-weight: 400;
    float: right;
}
.payment-text{
    font-size: 13px !important;
}
 @media (max-width: 965px) {
.footer-heading{
    text-align:left !important ;
    padding:3px;
    margin-bottom: 20px;
}
.payment-text{
   padding:30px  !important;
}
.payment{
       margin-top: 20px;
}
 }
</style>

