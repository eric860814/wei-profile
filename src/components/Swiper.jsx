import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <div className=''>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        loop
        autoplay
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}>
        {props.SwiperData.map((element) => {
          return (
            <SwiperSlide key={element.id}>
              <img alt='' src={element.img}></img>
              <p>{element.text}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button className='swiper-button-prev'>prev</button>
      <button className='swiper-button-next'>next</button>
    </div>
  );
};
