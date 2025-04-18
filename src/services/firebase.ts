import { ItemType } from '@/types';
import { initializeApp } from 'firebase/app';
import {
  collection,
  getFirestore,
  onSnapshot,
  QueryDocumentSnapshot,
  WithFieldValue,
  SnapshotOptions,
} from 'firebase/firestore';

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'max-tech-shop.firebaseapp.com',
  projectId: 'max-tech-shop',
  storageBucket: 'max-tech-shop.appspot.com',
  messagingSenderId: '332153062918',
  appId: '1:332153062918:web:ea14161f04708e5d166587',
};

const app = initializeApp(config);

const db = getFirestore(app);

const ItemTypeConverter = {
  toFirestore: (item: WithFieldValue<ItemType>) => item,
  fromFirestore: (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): ItemType => {
    const data = snapshot.data(options).value;
    return {
      id: snapshot.id,
      category: data.category,
      name: data.name,
      description: data.description,
      imageUrl: data.imageUrl,
      price: data.price,
      stock: data.stock,
      qty: data.qty,
    };
  },
};

const itemsRef = collection(db, 'items').withConverter(ItemTypeConverter);

export const itemsObserver = (callback: (data: ItemType[]) => void) =>
  onSnapshot(itemsRef, (snapshot) =>
    callback(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  );
