<template lang="html">
    <div class="ps-product--hot-deal">
        <h1>{{ product.name }}</h1>
        <div class="ps-product__meta">
            <p>
                Brand:

                    <a
                        v-if='product.breadCrumb.length == 4 && product.breadCrumb[2].url != null'
                        :href="`${product.breadCrumb[2].url}`" class="ml-2 text-capitalize">
                        {{ product.breadCrumb[2].text }}
                    </a>

                <a
                    v-else-if='product.breadCrumb.length == 3 && product.breadCrumb[1].url != null'
                    :href="`${product.breadCrumb[1].url}`" class="ml-2 text-capitalize">
                    {{ product.breadCrumb[1].text }}
                </a>

            </p>
            <div class="ps-product__rating">
                <rating />
                <span>(1 review)</span>
            </div>
        </div>
        <p
            v-if="parseInt(product.payPrice) !== parseInt(product.mrp)"
            class="ps-product__price sale"
        >
            <del class="mr-2">  {{ priceFormat(product.mrp) }}</del>
            {{ priceFormat(product.payPrice) }} <strong style="color:#CC4600;margin-left:10px; font-size: 15px;font-weight:900;"> Save: {{ priceFormat(product.mrp - product.payPrice) }}</strong>
            <strong style="font-size: 17px;margin-left:5px; padding:2px;border-radius:4px;background-color:#CC4600; color:#fff">{{ (( (parseInt(product.mrp) - parseInt(product.payPrice)) / (product.mrp) ) * 100 ).toFixed(0) }}%</strong>
        </p>
        <p v-else class="ps-product__price">
            {{ priceFormat(parseInt(product.payPrice)) }}
        </p>
    </div>
</template>

<script>
//import CountDown from '~/components/elements/commons/CountDown';
import Rating from '~/components/elements/Rating';

export default {
    name: 'ModuleProductInfo',
    components: { Rating,
    //    CountDown
    },
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

    },
};
</script>

<style lang="scss" scoped>
.price-exp {
    align-items: center;
}

.ps-product__price{
    font-weight: bold;
}
</style>
