
const calculateAmount = obj =>
    Object.values(obj)
        .reduce((acc, { quantity, price }) => acc + quantity * price, 0)
        .toFixed(2);

export const state = () => ({
    total: 0,
    amount: 0,
    
    cartItems: [],
    cartInfo: null,
    cartProducts: [],
    storesList: [],
    citiesList: [],
    isToast: null
});

export const mutations = {
    initCart(state, payload) {
        state.cartItems = payload.cartItems;
        state.amount = payload.amount;
        state.total = payload.total;
    },

    setLoading(state, payload) {
        state.loading = payload;
    },
    setCartInfo(state, payload) {
        state.cartInfo = payload;
    },
    setStoreList(state, payload) {
        state.storesList = payload;
    },
    setCities(state, payload) {
        state.citiesList = payload;
    },
    addItem(state, payload) {
        if (state.cartItems !== null) {
            let existItem = state.cartItems.find(
                item => item.id === payload.id
            );
            if (existItem) {
                existItem.quantity += payload.quantity;
            } else {
                state.cartItems.push(payload);
            }
            state.total++;
        } else {
            state.cartItems.push(payload);
            state.total = 1;
        }
        state.amount = calculateAmount(state.cartItems);
    },

    removeItem: (state, payload) => {
        const index = state.cartItems.findIndex(item => item.id === payload.id);
        state.total = state.total - payload.quantity;
        state.cartItems.splice(index, 1);
        state.amount = calculateAmount(state.cartItems);
        if (state.cartItems.length === 0) {
            state.cartItems = [];
            state.amount = 0;
            state.total = 0;
            if(localStorage != null){
                localStorage.clear();
            }
        }
    },

    increaseItemQuantity(state, payload) {
        // console.log('====payload===', payload);
        // console.log('===state===', state);
        // let selectedItem = state.cartItems.find(item => item.id === payload.id);
        // if (selectedItem) {
        //     selectedItem.quantity++;
        //     state.total++;
        //     state.amount = calculateAmount(state.cartItems);
        // }
    },

    decreaseItemQuantity(state, payload) {
        let selectedItem = state.cartItems.find(item => item.id === payload.id);
        if (selectedItem && selectedItem.quantity > 1) {
            selectedItem.quantity--;
            state.total--;
            state.amount = calculateAmount(state.cartItems);
        }
    },

    clearCart: state => {
        state.cartItems = [];
        state.amount = 0;
        state.total = 0;
    },
    showToast(state, payload) {
        state.isToast = payload;
    }

};

