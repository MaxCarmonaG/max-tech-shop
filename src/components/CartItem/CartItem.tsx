import { FC, useContext } from 'react';
import { StoreContext } from '@/providers';

import styles from './CartItem.module.scss';
import { CartItemType } from '@/types';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: FC<CartItemProps> = ({ item }) => {
  const { name, description, imageUrl, qty, price } = item;
  const { add, remove, clear } = useContext(StoreContext);
  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <img className={styles.img} src={imageUrl} alt={name} />
        <span className={styles.name}>{name}</span>
      </div>
      <span className={styles.description}>{description}</span>
      <div className={styles.quantity}>
        <div className={styles.control} onClick={() => remove(item)}>
          &#10094;
        </div>
        <span>{qty}</span>
        <div className={styles.control} onClick={() => add(item)}>
          &#10095;
        </div>
      </div>
      <span>$ {price}</span>
      <div className={styles.clear} onClick={() => clear(item)}>
        &#10005;
      </div>
    </div>
  );
};
export default CartItem;
