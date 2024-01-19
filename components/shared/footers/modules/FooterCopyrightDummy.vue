<template lang="html">
    <div class="ps-footer__copyright footer-class">
        <p class="copyright">
             <a href="https://play.google.com/store/apps/details?id=com.happimobiles" target="_blank" ><img class="footer-image"src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/87ae1e34-fd70-4cb8-be4e-a33fa575dc70.webp"    alt="happi safe payment"  /> </a> &nbsp;
                   <a href="https://apps.apple.com/in/app/happi-mobiles/id1520143042" target="_blank" >  <img class="footer-image" src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/2c4cf3fc-b8b8-4e3d-b12a-1b6211d75c86.webp"   alt="happi safe payment"  /> 
</a>
             <br>
             Copyright © 2021 Happi Mobiles Private Limited . All Rights Reserved.v3.7
        </p>
        <div class="emi-partners-img " style="align-items:center; text-slign:center">
					<h6 style="text-align:center" class="footer-heading" >Our EMI Partners</h6>
			 <img class="footer-image-emi" src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/e4bcd882-3800-4f10-9a22-62b4f71f3dfa.webp"   alt="happi safe payment"  /> &nbsp;
                     <img class="footer-image-emi" src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/59532ca9-e676-46d8-bded-0be173e0627b.webp "    alt="happi safe payment"  /> 
                                          <img class="footer-image-emi" src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/009cf25a-1dd7-4cb4-a8b5-882f3e1267da.webp"    alt="happi safe payment"  /> 


					</div>
              
         <div class="payment" >
            	<h6 style="text-align:center" class="payemt-text footer-heading" >Payment Option </h6>
                <img class=" footer-payment-card-img" src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/dfbe2f5f-3151-4362-a87d-be59f0981179.webp"   alt="happi safe payment"  />
                <!-- <a href="#">
                                             <img src="~/static/img/payment-method/2.jpg" alt="" />
                                       </a>
                         <a href="#">
                                               <img src="~/static/img/payment-method/3.jpg" alt="" />
                                                          </a>
                            <a href="#">
                    <img src="~/static/img/payment-method/4.jpg" alt="" />
             </a>
                 <a href="#">
                <img src="~/static/img/payment-method/5.jpg" alt="" />
                </a> -->
        </div>
        
        </div>
</template>

<script>
export default {
    name: 'FooterCopyright'
};
</script>

<style scoped>
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

