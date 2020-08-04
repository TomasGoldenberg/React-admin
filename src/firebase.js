import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyBTDlTZYiaPBSsZjPecf9NuhNof_BBrpBg",
        authDomain: "clone-b9fb3.firebaseapp.com",
        databaseURL: "https://clone-b9fb3.firebaseio.com",
        projectId: "clone-b9fb3",
        storageBucket: "clone-b9fb3.appspot.com",
        messagingSenderId: "811805152923",
        appId: "1:811805152923:web:af6b3647e91071943f583e",
        measurementId: "G-6D2GSRSCNX"
      
      
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};