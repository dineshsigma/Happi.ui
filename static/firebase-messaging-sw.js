
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js'
)
firebase.initializeApp({"apiKey":"AIzaSyBlVN-EcemRO8HuBcR62wWlaWIeYtYVAFk","authDomain":"happi-vue.firebaseapp.com","projectId":"happi-vue","storageBucket":"happi-vue.appspot.com","messagingSenderId":"76811957052","appId":"1:76811957052:web:44f9618257fb3e8fcea439"})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()
