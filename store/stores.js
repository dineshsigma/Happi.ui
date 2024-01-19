
export const state = () => ({
    storesList: [],
    citiesList: [],
    storeObj : null,
    setStoreManage : [],
    storeElectricResponse :"",
    getHistoryData : [],
});

export const mutations = {
    setStoreList(state, payload) {
        state.storesList = payload;
    },
    setCities(state, payload) {
        state.citiesList = payload;
    },
    setStoreObj(state, payload) {
        state.storeObj = payload;
    },
    setStoreManagement(state, payload) {
        state.setStoreManage = payload;
    },
    setStoreElectricResponse(state, payload){
        state.storeElectricResponse = payload;   
    },
    getHistoryElectricData(state, payload){
        state.getHistoryData = payload;
    }

};

export const actions = {
    async getStoreList({ commit, state }, payload) {
        if(payload.q == null) {
            var result = await this.$http.$get('https://dev-services.happimobiles.com/api/admin/individulastores');
            if (result) {
                commit('setStoreList', result.data);
                commit('setCities', result.cities);
            } else {
                commit('setStoreList', []);
                commit('setCities', []);
            }
        } else {
            var result = await this.$http.$get('stores?q='+payload.q);
            if (result) {
                commit('setStoreList', result.storeList);
                commit('setCities', result.cities);
            } else {
                commit('setStoreList', []);
                commit('setCities', []);
            }
        }

        /*
        var dataBase = (await mongoService({})).mongodb;
        const stores = dataBase.db('happi-new-sls').collection('stores');
        if(payload.q == null){
            const storeList = await stores.find({});
            // console.log('=====storeslist', storeList);
            if (storeList.length > 0) {
                commit('setStoreList', storeList);
                var cities = [];
                await storeList.filter(item => {
                    if (cities.indexOf(item.city) == -1) {
                        cities.push(item.city);
                    }
                });
                commit('setCities', cities);
                // console.log('======', cities);
            } else {
                commit('setCities', []);
                commit('setStoreList', []);
            }
        }else{
            const storeList = await stores.find({ $text: { $search: payload.q } });
            if (storeList.length > 0) {
                commit('setStoreList', storeList);
                var cities = [];
                await storeList.filter(item => {
                    if (cities.indexOf(item.city) == -1) {
                        cities.push(item.city);
                    }
                });
                commit('setCities', cities);
                // console.log('======', cities);
            } else {
                commit('setCities', []);
                commit('setStoreList', []);
            }
        } */
    },
    async getStoreById({ commit, state }, payload) {
        var result = await this.$http.$get('getStoreById?RetailerLocalityArea='+payload);
        if (result.state) {
            commit('setStoreObj', result.data);
        } else {
            commit('setStoreObj', {});
        }
    },

    async getStoreDetails({ commit, state }, payload) {
        var result = await this.$http.$get('https://dev-services.happimobiles.com/api/admin/getStoreManager?phone='+payload);
        if (result.status) {
            commit('setStoreManagement', result);
        } else {
            commit('setStoreManagement', {});
        }
    },

    async sendStoreData({ commit, state }, payload){
        let item = {
            status: payload.storeElectricData.type,
            units: payload.storeElectricData.units,
            storecode: payload.storeElectricData.storecode,
            mobile:payload.storeElectricData.mobile
                    };
        var result = await this.$http.$post('https://dev-services.happimobiles.com/api/admin/electricityUnits',item);
        if (result) {
            commit('setStoreElectricResponse', result);
        } else {
            commit('setStoreElectricResponse', {});
        }
    },

    async getElectricCurrentHistory({ commit, state }, payload){
        var result = await this.$http.$get('https://dev-services.happimobiles.com/api/admin/electricityHistory?mobile='+payload.phone);
        if (result) {
            commit('getHistoryElectricData', result);
        } else {
            commit('getHistoryElectricData', {});
        }
    }
};