<template lang="html">
        <div class="col-12">
        <!-- <div class="ps-section__content pt-4 brands row">
                <div class="col-12 brand-heading">
                    <h3>Search by Categories</h3>
                </div> 
                <div
                class="brand-name"
                v-for="product in Categories"
                >
                    <nuxt-link :to="`${product.url}`" class="center">
                     <img :src="`${product.imgTitle}`" alt="happimobiles" v-lazy-load />
                           <p>{{product.name}}</p>
                    </nuxt-link>
                </div>
            </div> -->
            <div class="ps-section__content pt-4 brands">
            <div class="col-12">
                <h3>Search by Categories</h3>
            </div>
            <div class="row">
            <div class="col-6 icon-class">
                <nuxt-link to="/mobiles/all" >
                    <img src="https://d34e6224thkkna.cloudfront.net/homepage/Samsung.webp" alt="happimobiles" />
                           <p>Mobiles</p>
                </nuxt-link>
            </div>
            <div class="col-6">
                <nuxt-link to="/mobiles/all" >
                    <img src="https://d34e6224thkkna.cloudfront.net/homepage/Samsung.webp" alt="happimobiles" />
                           <p>Mobiles</p>
                </nuxt-link>
            </div>
            </div>
            <div class="row">
            <div class="col-6">
                <nuxt-link to="/mobiles/all" >
                    <img src="https://d34e6224thkkna.cloudfront.net/homepage/Samsung.webp" alt="happimobiles" />
                           <p>Mobiles</p>
                </nuxt-link>
            </div>
            <div class="col-6">
                <nuxt-link to="/mobiles/all" >
                    <img src="https://d34e6224thkkna.cloudfront.net/homepage/Samsung.webp" alt="happimobiles" />
                           <p>Mobiles</p>
                </nuxt-link>
            </div>
            </div>
            <div class="col-12">
                <nuxt-link to="/mobiles/all" >
                    <img src="https://d34e6224thkkna.cloudfront.net/homepage/Samsung.webp" alt="happimobiles"  />
                           <p>Mobiles</p>
                </nuxt-link>
            </div>
            </div>
        </div>
</template>
<script>

export default {
    name: 'HomeByCategories',
    data(){
        return {
            Categories: [
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

            ]
        }
    }
    
}
</script>
<style lang="scss">
#homepage-1 {
    .ps-deal-of-day {
        .ps-carousel {
            .swiper-pagination {
                position: relative;
                top: 0;
                left: 0;
                transform: translate(0, 0);
                margin-top: 10px;
                display: block !important;
                .swiper-pagination-bullet {
                    width: 10px;
                    height: 10px;
                    cursor: pointer;
                }
            }
        }
    }
}
.ps-product--inner .ps-product__thumbnail{
    .brands{
      background-color: #fff1e5;
    }
}
// .brands{
//   background-color: #fff1e5;
//   border-radius: 7px;
//   box-shadow: 0 0 5px -1px rgb(0 0 0 / 24%);
//   .swiper-wrapper{
//     img {
//       height:80px;
//     }
//     p{
//       margin-bottom: 0;
//     }
//   }
// }
// .center {
//     display: block;
//     margin-left: auto;
//     margin-right: auto;
//     width: 100%;
//     text-align: center;
// }
// .brand-name{
//     padding: 30px;
//     margin: 5px;
//     text-align: center;
// }
// .brand-heading{
//     color:#323232;
//     padding-bottom: 5px;
// }
.brands{
    padding:15px;
}
.icon-class{
    height:44px;
    width:44px;
}
</style>
