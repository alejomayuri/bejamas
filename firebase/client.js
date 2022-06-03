import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

export const app = firebase.initializeApp({
    apiKey: "AIzaSyAdd7ux8RGySiQEl1ognrvz2S3X8Yhpx4w",
    authDomain: "bejamas-f383f.firebaseapp.com",
    projectId: "bejamas-f383f",
    storageBucket: "bejamas-f383f.appspot.com",
    messagingSenderId: "252586330854",
    appId: "1:252586330854:web:ae9e318a5796d28b810927"
})

export function getFirestore() {
    return firebase.firestore(app).collection('products')
}

export const getProducts = () => {
    return getFirestore().get().then(snapshot =>{
        return snapshot.docs.map(doc => {
            const data = doc.data()
            const id = doc.id
            return {
                id,
                ...data
            }
        })
    })
}