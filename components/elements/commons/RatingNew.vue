<template lang="html">
    <div class="ratings">
        <span class="ps-rating">
            <i
                class="fa"
                v-for="(item, index) in 5"
                v-bind:class="[reviewRating > index ? '' : 'fa-star-o']"
            ></i>
        </span>
    </div>
</template>

<script>
export default {
    name: 'RatingNew',
    props: {
        reviewRating: {
            type: Number,
            default: () => {}
        }
    }
};
</script>

<style lang="scss" scoped></style>
