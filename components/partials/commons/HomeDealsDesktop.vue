<template lang="html">
    <div class="new-container-deals">
        <div class="ps-container deals-desktop-container deals-new-desk">
            <!-- <div class="ps-block--site-features card-layout">
                <div class="ps-block__item desktop-deal-card">
                    <div class="ps-block__left">
                        <img 
                        src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/36bf843c-f56c-480e-bad2-be79859ad617.png"
                        alt="happimobiles"
                        />
                    </div>
                    <div class="ps-block__right">
                        <p class="text-deals-desktop">Tablets, Smart Phones and More <strong>DEALS</strong></p>
                        <span class="center-deals "
                        >Shop Now
                        <i
                            data-v-5811f95e=""
                            class="icon-chevron-right right-icon  mt-1 p-1"
                        ></i
                    ></span>
                    </div>
                </div>
                <div class="ps-block__item">
                    <div class="ps-block__left">
                        <img 
                        src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/1f62d658-92fb-468c-9e37-1450a306c1d9.png"
                        alt="happimobiles"
                        />
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
                        <img 
                        src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/1f62d658-92fb-468c-9e37-1450a306c1d9.png"
                        alt="happimobiles"
                        />
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
                        <img 
                        src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/1f62d658-92fb-468c-9e37-1450a306c1d9.png"
                        alt="happimobiles"
                        />
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
            </div> -->
        
            <!-- <div class="col-12"> -->
                <div class="row ">
                    <div class="col-3 cards-strip">
                        <div class="row deals-desktop-card ">
                            <div class="col-4">
                                <img 
                                src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/36bf843c-f56c-480e-bad2-be79859ad617.png"
                                alt="happimobiles"
                                />
                            </div>
                            <div class="col-8">
                                <a @click="reload()">
                                <p class="text-deals-desktop">Tablets, Smart Phones and More <strong>DEALS</strong></p>
                                <span class="center-deals "
                                >Shop Now
                                <i
                                    data-v-5811f95e=""
                                    class="icon-chevron-right right-icon  mt-1 p-1"
                                ></i
                            ></span>
                            </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-3 cards-strip">
                        <div class="row deals-desktop-card">
                            <div class="col-4">
                                <img 
                                src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/1f62d658-92fb-468c-9e37-1450a306c1d9.png"
                                alt="happimobiles"
                                />
                            </div>
                            <div class="col-8">
                                <a @click="reload()">
                                    <p class="text-deals-desktop">Tablets, Smart Phones and More <strong>DEALS</strong></p>
                                    <span class="center-deals "
                                    >Shop Now
                                    <i
                                        data-v-5811f95e=""
                                        class="icon-chevron-right right-icon  mt-1 p-1"
                                    ></i
                                ></span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-3 cards-strip">
                        <div class="row deals-desktop-card">
                            <div class="col-4">
                                <img 
                                src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/105fdb96-9964-4011-a0df-b2cad4e9519c.png"
                                alt="happimobiles"
                                />
                            </div>
                            <div class="col-8">
                                <a @click="reload()">
                                    <p class="text-deals-desktop">Catch Big <strong>DEALS</strong> on Smart Watches</p>
                                    <span class="center-deals "
                                    >Shop Now
                                    <i
                                        data-v-5811f95e=""
                                        class="icon-chevron-right right-icon  mt-1 p-1"
                                    ></i
                                ></span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-3 cards-strip">
                        <div class="row deals-desktop-card">
                            <div class="col-4">
                                <img 
                                src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/36bf843c-f56c-480e-bad2-be79859ad617.png"
                                alt="happimobiles"
                                />
                            </div>
                            <div class="col-8">
                                <a @click="reload()">
                                <p class="text-deals-desktop">Tablets, Smart Phones and More <strong>DEALS</strong></p>
                                <span class="center-deals "
                                >Shop Now
                                <i
                                    data-v-5811f95e=""
                                    class="icon-chevron-right right-icon  mt-1 p-1"
                                ></i
                            ></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <!-- </div> -->
    </div>
</template>

<script>
export default {
    name: 'HomeDealsDesktop',
    methods: {
        reload(){
            // console.log('-------------------------------')
            // this.$router.push('/')
            window.location.reload();
        }
    }
};
</script>

<style lang="scss" scoped>
.new-container-deals{
    width: 100% !important;
    background: #FFFFFF;
}
.deals-new-desk{
    padding-top:2% !important;
    padding-bottom: 2% !important;
    background: #FFFFFF !important;
}
.deals-desktop-container{
    background: #FFFFFF !important;
    width: 100% !important;
}
.cards-strip{
    display: flex;
    justify-content: space-around !important;
}
.deals-desktop-card{
    height: 155px;
    background: #EFEFEF;
    display: flex;
    margin:1%;
    // justify-content: space-around;
    align-items: center;
    padding: 2%;
}
.text-deals-desktop{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    text-transform: uppercase;

    color: #616161;
    }


</style>
