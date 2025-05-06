import { FC } from 'react';
import { useOutletContext } from 'react-router';
import ItemCount from '@/components/ItemCount';
import { ItemType } from '@/types';
import styles from './ItemDetail.module.scss';
import Container from '@/ui/Container';

const ItemDetail: FC = () => {
  const props = useOutletContext<ItemType>();

  const { name, description, imageUrl, price } = props;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <img src={imageUrl} alt={name} className={styles.image} />
          <div className={styles.info}>
            <h1 className={styles.name}>{name}</h1>
            <h2 className={styles.price}>$ {price}</h2>
            <p className={styles.description}>{description}</p>
            <ItemCount {...props} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ItemDetail;
