import { createContext } from 'react';
import { StoreContextType } from '@/types';

const StoreContext = createContext<StoreContextType>({
  categories: [],
  items: [],
  featured: [],
  isLoading: true,
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

export default StoreContext;
