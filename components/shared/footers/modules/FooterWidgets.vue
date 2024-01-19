<template lang="html">
    <div class="ps-footer__widgets">
        <aside class="widget widget_footer widget_contact-us">
            <h4 class="widget-title">
                Contact us
            </h4>
            <div class="widget_content">
                <p>Call us (10 AM - 7 PM) IST</p>
                <h4>
                    <a href="tel:9100412345" target="_parent" class="foter">
                        9100412345
                    </a>
                </h4>
                <!--                <h4>-->
                <!--                    <a href="tel:919121850666" style="color:#fb9013">-->
                <!--                        +91 9121850666-->
                <!--                    </a>-->
                <!--                </h4>-->
                <!-- <p>
                    502 New Design Str, Melbourne, Australia <br />
                    <a href="mailto:contact@martfury.co">contact@martfury.co</a>
                </p> -->
                <ul class="ps-list--social">
                    <li>
                        <a class="facebook" rel="noreferrer" target="_blank" href="https://www.facebook.com/HappiMobiles1/">
                            <i class="fa fa-facebook"></i>
                        </a>
                    </li>
                    <!-- <li>
                        <a
                            class="twitter"
                            rel="noreferrer"
                            target="_blank"
                            href="https://twitter.com/happimobiles2"
                        >
                            <i class="fa fa-twitter"></i>
                        </a>
                    </li> -->
                    <!--
                        https://www.youtube.com/channel/UCFlcLoM3mfOA1-2GYdXm50g
                        https://www.linkedin.com/company/happi-mobiles-pvt-ltd/
                        <i class="fab fa-linkedin-in"></i>
                    -->
                    <li>
                        <a class="linkedin" rel="noreferrer" target="_blank"
                            href="https://www.linkedin.com/company/happi-mobiles-pvt-ltd/">
                            <i class="fa fa-linkedin"></i>
                        </a>
                    </li>

                    <li>
                        <a class="instagram" rel="noreferrer" target="_blank"
                            href="https://www.instagram.com/happimobiles/">
                            <i class="fa fa-instagram"></i>
                        </a>
                    </li>
                    <li class="youtube">
                        <a class="youtube" rel="noreferrer" target="_blank" href="https://www.youtube.com/c/HappiMobiles">
                            <i class="fa fa-youtube"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                Policy
            </h4>
            <ul class="ps-list--link">
                <li>
                    <a href="/privacy_policy">Privacy Policy</a>
                </li>
                <!-- <li>
                    <a href="/return_refund_policy">Return & Refund Policy</a>
                </li> -->
                <!-- 
                  <li>

                      <a href="/price_drop_protection">Price Drop Protection</a>

  
                </li> -->
                <li>
                    <a href="/cancellation-policy">Cancellation-policy</a>
                </li>
            </ul>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                About
            </h4>
            <ul class="ps-list--link">
                <li>
                    <a href="/about-us">About Us</a>
                </li>
                <li>
                    <a href="/contact-us">Contact Us</a>
                </li>
                <li>
                    <a href="/our-stores">Our Store</a>
                </li>
                <li>
                    <a href="/latest-mobile-blogs">Blogs</a>
                </li>
                <li>
                    <a href="/terms-and-conditions">Terms & Conditions</a>
                </li>

            </ul>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                Other Pages
            </h4>
            <ul class="ps-list--link">
                <li>
                    <a href="/faqs">FAQs</a>
                </li>
                <li>
                    <a href="/blood-donation"> Blood Donations</a>
                </li>
                <li>
                    <a href="/account/user-information">My account</a>
                </li>
                <li>
                    <a href="/assured_by_back">Assured by Back</a>
                </li>
                <li>
                    <a href="/akshaya-patra">Akshaya Patra</a>
                </li>
                <!-- <li>
                    <a @click="storeManagement()">Store Management</a>
                </li> -->
            </ul>
        </aside>
    </div>
</template>



<script>
import { mapState } from 'vuex';
export default {
    name: 'FooterWidgets',
    computed: {
        ...mapState({
            // setStoreManage: state => state.stores.setStoreManage,
        })

    },
    methods: {
        //    async storeManagement(){
        //     console.log("hellooooooo")
        //     let userData = this.$cookies.get('userDetails');
        //     let phone = userData.phone;
        //     await this.$store.dispatch('stores/getStoreDetails',phone);
        //     console.log("storeeeee",this.setStoreManage)
        //     if(this.setStoreManage.status == true){
        //         this.$router.push('/store-management');
        //     }
        //     else{
        //         this.$router.push('/');
        //     }
        //    }
    }
};
</script>

<style lang="scss" scoped>
//.ps-footer__widgets {
//  background-color: #fff;
//}
.ps-list--link {
    font-size: 17px;
}

.ps-list--social li a.linkedin i {
    color: #0077b5;
}

.youtube {
    color: red;
}

.footer {
    color: #fb9013;
    font-size: 20px;
}

.foter {
    color: #fb9013;
    font-size: 19px;
    // font-weight:200px;
}
</style>
