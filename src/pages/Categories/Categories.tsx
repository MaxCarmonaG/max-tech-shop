import { useContext } from 'react';
import CategoryDetail from '@/components/CategoryDetail';
import Spinner from '@/components/Spinner';
import { StoreContext } from '@/providers';

const Categories = () => {
  const { categories, items } = useContext(StoreContext);

  return categories.length ? (
    <>
      {categories.map(({ id, title, slug }) => {
        const categoryItems = items.filter(({ category }) => category === slug);
        return (
          <CategoryDetail
            key={id}
            title={title}
            slug={slug}
            items={categoryItems}
            hasLink
          />
        );
      })}
    </>
  ) : (
    <Spinner />
  );
};

export default Categories;
