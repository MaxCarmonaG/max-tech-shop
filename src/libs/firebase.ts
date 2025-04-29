import { ItemType, OrderType } from '@/types';
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
  addDoc,
  Timestamp,
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
    const data = snapshot.data(options);
    return {
      id: snapshot.id,
      category: data.category,
      name: data.name,
      description: data.description,
      imageUrl: data.imageUrl,
      price: data.price,
      stock: data.stock,
      featured: data.featured,
    };
  },
};

const itemsRef = collection(db, 'items').withConverter(itemsConverter);

const ordersRef = collection(db, 'orders');

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

export const addOrder = async (order: OrderType) => {
  try {
    const data = await addDoc(ordersRef, {
      ...order,
      date: Timestamp.fromDate(new Date()),
    });
    return data.id;
  } catch (error) {
    console.error('Error adding order: ', error);
  }
};
