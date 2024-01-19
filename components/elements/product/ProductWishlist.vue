<template lang="html">
    <div class="ps-product--cart">
        <div class="ps-product__content ">
            <nuxt-link
                :to="`/${product.linker}`"
                class="d-flex align-items-center"
            >
                <img
                    :src="
                        `https://happimobiles.s3.ap-south-1.amazonaws.com/happi/${product.pictures[0]}.jpg`
                    "
                    :alt="`${product.name}`"
                    style="width:40px"
                />
                <a class="ps-product__title">{{ product.name }}</a>
                <a class="ps-product__title">{{ priceFormat(product.payPrice) }}</a>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductWishlist',
    props: {
        product: {
            type: Object,
            default: () => {}
        }
    },
    methods: {
         priceFormat(item) {
            item = item.toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR',
              });
             return item;
         },
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
