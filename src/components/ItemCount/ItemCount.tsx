import { useState, useContext, FC } from 'react';

import CustomButton from '@/components/CustomButton';
import { StoreContext } from '@/providers';

import { useNavigate } from 'react-router';
import styles from './ItemCount.module.scss';
import { ItemType } from '@/types';

const ItemCount: FC<ItemType> = (props) => {
  const [itemCount, setItemCount] = useState(0);
  const { addToCart, cartItems } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <div className={styles.counter}>
          <CustomButton
            className={styles.control}
            onClick={() => setItemCount(itemCount - 1)}
            disabled={!itemCount}
            variant="outline"
          >
            &#8722;
          </CustomButton>
          <span>{itemCount}</span>
          <CustomButton
            className={styles.control}
            onClick={() => setItemCount(itemCount + 1)}
            disabled={itemCount === props.stock}
            variant="outline"
          >
            &#43;
          </CustomButton>
        </div>
      </div>
      <CustomButton
        onClick={() => {
          alert(
            `Added ${itemCount > 1 ? itemCount + ' items' : 'an item'} to cart`
          );
          return addToCart({ ...props, qty: itemCount });
        }}
        disabled={!itemCount}
      >
        Add to cart
      </CustomButton>
      <CustomButton
        onClick={() => navigate('/cart')}
        disabled={!cartItems.length}
      >
        Go to cart
      </CustomButton>
    </div>
  );
};

export default ItemCount;
