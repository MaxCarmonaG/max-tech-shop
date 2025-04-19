import { FC } from 'react';
import { useNavigate } from 'react-router';

import styles from './Directory.module.scss';

interface DirectoryProps {
  imageUrl: string;
  title: string;
  slug: string;
}

const Directory: FC<DirectoryProps> = ({ imageUrl, title, slug }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={styles.imageBackground}
      />
      <div
        className={styles.titleContainer}
        onClick={() => navigate(`/${slug}`)}
      >
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>Shop Now</h2>
      </div>
    </div>
  );
};

export default Directory;
