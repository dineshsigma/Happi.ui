<template lang="html">
    <div class="ps-page--blog">
         <bread-crumb :breadcrumb="breadCrumb" layout="fullwidth" />
        <div class="container">
            <div class="ps-page__header">
                <h1>Our Blogs</h1>
               
            </div>
            <blog-sidebar />
        </div>
    </div>
</template>

<script>
import BreadCrumb2 from '~/components/elements/BreadCrumb2';
import BlogList from '../../components/partials/blog/BlogList';
import BlogSidebar from '../../components/partials/blog/BlogSidebar';
import BreadCrumb from '~/components/elements/BreadCrumb';

export default {
    transition: 'zoom',
    components: {
        BlogSidebar,
        BlogList,
        BreadCrumb2,
        BreadCrumb
    },

    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Our Blogs'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
