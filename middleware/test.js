export default async function(context){
    console.log("TEST RUN MIDDLEWARE", context.route.params.slug);
    var product = await context.$axios.get(`https://dev-services.happimobiles.com/api/product/${context.route.params.slug}`);
    console.log("product.name", product.data.product.name);

    //next();
}
