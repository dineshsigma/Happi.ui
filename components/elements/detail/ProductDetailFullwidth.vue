<template lang="html">
    <div class="ps-product--detail ps-product--fullwidth">
        <div class="ps-product__header">
            <thumbnail-default :product='product' />
            <information-default :product='product'  />
        </div>
        <!-- <default-description /> -->
    </div>
</template>

<script>
import InformationDefault from '~/components/elements/detail/information/InformationDefault';
import ThumbnailDefault from '~/components/elements/detail/thumbnail/ThumbnailDefault';

export default {
    name: 'ProductDetailFullwidth',
    components: { ThumbnailDefault, InformationDefault },
    props: {
        product: {
            type: Object,
            require: true,
            default: () => {}
        }
    }
};
</script>

<style lang="scss" scoped>
@media (max-width: 767px) {
    .ps-product--detail {
        
     margin-bottom: 0 !important;
        padding-bottom: 0;
    }
}
</style>
