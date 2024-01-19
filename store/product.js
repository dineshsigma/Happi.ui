import  { serializeQuery } from '~/repositories/Repository.js';

export const state = () => ({
    product: null,
    products: null,
    searchResults: null,
    cartProducts: [],
    wishlistItems: null,
    compareItems: null,
    brands: null,
    categories: null,
    total: 0,
    productReviews: [],
    prodOffersList: [],
    reviewSummary: {},
    relatedProducts:[],
    modelProducts:{}
});

export const mutations = {
    setProducts(state, payload) {
        state.products = payload;
    },
    setCartProducts(state, payload) {
        state.cartProducts = payload;
    },
    setWishlistItems(state, payload) {
        state.wishlistItems = payload;
    },
    setCompareItems(state, payload) {
        state.compareItems = payload;
    },
    setProduct(state, payload) {
        state.product = payload;
    },
    setBrands(state, payload) {
        state.brands = payload;
    },
    setCategories(state, payload) {
        state.categories = payload;
    },
    setSearchResults(state, payload) {
        state.searchResults = payload;
    },
    setTotal(state, payload) {
        state.total = payload;
    },
    setProductReview(state, payload) {
        state.productReviews = payload;
    },
    setProdOfferList(state, payload) {
        state.prodOffersList = payload;
    },
    setReviewSummary(state, payload) {
        state.reviewSummary = payload;
    },
    setRelatedProducts(state, payload) {
        state.relatedProducts = payload;
    },
    setModelProducts(state, payload) {
        state.modelProducts = payload;
    }
};

