<template lang="html">
    <section class="ps-newsletter">
        <div :class="layout === 'fullwidth' ? 'ps-container' : 'container'">
            <form class="ps-form--newsletter" @submit.prevent="handleSubmit" >
                <div class="row">
                    <div class="col-lg-5">
                        <div class="ps-form__left">
                            <h3>
                              News Letter
                            </h3>
                            <p>
                              Subcribe to get information about products and coupons
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-7 ">
                        <div class="ps-form__right">
                            <div class="form-group--nest">
                                <input
                                    class="form-control "
                                    type="email"
                                    placeholder="Email address"
                                    v-model="email"
                                    style="font-size: 14px;"
                                    v-on:keydown.enter.prevent='handleSubmit'
                                />
                                <button class="ps-btn">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script>

export default {
    name: 'Newsletters',
    props: {
        layout: {
            type: String,
            default: ''
        }
    },
    data() {
       return {
           email:"",
           message:null
       }
    },
    methods:{
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        handleSubmit(){
            if(this.validEmail(this.email)){
                this.$store.dispatch('utilities/submitSubcribeForm', {email:this.email});
                // this.$notify({
                //     group: 'addCartSuccess',
                //     title: 'Success!',
                //     text: `Thankyou`
                // });
                this.email = "";
            }else{
                // this.$notify({
                //     group: 'addCartSuccess',
                //     title: 'Email not valid failed!',
                //     text: `Sorry please check your email`
                // });
            }
        }
    }
};
</script>

<style lang="scss" scoped>
@media (max-width: 1200px) {
    .ps-newsletter {
        //margin-bottom:170px !important;
    }
}
</style>
