<template lang="html">
    <div class="ps-product--cart">
        <div class="ps-product__content ">
            <nuxt-link
                :to="`/${product.linker}`"
                class="d-flex align-items-center"
            >
                <img v-if="product.image_url == '' || product.image_url == undefined"
                    :src="`${product.pictures_new[0]}`"
                    :alt="`${product.name}`"
                    style="width:40px"
                />
                <img v-else :src="`${product.image_url}`" :alt="`${product.name}`" style="width:40px" />
                <a class="ps-product__title">{{ product.name }}</a>
                
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductShoppingCart',
    props: {
        product: {
            type: Object,
            default: () => {}
        }
    }
};
</script>

<style lang="scss" scoped>
.ps-product--cart {
    .ps-product__content  {
        padding-left :0;
        img {
            margin-right:5px;
        }
    }
    .ps-product__thumbnail {
        text-align: center;
        img {
            height: 40px;
        }
    }
}
</style>
