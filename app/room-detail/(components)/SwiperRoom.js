"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const SwiperRoom = ({list}) => {



  return(
    <div className="mb_60" >
    <Swiper
     modules={[Autoplay,Navigation]}
      navigation
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop
    >
      {list.map((item, index) => (
        <SwiperSlide key={index}>
          <img src={item.img} alt={item.alt}/>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}

export default SwiperRoom