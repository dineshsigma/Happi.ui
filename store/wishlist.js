
export const state = () => ({
    items: [],
    total: null,
    loading: false,
    wishlistItems: null,
    wishlistProductIds: [],
    itemAddedToWishlist:'',
});

export const mutations = {
    initWishlist(state, payload) {
        // console.log('test');
        state.items = payload.items;
        state.total = payload.total;
    },
    setItems(state, payload) {
        if (state.total !== null) {
            const existItem = state.items.find(item => item.id === payload.id);
            if (!existItem) {
                state.items.push({
                    id: payload.id
                });
                state.total = state.total + 1;
            }
        } else {
            state.items.push({
                id: payload.id
            });
            state.total = state.total + 1;
        }
    },

    removeItem(state, payload) {
        // console.log(payload, 'PAYLOAD REMOVE', state.items)
        const index = state.items.findIndex(item => item.id === payload.product_id);
        // console.log(index, 'INDEX');
        state.total = state.total - 1;
        state.items.splice(index, 1);
    },
    setWishlistItems(state, payload) {
        state.wishlistItems = payload;
    },
    setWishlistProductIds(state, payload){
        state.wishlistProductIds = payload;
    },
    itemAddedToWishlist(state, payload){
        state.itemAddedToWishlist = payload
    }
};
export const actions = {
    async addItemToWishlist({ commit, state }, payload) {
        const result = await this.$http.$post('api/wishlist', {
                user_id: payload.user_id,
                product_id: payload.product_id
        });
        if (result == "ok") {
            commit('itemAddedToWishlist', result);
        } else {
            commit('itemAddedToWishlist', {});
        }
        return result;
        
        /*
        var dataBase = (await mongoService({})).mongodb;
        console.log('Wishlist data', payload);

        const wishlist = dataBase.db('happi-new-sls').collection('wishlist');

        const isProdExist = await wishlist.find({
            user_id: payload.user_id,
            product_id: payload.product_id,
            //id: payload.id
        });

        if (isProdExist.length != 0) {
            console.log('LENG', isProdExist);

            return 'notok';
        }
        try {
            await wishlist.insertOne(payload);
        } catch (err) {
            console.error('Failed to log in', err);
        }
        return 'ok';
         */

        dispatch('getWishlist', {user_id: payload.user_id});
    },

    async removeItemFromWishlist({ commit, state }, payload) {
        var str = [];
        for (var p in payload)
            if (payload.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(payload[p]));
            }
        str = str.join("&");

        const result = await this.$http.$delete('api/wishlist?'+str);
        if (result == "ok") {
            commit('removeItem', payload);
        } else {
            commit('removeItem', {});
        }
        return result;

        /*
        var dataBase = (await mongoService({})).mongodb;
        // console.log('PYLOD', payload);
        const wishlist = dataBase.db('happi-new-sls').collection('wishlist');
        let tempstatus = await wishlist.deleteOne({
            product_id: payload.product_id,
            user_id: payload.user_id
        });
         */

        // dispatch('getWishlist', {
        //     user_id: payload.user_id
        // });
    },

    async getWishlist({ commit, state }, payload) {



        if(this.$cookies.get('userDetails') == null){
            return
        }

        var str = [];
        for (var p in payload)
            if (payload.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(payload[p]));
            }
        str = str.join("&");

        var result = await this.$http.$get('api/wishlist?'+str);

        // console.log('result--',result)
        commit('initWishlist', { items: result.prodList , total: result.prodList.length });
        commit('setWishlistItems', result.prodList);
        commit('setWishlistProductIds', result.productIds);
        return result.data;
    }
};
