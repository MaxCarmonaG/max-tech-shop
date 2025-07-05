import { useContext } from 'react';
import { Navigate } from 'react-router';
import CartItem from '@/components/CartItem';
import CustomButton from '@/components/CustomButton';
import { StoreContext } from '@/providers';

import styles from './Cart.module.scss';
import Container from '@/ui/Container';

const Cart = () => {
  const { cartItems, cartTotal, remove, add, clear } = useContext(StoreContext);

  if (!cartItems.length) return <Navigate to="/" />;
  return (
    <Container>
      <article className={styles.frame}>
        <div className={styles.grid}>
          <div className={styles.row}>
            <span>Product</span>
            <span>Description</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Remove</span>
          </div>
          <div className={styles.row}>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                removeItem={() => remove(item)}
                addItem={() => add(item)}
                clearItem={() => clear(item)}
                {...item}
              />
            ))}
          </div>
          <div className={styles.total}>Total : $ {cartTotal}</div>
        </div>
      </article>
      <CustomButton className={styles.button} to="/checkout">
        Go to checkout
      </CustomButton>
    </Container>
  );
};

export default Cart;
