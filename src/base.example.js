import firebase from 'firebase/app'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCNKO8vNqI7CTq_lHgx05pqisOCUQhLu7c",
    authDomain: "chatarang-5ea2a.firebaseapp.com",
    databaseURL: "https://chatarang-5ea2a.firebaseio.com",
    projectId: "chatarang-5ea2a",
    storageBucket: "chatarang-5ea2a.appspot.com",
    messagingSenderId: "1027337084122"
  };

  const app = firebase.initializeApp(config);