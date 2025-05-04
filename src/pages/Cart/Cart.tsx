import { useContext } from 'react';
import { Navigate } from 'react-router';
import CartItem from '@/components/CartItem';
import CustomButton from '@/components/CustomButton';
import { StoreContext } from '@/providers';

import styles from './Cart.module.scss';

const Cart = () => {
  const { cartItems, cartTotal, remove, add, clear } = useContext(StoreContext);

  if (!cartItems.length) return <Navigate to="/" />;
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.block}>
          <span>Product</span>
          <span>Description</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Remove</span>
        </div>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              removeItem={() => remove(item)}
              addItem={() => add(item)}
              clearItem={() => clear(item)}
              {...item}
            />
          ))
        ) : (
          <div className={styles.empty}>NO ITEMS TO DISPLAY</div>
        )}
        <div className={styles.total}>Total : $ {cartTotal}</div>
      </div>
      <div className={styles.button}>
        <CustomButton to="/checkout">Go to checkout</CustomButton>
      </div>
    </div>
  );
};

export default Cart;