export const actions = {
    async getProducts({ commit }, payload) {

        // var dataBase = (await mongoService({})).mongodb;
        // const products = dataBase.db('happi-new-sls').collection('product');
        // const prodList = await products.find({ ispublished: true, category: 'Mobiles / Apple' }, { skip: 0, limit: 15 });
        // commit('setProducts', prodList);
        // return prodList;
    },

    async getTotalRecords({ commit }, payload) {
        // const reponse = await this.$http.$get(`products/count`)
        //     .then(response => {
        //         commit('setTotal', response.data);
        //         return response.data;
        //     })
        //     .catch(error => ({ error: JSON.stringify(error) }));
        // return reponse;
    },

    async getOffers({ commit }, payload){
        // var query = `prodcutId=${payload.id}&price=${payload.payPrice}&category=${payload.category.toString()}`
        // const reponse = await this.$http.$get(`offers?prodcutId=`)
        // .then(response => {
        //         commit('setProdOfferList', response.data);
        //         return response.data;
        //     })
        //     .catch(error => ({ error: JSON.stringify(error) }));
    },
    async getRelatedProducts({ commit, dispatch }, payload) {
        var tallyPrice = 0;
        if(payload.price < 5000){
            tallyPrice = 1000;
        }else if(payload.price < 20000) {
            tallyPrice = 5000;
        }else if(payload.price < 50000){
            tallyPrice = 10000;
        }else{

        }
        if(payload.model_name !== undefined && payload.model_name !== ''){
           var response = await this.$http.$get(`combination?model_name=${payload.model_name}`)
            commit('setModelProducts', response);
        }else{
            commit('setModelProducts', {});
        }

        return {  };
    },
    async getProductsById({ commit, dispatch }, payload) {

        const response = await this.$http.$get(`https://dev-services.happimobiles.com/api/product/${payload}`);
        if(response == null){
            return
        }
        commit('setProduct', response.product);
        commit('setModelProducts', response.modelProducts);
        commit('setRelatedProducts', response.relatedProducts);
        var eachProd = response.product;
        var key = eachProd.category[0];  //   eachProd.name.split(" ")[0];
        if(eachProd.category[1] !== null){
            key = eachProd.category[1];
        }



        //dispatch('getRelatedProducts', {brand:key, price:eachProd.payPrice, model_name:eachProd.model_name});


        // const reviews = dataBase
        //     .db('happi-new-sls')
        //     .collection('customer_reviews');
        // const reviewsList = await reviews.find({
        //     is_active: true,
        //     productId: eachProd.id
        // });
        // commit('setProductReview', reviewsList);
        //
        // const reviewAvg = {
        //     '1': (
        //         await reviews.find({
        //             is_active: true,
        //             productId: eachProd.id,
        //             product_rating: 1
        //         })
        //     ).length,
        //     '2': (
        //         await reviews.find({
        //             is_active: true,
        //             productId: eachProd.id,
        //             product_rating: 2
        //         })
        //     ).length,
        //     '3': (
        //         await reviews.find({
        //             is_active: true,
        //             productId: eachProd.id,
        //             product_rating: 3
        //         })
        //     ).length,
        //     '4': (
        //         await reviews.find({
        //             is_active: true,
        //             productId: eachProd.id,
        //             product_rating: 4
        //         })
        //     ).length,
        //     '5': (
        //         await reviews.find({
        //             is_active: true,
        //             productId: eachProd.id,
        //             product_rating: 5
        //         })
        //     ).length
        // };
        //
        // // console.log(
        // //     `Successfully grouped purchases for customers.`,
        // //     reviewAvg
        // // );
        // let ratingsCount = [];
        //
        // for (const rem in reviewAvg) {
        //     let eachRating = {};
        //     eachRating[`${rem}`] = reviewAvg[rem];
        //
        //     ratingsCount.push(eachRating)
        // }
        // // console.log("RATINGS", ratingsCount);
        // commit('setReviewSummary', ratingsCount);



        return eachProd;


    },

    async getOfferByCategory({ commit }, payload) {
        // var mongoContext = (await mongoService({}));
        // var dataBase = mongoContext.mongodb;
        //
        // const prodOffers = dataBase
        //     .db('happi-new-sls')
        //     .collection('product_offer');
        // const productOffers = await prodOffers.find({ id: '616062001jf61b' });
        //
        // if (productOffers.length > 0) {
        //     let pl = [];
        //     for (let i = 0; i < productOffers[0].description.length; i++) {
        //         const element = productOffers[0].description[i];
        //         let tempObj = [];
        //         tempObj.push(element.split('|')[0]);
        //         tempObj.push(element.split('|')[1]);
        //         pl.push(tempObj);
        //     }
        //     commit('setProdOfferList', pl);
        // } else {
        //     commit('setProdOfferList', []);
        // }
        //
        // return eachProd;

    },
    // async getProductReviewsById({commit},payload) {
    //     const reviews = [{ name: 'first reivew' },
    //     { name: "second review" }];

    //     commit('setProductReview', reviews);
    //     return reviews;
    // },

    async getProductByKeyword({ commit }, payload) {
        const reponse = await this.$http.$get(
                `products?${serializeQuery(payload)}`
            )
            .then(response => {
                commit('setSearchResults', response.data);
                commit('setTotal', response.data.length);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getCartProducts({ commit }, payload) {

        // let query = '';
        // payload.forEach(item => {
        //     if (query === '') {
        //         query = `id=${item}`;
        //     } else {
        //         query = query + `&id=${item}`;
        //     }
        // });
        // const reponse = await this.$http.$get(`${baseUrl}/products?${query}`)
        //     .then(response => {
        //         commit('setCartProducts', response.data);
        // var dataBase = (await mongoService({})).mongodb;

        // const reponseData = dataBase.db('happi-new-sls').collection('cart');
        // const response = await reponseData.findOne({ userId: 1234 });

        // let storageItems = JSON.parse(localStorage.getItem('cartItems'));

        // commit('setCartProducts', storageItems);
        // console.log("ALL CART ITESM",storageItems);
        // return storageItems

        // const reponse = await this.$http.$get(`${baseUrl}/products?${query}`)
        //     .then(response => {
        //         commit('setCartProducts', response.data);
        //         console.log("=========response", response.data);
        //         return response.data;
        //     })
        //     .catch(error => ({ error: JSON.stringify(error) }));
        // return reponse;
        // var dataBase = (await mongoService({})).mongodb;
        // const cart = dataBase.db('happi-new-sls').collection('cart');
        //
        // const cartList = await cart.find({});
        // // console.log("====testcartList", cartList);
        // commit('setCartProducts', cartList);
        // return cartList;

    },

    async getWishlishtProducts({ commit }, payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `id=${item}`;
            } else {
                query = query + `&id=${item}`;
            }
        });
        const reponse = await this.$http.$get(`products?${query}`)
            .then(response => {
                commit('setWishlistItems', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getCompareProducts({ commit }, payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `id=${item}`;
            } else {
                query = query + `&id=${item}`;
            }
        });
        const reponse = await this.$http.$get(`products?${query}`)
            .then(response => {
                commit('setCompareItems', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getProductBrands({ commit }) {
        const reponse = await this.$http.$get(`brands`)
            .then(response => {
                commit('setBrands', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getProductCategories({ commit }) {
        const reponse = await this.$http.$get(`product-categories`)
            .then(response => {
                commit('setCategories', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getProductsByBrands({ commit }, payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `slug_in=${item}`;
            } else {
                query = query + `&slug_in=${item}`;
            }
        });
        const reponse = await this.$http.$get(`brands?${query}`)
            .then(response => {
                if (response.data) {
                    const brands = response.data;
                    let products = [];
                    brands.forEach(brand => {
                        brand.products.forEach(product => {
                            products.push(product);
                        });
                    });
                    commit('setProducts', products);
                    commit('setTotal', products.length);
                    return products;
                } else {
                    return null;
                }
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getProductsByPriceRange({ commit }, payload) {
        const reponse = await this.$http.$get(
                `${baseUrl}/products?${serializeQuery(payload)}`
            )
            .then(response => {
                commit('setProducts', response.data);
                commit('setSearchResults', response.data);
                commit('setTotal', response.data.length);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
};
