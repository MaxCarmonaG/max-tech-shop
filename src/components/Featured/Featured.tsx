import { useContext } from 'react';
import { Link } from 'react-router';
import { StoreContext } from '@/providers';
import CategoryItem from '@/components/CategoryItem';
import Spinner from '@/components/Spinner';
import styles from './Featured.module.scss';

const Featured = () => {
  const { fetchFeatured } = useContext(StoreContext);

  const { isLoading, featuredItems } = fetchFeatured();

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <div className={styles.title}>featured</div>
      <div className={styles.grid}>
        {featuredItems.map(({ id, category, ...props }) => (
          <Link key={id} to={`/${category}/${id}`}>
            <CategoryItem {...props} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Featured;
