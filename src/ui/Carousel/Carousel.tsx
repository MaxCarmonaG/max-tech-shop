import { ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

interface CarouselProps<T> {
  data: (T & { id: string })[];
  children: (props: T & { id: string }) => ReactNode;
}

const Carousel = <T,>({ data, children }: CarouselProps<T>) => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
  });

  return (
    <div style={{ overflow: 'hidden' }} ref={emblaRef}>
      <div style={{ display: 'flex' }}>
        {data.map((props) => (
          <div style={{ flex: '0 0 100%', minWidth: 0 }} key={props.id}>
            {children(props)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
