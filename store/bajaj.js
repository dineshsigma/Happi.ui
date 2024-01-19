const crypto = require('crypto');
const secret = '1584FFBB3C6D5F74A5A41E7D3674A';
export const state = () => ({
    bajajSchemes: [],
    allSchemes: [],
    clearBajaj: '',
    bajajOtp: '',
    bajajVerify: [],
    pincode_error: false,
});
export const mutations = {
    setBajajSchemes(state, payload) {
        state.bajajSchemes = payload;
    },
    setBajajAllSchemes(state, payload) {
        state.allSchemes = payload;
    },
    clearCartBajaj(state, payload) {
        state.clearBajaj = payload;
    },
    generateOtp(state, payload) {
        state.bajajOtp = payload;
    },
    BajajOtpVerify(state, payload) {
        state.bajajVerify = payload;
    },
    pincodeError(state, payload) {
        state.pincode_error = payload;
    },
};
//ENCRYPT FUNTION
async function requestEncrypt(body) {
    let customerResponse = JSON.stringify(body); //strigfy data
    var algorithm = 'aes256'; //const value
    var key = 'happibajajreqkey'; //response key
    var cipher = crypto.createCipher(algorithm, key);
    var resencrypted =
        cipher.update(customerResponse, 'utf8', 'hex') + cipher.final('hex');
    return resencrypted;
}
//DECRYPT FUNCTION
async function requestDecrypt(reqDecrypt) {
    var algorithm = 'aes256';
    var reqkey = 'happibajajreqkey';
    let reqencrypted = reqDecrypt;
    var decipher = crypto.createDecipher(algorithm, reqkey);
    var decrypted =
        decipher.update(reqencrypted, 'hex', 'utf8') + decipher.final('utf8');
    var body = JSON.parse(decrypted);
    return body;
}
export const actions = {
    async getBajajSchemes({ commit }, payload) {
        var response;
        let hash = await requestEncrypt(payload);
        let body = {
            Card_number: hash,
        };
        try {
            // const hash = crypto.createHmac('sha256', secret)
            //        .update(`POST:LOGIN${JSON.stringify(body)}`)
            //        .digest('hex');
            // this.$http.setHeader('x-sign', hash)
            response = await this.$http.$post(
                `https://happibajajemi.happimobiles.com/api/customer`,
                body
            );
        } catch (error) {
            console.log('error', error);
        }
        // console.log(response, 'RES');
        const decryptResponse = await requestDecrypt(response.response);
        // commit('setBajajSchemes', response.response);
        commit('setBajajSchemes', decryptResponse);
    },
    async getBajajAllSchemes({ commit }, payload) {
        // let body = {
        //     "dealerId":"0011t00001HGP3JAAX",
        //     // "modelId":"a0d1t000006ObwUAAS",
        //     "modelId":"a0d1t000006sSWmAAM",

        //     "loanAmt":"75999",
        //     "invoiceAmt":"75999",
        //     "cdLtv":"0",
        //     "digitalLtv":"0",
        //     "bajaj_model_code": payload.bajaj_model_code
        // };
        let hash = await requestEncrypt(payload);
        let body2 = {
            data: hash,
        };
        //let body = {
        //cdLtv: payload.CD_PROMO,
        //digitalLtv:payload.DIGITAL_PROMO,
        // invoiceAmt:payload.payPrice,
        //loanAmt: payload.payPrice,
        //  invoiceAmt:"140000",
        //loanAmt: "140000",
        // modelId: payload.id,
        //modelId:"a0d1t000006ObwUAAS"
        //};
        var response = await this.$http.$post(
            `https://happibajajemi.happimobiles.com/api/schema`,
            body2
        );
        
        const decryptResponse = await requestDecrypt(response.data);
       // console.log("decryptResponse",decryptResponse);
        let schemes = decryptResponse;
        // commit('setBajajAllSchemes', response.data.records);
        commit('setBajajAllSchemes', schemes);
    },
    async clearCart({ commit }, payload) {
        let body = {
            cartId: payload,
        };
        var response = await this.$http.$post(
            `https://happibajajemi.happimobiles.com/api/cart/bajajcart`,
            body
        );
        commit('clearCartBajaj', response);
    },
    async generateBajajOtp({ commit }, payload) {
        let body = {
            Delivery_PINCODE: payload.Delivery_Pincode,
            CARD_PINCODE: payload.Card_Pincode,
            cartId: payload.cartId,
            Card_Number: payload.cardNumber,
            payPrice: payload.payPrice,
            intercityDeliveryFlag: payload.intercityDeliverFlag
        };
        let hash = await requestEncrypt(body);
        let bodyBilling = {
            data: hash,
        };
        var response = await this.$http.$post(
            `https://happibajajemi.happimobiles.com/api/billingotp`,
            bodyBilling
        );

        // console.log("response----",response);

        if (response.data) {
            const decryptResponse = await requestDecrypt(response.data);
            let schemes = decryptResponse;
            commit('generateOtp', schemes);
        } else if(response.status === "intercityfalse") {
            commit('pincodeError', true);
        } else {
            commit('generateOtp', response.status);
        }
    },
    async verifyBajajOtp({ commit }, payload) {
        let body = {
            cartId: payload.cartId,
            OTP: payload.otp,
            DELIVERY_ADDRESS: payload.Delivery_Address,
            DELIVERY_PINCODE: payload.Delivery_Pincode,
            CARD_NUMBER: payload.cardNumber,
            ORDERNO: payload.ORDERNO,
            payPrice: payload.payPrice,
            modelId: payload.Model_id,
        };
        let hash = await requestEncrypt(body);
        let bodyOTP = {
            data: hash,
        };
        var response = await this.$http.$post(
            `https://happibajajemi.happimobiles.com/api/authapi`,
            bodyOTP
        );
        commit('BajajOtpVerify', response);
    },
};
