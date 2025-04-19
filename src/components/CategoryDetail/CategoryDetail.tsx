import { FC } from 'react';
import { Switch, Link, Route, useRouteMatch, useHistory } from 'react-router';

import CategoryItem from '../../components/category-item/category-item.component';
import ItemOverview from '../../pages/item-overview/item-overview.container';

import { ItemType } from '@/types';
import styles from './CategoryDetail.module.scss';

interface CategoryDetailProps {
  slug: string;
  title: string;
  items: ItemType[];
}

const CategoryDetail: FC<CategoryDetailProps> = ({ slug, title, items }) => {
  const match = useRouteMatch();
  const {
    params: { item },
    url,
  } = match;

  return (
    <Switch>
      <Route exact path={`${url}`}>
        <div className={styles.category}>
          <div className={styles.title}>
            {item === slug ? title : <Link to={`/${slug}`}>{title}</Link>}
          </div>
          <div className={styles.grid}>
            {items.map(({ id, ...props }) => (
              <Link to={`/${slug}/${id}`} key={id}>
                <CategoryItem key={id} {...props} />
              </Link>
            ))}
          </div>
        </div>
      </Route>
      <Route path={`${url}/:id`}>
        <ItemOverview items={items} />
      </Route>
    </Switch>
  );
};

export default CategoryDetail;
