import firebase from "firebase";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA6iLEqJBk0QxblIyl-Ad0IwD83Yi_VjVw",
    authDomain: "flocker-75e33.firebaseapp.com",
    databaseURL: "https://flocker-75e33.firebaseio.com",
    projectId: "flocker-75e33",
    storageBucket: "flocker-75e33.appspot.com",
    messagingSenderId: "113758458541",
    appId: "1:113758458541:web:40cc0f0b6959d7149eec24",
    measurementId: "G-XHX7NY0HVH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firestore = firebaseApp.firestore();
firestore.settings({timestampsInSnapshots: true});

export default firestore