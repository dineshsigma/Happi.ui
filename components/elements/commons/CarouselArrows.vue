<template lang="html">
    <div class="swiper-nav">
        <span
            :class="
                `swiper-arrow swiper-prev ${type === 'simple' ? 'simple' : ''}`
            "
        >
            <i class="icon-chevron-left"></i>
        </span>
        <div
            :class="
                `swiper-arrow swiper-next ${type === 'simple' ? 'simple' : ''}`
            "
        >
            <i class="icon-chevron-right"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CarouselArrows',
    props: {
        type: {
            type: String,
            default: ''
        }
    }
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/env.scss';

.swiper-arrow {
    display: inline-block;
    vertical-align: top;
    position: relative;
    width: 30px;
    height: 30px;
    border: 1px solid #D8D8D8;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    z-index: 100;
    cursor: pointer;
    transition: all 0.25s ease;
    outline: none;

    i {
        font-size: 12px !important;
    }

    &:hover {
        background-color: $color-1st;
    }

    &.swiper-prev {
        left: 0;
        // margin-top: 50%;

    }

    &.swiper-next {
        right: 0;
        // margin-top: 50%;
    }

    &.simple {
        color: rgb(8, 8, 8);
        background-color: #ffffff;
        border-radius: 50%;

        i {
            font-size: 20px;
        }

        &:hover {
            background-color: #fb9013;
            color: #ffffff;
            border-radius: 50%;

        }
    }

    @media screen and (min-width: 1366px) {
        &.swiper-prev {
            left: 0px;
        }

        &.swiper-next {
            right: 0px;
        }
    }

    @media screen and (min-width: 1440px) {
        &.swiper-prev {
            left: -0px;
        }

        &.swiper-next {
            right: -0px;
        }
    }
    
}

.swiper-nav {
    display: flex;
    // flex-flow: row nowrap;
    flex-flow: wrap-reverse;
    top:50%;
    width:100%;
    padding-top:2%;  
    justify-content: space-between;
    align-items: center;
    height: 0;
    @include media('<lg') {
        // display: none;
        display: flex;
        flex-flow: wrap-reverse;
        color: #000 !important;
    }
}
</style>
