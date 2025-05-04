import { useContext } from 'react';

import Directory from '@/components/Directory';
import Spinner from '@/components/Spinner';
import Featured from '@/components/Featured';

import { StoreContext } from '@/providers';

import styles from './Home.module.scss';
import Container from '@/ui/Container';

const Home = () => {
  const { categories } = useContext(StoreContext);

  return categories.length ? (
    <main>
      <Featured />
      <h2 className={styles.title}>categories</h2>
      <Container>
        <div className={styles.grid}>
          {categories.map(({ id, ...rest }) => (
            <Directory key={id} {...rest} />
          ))}
        </div>
      </Container>
    </main>
  ) : (
    <Spinner />
  );
};

export default Home;
