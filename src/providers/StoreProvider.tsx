import { useState, useEffect, FC, PropsWithChildren } from 'react';
// import { itemsObserver } from '@/services/firebase';
import { CartItemType, ItemType } from '@/types';
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
import useFeatured from '@/hooks/useFeatured';
import { useItemsByCategory } from '@/hooks/useItemsByCategory';

const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const [display, setDisplay] = useState(false);
  const [items, setItems] = useState<ItemType[]>([]);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const toggleDisplay = () => setDisplay(!display);

  useEffect(() => {
    const unsubscribe = itemsObserver((data) => {
      setItems(data);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const addToCart = (item: CartItemType) =>
    setCartItems(reduceCart([...cartItems, item]));

  const [cartTotal, setCartTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  useEffect(() => {
    setCartTotal(getCartTotal(cartItems));
    setTotalItems(getTotalItems(cartItems));
  }, [cartItems]);

  const add = (item: CartItemType) => setCartItems(addItem(cartItems, item));
  const remove = (item: CartItemType) =>
    setCartItems(removeItem(cartItems, item));
  const clear = (item: CartItemType) =>
    setCartItems(clearItem(cartItems, item));
  const clearCart = () => setCartItems([]);

  return (
    <StoreContext.Provider
      value={{
        categories: CATEGORY_DATA,
        fetchFeatured: useFeatured,
        fetchItemsByCategory: useItemsByCategory,
        items,
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
