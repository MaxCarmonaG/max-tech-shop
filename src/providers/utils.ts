import { ItemType } from '@/types';

export const addItem = (items: ItemType[], item: ItemType) => {
  if (item.qty === item.stock || item.stock === 0) return items;
  return items.map((e) => (e.id === item.id ? { ...e, qty: e.qty + 1 } : e));
};

export const removeItem = (items: ItemType[], item: ItemType) => {
  if (item.qty === 1) return clearItem(items, item);
  return items.map((e) => (e.id === item.id ? { ...e, qty: e.qty - 1 } : e));
};

export const clearItem = (items: ItemType[], item: ItemType) =>
  items.filter(({ id }) => id !== item.id);

export const reduceCart = (cartItems: ItemType[]) =>
  cartItems.reduce((acc: ItemType[], curr) => {
    const x = acc.find(({ id }) => id === curr.id);
    const y = acc.filter(({ id }) => id !== curr.id);
    if (x) return [...y, { ...curr, qty: curr.qty + x.qty }];
    return [...acc, curr];
  }, []);

export const getCartTotal = (cartItems: ItemType[]) =>
  cartItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

export const getTotalItems = (cartItems: ItemType[]) =>
  cartItems.reduce((acc, curr) => acc + curr.qty, 0);
