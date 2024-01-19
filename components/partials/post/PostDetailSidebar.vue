<template lang="html">
    <div class="ps-post--detail sidebar"  v-if="blogObj.moreInfo" v-html="blogObj.moreInfo">
            
    </div>
</template>

<script>
export default {
    name: 'PostDetailSidebar',
       props: {
        blogObj: {
            type: Object,
            default: () => {}
        }
    }
};
</script>

<style lang="scss" scoped></style>
