<template>
    <div class="delivery-container-mobile">
        <div class="row">
            <div class="delivery-box-mobile col-6">
                <div>
                    <img src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/47e3bd6f-3ff1-447b-8a71-930bf7962d09.png"
                    class="logo-social-mobile"/>
                </div>
                <div>
                    <p class="free-head-mobile">FREE DELIVERY</p>
                    <p class="free-disc-mobile">For all orders above ₹5000</p>
                </div>
            </div>
            <div class="delivery-box-mobile col-6">
                <div>
                    <img src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/47e3bd6f-3ff1-447b-8a71-930bf7962d09.png"
                    class="logo-social-mobile"/>
                </div>
                <div>
                    <p class="free-head-mobile">SECURE PAYMENT</p>
                    <p class="free-disc-mobile">100% secure payment</p>
                </div>
            </div>
        </div>
        <div class="delivery-box">
            <img src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/47e3bd6f-3ff1-447b-8a71-930bf7962d09.png"
            class="logo-social"/>
            <div>
                <p class="free-head">24/7 SUPPORT</p>
                <p class="free-disc">Dedicated support</p>
                </div>
        </div>
        <div class="delivery-box">
            <img src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/346fd866-82c8-4d63-926b-45aee690e20b.png"
            class="logo-social"/>
            <div>
                <p class="free-head">EXCLUSIVE OFFERS</p>
                <p class="free-disc">On Top Brands 0</p>
                </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FreeDeliveryMobile'

}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
.delivery-box-mobile{
    // display: flex;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:2%;
}
.logo-social-mobile{
    width: 22px;
    height: 19px;
    margin-top: 5%;
    // margin-right:4px;
}
.delivery-container-mobile{
    // display: flex;
    // flex-direction: row;
    // justify-content: space-around;
    align-items: center;
    padding:2%;
    // width: 1420px;
    height: max-content;

    background: #FB9013;
}
.free-disc-mobile{
    // height: 44px;

    font-family: 'Open Sans' !important;
    font-style: normal !important;
    font-weight: 300 !important;
    font-size: 14px !important;
    // line-height: 10px !important;
    // text-transform: uppercase;

    color: #FFFFFF;
}
.free-head-mobile{
    // width: 233px;
    // height: 44px;

    font-family: 'Open Sans' !important;
    font-style: normal !important;
    font-weight: 600 !important;
    font-size: 12px !important;
    // line-height: 10px !important;
    text-transform: uppercase;

    color: #FFFFFF;
}
</style>


<!-- <style lang="scss"> -->
<!-- @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
.free-disc{
    // height: 44px;

    font-family: 'Open Sans' !important;
    font-style: normal !important;
    font-weight: 300 !important;
    font-size: 18px !important;
    line-height: 10px !important;
    // text-transform: uppercase;

    color: #FFFFFF;
}
.free-head{
    // width: 233px;
    // height: 44px;

    font-family: 'Open Sans' !important;
    font-style: normal !important;
    font-weight: 600 !important;
    font-size: 18px !important;
    line-height: 10px !important;
    text-transform: uppercase;

    color: #FFFFFF;
}
.freedelivery{
    display: grid;
    // flex-direction: column;
    justify-content: stretch;

    align-items: center;
    padding: 10px;

    // width: 100%;
    height: 114px;

    background: #FB9013;
} -->

<!-- </style> -->
