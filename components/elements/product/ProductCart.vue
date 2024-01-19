<template lang="html">
    <div class="ps-product--cart">
        <div v-if="product.image_url" class="ps-product__thumbnail">
             <img :src="product.image_url" :alt="product.name" />
        </div>
        <div v-else class="ps-product__thumbnail">
             <img :src="`https://happimobiles.s3.ap-south-1.amazonaws.com/happi/${product.pictures[0]}.jpg`" :alt="product.name" />
        </div> 
        <!-- {{ product.image_url }} -->
        <div class="ps-product__content">
           {{ product.name }}
        </div> 
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            require: true,
            default: () => {}
        }
    }
};
</script>
<style  lang="scss" scoped>

.ps-product--cart {
    .ps-product__thumbnail {
        // text-align: center;
img {
        height: 40px;
    }
    }
    
}</style>
