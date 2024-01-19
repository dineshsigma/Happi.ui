import axios from 'axios';
export const state = () => ({
    eventData: null,
    
});

export const mutations = {
    setAlgolioEvent(state, payload) {
        state.eventData = payload;
    },
}

export const actions = {
    async algolioEvent({ commit, state }, payload) {
        let tempObj = {
            "events": [
                {
                    "eventType": "view",
                    "eventName":"Product Detail Page Viewed",
                  "index": "dev_products",
                  "userToken": "user-123456",
                  "timestamp": new Date().getTime(),
                  "objectIDs": ["438434001rb1a"]
                },
            ]
        }
        var response;
        try {
            response = await axios.post(`https://insights.algolia.io/1/events`, tempObj,{
                headers : {
                    'x-algolia-api-key': 'cf00e1b343b7543af1434509231b2f09',
                    'x-algolia-application-id': 'ZIJ0WXPHRD',
                    'Content-Type': "application/json"
                }
            });
        } catch (error) {
            console.log('error', error);
        }

        console.log('response',response);
        return response;
    }
};
