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
  featured: ItemType[];
  isLoading: boolean;
  display: boolean;
  toggleDisplay: () => void;
  cartItems: ItemType[];
  addToCart: (item: ItemType) => void;
  add: (item: ItemType) => void;
  remove: (item: ItemType) => void;
  clear: (item: ItemType) => void;
  cartTotal: number;
  totalItems: number;
  clearCart: () => void;
};
