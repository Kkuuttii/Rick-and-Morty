import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type CarouselProps = {
  slides: React.ReactNode[];
  settings?: Settings;
  className?: string;
};

const Carousel: React.FC<CarouselProps> = ({ slides, settings, className }) => {
  const defaultSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const mergedSettings: Settings = {
    ...defaultSettings,
    ...settings,
  };

  return <Slider {...mergedSettings} className={className} >{slides}</Slider>
};

export default Carousel;