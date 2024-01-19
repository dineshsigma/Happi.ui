<template lang="html">
    <div class="pt-5 pb-2 row">
        <p class="col-2" v-for="item in menuCategories.menuCategories">
            <strong class="center"> {{item.text}} : </strong>
            <template v-if="item.subMenu" >
                <nuxt-link
                    class="col center"
                    v-for="obj in item.subMenu[0].megaItems"
                    :to="categoryUrl(obj.url)"
                    :key="obj.text">
                    {{ obj.text }}
                </nuxt-link>
            </template>
        </p>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'FooterLinks',
    data() {
        return {};
    },
    computed: {
        ...mapState({
            menuCategories: state => state.collection.menu
        })
    },
    created: async function () {
        var self = this;
        setTimeout(function(){
            console.log("menuCategories-Footer", self.menuCategories);
        }, 2000)
    },
    methods: {
        categoryUrl(url) {
            return `${url}`;
        }
    }
};
</script>
<style lang="scss" scoped>

p{
    font-size: 17px;
    a{
        &:hover{
            text-decoration: underline;
        }
    }
}

</style>
