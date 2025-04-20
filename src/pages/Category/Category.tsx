import { useContext } from 'react';
import { useParams } from 'react-router';

import CategoryDetail from '@/components/CategoryDetail';
import Spinner from '@/components/Spinner';

import { StoreContext } from '@/providers';

import styles from './Category.module.scss';
import NotFound from '@/components/NotFound';

const Category = () => {
  const { category } = useParams();
  const { fetchItemsByCategory, categories } = useContext(StoreContext);

  const { slug, title } = categories.find((e) => e.slug === category) || {};

  if (!category || !slug || !title) return <NotFound />;

  const { items, isLoading } = fetchItemsByCategory(category);

  return isLoading ? (
    <Spinner />
  ) : !items.length ? (
    <div className={styles.container}>
      <CategoryDetail slug={slug} title={title} items={items} />
    </div>
  ) : (
    <NotFound />
  );
};

export default Category;
