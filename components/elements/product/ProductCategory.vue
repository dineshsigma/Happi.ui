<template lang="html">
    <div class="ps-product ps-product--inner">

<!--        <div class="ps-product__thumbnail home-list-img-2">-->
<!--            <div class="ps-block&#45;&#45;category">-->
                <!-- <nuxt-link to="/shop">
                    <a class="ps-block__overlay"></a>
                </nuxt-link> -->

<!--            </div>-->
<!--        </div>-->
    </div>
</template>
<script>
export default {
    name: 'ProductInner',
    components: { },
    props: {
        product: {
            type: Object,
            require: true,
            default: () => {}
        }
    }
};
</script>
<style lang="scss">
.ps-product--inner {
    padding: 0;
    border: none;

    .ps-product__price {
        small {
            margin-left: 0;
        }
    }
}
.ps-block--category {
    border:0;
    margin-bottom:0;
}
.home-list-img-2 {
    text-align: center;
    img {
        height: auto !important;
        width: auto !important;
    }
}
</style>
