import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'max-tech-shop.firebaseapp.com',
  projectId: 'max-tech-shop',
  storageBucket: 'max-tech-shop.appspot.com',
  messagingSenderId: '332153062918',
  appId: '1:332153062918:web:ea14161f04708e5d166587',
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const conllectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = conllectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const converSnapshotToMap = (snapshot) => {
  const collection = snapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  return collection;
};

export default firebase;
