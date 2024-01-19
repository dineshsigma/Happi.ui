
export const state = () => ({
    appDrawer: false,
    currentDrawerContent: null,
    currency: '₹',
    homepage:{},
    menuCategories: [],
    appLoader: false,
});

export const mutations = {
    setAppDrawer(state, payload) {
        state.appDrawer = payload;
    },

    setCurrentDrawerContent(state, payload) {
        state.currentDrawerContent = payload;
    },

    setCurrency(state, payload) {
        state.currency = payload;
    },
    setHomepage(state, payload) {
        state.homepage = payload;
    },
    setMenuCategories(state, payload) {
        state.menuCategories = payload;
    },
    setAppLoader(state, payload){
        state.appLoader = payload
    }

};

export const actions = {
    changeCurrency({ commit, state }, payload) {
        commit('setCurrency', payload);
        const cookieParams = {
            data: state.currency
        };

        this.$cookies.set('currency', cookieParams, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    },
};
