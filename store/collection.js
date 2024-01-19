

export const state = () => ({
    collections: null,
    categories: null,
    queries: null,
    menu: [],
});

export const mutations = {
    setCollections(state, payload) {
        state.collections = payload;
    },
    setMenu(state, payload){
        state.menu = payload;
    },
    setCategories(state, payload) {
        state.categories = payload;
    },
    setQueries(state, payload) {
        state.queries = payload;
    }
};

export const actions = {
    async getMenu({commit}, payload) {
        const result = await this.$http.$get(`api/cat`);
        //console.log("RESULTTTT", result);

        commit('setMenu', {menuCategories:result.data});

        return {menuCategories:result.data};

    },
    async getCollectionsBySlugs({ commit }, payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `slug_in=${item}`;
            } else {
                query = query + `&slug_in=${item}`;
            }
        });

        // const reponse = await this.$http.$get(`${baseUrl}/collections?${query}`)
        //     .then(response => {
        //         commit('setCollections', response.data);
        //         return response.data;
        //     })
        //     .catch(error => ({ error: JSON.stringify(error) }));
        return {};
    },
    async getCategoriesBySlugs({ commit }, payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `slug_in=${item}`;
            } else {
                query = query + `&slug_in=${item}`;
            }
        });
        const reponse = await this.$http.$get(
            `/product-categories?${query}`
        )
            .then(response => {
                commit('setCategories', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
};
