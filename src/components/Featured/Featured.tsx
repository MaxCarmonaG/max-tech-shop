import { useContext } from 'react';
import { StoreContext } from '@/providers';
import FeaturedItem from '@/components/FeaturedItem';
import Spinner from '@/components/Spinner';
import styles from './Featured.module.scss';
import Wave from '@/assets/wave.svg?react';
import Container from '@/ui/Container';
import Carousel from '@/ui/Carousel';

const Featured = () => {
  const { fetchFeatured } = useContext(StoreContext);

  const { isLoading, featuredItems } = fetchFeatured();

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <section className={styles.section}>
        <h1>Gear Up with the Best in Tech</h1>
        <Container className={styles.container}>
          <div className={styles.card}>
            <h2 className={styles.title}>featured</h2>
            <Carousel data={featuredItems}>
              {(props) => <FeaturedItem {...props} />}
            </Carousel>
          </div>
        </Container>
      </section>
      <div className={styles.wave}>
        <Wave />
      </div>
    </>
  );
};

export default Featured;
