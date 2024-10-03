// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../../assets/carousel1.jpg';
import img2 from '../../assets/carousel2.jpg';
import img3 from '../../assets/carousel3.jpg';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slider from './Slider';


export default function Carousel() {
  return (
    <div className='container mx-auto px-5 py-10'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slider image={img1} text='Get your Web Development Projects Done in minutes'></Slider>
        </SwiperSlide>
        <SwiperSlide>
          <Slider image={img2} text='Get your Graphics Design Projects Done in minutes'></Slider>
        </SwiperSlide>
        <SwiperSlide>
          <Slider image={img3} text='Get your Digital Marketing Projects Done in minutes'></Slider>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
