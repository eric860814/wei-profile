import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/autoplay";
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <div className='swiper_wrap'>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        loop
        autoplay
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}>
        {props.SwiperData.map((element) => {
          return (
            <SwiperSlide key={element.id}>
              <a className="swiper-a" href={element.url} target="_blank">
                <div className="swiper-pic">
                  <img alt='' src={element.img}></img>
                </div>
                <p>{element.title}</p>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className='swiper-prev icon-arrow_left'></div>
      <div className='swiper-next icon-arrow_right'></div>
    </div>
  );
};
