import { useContext } from 'react';

import ShoppingBagIcon from '@/assets/shopping-bag.svg?react';
import { StoreContext } from '@/providers';

import styles from './ShoppingBag.module.scss';

const ShoppingBag = () => {
  const { totalItems } = useContext(StoreContext);
  return (
    <div className={styles.container}>
      <ShoppingBagIcon className={styles.icon} />
      <span className={styles.value}>{totalItems}</span>
    </div>
  );
};

export default ShoppingBag;
