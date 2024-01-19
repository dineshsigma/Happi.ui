<template lang="html">
    <div class="ps-product ps-product--wide ps-product--search-result">

      <div class="ps-product__content">
        <a :href="`/search?q=${product.suggestion}`" class="ps-product__title" style="text-align: start;">
          {{ product.suggestion }}
        </a>

      </div>
<!--        <div class="ps-product__thumbnail">-->
<!--            <nuxt-link :to="`/${product.linker}`">-->
<!--                <img-->
<!--                    v-if='product.pictures != null'-->
<!--                    :src='`https://happimobiles.s3.ap-south-1.amazonaws.com/happi/${product.pictures[0]}.jpg`'-->
<!--                    :alt="product.name"-->

<!--                />-->

<!--                <img-->
<!--                    v-if='product.pictures_new != null && product.pictures_new.length > 0'-->
<!--                    :src='`${product.pictures_new[0]}`'-->
<!--                    :alt="product.name"-->

<!--                />-->
<!--            </nuxt-link>-->
<!--        </div>-->
<!--        <div class="ps-product__content">-->
<!--            <a :href="`/`" class="ps-product__title">-->
<!--                {{ product.suggestion }}-->
<!--            </a>-->
<!--            <p class="ps-product__price sale">-->
<!--               {{ priceFormat(product.payPrice) }}-->
<!--            </p>-->
<!--        </div>-->
    </div>
</template>

<script>
export default {
    name: 'ProductResult',
    props: {
        product: {
            type: Object,
            require: true,
            default: {}
        }
    },
    methods: {
        priceFormat(item) {
            // console.log("payPrice", item);
            item = item.toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR'
            });
            return item;
        },
    }
};
</script>

<style lang="scss" scoped>


element.style {
}
.ps-product--search-result .ps-product__thumbnail {
    max-width: 60px;
    min-width: 60px;
}
.ps-product--search-result {
  margin-bottom: 0 !important;
  border-bottom: 0 !important;
  //padding: 8px 0;
  :hover {
    background-color: #efefef;
  }
  .ps-product__content {
    padding:8px 0;
    a {
      font-size: 16px;
      text-decoration: none;
    }
  }
}
@media (max-width: 479px){
    .ps-product--wide .ps-product__thumbnail {
        margin-bottom: 10px;
      color: #000;
        //width: 120px;
        //text-align: center;
    }
    .ps-product__content{
        //margin: 0 5px 0 0;
        ////position: absolute;
        //top: 44%;
        //left: 18%;
        //-ms-transform: translateY(-50%);
        //transform: translateY(-50%);
      a {
        max-width: 100%;
        color: #000;
      }
    }
}
</style>
