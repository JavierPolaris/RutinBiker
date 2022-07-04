import firebase from 'firebase/compat/app'

import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDQyDZBhvZiTTPzW6dwLpqKY09sVb6bVlU",
  authDomain: "primer-proyecto-4aa08.firebaseapp.com",
  projectId: "primer-proyecto-4aa08",
  storageBucket: "primer-proyecto-4aa08.appspot.com",
  messagingSenderId: "346752810474",
  appId: "1:346752810474:web:ff6b2f34593af4a47ac693"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

// Recoge que va haber una autentificación 
export const auth = firebase.auth();

// La autentificación se va hacer de Google
const provider = new firebase.auth.GoogleAuthProvider();

// La autentificación se va hacer de Facebook
const providerFB = new firebase.auth.FacebookAuthProvider();

//Espera a que selecciones el email que este añadido o guardado en el navegador
provider.setCustomParameters({ prompt: 'select_account' });

providerFB.setCustomParameters({ prompt: 'select_account' });

// Se registra con el email que se ha seleccionado
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const signInWithFacebook = () => auth.signInWithPopup(providerFB);

export default firebase