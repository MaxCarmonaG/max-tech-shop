import { useState, useEffect, FC, PropsWithChildren } from 'react';
// import { itemsObserver } from '@/services/firebase';
import { ItemType } from '@/types';
import StoreContext from './StoreContext';
import {
  addItem,
  removeItem,
  clearItem,
  reduceCart,
  getCartTotal,
  getTotalItems,
} from './utils';
import { CATEGORY_DATA } from './shop.data';
import { itemsObserver } from '@/services/firebase';

const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const [display, setDisplay] = useState(false);
  const [items, setItems] = useState<ItemType[]>([]);
  const [cartItems, setCartItems] = useState<ItemType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const toggleDisplay = () => setDisplay(!display);

  useEffect(() => {
    const unsubscribe = itemsObserver((data) => {
      setItems(data);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const addToCart = (item: ItemType) =>
    setCartItems(reduceCart([...cartItems, item]));

  const [cartTotal, setCartTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  useEffect(() => {
    setCartTotal(getCartTotal(cartItems));
    setTotalItems(getTotalItems(cartItems));
  }, [cartItems]);

  const add = (item: ItemType) => setCartItems(addItem(cartItems, item));
  const remove = (item: ItemType) => setCartItems(removeItem(cartItems, item));
  const clear = (item: ItemType) => setCartItems(clearItem(cartItems, item));
  const clearCart = () => setCartItems([]);

  const featured = items.filter(({ featured }) => featured);

  return (
    <StoreContext.Provider
      value={{
        categories: CATEGORY_DATA,
        items,
        featured,
        isLoading,
        display,
        toggleDisplay,
        cartItems,
        addToCart,
        add,
        remove,
        clear,
        cartTotal,
        totalItems,
        clearCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
