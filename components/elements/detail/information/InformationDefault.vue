<template lang="html">
    <div class="ps-product__info">
        <module-product-info :product="product" />
        
        <module-product-detail-desc :product="product" />
        
        <module-product-shopping :product="product" />
        <color-memory />
<!--        <bajaj-emi />-->
        <!-- <module-product-detail-specification /> -->
        <!-- <module-product-detail-sharing /> -->
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ModuleProductDetailSharing from '~/components/elements/detail/information/modules/ModuleProductDetailSharing';
import ModuleProductDetailSpecification from '~/components/elements/detail/information/modules/ModuleProductDetailSpecification';
import ModuleProductDetailDesc from '~/components/elements/detail/information/modules/ModuleProductDetailDesc';
import Rating from '~/components/elements/Rating';
import ModuleProductShopping from '~/components/elements/detail/information/modules/ModuleProductShopping';
import ModuleProductInfo from '~/components/elements/detail/information/modules/ModuleProductInfo';
import ColorMemory from '~/components/partials/product/ColorMemory';
import BajajEMI from '~/components/partials/product/BajajEMI'

export default {
    name: 'InformationDefault',
    components: {
        ModuleProductInfo,
        ModuleProductShopping,
        Rating,
        ModuleProductDetailDesc,
        ModuleProductDetailSpecification,
        ModuleProductDetailSharing,
        ColorMemory,
        BajajEMI
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

<style lang="scss" scoped></style>
