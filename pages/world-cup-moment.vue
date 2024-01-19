<template>
    <center>
        <div class="msg">
            <p class="cl-text mt-5">
                Our World Cup contest is closed. We believe in ensuring our
                customers and followers are happi. <br />So stay tuned to our
                Instagram page for more contests and offers. We have something
                big coming up!
            </p>
            <br />
            <nuxt-link to="/">
                <button
                    type="button"
                    class="btn btn-lg"
                    style="font-size: 1vw; font-weight: 800"
                >
                    Continue Shopping
                </button>
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
.msg {
    margin-top: 130px;
    margin-bottom: 60px;
}
.btn {
    margin-top: 25px;
    background-color: #fb9013;
}
.cl-text mt-5 {
    font-size: 1.5rem;
}

@media only screen and (max-width: 600px) {
    .btn {
        font-size: 5vw !important;
    }
}
</style>
