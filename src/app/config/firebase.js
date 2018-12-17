import firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDog41rSCkxUm5DaTF4a0MxuPtm8vm8PmM",
    authDomain: "ad-vents.firebaseapp.com",
    databaseURL: "https://ad-vents.firebaseio.com",
    projectId: "ad-vents",
    storageBucket: "ad-vents.appspot.com",
    messagingSenderId: "811285666876"
}

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
    timestampsInSnapshots: true
}
firestore.settings(settings);

export default firebase;