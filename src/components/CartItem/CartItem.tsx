import { FC } from 'react';

import styles from './CartItem.module.scss';
import { CartItemType } from '@/types';

interface CartItemProps extends CartItemType {
  removeItem: () => void;
  addItem: () => void;
  clearItem: () => void;
}

const CartItem: FC<CartItemProps> = ({
  name,
  description,
  imageUrl,
  qty,
  price,
  removeItem,
  addItem,
  clearItem,
}) => (
  <>
    <div className={styles.product}>
      <img className={styles.img} src={imageUrl} alt={name} />
      <span className={styles.name}>{name}</span>
    </div>
    <span className={styles.description}>{description}</span>
    <div className={styles.quantity}>
      <div className={styles.control} onClick={removeItem}>
        &#10094;
      </div>
      <span>{qty}</span>
      <div className={styles.control} onClick={addItem}>
        &#10095;
      </div>
    </div>
    <span>$ {price}</span>
    <div className={styles.clear} onClick={clearItem}>
      &#10005;
    </div>
  </>
);

export default CartItem;
