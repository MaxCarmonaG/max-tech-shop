import { useContext } from 'react';

import Directory from '@/components/Directory';
import Spinner from '@/components/Spinner';
import Featured from '@/components/Featured';

import { StoreContext } from '@/providers';

import styles from './Home.module.scss';

const Home = () => {
  const { categories } = useContext(StoreContext);

  return categories.length ? (
    <div className={styles.container}>
      <Featured />
      <div className={styles.title}>categories</div>
      <div className={styles.grid}>
        {categories.map(({ id, ...rest }) => (
          <Directory key={id} {...rest} />
        ))}
      </div>
    </div>
  ) : (
    <Spinner />
  );
};

export default Home;
