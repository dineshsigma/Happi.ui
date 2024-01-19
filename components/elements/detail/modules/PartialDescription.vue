<template lang='html'>
    <client-only>
        <div v-if='product != null'>
            <div
                class='ps-document'
                v-if='liveproductObjHtml != null'
                v-lazy-load='liveproductObjHtml'
            ></div>
        </div>
    </client-only>
</template>

<script>

export default {
    name: 'PartialDescription',
    props: {
        product: {
            type: Object,
            require: true,
            default: () => {}
        }
    },
    data(){
        return {
            liveproductObjHtml  : null
        }
    },
    mounted() {
        window.addEventListener('scroll', ()=>{
            if(this.liveproductObjHtml == null){
                this.liveproductObjHtml = this.product.liveproductObjHtml;
            }
        });
    }
};
</script>

<style lang='scss' scoped></style>
