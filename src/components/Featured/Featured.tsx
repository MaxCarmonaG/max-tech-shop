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
          <h2 className={styles.title}>featured</h2>
          <Carousel>
            {featuredItems.map((props) => (
              <FeaturedItem key={props.id} {...props} />
            ))}
          </Carousel>
        </Container>
      </section>
      <div className={styles.wave}>
        <Wave />
      </div>
    </>
  );
};

export default Featured;

// https://www.free-css.com/assets/files/free-css-templates/preview/page290/brighton/
