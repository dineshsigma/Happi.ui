import Cookies from 'js-cookie';
import axios from 'axios';
//import * as Realm from 'realm-web';


const token = Cookies.get('accessToken');
const baseDomain = 'https://dev-services.happimobiles.com/';
// const baseDomain = 'http://3964-49-204-199-118.ngrok.io/dev/';
// const GRAPHQL = "https://ap-south-1.aws.realm.mongodb.com/api/client/v2.0/app/application-0-lgxvg/graphql";

const APP_ID = 'application-0-lgxvg';
const API_KEY = 'cKLoPg7AK8tbsQJ8QHIBacd1D8RXP2xJyRsOY6lLjHWmjkf8Qk8dh9HdN2uBPthh'

// const app = new Realm.App({ id: APP_ID });
// let mongodb = null;
// let user = null;

export const customHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
};

export const baseUrl = `${baseDomain}`;

export default axios.create({
    baseUrl,
    headers: customHeaders
});

// async function init(){
//     try {
//         let credentials = null;
//         //console.log("currentUser", app.currentUser);
//         if (process.client) {
//             if(localStorage.getItem("setTimeout") == null || localStorage.getItem("setTimeout") < new Date().getTime()){
//                 localStorage.clear();
//                 localStorage.setItem("setTimeout", (new Date().getTime() + 60 * 60 * 24 * 1000));
//             }
//         }
//
//         if(app.currentUser != null){
//             user = await app.currentUser;
//             mongodb = app.currentUser.mongoClient('mongodb-atlas');
//             return;
//         }
//
//         if(token == null){
//             credentials = Realm.Credentials.apiKey(API_KEY);
//         }else{
//             credentials = Realm.Credentials.jwt(token);
//         }
//
//         user = await app.logIn(credentials);
//         mongodb = app.currentUser.mongoClient('mongodb-atlas');
//
//     } catch (err) {
//         console.error('Failed to log in', err);
//     }
// }
//
// export const mongoService = async service => {
//     if(user == null || mongodb == null){
//         await init();
//     }
//     return {mongodb:mongodb,user:user};
// }




export const serializeQuery = query => {
    return Object.keys(query)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
        .join('&');
};
