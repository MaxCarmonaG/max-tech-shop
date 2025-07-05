import { useContext } from 'react';
import { Link } from 'react-router';

import CustomButton from '@/components/CustomButton';
import { StoreContext } from '@/providers';
import CartWidgetItem from '@/components/CartWidgetItem';

import styles from './CartWidget.module.scss';

const CartWidget = () => {
  const { cartItems } = useContext(StoreContext);

  return (
    <div className={styles.container}>
      <div className={styles.items}>
        {cartItems.map(({ id, ...props }) => (
          <CartWidgetItem key={id} {...props} />
        ))}
      </div>
      <Link to="/cart">
        <CustomButton>Go to cart</CustomButton>
      </Link>
    </div>
  );
};

export default CartWidget;
