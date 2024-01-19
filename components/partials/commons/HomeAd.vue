<template lang="html">
    <div>
        <div class="desktop-hide">
            <div class="ps-site-features pb-3 home-ad pt-3"> 
                <div class="col-12 ">
                    <a v-on:click="handleClickAd()"
                        >
                        <img 
                        src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/52849c0b-f5ba-4d81-8c24-87982ecb3dd1.png"
                        alt="happimobiles"/>
                    </a>
                </div>
            </div>
        </div>
        <div class="mob-hide">
           
                <div class="home-ad-desktop">
                    
                    <div class="add-container m-3">
                <div class="row container">
                    <div class="col-6 col-sm-6 col-md-6 col-lg-6">
                     
                            <img class="desktop-image-ad"
                            src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/5bb02730-2b5a-43ff-8ee9-3656a4d5325e.png"
                            alt="happimobiles"/>
                       
                    </div>
                    <div class="col-6 col-sm-6 col-md-6 col-lg-6">
                    
                            <img class="desktop-image-ad"
                            src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/5bb02730-2b5a-43ff-8ee9-3656a4d5325e.png"
                            alt="happimobiles"/>
                        
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeAd',
    methods: {
        handleClickAd(){
            this.$router.push('/mobiles/all/?q=&page=1&brand=OnePlus&price=25to250000&sort=Price%20-%20Low%20to%20High&stock=In%20Stock');
        }
    }
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
.home-ad-desktop{
    // margin-top: 1%;
    background: #ECEDF2 !important;

    width:100% !important;
    display: flex !important;
    // justify-content: space-between !important;
    text-align: center !important;
    .add-container{
            margin-top: 1%;
            
    width:100% !important;
    padding: auto;
    margin:0 auto;
    // border: 2px dashed #f90;
        background: #ECEDF2 !important;
img{
    display: flex;
    height: 100%;
    width: -webkit-fill-available;
}
    }
}
.ad-container {
    background: #f1f1f1 !important;
}
.home-ad{
    background-color: #ecedf2 !important;
}
@media only screen and (min-width: 760px) {
.desktop-hide{
    display: none !important;
}}
</style>
