// import Repository, {
//     serializeQuery,
//     mongoService
// } from '~/repositories/Repository.js';
// import { baseUrl } from '~/repositories/Repository';
const crypto = require('crypto');
const secret = '1584FFBB3C6D5F74A5A41E7D3674A';
  
export const state = () => ({
    isLoggedIn: true,
    isOtpVerified: null,
    isRegistered: null,
    loading: false,
    userDetails: null
});

export const mutations = {
    setIsLoggedIn(state, payload) {
        state.isLoggedIn = payload;
    },
    setUserDetails(state, payload) {
        if(payload.address == null) {
            payload.address = [];
        }
        state.userDetails = payload;
    },
    setIsOtpVerified(state, payload) {
        state.isOtpVerified = payload;
    },
    setIsRegistered(state, payload) {
        state.isRegistered = payload;
    }
};

export const actions = {
    async setAuthStatus({ commit, state }, payload) {
        let temp = {
            phone: payload
        };
        var response;
        try {
            const hash = crypto.createHmac('sha256', secret)
                   .update(`POST:LOGIN${JSON.stringify(temp)}`)
                   .digest('hex');  
            // console.log("HASH", hash)       
            this.$http.setHeader('x-sign', hash)
            response = await this.$http.$post(`api/user-login/homepage`, temp);
        } catch (error) {
            console.log('error', error);
        }

        this.$cookies.set('userLoginPhone', payload, {
            path: '/',
            maxAge: 60 * 15
        });
        // console.log('"SET AUTH STATUS"', response);
        return response;
    },

    async setOtpStatus({ commit, state }, payload) {
        let temp = {
            phone: this.$cookies.get('userLoginPhone') ? this.$cookies.get('userLoginPhone').toString() : payload.phoneNo,
            otp: payload.otp
        };
        var response;
        try {
            const hash = crypto.createHmac('sha256', secret)
                   .update(`POST:VERIFY${JSON.stringify(temp)}`)
                   .digest('hex');  
            // console.log("HASH", hash)       
            this.$http.setHeader('x-sign', hash)
            response = await this.$http.$post(`api/user-verify`, temp);
        } catch (error) {
            console.log('error', error);
        }
        commit('setIsOtpVerified', response);
        if (response.event === 'HOME') {
            this.$cookies.remove('tempToken');
            if (response.role === 'user') {
                // if(localStorage != null){
                //     localStorage.clear();
                // }
                this.$cookies.set('accessToken', response.token, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 20
                });
                this.$cookies.set(
                    'userDetails',
                    JSON.stringify(response.data),
                    {
                        path: '/',
                        maxAge: 60 * 60 * 24 * 20
                    }
                );
                localStorage.setItem("userDetails",JSON.stringify(response.data));
                this.$cookies.set('userRole', response.data.role, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 20
                });
            } else {
                // if(localStorage != null){
                //     localStorage.clear();
                // }
                this.$cookies.set('accessToken', response.token, {
                    path: '/',
                    maxAge: 60 * 60 * 20
                });
                localStorage.setItem("userDetails",JSON.stringify(response.data));
                this.$cookies.set(
                    'userDetails',
                    JSON.stringify(response.data),
                    {
                        path: '/',
                        maxAge: 60 * 60 * 20
                    }
                );
                this.$cookies.set('userRole', response.data.role, {
                    path: '/',
                    maxAge: 60 * 60 * 20
                });
            }
        } else {
            this.$cookies.set('tempToken', response.token, {
                path: '/',
                maxAge: 60 * 15
            });
        }
        return response;
    },

    async setRegisterStatus({ commit, state }, payload) {
        let temp = {
            phone: this.$cookies.get('userLoginPhone').toString(),
                name: payload.name,
            email: payload.email,
            role: 'user',
            address: []
        };
        var response;
        try {
            response = await this.$http.$post(`api/user`, temp, {
                headers: {
                    'x-auth': this.$cookies.get('tempToken')
                }
            });
        } catch (error) {
            console.log('error', error);
        }
        commit('setIsRegistered', response);
        return response;
    },

    async setUserLogout({ commit, state }, payload) {
        commit('setIsLoggedIn', false);
        return false;
    },
    async getUserInfo({ commit, state }, payload) {

        var response = null;
        try {
            if (this.$cookies.get('accessToken') !== undefined  ) {
                response = await this.$http.$get(`api/user`, {
                    headers: {
                        'x-auth': this.$cookies.get('accessToken')
                    }
                });
                commit('setUserDetails', response.data);
                commit('setIsLoggedIn', true);
            } else {
                commit('setIsLoggedIn', false);
            }

        } catch (error) {
            console.log('error', error);

        }

        return response;
        // if (this.$cookies.get('userDetails')) {
        //     commit('setUserDetails', this.$cookies.get('userDetails'));
        //     commit('setIsLoggedIn', true);
        // } else {
        //     commit('setIsLoggedIn', false);
        // }
        //
        // return this.$cookies.get('userDetails');
    },

    async updateUserInfo({ commit, state }, payload) {
        delete payload.tempObj._id;
        var response = null;
        response = await this.$http.$post(`api/user`, 
            payload.tempObj,
            {
                headers: {
                    'x-auth': this.$cookies.get('accessToken')
                }
            }
        );
        
        commit('setUserDetails', response.data);
        commit('setIsLoggedIn', true);
        console.log(response);
        return response;

       //  var dataBase = (await mongoService({})).mongodb;
       //  const user = dataBase.db('happi-new-sls').collection('user');
       //  let exisitngUser = await user.findOne({phone: this.$cookies.get('userDetails').phone });
       //
       //  if (payload.index || payload.index === 0 || payload.index === "no_index") {
       //      if (payload.isEdit) {
       //          console.log('is edit true', payload);
       //
       //          exisitngUser.address[payload.index] = payload.tempObj;
       //      } else {
       //          console.log('is edit false', payload,"INDEXVALUE",payload.index);
       //          if(exisitngUser.address === undefined){
       //              exisitngUser.address = [];
       //          }
       //          exisitngUser.address.push(payload.tempObj);
       //      }
       //  } else {
       //      console.log('No index', payload);
       //      exisitngUser.name = payload.tempObj.name;
       //      exisitngUser.email = payload.tempObj.email;
       //
       //  }
       //  console.log("EXS",exisitngUser);
       // delete exisitngUser._id;
       // if(exisitngUser.datecreated === null){
       //     exisitngUser.datecreated = new Date();
       // }
       // let updateStatus = await user.updateOne({ phone: this.$cookies.get('userDetails').phone }, { $set:exisitngUser });
       // console.log("UDD",updateStatus);
       //  let updatedUser = await user.findOne({         phone: this.$cookies.get('userDetails').phone });
       //  this.$cookies.set('userDetails', JSON.stringify(updatedUser), {
       //      path: '/',
       //      maxAge: 60 * 60 * 24 * 20
       //  });
       //
       //  commit('setUserDetails', updatedUser);
       //  return updatedUser;
    },
    async deleteUserAddress({ commit, state }, payload) {
        var response = null;
        response = await this.$http.$delete(`api/user/deleteUserAddress?index=${payload.index}`,
            {
                headers: {
                    'x-auth': this.$cookies.get('accessToken')
                }
            }
        );

        commit('setUserDetails', response.data);
        console.log("DELETE USER",response.data)
        return response;
    },

    //user details using phone number
    async cartUserDetails({ commit, state }, payload) {
        let temp = {
                phone: payload.phone,
                name:  payload.name,
                email: payload.email,
             };
        var response;
        try {
            response = await this.$http.$post(`api/cart/userdetails`, temp, {
                headers: {
                    'x-auth': this.$cookies.get('tempToken')
                }
            });
        } catch (error) {
            console.log('error', error);
        } 
        return response;
    },


    async logout({ commit, state }, payload) {
        if(localStorage != null){
            localStorage.clear();
        }
        this.$cookies.remove('userDetails');
        this.$cookies.remove('accessToken'); 
        this.$cookies.remove('userRole');
        commit('setIsLoggedIn', payload);
        // this.$router.push('/account/login');
    }
};
