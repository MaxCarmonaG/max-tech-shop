import { FC } from 'react';
import styles from './CartWidgetItem.module.scss';

interface CartWidgetItemProps {
  name: string;
  qty: number;
  imageUrl: string;
}

const CartWidgetItem: FC<CartWidgetItemProps> = ({ name, qty, imageUrl }) => (
  <div className={styles.container}>
    <img className={styles.img} src={imageUrl} alt={name} />
    <span className={styles.item}>{name}</span>
    <span className={styles.item}>x {qty}</span>
  </div>
);

export default CartWidgetItem;
