import { ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './Carousel.module.scss';
import CustomButton from '@/components/CustomButton';

interface CarouselProps<T> {
  data: (T & { id: string })[];
  children: (props: T & { id: string }) => ReactNode;
}

const Carousel = <T,>({ data, children }: CarouselProps<T>) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  const onPrevButtonClick = () => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  };

  const onNextButtonClick = () => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  };

  return (
    <div className={styles.container}>
      <CustomButton
        variant="outline"
        className={styles.prevButton}
        onClick={onPrevButtonClick}
      >
        Prev
      </CustomButton>
      <CustomButton
        variant="outline"
        className={styles.nextButton}
        onClick={onNextButtonClick}
      >
        Next
      </CustomButton>
      <div className={styles.carousel} ref={emblaRef}>
        <div className={styles.group}>
          {data.map((props) => (
            <div className={styles.item} key={props.id}>
              {children(props)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
