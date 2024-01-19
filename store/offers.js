
export const state = () => ({
    offersList: []
});

export const mutations = {
    setOfferList(state, payload) {
        state.offersList = payload;
    }
};

export const actions = {
    async getOfferList({ commit, state }, payload) {

        var response = await this.$http.$post(`offers-fetch`, payload);

        // var resp = await this.$http.$post(options);

        commit('setOfferList', response);

    },
  
};