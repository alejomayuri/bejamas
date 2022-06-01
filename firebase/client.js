import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const app = firebase.initializeApp({
    apiKey: "AIzaSyAdd7ux8RGySiQEl1ognrvz2S3X8Yhpx4w",
    authDomain: "bejamas-f383f.firebaseapp.com",
    projectId: "bejamas-f383f",
    storageBucket: "bejamas-f383f.appspot.com",
    messagingSenderId: "252586330854",
    appId: "1:252586330854:web:ae9e318a5796d28b810927"
})

// firebase.initializeApp(firebaseConfig);

// export const loginWithGitHub = () => {
//     const provider = new firebase.auth.GithubAuthProvider();
//     firebase.auth().signInWithPopup(provider);
// }

// export const productsRef = firebase.firestore()
export function getFirestore() {

    return firebase.firestore(app)
    // return firebase.auth.GoogleAuthProvider(googleProvider)
}