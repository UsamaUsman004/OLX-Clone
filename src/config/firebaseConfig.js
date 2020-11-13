import firebase from 'firebase/app'
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp(
    {
        apiKey: "AIzaSyBRha6JHdkb1sPUb0xsn-ybUVT8qcG5jNU",
        authDomain: "olx-clone-312ee.firebaseapp.com",
        databaseURL: "https://olx-clone-312ee.firebaseio.com",
        projectId: "olx-clone-312ee",
        storageBucket: "olx-clone-312ee.appspot.com",
        messagingSenderId: "11952862651",
        appId: "1:11952862651:web:756661c0adf78274f0009e"
    }
);

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
