<template>
    <section class='body'>
        <nav class='breadcrumb'></nav>

        <section class='header1 cid-sN6GjcAMxA' id='header01-3m'>


            <div class='container'>
                <div class='row justify-content-md-center'>
                    <div class='col-md-10 align-center'></div>
                     <div class='pt-4 align-center'><img
                        src='https://d34e6224thkkna.cloudfront.net/homepage/Happi%20Mobile%20-%20February%20-%20Oppo%20Reno7%20Pro%20-%20M%20Banner.webp'
                        alt='Oppo Reno 7 pro' style='width: 100%;' class=''></div>
<!--                    <div class='pt-4 align-center'><img-->
<!--                        :src='homepageData.mobileurl'-->
<!--                        alt='Oppo Reno' style='width: 100%;' class=''></div>-->
                </div>
            </div>
        </section>
        <section class='form cid-sN6DERkjXB' id='formbuilder-3l'>
            <div class='container'>
                <div class='row'>
                    <div class='col-lg-8 mx-auto mbr-form' data-form-type='formoid'>
                        <form action='https://dev-services.happimobiles.com/laptop-leads' method='post' class='mbr-form form-with-styler'
                              data-form-title='Diwali Dhamaka'>

                            <div class='form-row'>
                                <div hidden='hidden' data-form-alert='' class='alert alert-success col-12'>Thanks for
                                    filling out the form!
                                </div>
                                <div hidden='hidden' data-form-alert-danger='' class='alert alert-danger col-12'>
                                    Oops...! some problem!
                                </div>
                            </div>
                            <div class='dragArea form-row'>
                                <div class='col-lg-12 col-md-12 col-sm-12'><h4 class='mbr-fonts-style pt-7 display-5 get_offr'>Get Offer Details, Enquire Now!</h4></div>
                                <div class='col-lg-12 col-md-12 col-sm-12'>
                                    <hr>
                                </div>
                                <input type='hidden' name='utm_source' id='utm_source' value=''>
                                <input type='hidden' name='utm_medium' id='utm_medium' value=''>
                                <input type='hidden' name='utm_campaign' id='utm_campaign' value=''>
                                <input type='hidden' name='type'  value='mobile'>
                                <input type='hidden' name='Brand'  value='oppo-reno-7pro'>


                                <div data-for='name' class='col-lg-12 col-md-12 col-sm-12 form-group'><input type='text'
                                                                                                             name='name'
                                                                                                             id='name'
                                                                                                             placeholder='Name'
                                                                                                             data-form-field='name'
                                                                                                             class='form-control display-7'
                                                                                                             required
                                                                                                             minlength="3"
                                                                                                             value=''>
                                </div>
                                <div data-for='phone' class='col-lg-12 col-md-12 col-sm-12 form-group'><input type='tel'
                                                                                                              name='phone'
                                                                                                              id='phone'
                                                                                                              placeholder='Phone'
                                                                                                              pattern='[0-9]{10}'
                                                                                                              maxlength="10"
                                                                                                              minlength="10"
                                                                                                              required
                                                                                                              data-form-field='phone'
                                                                                                              class='form-control display-7'
                                                                                                              value=''>
                                </div>




                                <div >
                                    <button type='submit'  class='btn btn-primary display-7  btn1' style="font-size:1.75vw;" >Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <div >



            <section class='cid-sN7XRWlLU7' id='content02-3y'>
                <div class='container'>
                    <div class='row' >

                        <div class='col-12 col-md-6 col-lg-4 pt-5  align-center new_img '>
                            <a href='#formbuilder-3l' class=''><img src='https://d34e6224thkkna.cloudfront.net/homepage/Happi%20-%20Landing%20page%20card%20-%20Oppo%20Reno7%20Pro%20Startrails%20Blue.webp' style='border:3px solid #fb9013' alt='Happi Mobile'></a>
                        </div>
                        <div class='col-12 col-md-6 col-lg-4 pt-5  align-center new_img ' >
                            <a href='#formbuilder-3l' class=''><img src='https://d34e6224thkkna.cloudfront.net/homepage/Happi%20-%20Landing%20page%20card%20-%20Oppo%20Reno7%20Pro%20Starlight%20Black.webp' style='border:3px solid #fb9013' alt='Happi Mobile'></a>
                        </div>
                    </div>
<!--                    <div class='row'>-->
<!--                        <div class='col-12'>-->
<!--                            <center >-->
<!--                                <div >-->
<!--                                    <div class='mbr-section-btn pt-10' >-->
<!--                                        <a class='btn btn-md ' style='font-size: 2rem; background: #; color: ' href='#formbuilder-3l'>Get Offer&nbsp;</a>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </center>-->
<!--                        </div>-->
<!--                    </div>-->

                </div>
            </section>
        </div>

    </section>
</template>

<script>
export default {


    name: 'laptop-offers.vue',
    data(){
        return {
            homepageData:{}
        }
    },

    async created() {
        this.homepageData = await this.$http.$get("/api/homepage");
        this.$nextTick(() => {
            console.log("this.$refs[\"utm_campaign\"]", document.getElementById('utm_campaign').value);
            document.getElementById('utm_campaign').value = this.$route.query.utm_campaign;
            document.getElementById('utm_medium').value = this.$route.query.utm_medium;
            document.getElementById('utm_source').value = this.$route.query.utm_source;
        })
    },



};
</script>

<style scoped>
.new_img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    /* height: 30px;  */
    width: 50px;
}
.heading{
    font-size:45px;
    text-align:center;
    color: whitesmoke;
    font-family: 'Open Sans', sans-serif;
    top:20px;

}
.btn1{
    margin: 0;
    position: relative;
    top:56px;
    font-size: 1.25vw;
    left: 300px;
    margin-bottom:90px;
    background-color: #FB9013;
    border: 0;
    color: white;
    font-family: 'Open Sans', sans-serif;
    transform: translateY(-50%);
}
.img{
    background-color: #FB9013;
    position:relative;
}
.get_offr{
    text-align:center;
}
.ofrbtn{
    background-color: #333333;
    border-radius: 20px;
    color: white;
    font-size: 7vw ;
    bottom: 17px;
}
/* .display-5{
    text-align: center;
} */
/* .ltd-offr{
    color: rgba(255, 255, 255, 0.966);
    padding-top:20px;
     font-family: Arial, Helvetica, sans-serif;
      font-family: "Times New Roman", Times, serif;
} */
/* .othr-offr{
    color: rgba(255, 255, 255, 0.966);
    padding-top:390px;
    font-family: "Times New Roman", Times, serif;
}  */


@media only screen and (max-width: 600px) {
    .centre {
        left: 28%;
    }
    .display-4{
        font-size: 5rem !important ;
        line-height: 4rem !important;
    }
    .btn1 {
        left: 28%;
        font-size: 7vw!important;
        left: 129px;
        top:60px;
    }
    .centre {
        left: 28%;
    }
    .s_oppo{
        left: 7px;
        top: 0px;
    }
    .laptop{
        font-size: 5rem ;
    }
}

</style>
