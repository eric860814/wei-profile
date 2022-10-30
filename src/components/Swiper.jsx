import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import ProjectModal from "./ProjectModal";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/autoplay";
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState("");
  const projectClick = (element) => {
    setShow(true);
    setData(element);
  };
  const selectDate = (str) => {
    const data = props.SwiperData;
    const newData = data.filter((element) => {
      if (element.time.includes(str) === true) {
        return element;
      }
    });
    console.log(newData);
  };
  return (
    <div className='swiper_wrap'>
      <ProjectModal setShow={setShow} show={show} data={data}></ProjectModal>
      <button>All</button>
      <button onClick={() => selectDate("2020")}>2020</button>
      <button onClick={() => selectDate("2021")}>2021</button>
      <button onClick={() => selectDate("2022")}>2022</button>
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
        // onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}>
        {props.SwiperData.map((element) => {
          return (
            <SwiperSlide key={element.id}>
              <div className='swiper-a' onClick={() => projectClick(element)}>
                <div className='swiper-pic'>
                  <img alt='' src={element.img}></img>
                </div>
                <p>{element.title}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className='swiper-prev icon-arrow_left'></div>
      <div className='swiper-next icon-arrow_right'></div>
    </div>
  );
};
