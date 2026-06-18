import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Skill from './Skill'
import Project2 from './Project2'
import Nexcent from './Nexcent'
import Project3 from './Project3'
import Project4 from './Project4'
import Project5 from './Project5'
import Project6 from './Project6'
import Quriarbox from './Quriarbox';
import Finsweet from './Finsweet';
import CssProject from './CssProject';
import Mah from './Mah';


const Work = () => {
  return (
    <div>
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop={true}
    >
    <SwiperSlide>
      {/* project -------------------------01*/}
         <Skill></Skill>
      </SwiperSlide>
     {/* project -------------------------02*/}
      <SwiperSlide>
        <Project2></Project2>
      </SwiperSlide>
     {/* project -------------------------03*/}
      <SwiperSlide>
         <Nexcent></Nexcent>
      </SwiperSlide>
     {/* project -------------------------04*/}
        <SwiperSlide>
           <Project4></Project4>
      </SwiperSlide>
      {/* project -------------------------05*/}
       <SwiperSlide>
        <Finsweet></Finsweet>
      </SwiperSlide>
      {/* project -------------------------06*/}
        <SwiperSlide>
          <Project3></Project3>
      </SwiperSlide>
          
    </Swiper>
    
    </div>
  )
}

export default Work