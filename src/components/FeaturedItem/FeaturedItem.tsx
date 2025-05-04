import { FC } from 'react';
import styles from './FeaturedItem.module.scss';
import CustomButton from '@/components/CustomButton';

interface FeaturedItemProps {
  id: string;
  category: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

const FeaturedItems: FC<FeaturedItemProps> = ({
  id,
  category,
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
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.description}>{description}</span>
        <div className={styles.price}>$ {price}</div>
        <div className={styles.ctaContainer}>
          <CustomButton className={styles.cta} to={`/${category}/${id}`}>
            Buy Now
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItems;
