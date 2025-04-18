export type ItemType = {
  id: string;
  category: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  stock: number;
  qty: number;
};

export type StoreContextType = {
  data: ItemType[];
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
