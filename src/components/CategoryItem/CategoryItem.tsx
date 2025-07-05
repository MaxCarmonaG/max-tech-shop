import { FC } from 'react';
import styles from './CategoryItem.module.scss';

interface CategoryItemProps {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

const CategoryItem: FC<CategoryItemProps> = ({
  name,
  description,
  imageUrl,
  price,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.info}>
          <span className={styles.name}>{name}</span>
          <span className={styles.description}>{description}</span>
        </div>
        <div className={styles.price}>$ {price}</div>
      </div>
    </div>
  );
};

export default CategoryItem;
