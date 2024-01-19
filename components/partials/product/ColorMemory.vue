
<template lang="html">
    <div>
        <div v-if="modelProducts != null && modelProducts.index != null && modelProducts.index.colors.length !== 0" class="row" style="margin-top:20px;margin-bottom:20px">

            <div class="col-12">
                <h4 style="margin-bottom: 25px;font-weight: bold;">Color</h4>
            </div>
            <div class="col-12">
                <div class="row">
                    <div class="col-xs-3" style="margin: 5px;" v-for="item in modelProducts.index.colors"  @click="goToColor(item)">
                        <div :class="enableColor(item)">   
                            <div class="color-variataion" :class="color(item)" :aria-disabled="true">
                            <img alt='Product Color Combinations happi' height="25px" :src="getImageFromColor(item)" >
                            {{item}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="(modelProducts != null && modelProducts.index != null && modelProducts.index.memory.length !== 0) && (modelProducts.index.memory.length >= 1 && modelProducts.index.memory[0].trim() !== '')" class="row" style="margin-bottom:20px">
            <div class="col-12">
                <h4 style="margin-bottom: 25px;font-weight: bold;">Memory</h4>
            </div>
            <div class="col-12">
                <div class="row">
                    <div class="col-xs-3 " style="margin: 5px;margin-bottom:20px;" v-for="item in modelProducts.index.memory"  @click="goToMemory(item)">
                        <div :class="enableMemory(item)">
                            <span class="color-variataion" :class="memory(item)">{{item}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'ColorMemory',
    computed: {
        ...mapState({
            product: (state) => state.product.product,
            modelProducts: (state) => state.product.modelProducts,
        }),
    },
    // created: async function () {
    //   setTimeout(() =>{
    //       console.log("this.modelProducts", this.product);
    //   }, 2000)
    // },
    methods: {
        async goToColor(item){
           for(var i = 0; i < this.modelProducts.combi.length; i++) {
               if(this.modelProducts.combi[i].color_name.trim() === item.trim() && this.modelProducts.combi[i].memory_info.trim() === this.product.memory_info.trim() ){
                    await this.$store.dispatch(
                        'product/getProductsById',
                        this.modelProducts.combi[i].linker
                    );
                    this.$router.push(`/${this.modelProducts.combi[i].linker}`);
                    window.scroll({
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                    })
                   break;
               }
           }
        },
        async goToMemory(item){
            for(var i = 0; i < this.modelProducts.combi.length; i++) {
               if(this.modelProducts.combi[i].color_name.trim() === this.product.color_name.trim() && this.modelProducts.combi[i].memory_info.trim() === item.trim() ){
                   //this.$router.push(`/${this.modelProducts.combi[i].linker}`);
                   await this.$store.dispatch(
                        'product/getProductsById',
                        this.modelProducts.combi[i].linker
                    );
                    this.$router.push(`/${this.modelProducts.combi[i].linker}`);

                    window.scroll({
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                    })
                   break;
               }
           }
        },
        memory(item){
            if(this.product.memory_info.trim() === item.trim()){
                return "selected"
            }
        },
        color(item){
            if(this.product.color_name.trim() === item.trim()){
                return "selected"
            }
        },
        getImageFromColor(color){
            var item = null;
            for(var i = 0; i < this.modelProducts.combi.length; i++) {
                if(this.modelProducts.combi[i].color_name.trim() === color.trim()){
                    item = this.modelProducts.combi[i]
                }
            }
            if(item.image_url){
                return item.image_url;
            }
            else if(item.pictures == null || item.pictures == undefined ){
                return item.pictures_new[0];
            }else{
                
                return `https://happimobiles.s3.ap-south-1.amazonaws.com/happi/${item.pictures[0]}.jpg`;
            }    
        },
        enableColor(item){
            let count = 0;
           for(var i = 0; i < this.modelProducts.combi.length; i++) {
               if(this.modelProducts.combi[i].color_name.trim() === item.trim() && this.modelProducts.combi[i].memory_info.trim() === this.product.memory_info.trim() ){
                count = count + 1;
               }
           }
           if (count == 0){
                return "color-disable"
           }
        },
        enableMemory(item){
            let count = 0;
           for(var i = 0; i < this.modelProducts.combi.length; i++) {
            if(this.modelProducts.combi[i].color_name.trim() === this.product.color_name.trim() && this.modelProducts.combi[i].memory_info.trim() === item.trim() ){
                count = count + 1;
               }
           }
           if (count == 0){
                return "color-disable"
           }
        }
    }
}

</script>

<style>
.color-variataion{
    font-size: 14px;
    border: 1px solid #9d9d9d;
    padding: 8px;
    font-weight: 700;
    border-radius: 8px;
    cursor: pointer;
    width: fit-content;
}
.selected{
    border: 2px solid #fb9013;
    color: #000;
    font-weight: bold;
}
</style>
