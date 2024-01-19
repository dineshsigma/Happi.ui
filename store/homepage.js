export const state = () => ({
    isLoggedIn: true,
   
});

export const mutations = {
    setIsLoggedIn(state, payload) {
        state.isLoggedIn = payload;
    },
    
};

export const actions = {
    async getHomepage({ commit, state }, payload) {
        
        var response;
        try {
            response = await this.$http.$get(`https://www.happimobiles.com/?json=1`);
        } catch (error) {
            console.log('error', error);
        }

      
        return response.data;
    },
};
