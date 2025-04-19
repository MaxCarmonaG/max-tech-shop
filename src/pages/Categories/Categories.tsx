import { useContext } from 'react';

import CategoryDetail from '../../containers/category-detail/category-detail.container';
import Spinner from '../../components/spinner/spinner.component';
import { StoreContext } from '@/providers';

import styles from './Categories.module.scss';

const CategoryList = () => {
  const { categories, items } = useContext(StoreContext);

  return categories.length ? (
    <div className={styles.container}>
      {categories.map(({ id, title, slug }) => {
        const categoryItems = items.filter(({ category }) => category === slug);
        return (
          <CategoryDetail
            key={id}
            title={title}
            slug={slug}
            items={categoryItems}
          />
        );
      })}
    </div>
  ) : (
    <Spinner />
  );
};

export default CategoryList;
