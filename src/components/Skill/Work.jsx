import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Skill from './Skill'
import Project2 from './Project2'
import Project3 from './Project3'
import Project4 from './Project4'
import Project5 from './Project5'
import Project6 from './Project6'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Work = () => {
  return (
    <div>
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
    >
    <SwiperSlide>
         <Skill></Skill>
      </SwiperSlide>

      <SwiperSlide>
        <Project2></Project2>
      </SwiperSlide>

      <SwiperSlide>
          <Project3></Project3>
      </SwiperSlide>

        <SwiperSlide>
           <Project4></Project4>
      </SwiperSlide>
           <SwiperSlide>
           <Project5></Project5>
      </SwiperSlide>
       <SwiperSlide>
          <Project6></Project6>
      </SwiperSlide>
    </Swiper>
    
    </div>
  )
}

export default Work