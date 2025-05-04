import { FC } from 'react';
import ItemCount from '@/components/ItemCount';
import { ItemType } from '@/types';
import styles from './ItemDetail.module.scss';
import { useOutletContext } from 'react-router';

const ItemDetail: FC = () => {
  const props = useOutletContext<ItemType>();

  const { name, description, imageUrl, price } = props;

  return (
    <div className={styles.container}>
      <img src={imageUrl} alt={name} className={styles.image} />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <h2 className={styles.price}>$ {price}</h2>
        <p className={styles.description}>{description}</p>
        <ItemCount {...props} />
      </div>
    </div>
  );
};

export default ItemDetail;
