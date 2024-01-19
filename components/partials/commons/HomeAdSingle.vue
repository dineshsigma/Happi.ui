<template lang="html">
    <div>
        <div class="mob-hide">
            <div class="home-ad-desktop-full lightgray-bg">    
                <div class="add-container">
                    <div class="row container">
                        <div class="col-12 col-md-12 col-lg-12">
                            <a href="/mobiles/all/?q=&page=1&brand=OnePlus&price=25to250000&sort=Price%20-%20Low%20to%20High&stock=In%20Stock"
                            target="_blank">
                                <img class="desktop-image-ad"
                                src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/52849c0b-f5ba-4d81-8c24-87982ecb3dd1.png"
                                alt="happimobiles"/>
                                <!-- <img class="desktop-image-ad"
                                src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/82b5495d-62ee-498c-9789-b73962044cc5.png"
                                alt="happimobiles"/>     -->
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeAdSingle'
};
</script>

<style lang="scss">
.desktop-image-ad{
  
        padding:1% !important;
   
}
.ad-desktop-strip{
    display: flex;
    justify-content: center;
    // width: 100% !important;
    padding: 1% !important;
}
.home-ad-desktop-full{
    // margin-top: 1%;
    // background: #ECEDF2 !important;

    width:100% !important;
    display: flex !important;
    // justify-content: space-between !important;
    text-align: center !important;
    .add-container{
            margin-top: 1%;
            width:100% !important;
            padding: auto;
            margin:0 auto;
            display: flex;
            justify-content: center;
            // border: 2px dashed #f90;
            // background: #ECEDF2 !important;
            img{
                display: flex;
                height: 100%;
                width: -webkit-fill-available;
            }
        }
    }
.ad-container {
    // background: #f1f1f1 !important;
}
.home-ad{
    // background-color: #ecedf2 !important;
}
@media only screen and (min-width: 760px) {
.desktop-hide{
    display: none !important;
}}
</style>
