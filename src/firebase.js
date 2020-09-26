import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBY5M_jU0sACRcQprLkNcKQsyZELKy4owg",
    authDomain: "whatsapp-clone-afdf3.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-afdf3.firebaseio.com",
    projectId: "whatsapp-clone-afdf3",
    storageBucket: "whatsapp-clone-afdf3.appspot.com",
    messagingSenderId: "1034726798858",
    appId: "1:1034726798858:web:14113b6cf819fe355cd1f3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;