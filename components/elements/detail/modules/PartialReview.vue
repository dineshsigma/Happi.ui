<template lang="html">
    <div class="row">
        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
            <div class="ps-block--average-rating">
                <div class="ps-block__header">
                    <h3>4.00</h3>
                    <rating-new :reviewRating="4" />
                </div>

                <div
                    class="ps-block__star"
                    v-for="(rating, index) in reviewSummary"
                >
                    <span>{{ index + 1 }} Star</span>
                    <div class="ps-progress" data-value="100">
                        <span style="width:50%"></span>
                    </div>
                    <span>100%</span>
                </div>
            </div>
           

            <div class="reviews-block" v-if="productReviews.length != 0">
                <h4>Reviews :</h4>
                <div v-for="review in productReviews">
                    <h5>{{ review.customerName }}</h5>
                    <h6 style="font-weight:500" class="d-flex">
                        Product Rating : &nbsp;
                        <span>
                            <rating-new :reviewRating="review.product_rating" />
                        </span>
                    </h6>
                    <h6 style="font-weight:500" class="d-flex">
                        Happi Rating :&nbsp;
                        <span>
                            <rating-new :reviewRating="review.happi_rating" />
                        </span>
                    </h6>
                    <p class="d-flex">Reviewed on : {{ review.createdon }}</p>
                </div>
            </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mt-3">
            <form class="ps-form--review" v-on:submit.prevent="submitForm">
                <h4>Submit Your Review</h4>

                <div class="row product">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12  ">
                        <div class="form-group">
                            <b>Product Rating</b>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12  ">
                        <div class="form-group">
                            <b>Happi Rating</b>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <textarea
                        class="form-control"
                        rows="6"
                        id="comments"
                        placeholder="Write your review here"
                        v-model="form.comments"
                    ></textarea>
                </div>

                <div class="form-group submit">
                    <button class="ps-btn">Submit Review</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import RatingNew from '~/components/elements/commons/RatingNew';

import Rating from '~/components/elements/commons/Rating';

export default {
    name: 'PartialReview',
    components: { RatingNew, Rating },
    computed: {
        ...mapState({
            productReviews: state => state.product.productReviews,
            reviewSummary: state => state.product.reviewSummary
        })
    },
    data: () => ({
        reviewsCount: [],

        form: {
            comments: 'TEST COMMENT',
            ratingC: '1'
        }
    }),
    methods: {
        submitForm() {
            // this.form.happiRating = this.star;
            // this.form.productRating = this.star2;
            console.log(this.form);
        }
    },
    async created() {
        for (let i = 0; i < this.reviewSummary.length; i++) {
            const element = this.reviewSummary[i];
        }
        console.log('REV_LOCAL', this.reviewSummary);
    }
};
</script>

<style lang="scss" scoped>
.ps-progress {
    span {
        border-radius: 4px;
        background-color: #fb9013;
        height: 18px;
        left: 0;
        position: absolute;
    }
}
.rating {
    display: flex;
    align-items: center;
}
.product{
    margin-bottom: 1px!important;
}
</style>
