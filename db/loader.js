import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

const firebaseConfig = {
            apiKey: "AIzaSyAgL9GItHcp617OFPhDt3yauPCPtJFssDA",
            authDomain: "showstore-7c1ea.firebaseapp.com",
            databaseURL: "https://showstore-7c1ea.firebaseio.com",
            projectId: "showstore-7c1ea",
            storageBucket: "showstore-7c1ea.appspot.com",
            messagingSenderId: "1055882609580",
            appId: "1:1055882609580:web:cfbbf3e42e9084120ef009",
            measurementId: "G-6EK4HCCJ9K"
};

const db = !firebase.apps.length ? 
                firebase.initializeApp(firebaseConfig).firestore(): 
                firebase.app().firestore();

export default db;
    
 