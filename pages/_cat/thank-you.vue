<template>
    <center>
        <div class="msg">
        <h3>Thank You!</h3>
        <p class="cl-text mt-5">For any support pls call  <a href="tel:9100412345">9100412345</a></p>
        <br>
            <nuxt-link to="/">
            <button type='button'  class='btn btn-lg ' style="font-size:1vw; font-weight:800 ">Continue Shopping</button>
            </nuxt-link>
        </div>                       
    </center>
</template>

<script>
// export default {
//     name: 'thankyou',
//     created() 
//     {
//         setTimeout(function(){
//             location.replace('/')
//         }, 2000)
//     }
// };

</script>

<style scoped>
.msg{
    margin-top: 130px;
    margin-bottom: 60px;
}
.btn
{
    margin-top:25px;
    background-color:#FB9013 ;
}

@media only screen and (max-width: 600px) {
  .btn{
      font-size:5vw!important;
  }
}
  
</style>