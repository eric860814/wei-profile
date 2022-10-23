import React from "react";
import Navbar from "../components/Navbar";
import Swiper from "../components/Swiper";
import Footer from "../components/Footer";
import { Data } from "../Data/Data";
function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className='homeProfile'></div>
      {/* 經歷 */}
      <div className='homeProject'>
        <div className=''>{Data.PageData.title}</div>
        <Swiper SwiperData={Data.projectData.project.data}></Swiper>
      </div>
      <div className='homeContact'></div>
      <Footer></Footer>
    </>
  );
}
export default Home;
