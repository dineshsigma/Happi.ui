<template lang="html">
    <div class="ps-desktop lightgray-bg sec-30px">
        <div class="ps-container">
                <div class="row">
                    <div class="col-6">
                        <div class="row deals-brands-card deals-desktop-card m-1">
                            <div class="col-12">
                                <h4 class="hbc-head">Search by Brands</h4>
                            </div>
                            <div v-for="brand in brandsList" class="col-3 mb-3 deals-cards">
                                <div class="hbc-list-card brand-icon">
                                    <nuxt-link :to="`${brand.url}`">
                                        <img
                                            :src="`${brand.imgTitle}`"
                                            class="brand-image"
                                            alt="happimobiles"
                                            />
                                        <!-- <p class="deal-name">{{deal.name}}</p> -->
                                    </nuxt-link>
                                </div>
                            </div> 
                        </div>
                    </div>

                    <div class="col-3">
                        <div class="row deals-brands-card m-1 white-bg">
                            <div class="col-12 pb-2">
                                <h4 class="hbc-head">Search by Categories</h4>
                            </div>
                            <div v-for="category in categoriesList" class="col-6 mb-2 deals-cards">
                                <div class="deal-list-card category-card-color">
                                    <nuxt-link :to="`${category.url}`">
                                        <img
                                            :src="`${category.imgTitle}`"
                                            class="deal-image"
                                            alt="happimobiles"
                                            />
                                        <p class="deal-name">{{category.name}}</p>
                                    </nuxt-link>
                                </div>
                            </div>
                            <div class="col-12 mb-2 deals-cards">
                                <div class="deal-list-card category-card-color">
                                    <nuxt-link to="/laptops/all">
                                        <img 
                                            src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/8aafc90f-6c7c-4aad-bb59-94c55a9aa8c1.svg"
                                            class="deal-image"
                                            alt="happimobiles"
                                            />
                                        <p class="deal-name">Laptops</p>
                                    </nuxt-link> 
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-3">
                        <div class="row deals-brands-card m-1 white-bg">
                            <div class="col-12">
                                <h4 class="hbc-head">Search by Deals</h4>
                            </div>
                            <div v-for="deal in dealsList" class="col-6 mb-3 deals-cards">
                                <div class="deal-list-card">
                                    <!-- <nuxt-link :to="`${deal.url}`"> -->
                                        <a @click="reload()">
                                            <img
                                                :src="`${deal.imgTitle}`"
                                                class="deal-image"
                                                alt="happimobiles"
                                                />
                                            <p class="deal-name">{{deal.name}}</p>
                                        </a>
                                    <!-- </nuxt-link> -->
                                </div>
                            </div> 
                        </div>
                    </div>

                </div>
            </div>

        </div>
    <!-- </div> -->
</template>

