import firebase from 'firebase';


var firebaseConfig  = {
    apiKey: "AIzaSyAozjfiIS1nKJuxt1ip-g9EwktG8oUEIZ8",
    projectId: "spacex-bba2e",
    messagingSenderId: "128063358312",
    appId: "1:128063358312:web:6016b49dc253eb366802dd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;