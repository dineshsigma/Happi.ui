
export const state = () => ({
    orderList: [],
    eachOrder: null,
    orderListOrderId: [],
});

export const mutations = {
    setOrderList(state, payload) {
        state.orderList = payload;
    },
    setEachOrder(state, payload) {
        state.eachOrder = payload;
    },
    orderListOrderId(state, payload) {
        state.orderListOrderId = payload;
    }
};

export const actions = {
    async getOrders({ commit, state }, payload) {
        var phone = this.$cookies.get('userDetails').phone;
        var response = await this.$http.$get(`https://dev-services.happimobiles.com/api/orders?phone=${phone}`);
        for (let i = 0; i < response.length; i++) {
            response[i].createdOn = response[i].createdOn.toString().split("GMT")[0];
        }
        commit('setOrderList', response);
        return response;
    },

    async getEachOrder({ commit, state }, payload) {
        var response = await this.$http.$get(`api/orders/${payload.order_id}`);
        try {
            response.payment_info = JSON.parse(response.payment_info);
            response.createdOn = response.createdOn.toString().split("GMT")[0];
            // console.log('Each Order', eachOrder);
        } catch (e) {
            console.log('Error');
        }
        commit('setEachOrder', response.data);
        return response;
    },

    async orderDetailsWithOrderId({commit, state} ,payload){
        var result = await this.$http.$get(`https://dev-services.happimobiles.com/api/orders/${payload.order_id}`);
        if (result.state == true) {
            commit('orderListOrderId', result.data);
        } else {
            commit('orderListOrderId', {});
        }
    }

};