export const actions = {
    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(
            c
        ) {
            var r = (Math.random() * 16) | 0,
                v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    },
    async addProductToCart({ commit, state }, payload) {
        payload.id = payload.id.replace('happi|','');
        let cartId = this.$cookies.get('cart_id');
        let type = ""
        let bajajScheme = localStorage.getItem('bajajscheme')
        if(bajajScheme){
            type = "bajaj"
        }
        else{
            type = "nonbajaj"
        }
        let userId = this.$cookies.get('user_exist');
        var isCartExist = true;
        if (cartId == null) {
            cartId = 'xxxxxxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
                /[xy]/g,
                function(c) {
                    var r = (Math.random() * 16) | 0,
                        v = c == 'x' ? r : (r & 0x3) | 0x8;
                    return v.toString(16);
                }
            );
            this.$cookies.set('cart_id', cartId, {
                path: '/',
                maxAge: 60 * 60 * 24 * 30
            });
            isCartExist = false;
        };
        payload.cartId = cartId;
        payload.type = type;
        payload.schema = JSON.parse(bajajScheme);
        var response = await this.$http.$post(`https://dev-services.happimobiles.com/api/cart`, payload);
        var prodSyncAPI =  this.$http.$get(`https://dev-services.happimobiles.com/api/priceupdateFromApx?id=${payload.id}`);

        // console.log("addProductToCart", response);
        // var dataBase = (await mongoService({})).mongodb;
        // const cart = dataBase.db('happi-new-sls').collection('cart');
        //
        // var isCartExist = true;
        // var cartObj = {};
        // let cartId = this.$cookies.get('cart_id');
        // let userId = this.$cookies.get('user_exist');
        //
        // if (cartId == null) {
        //     cartId = 'xxxxxxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        //         /[xy]/g,
        //         function(c) {
        //             var r = (Math.random() * 16) | 0,
        //                 v = c == 'x' ? r : (r & 0x3) | 0x8;
        //             return v.toString(16);
        //         }
        //     );
        //     this.$cookies.set('cart_id', cartId, {
        //         path: '/',
        //         maxAge: 60 * 60 * 24 * 30
        //     });
        //     isCartExist = false;
        // }
        //
        // let cartDB = await cart.findOne({ cartId: cartId });
        // console.log('PAYLOAD DATA', payload);
        // if (cartDB == null) {
        //     cartObj.cartId = cartId;
        //     cartObj.items = [];
        //     userId != null ? (cartObj.phone = userId) : 0;
        //     let item = {
        //         productId: payload.id ,
        //         cartPrice: payload.payPrice,
        //         quantity: payload.quantity,
        //         category: payload.category
        //     };
        //     cartObj.items.push(item);
        //     cartObj.createdOn = new Date();
        //
        //     cartObj.products = [payload.productId];
        //     // console.log('CART OBJ', cartObj);
        //     if (
        //         this.$cookies.get('userDetails') &&
        //         this.$cookies.get('userDetails') != undefined
        //     ) {
        //         cartObj.userId = this.$cookies.get('userDetails').id;
        //     }
        //     // console.log("USER DETila",this.$cookies.get('userDetails'));
        //     console.log("CART OBJ 2",cartObj);
        //     await cart.insertOne(cartObj);
        // } else {
        //     let products = [];
        //     var quantitySync = false;
        //     cartDB.items.map(item => {
        //         // console.log("AAAA",item.productId,"====",payload.productId);
        //         if (item.productId === payload.id) {
        //             quantitySync = true;
        //             item.quantity++;
        //         }
        //         products.push(item.productId);
        //     });
        //
        //     if (!quantitySync) {
        //         let item = {
        //             productId: payload.id,
        //             cartPrice: payload.payPrice,
        //             quantity: payload.quantity
        //         };
        //         cartDB.items.push(item);
        //         products.push(item.id);
        //     }
        //     cartDB.products = products;
        //     console.log("PRDS",cartDB);
        //
        //     await cart.updateOne({ cartId: cartId }, cartDB);
        // }
        return;
    },

    async getCartItems({ commit }, payload) {
        let cartId = this.$cookies.get('cart_id');
        if (cartId == null) {
            return;
        }
//https://dev-services-bkp1.happimobiles.com/
        var response = await this.$http.$post(`https://dev-services.happimobiles.com/api/cart/fetch`, {
            cartId: cartId
        });
        // console.log(response, 'CART RESPONSE');

        commit('setCartInfo', response);
        commit('initCart', response);

        return response;
    },

    async valiDateCoupon({ commit }, payload) {
        var response = await this.$http.$post(`api/cart/coupon`, payload);
        return response;
    },

    async deliveryOptionToCart({ commit }, payload) {
        let cartId = this.$cookies.get('cart_id');
        if (cartId == null) {
            return;
        }

        var response = await this.$http.$post(`api/cart/deliveryOption`, {
            payload:payload,
            cart_id:cartId,
            userDetails: localStorage.getItem('userDetails') != null ? JSON.parse(localStorage.getItem('userDetails')) : {
                //phone:
            }
        });

        // var dataBase = (await mongoService({})).mongodb;
        // const cartCollection = dataBase.db('happi-new-sls').collection('cart');
        //
        //
        //
        // let cart = await cartCollection.findOne({ cartId: cartId });
        // if (cart == null) {
        //     return;
        // }
        //
        // if (
        //     payload.selectedOffer != undefined &&
        //     payload.selectedOffer != null
        // ) {
        //     cart.selectedOffer = payload.selectedOffer;
        // } else {
        //     cart.deliveryType = payload.deliveryType;
        //     if (payload.deliveryType == 'delivery') {
        //         cart.selectedAddress = payload.address;
        //         cart.selectedStore = '';
        //     } else {
        //         cart.selectedAddress = '';
        //         cart.selectedStore = payload.store;
        //     }
        //     console.log("userDetails", this.$cookies.get('userDetails'))
        //     cart.userInfo = JSON.parse(JSON.stringify(this.$cookies.get('userDetails')));
        // }
        //
        // await cartCollection.updateOne({ cartId: cartId }, cart);

        return;
    },

    async updateCart({ commit }, payload) {
 
        let cartId = this.$cookies.get('cart_id');
        if (cartId == null) {
            return;
        }
        var response = await this.$http.$post(`api/cart/updateCart`, {
            payload:payload,
            cartId:cartId,
        });
        
        if(state.cartItems == undefined){
            if(localStorage != null){
                localStorage.clear();
            }
        }

        // var dataBase = (await mongoService({})).mongodb;
        // const cartCollection = dataBase.db('happi-new-sls').collection('cart');
        // let cart = await cartCollection.findOne({ cartId: cartId });
        // cart.items.map(item => {
        //     if (item.productId === payload.productId) {
        //         item.quantity = item.quantity + payload.quantity;
        //     }
        // });
        // var index = null;
        // for (let i = 0; i < cart.items.length; i++) {
        //     const element = cart.items[i];
        //     if (element.quantity == 0) {
        //         index = i;
        //     }
        // }
        // if (index != null) {
        //     cart.items.splice(index, 1);
        // }
        //
        // console.log('AFTER SLICE', cart.items);
        // await cartCollection.updateOne({ cartId: cartId }, cart);

        return response;

    },
    removeProductFromCart({ commit, state }, payload) {
        commit('removeItem', payload);
        // var dataBase = (await mongoService({})).mongodb;
        // const cartDB = dataBase.db('happi-new-sls').collection('cart');
        // try {
        //     cartDB.deleteOne({status: "cart"});
        // } catch (e) {
        //     console.error('Failed to log in', e);
        // }
        // console.log('Deleted documents =>', cartDB);

        const cookieParams = {
            total: state.total,
            amount: state.amount,
            cartItems: state.cartItems
        };

        this.$cookies.set('cart', cookieParams, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    },

    increaseCartItemQuantity({ commit, state }, payload) {
        commit('increaseItemQuantity', payload);
        const cookieParams = {
            total: state.total,
            amount: state.amount,
            cartItems: state.cartItems
        };

        this.$cookies.set('cart', cookieParams, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    },

    decreaseCartItemQuantity({ commit, state }, payload) {
        commit('decreaseItemQuantity', payload);
        const cookieParams = {
            total: state.total,
            amount: state.amount,
            cartItems: state.cartItems
        };

        this.$cookies.set('cart', cookieParams, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    },

    clearCart({ commit }) {
        commit('clearCart');
        const cookieParams = {
            total: 0,
            amount: 0,
            cartItems: []
        };
        this.$cookies.set('cart', cookieParams, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    },

    async getStoreList({ commit, state }, payload) {
        var result = await this.$http.$get('stores');
        if (result) {
            commit('setStoreList', result.storeList);
            commit('setCities', result.cities);
        } else {
            commit('setStoreList', []);
            commit('setCities', []);
        }
    },

    toastView({commit,state},payload) {
        // let tempObj = {
        //     show : payload.show,
        //     itemName : payload.name
        // }
        commit("showToast",payload);
    }

};