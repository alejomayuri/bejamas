import { getFirestore } from "../firebase/client";

export default function getProducts() {
    return getFirestore().where('featured', '==', false).get().then(snapshot => {
        return snapshot.docs.map(doc => {
            const data = doc.data();
            const id = doc.id;
            return {
                id,
                ...data
            };
        });
    });
}