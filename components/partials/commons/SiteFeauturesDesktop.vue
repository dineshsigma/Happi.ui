<template lang="html">
    <div class="sitefeatures-desktop">
        <div class="ps-container container-desktop">
            <div class="ps-block--site-features">
                <div class="ps-block__item">
                    <div class="ps-block__left">
                        <i class="icon-rocket"></i>
                    </div>
                    <div class="ps-block__right">
                        <h4>
                         Free Delivery
                        </h4> 
                        <p>
                            For all orders above  ₹5000
                        </p>
                    </div>
                </div>
                <div class="ps-block__item">
                    <div class="ps-block__left">
                        <i class="icon-credit-card"></i>
                    </div>
                    <div class="ps-block__right">
                        <h4>
                            Secure Payment
                        </h4>
                        <p>
                          100% secure payment
                        </p>
                    </div>
                </div>
                <div class="ps-block__item">
                    <div class="ps-block__left">
                        <i class="icon-bubbles"></i>
                    </div>
                    <div class="ps-block__right">
                        <h4>
                       24/7 Support
                        </h4>
                        <p>
                           Dedicated support
                        </p>
                    </div>
                </div>
                <div class="ps-block__item">
                    <div class="ps-block__left">
                        <i class="icon-gift"></i>
                    </div>
                    <div class="ps-block__right">
                        <h4>
                            Exclusive offers
                        </h4>
                        <p>
                          On Top Brands
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SiteFeauturesDesktop'
};
</script>

<style lang="scss" scoped>

.sitefeatures-desktop{
    background:#FB9013 !important; 
    width:100% !important;
}
.container-desktop{
    background:#FB9013 !important; 
}
.ps-block__left{
    i{
        color:#FFFFFF !important;
    }
}
.ps-block__right{
    h4{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        text-transform: uppercase;
        color: #FFFFFF;
    }
    p{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        color: #FFFFFF;
    }
}


</style>
