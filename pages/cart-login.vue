<template>

</template>

<script>
export default {
    name: 'cart-login',
    created() {
        console.log("id", this.$router.currentRoute.query);
        this.$cookies.set('cart_id', this.$router.currentRoute.query['id'], {
            path: '/',
            maxAge: 60 * 60 * 24 * 30
        })
        location.replace('/cart');
    }
};
</script>

<style scoped>

</style>