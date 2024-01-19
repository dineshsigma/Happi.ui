<template lang="html">
    <div class="ps-contact-info">
        <div class="container">
            <!-- <div class="ps-section__header">
                <h3></h3>
            </div> -->
            <div class="ps-section__header">
                <div class="row ">
                     <div class="ps-block--contact-info ">
                            <h4>{{ storeObj.RetailerLocalityArea }}</h4>
                            <!-- <p>
                                <a href="mailto:contact@martfury.com">
                                  Email:   contact@martfury.com
                                </a>
                               
                            </p> -->
                            <p class="m-0 p-0"> <span>Phone No : (+91) {{ storeObj.MobileNumber }}</span> </p>
                               <p class="m-0 p-0"> <span> {{ storeObj.city }},{{ storeObj.State }}</span> </p>
                             
                               <p class="m-0 p-0"> <span> {{ storeObj.Pincode }}</span> </p>
                               <p class="m-0 p-0"> <span>  {{ storeObj.FullPostalAddress }} </span> </p>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactInfo',
    props: {
        storeObj: {
            type: Object,
            default: () => {}
        }
    }
};
</script>

<style lang="scss" scoped></style>
