import React from "react";
import Navbar from "../components/Navbar";
import Swiper from "../components/Swiper";
import Footer from "../components/Footer";
import { Data } from "../Data/Data";
import "./../sass/style.sass";
import "./../sass/page/home.sass";
function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className='homeProfile'></div>
      {/* 經歷 */}
      <div className='homeProject'>
        <div className='homeHead'>
          <div className='sub'>{Data.PageData.sub}</div>
          <div className='title'>{Data.PageData.title}</div>
          <div className='p'>{Data.PageData.p}</div>
        
        </div>
        <Swiper SwiperData={Data.projectData.project.data}></Swiper>
      </div>
      <div className='homeContact'></div>
      <Footer></Footer>
    </>
  );
}
export default Home;
