<template lang="html">
    <div class="ps-product__content pt-4">

        <p class="heading-product-info">
            From the manufacturer
        </p>
        <div>
             <partial-description :product="product" />
        </div>
        <p class="heading-product-info">
            Specification
        </p>
        <div>
            <partial-specification :product="product" />
        </div>

    </div>
</template>

<script>
import PartialDescription from '~/components/elements/detail/modules/PartialDescription';
import PartialSpecification from '~/components/elements/detail/modules/PartialSpecification';
import PartialVendor from '~/components/elements/detail/modules/PartialVendor';
import PartialReview from '~/components/elements/detail/modules/PartialReview';
import PartialOffer from '~/components/elements/detail/modules/PartialOffer';
export default {
    name: 'DefaultDescription',
    components: {
        PartialOffer,
        PartialReview,
        PartialVendor,
        PartialSpecification,
        PartialDescription
    },
    props: {
        product: {
            type: Object,
            require: true,
            default: () => {}
        }
    },
};
</script>

<style lang="scss" scoped>

.tab-content {
    padding-top: 30px;
}
li[aria-selected='true'] {
    a {
        color: $color-heading !important;
    }
}
a.list-item {
    position: relative;
    display: block;
    color: #999999;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    text-transform: none;
    @media screen and (min-width: 992px) {
        font-size: 20px;
    }
}
.v-slide-group__prev {
    .v-slide-group__prev--disabled {
    display: none !important;
}}

.heading-product-info{
    font-size: 22px;
    font-weight: 700;

}
</style>
