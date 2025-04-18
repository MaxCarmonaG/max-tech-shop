import {
  useState,
  useEffect,
  createContext,
  FC,
  PropsWithChildren,
} from 'react';

// import { CATEGORY_DATA } from './shop.data';
import {
  addItem,
  removeItem,
  clearItem,
  reduceCart,
  getCartTotal,
  getTotalItems,
} from './utils';
import { ItemType, StoreContextType } from '@/types';
import { itemsObserver } from '@/services/firebase';

export const StoreContext = createContext<StoreContextType>({
  data: [],
  display: false,
  toggleDisplay: () => {},
  cartItems: [],
  addToCart: () => {},
  add: () => {},
  remove: () => {},
  clear: () => {},
  cartTotal: 0,
  totalItems: 0,
  clearCart: () => {},
});

const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const [display, setDisplay] = useState(false);
  const [cartItems, setCartItems] = useState<ItemType[]>([]);
  const [data, setData] = useState<ItemType[]>([]);

  const toggleDisplay = () => setDisplay(!display);

  /*const getData = new Promise((resolve, reject) => {
        if(CATEGORY_DATA.length){
            setTimeout(() => resolve(CATEGORY_DATA),2000);
            return;
        } else {
            reject('No data to display');
            return;
        };
    });*/

  useEffect(() => {
    const unsubscribe = itemsObserver(setData);
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

  return (
    <StoreContext.Provider
      value={{
        data,
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
