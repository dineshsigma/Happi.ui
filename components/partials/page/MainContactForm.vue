<template lang="html">
    <div class="ps-contact-form">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                    <form class="ps-form--contact-us" action="/" method="get">
                        <h3>Get In Touch</h3>

                        <div class="row">
                            <div
                                class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 "
                            >
                                <div class="form-group">
                                    <input v-model="getInTouch.name"
                                        class="form-control"
                                        type="text"
                                        placeholder="Name"
                                    />
                                </div>
                            </div>
                            <div
                                class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 "
                            >
                                <div class="form-group">
                                    <input v-model="getInTouch.email"
                                        class="form-control"
                                        type="text"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                            <div
                                class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                            >
                                <div class="form-group">
                                    <input
                                    v-model="getInTouch.phoneNo"
                                        class="form-control"
                                        type="text"
                                        placeholder="Phone"
                                    />
                                </div>
                            </div>
                            <div
                                class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                            >
                                <div class="form-group">
                                    <textarea
                                    v-model="getInTouch.comment"
                                        class="form-control"
                                        rows="5"
                                        placeholder="Comment"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div v-if="message != ''">
                            {{message}}
                        </div>
                        <div class="form-group submit" v-if="!isloading">
                            <button class="ps-btn"   @click.prevent="getInTouchSumbit()">Send message</button>
                        </div>
                    </form>

                    <div>
                        <h4>Looking For Additional Support?</h4>
                        <p> Please Call Us On call us
                        <a href='tel:9100412345'><i class="fa fa-phone"></i>  9100412345 </a> </p>
                    </div>




                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'MainContactForm',
    computed:{
        ...mapState({
            message: state => state.utilities.message,
            isloading: state => state.utilities.isloading,
            getInTouch: state => JSON.parse(JSON.stringify(state.utilities.getInTouch))
        }),
    },
    methods: {
        async getInTouchSumbit() {
            console.log(this.getInTouch);
            await this.$store.dispatch('utilities/submitContactForm', this.getInTouch);

        }
    },
    // data: () => {
    //     return {

    //         getInTouch : {
    //             name : null,
    //             email:null,
    //             phoneNo :null,
    //             comment : null
    //         }
    //     };
    // }
};
</script>

<style lang="scss" scoped></style>
