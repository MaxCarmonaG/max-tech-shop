import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import CategoryItem from '@/components/CategoryItem';
import Spinner from '@/components/Spinner';
import { featuredObserver } from '@/services/firebase';
import { ItemType } from '@/types';
import styles from './Featured.module.scss';

const Featured = () => {
  const [items, setItems] = useState<ItemType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = featuredObserver((featured) => {
      setItems(featured);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <div className={styles.title}>featured</div>
      <div className={styles.grid}>
        {items.map(({ id, category, ...props }) => (
          <Link key={id} to={`/${category}/${id}`}>
            <CategoryItem {...props} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Featured;
