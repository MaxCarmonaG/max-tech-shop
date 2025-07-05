import { useContext } from 'react';
import { Outlet, useParams } from 'react-router';
import { StoreContext } from '@/providers';
import CategoryDetail from '@/components/CategoryDetail';
import Spinner from '@/components/Spinner';
import NotFound from '@/components/NotFound';

const Category = () => {
  const { category, id } = useParams();
  const { fetchItemsByCategory, categories } = useContext(StoreContext);

  const { slug, title } = categories.find((e) => e.slug === category) || {};

  if (!category || !slug || !title) return <NotFound />;

  const { items, isLoading } = fetchItemsByCategory(category);

  if (id) {
    const item = items.find((item) => item.id === id);

    if (item) {
      return <Outlet context={item} />;
    } else {
      return <NotFound />;
    }
  }

  return isLoading ? (
    <Spinner />
  ) : items.length ? (
    <CategoryDetail slug={slug} title={title} items={items} />
  ) : (
    <NotFound />
  );
};

export default Category;
