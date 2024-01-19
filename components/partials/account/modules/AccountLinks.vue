<template lang="html">
    <ul>
        <template v-for="link in links">
            <li :key="link.text" :class="link.active ? 'active' : ''">
                <nuxt-link :to="link.url">
                    <i :class="link.icon"></i>
                    {{ link.text }}
                </nuxt-link>
            </li>
        </template>
        <li v-if="storeStatus == 'true'">
            <a href="/account/store-electricity" >
                <i class="fa fa-plug"></i>
                Store Electricity
            </a>
        </li>
        <li>
            <a href="#" @click.prevent="handleLogout">
                <i class="icon-power-switch"></i>
                Logout
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'AccountLinks',
    data() {
        return {
            storeStatus : "",
        };
    },
    props: {
        links: {
            type: Array,
            default: () => []
        }
    },
    async created(){
        
        this.storeStatus = localStorage.getItem("storeStatus")
    },
     methods: {
        handleLogout() {
            this.$store.dispatch('auth/logout', false);
            setTimeout(function(){
                location.replace('/');
            }, 2000)
        }
    },
};
</script>

<style lang="scss" scoped></style>
