import { FC } from 'react';
import { Link } from 'react-router';

import CategoryItem from '@/components/CategoryItem';

import { ItemType } from '@/types';
import styles from './CategoryDetail.module.scss';

interface CategoryDetailProps {
  slug: string;
  title: string;
  items: ItemType[];
  hasLink?: boolean;
}

const CategoryDetail: FC<CategoryDetailProps> = ({
  slug,
  title,
  items,
  hasLink,
}) => {
  return (
    <div className={styles.category}>
      <div className={styles.title}>
        {hasLink ? <Link to={`/${slug}`}>{title}</Link> : title}
      </div>
      <div className={styles.grid}>
        {items.map(({ id, ...props }) => (
          <Link to={`/${slug}/${id}`} key={id}>
            <CategoryItem key={id} {...props} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetail;
