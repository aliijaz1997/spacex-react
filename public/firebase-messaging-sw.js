importScripts('https://www.gstatic.com/firebasejs/7.21.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.21.0/firebase-messaging.js')

firebase.initializeApp({
    apiKey: "AIzaSyAozjfiIS1nKJuxt1ip-g9EwktG8oUEIZ8",
    authDomain: "spacex-bba2e.firebaseapp.com",
    databaseURL: "https://spacex-bba2e.firebaseio.com",
    projectId: "spacex-bba2e",
    storageBucket: "spacex-bba2e.appspot.com",
    messagingSenderId: "128063358312",
    appId: "1:128063358312:web:6016b49dc253eb366802dd",
    measurementId: "G-40MJGG44BG"
})

firebase.messaging();