<template lang="html">
    <div class="ps-contact-map" v-if="storeObj.GoogleMapsHTML_tag != null">
 
        <iframe
            :src=storeObj.GoogleMapsHTML_tag
            height="490" 
        ></iframe>

        <!--<iframe v-else
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.139001441804!2d78.38770791482693!3d17.453059888039277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91638a9c265d%3A0x9a1cc2918bf7b53d!2sHappi%20Mobiles%20Corporate%20Office!5e0!3m2!1sen!2sin!4v1628227571905!5m2!1sen!2sin"
            height="500" 
        ></iframe> -->

       <h4 style="display:none;">hellooooo - {{ storeObj.GoogleMapsHTML_tag }}</h4>
    </div>
    <div class="ps-contact-map" v-else>

        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.139001441804!2d78.38770791482693!3d17.453059888039277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91638a9c265d%3A0x9a1cc2918bf7b53d!2sHappi%20Mobiles%20Corporate%20Office!5e0!3m2!1sen!2sin!4v1628227571905!5m2!1sen!2sin"
            height="500" 
        ></iframe>

    </div>
    
    
</template>

<script>
export default {
    name: 'ContactMap',
    props: {
        storeObj: {
            type: Object,
            default: () => {}
        }
    },

};
</script>

<style lang="scss" scoped>

</style>
