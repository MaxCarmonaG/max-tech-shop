import { ItemType } from '@/types';
import { initializeApp } from 'firebase/app';
import {
  collection,
  getFirestore,
  onSnapshot,
  QueryDocumentSnapshot,
  WithFieldValue,
  SnapshotOptions,
  query,
  where,
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

const itemsConverter = {
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
      featured: data.featured,
      // qty: data.qty,
    };
  },
};

const ordersConverter = {
  toFirestore: (order: WithFieldValue<ItemType>) => order,
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
      featured: data.featured,
      // qty: data.qty,
    };
  },
};

const itemsRef = collection(db, 'items').withConverter(itemsConverter);

const ordersRef = collection(db, 'orders').withConverter(ordersConverter);

export const itemsObserver = (callback: (data: ItemType[]) => void) =>
  onSnapshot(itemsRef, (snapshot) =>
    callback(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  );

export const featuredObserver = (callback: (data: ItemType[]) => void) => {
  const q = query(itemsRef, where('featured', '==', true));
  return onSnapshot(q, (snapshot) =>
    callback(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  );
};

export const itemsByCategoryObserver = (
  category: string,
  callback: (data: ItemType[]) => void
) => {
  const q = query(itemsRef, where('category', '==', category));
  return onSnapshot(q, (snapshot) =>
    callback(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  );
};

export const addOrder = async (order: {
