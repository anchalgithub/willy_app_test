
import  firebase from 'firebase';
require ('@firebase/firestore')

  

  // Your web app's Firebase configuration
  // var firebaseConfig = {
  //   apiKey: "AIzaSyAeNb8of2Q-XdxrijruF9iHqoPSO-pyENA",
  //   authDomain: "class-71-61ee6.firebaseapp.com",
  //   databaseURL: "https://class-71-61ee6-default-rtdb.firebaseio.com",
  //   projectId: "class-71-61ee6",
  //   storageBucket: "class-71-61ee6.appspot.com",
  //   messagingSenderId: "282439624120",
  //   appId: "1:282439624120:web:ed1d38909d1d82c2a1db4d"
  // };
  var firebaseConfig = {
    apiKey: "AIzaSyAeNb8of2Q-XdxrijruF9iHqoPSO-pyENA",
    authDomain: "class-71-61ee6.firebaseapp.com",
    databaseURL: "https://class-71-61ee6-default-rtdb.firebaseio.com",
    projectId: "class-71-61ee6",
    storageBucket: "class-71-61ee6.appspot.com",
    messagingSenderId: "282439624120",
    appId: "1:282439624120:web:ed1d38909d1d82c2a1db4d"
  };
  // Initialize Firebase

    firebase.initializeApp(firebaseConfig); 
    export default firebase.firestore()
  