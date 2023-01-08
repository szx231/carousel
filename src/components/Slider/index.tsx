import { Navigation, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Card } from './Card';
import { Button, CurrentSlide, ButtonsWrap, CurrentSlideNavigation, ArrowImage } from './styled';
import 'swiper/css';
import 'swiper/css/navigation';

interface ISlider {
  sliderCounts: string;
  activeItem: string;
  activeSlide: number;
  decreaseRotate: () => void;
  increaseRotate: () => void;
  data: any;
}

export const Slider: React.FC<ISlider> = ({
  sliderCounts,
  activeItem,
  activeSlide,
  decreaseRotate,
  increaseRotate,
  data,
}) => {
  return (
    <>
      <CurrentSlideNavigation>
        <CurrentSlide>
          {sliderCounts}/{activeItem}
        </CurrentSlide>
        <ButtonsWrap>
          <Button disabled={activeSlide < 1} onClick={increaseRotate} isDisabled={activeSlide < 1}>
            <ArrowImage isDisabled={activeSlide < 1} />
          </Button>
          <Button
            disabled={activeSlide > 4}
            onClick={decreaseRotate}
            isDisabled={activeSlide > 4}
            style={{ rotate: '180deg' }}
          >
            <ArrowImage isDisabled={activeSlide > 4} />
          </Button>
        </ButtonsWrap>
      </CurrentSlideNavigation>
      <Swiper
        style={{ color: '#000' }}
        modules={[Navigation, Scrollbar]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
      >
        {data[activeSlide].card.map((item: any, index: number) => (
          <SwiperSlide>
            <Card title={item.dateFact} description={item.description} isActiveSlide={activeSlide === index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
