export const state = () => ({
    blogsList: [],
    blogObj:null
});


export const mutations = {
    setBlogList(state, payload) {
        state.blogsList = payload;
    },
    setBlogObj(state, payload) {
        state.blogObj = payload;
    },
};

export const actions = {
    async getBlogList({ commit, state }, payload) {

        var result = await this.$http.$get('blogs');
        if (result) {
            console.log("getBlogList",result)
            commit('setBlogList', result);
        } else {
            commit('setBlogList', []);
        }

        // var dataBase = (await mongoService({})).mongodb;
        // console.log("DATABASE Field",dataBase);
        // const blogs = dataBase.db('happi-new-sls').collection('blogs');
        // const receivedData = await blogs.find({});
        // console.log('=====receivedData', receivedData);
        // if (receivedData.length > 0) {
        //     commit('setBlogList', receivedData);
        // } else {
        //     commit('setBlogList', []);
        // }
    },
    async getBlogById({ commit, state }, payload) {
        // var dataBase = (await mongoService({})).mongodb;
        // const blogs = dataBase.db('happi-new-sls').collection('blogs');
        // const receivedData = await blogs.findOne({'linker':payload});
        // console.log('=====receivedData', receivedData);
        // if (receivedData != null) {
        //     commit('setBlogObj', receivedData);
        // } else {
        //     commit('setBlogObj', {});
        // }
    }
};