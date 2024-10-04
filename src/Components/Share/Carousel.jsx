// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/istockphoto-1722534964-612x612.jpg';

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
          <Slider image={img1} text='A long, fictional narrative story'></Slider>
        </SwiperSlide>
        <SwiperSlide>
          <Slider image={img2} text='The study of past events and societies'></Slider>
        </SwiperSlide>
        <SwiperSlide>
          <Slider image={img3} text='A rhythmic, expressive form of writing'></Slider>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
