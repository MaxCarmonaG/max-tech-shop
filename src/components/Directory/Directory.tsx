import { FC } from 'react';
import { Link } from 'react-router';

import styles from './Directory.module.scss';

interface DirectoryProps {
  imageUrl: string;
  title: string;
  slug: string;
}

const Directory: FC<DirectoryProps> = ({ imageUrl, title, slug }) => {
  return (
    <Link className={styles.container} to={`/${slug}`}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={styles.imageBackground}
      />
      <div className={styles.titleContainer}>
        <h2>{title}</h2>
        <h3>Shop Now</h3>
      </div>
    </Link>
  );
};

export default Directory;
