export const state = () => ({
    isloading: false,
    message: "",
    getInTouch: {
        name: null,
        email: null,
        phoneNo: null,
        comment: null
    },
    subcribeForm:{
        email:null
    }
});


export const mutations = {
    setLoading(state, payload) {
        state.isloading = payload;
    },
    setMessage(state, payload) {
        state.message = payload;
    },
    setContactForm(state, payload) {
        state.getInTouch = payload;
    },
    setSubcribeForm(state, payload) {
        state.subcribeForm = payload;
    },
};
export const actions = {
    async submitContactForm({ commit, state }, payload) {
        commit('setLoading', true);

        const result = await this.$http.$post('contact-us', payload);
        commit('setLoading', false);
        commit('setMessage', "Thank you for submitting your contact");
        commit('setContactForm', {
            name: null,
            email: null,
            phoneNo: null,
            comment: null
        })
        setTimeout(function(){
            commit('setMessage', "");
        }, 25000);
        return result.data;
    },

    async submitSubcribeForm({ commit, state }, payload){
        commit('setLoading', true);
        const result = await this.$http.$post('subscribers_user', payload);
        commit('setLoading', false);
    }

}
