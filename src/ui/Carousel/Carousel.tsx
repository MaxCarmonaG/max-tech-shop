import { FC, PropsWithChildren } from 'react';
import ReactCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Carousel: FC<PropsWithChildren> = ({ children }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 768 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <ReactCarousel
      swipeable={true}
      draggable={false}
      showDots={true}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      removeArrowOnDeviceType={['mobile']}
    >
      {children}
    </ReactCarousel>
  );
};

export default Carousel;
