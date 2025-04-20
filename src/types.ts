export type ItemType = {
  id: string;
  category: string;
  description: string;
  imageUrl: string;
  name: string;
  price: number;
  stock: number;
  featured?: boolean;
  //  qty: number;
};

export type CategoryType = {
  id: number;
  title: string;
  imageUrl: string;
  slug: string;
};

export type StoreContextType = {
  categories: CategoryType[];
  items: ItemType[];
  isLoading: boolean;
  display: boolean;
  fetchFeatured: () => { featuredItems: ItemType[]; isLoading: boolean };
  fetchItemsByCategory: (category: string) => {
    items: ItemType[];
    isLoading: boolean;
  };
  toggleDisplay: () => void;
  cartItems: CartItemType[];
  addToCart: (item: CartItemType) => void;
  add: (item: CartItemType) => void;
  remove: (item: CartItemType) => void;
  clear: (item: CartItemType) => void;
  cartTotal: number;
  totalItems: number;
  clearCart: () => void;
};

export type CartItemType = Omit<ItemType, 'featured' | 'stock'> & {
  qty: number;
};

export type OrderType = {
  id: string;
};