<script>
export default {
    name: 'HomeBrandsCategories',
    data(){
        return {
        brandsList: [
                {
                    imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/df15cd27-8f07-4ef3-bbe6-9ff439605ea4.png',
                    name: 'Apple',
                    url: '/mobiles/apple',
                },
                {
                    imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/5a6154b9-5ede-4bcc-9d70-cff742303cbc.png',  
                    name: 'Samsung',
                    url: '/mobiles/buy-samsung-mobiles-online',
                },
                {
                    imgTitle:'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/46889902-c66c-435d-a560-53dc99d7e2d2.png',
                    name: 'Oneplus',
                    url: '/mobiles/oneplus',
                },
                {
                    imgTitle:'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/a5efad32-ca71-43e0-8f59-e11ef89f9c2f.png',
                    name: 'MI',
                    url: '/mobiles/buy-mi-mobiles-online',
                },
                {
                    imgTitle:'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/57491562-4472-4b9e-9e7e-0af7931b4e44.png',
                    name: 'Lenovo',
                    url: '/laptops/lenovo',
                },
                {
                    imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/8264660e-8abd-418b-a374-9b4609d75f7c.png',
                    name: 'Lg',
                    url: '/tvs/lg',
                },
                {
                    imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/cf3995f7-995d-42e1-9244-960d600ea72e.png',  
                    name: 'Hp',
                    url: '/laptops/hp',
                },
                {
                    imgTitle:'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/319f6f9b-984d-4531-b14e-14871722a497.png',
                    name: 'Vivo',
                    url: '/mobiles/vivo',
                },
                {
                    imgTitle:'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/15c21429-5c5d-4b9b-b1a7-adb28a346ba2.png',
                    name: 'Dell',
                    url: '/laptops/dell',
                },
                {
                    imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/72e40f03-b89b-47f6-ab1c-78666a27eb33.png',
                    name: 'Philips',
                    url: '/search?q=philips%20beard%20trimmer%20black',
                },
                {
                    imgTitle:'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/a68cfc8c-9a38-46bd-9bb3-bd0616a3beb8.png',
                    name: 'Oppo',
                    url: '/mobiles/buy-oppo-mobiles-online',
                },
                {
                    imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/d1d185a5-9126-4bbf-b720-7005393b1fe4.png',
                    name: 'Nokia',
                    url: '/mobiles/nokia',
                }
            ],
        dealsList: [
            {
                imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/d930dbfc-aa96-4be9-91e8-be5a4614a5c3.png',
                name: 'Super Deals',
                url: '/',
            },
            {
                imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/48292efc-8d90-488c-85c3-e5f4cc638484.png',
                name: 'Discounts',
                url: '/',
            },
            {
                imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/2d22e864-06b6-479d-9204-93ad4006fb7a.png',
                name: 'Brand Offers',
                url: '/',
            },
            {
                imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/51c0f4bf-d342-4cee-8589-3cc143358d9d.png',
                name: 'Instant Discounts',
                url: '/',
            },
            {
                imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/6dd72924-5e58-4b60-a526-8e0ba7cee583.png',
                name: 'Cashbacks',
                url: '/',
            },
            {
                imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/e46d8864-3644-453c-93fc-b6b1c26355d8.png',
                name: 'Bank offers',
                url: '/',
            }
        ],
        categoriesList: [
            {
                imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/b9a31632-3dd3-4cfe-825d-a180e702f41a.svg',
                name: 'Mobiles',
                url: '/mobiles/all',
            },
            {
                imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/7964eef0-05a2-4e2d-a871-c067bdfd85e6.svg',
                name: 'All accessories',
                url: '/accessories/all',
            },
            {
                imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/85da01a4-df63-4bde-94ab-65fe1f018179.svg',
                name: 'Tablets',
                url: '/tablets/all',
            },
            {
                imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/b9a9a4c3-126c-4abe-a0d5-c568f01c0dfb.svg',
                name: "Tv's",
                url: '/tvs/all',
            }
            // {
            //     imgTitle: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/8aafc90f-6c7c-4aad-bb59-94c55a9aa8c1.svg',
            //     name: "Tv's",
            //     url: '/mobiles/buy-oppo-mobiles-online',
            // }  
        ],
       }
    },
    methods: {
        reload(){
            // console.log('-------------------------------')
            // this.$router.push('/')
            window.location.reload();
        }
    }
};
</script>

<style lang="scss" scoped>
.ps-desktop{
.ps-container{
    padding: 0 !important;
    background: transparent !important;
}
}
.hbc-list-card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px 15px;
    gap: 3%;
    isolation: isolate;
 
    height: 93px;
}
.brand-icon{
    background: #FFFFFF !important;
}
.category-card-color{
    background: #F9F9F9 !important;
}
.hbc-category-card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    // margin: 7%;
    // padding: 2%;
    text-align: center;
    // height: max-content;
    i{
        font-size:30px;
        padding: 2%;
    }
    p{
        font-family: 'Open Sans' !important;
        font-weight: 700;
        font-size: 12px;
        /* identical to box height, or 125% */

        text-align: center;

        color: #000000;
    }
}
.hbc-head{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    // line-height: 33px;
    /* identical to box height */


    color: #323232;
}

.deals-desktop-card{
    background: #FFFFFF !important;
}
.brand-image{
    height: 50px !important;
    // width: 30px;
    margin: 3%;
    text-align: center;
}
.deals-brands-card{
    // height: fit-content;
    // background: #EFEFEF;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2%;
}
.text-deals-desktop{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    text-transform: uppercase;

    color: #616161;
    }


</style>
