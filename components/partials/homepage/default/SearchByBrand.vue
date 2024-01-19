<template lang="html">
    <div class="col-6">
        <div class="ps-section__content  brands row">
                <div class="col-12 brand-heading">
                    <h3>Search by Brands</h3>
                </div> 
                <div
                class="brand-name"
                v-for="product in categoriesList"
                >
                    <nuxt-link :to="`${product.url}`" class="center m-2">
                     <img :src="`${product.imgTitle}`" alt="happimobiles" />
                           <!-- <p>{{product.name}}</p> -->
                    </nuxt-link>
                </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SearchByBrand',
    components: {
      
    },
    data(){
        return {
            categoriesList : [
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Apple.webp",
                    name : "Apple",
                    url: "/search?q=iphone"
                },
                // {
                //     imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/ASUS.webp",
                //     name : "Asus",
                //    url : "/search?q=asus"
                // },
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Samsung.webp",
                    name : "Samsung",
                    url: "/mobiles/buy-samsung-mobiles-online"
                },
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Oneplus.webp",
                    name : "Oneplus",
                    url: "/mobiles/oneplus"
                },
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Oppo.webp",
                    name : "Oppo",
                    url: "/mobiles/buy-oppo-mobiles-online"
                },
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Redmi.webp",
                    name : "Mi",
                    url: "/mobiles/buy-mi-mobiles-online"
                },
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Vivo.webp",
                    name : "Vivo",
                    url : "/mobiles/vivo"
                },
                // {
                //     imgTitle : "https://d34e6224thkkna.cloudfront.net/happi_media/TTINWQDJ-1629262405605.png",
                //     name : "Honor"
                // },
                //   {
                //     imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/lg%20logo.webp",
                //     name : "LG",
                //     url :"search?q=lg"
                // },
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Realme.webp",
                    name : "Realme",
                    url: "/mobiles/buy-realme-mobiles-online"
                },
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Nokia.webp",
                    name : "Nokia",
                    url: "/mobiles/nokia"
                },
                // {
                //     imgTitle : "https://d34e6224thkkna.cloudfront.net/happi_media/DSPBHRMH-1629262422692.png",
                //     name : "Motorola"
                // },
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Nokia.webp",
                    name : "Nokia",
                    url: "/mobiles/nokia"
                },
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Nokia.webp",
                    name : "Nokia",
                    url: "/mobiles/nokia"
                },
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Nokia.webp",
                    name : "Nokia",
                    url: "/mobiles/nokia"
                },
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Nokia.webp",
                    name : "Nokia",
                    url: "/mobiles/nokia"
                },
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Nokia.webp",
                    name : "Nokia",
                    url: "/mobiles/nokia"
                },
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Nokia.webp",
                    name : "Nokia",
                    url: "/mobiles/nokia"
                },
                {
                    imgTitle : "https://d34e6224thkkna.cloudfront.net/homepage/Nokia.webp",
                    name : "Nokia",
                    url: "/mobiles/nokia"
                }
            ]
        }
    }
}

</script>
<style lang="scss">
.brands{
    padding:15px;
}
// .brand-name{
//     padding:10px;
// }
.center{
    width: 60px;
    height: 60px;
}

</style>