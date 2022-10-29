import React from "react";
import Navbar from "../components/Navbar";
import Swiper from "../components/Swiper";
import Footer from "../components/Footer";
import { Data } from "../Data/Data";
import "../sass/style.sass";
import "../sass/page/home.sass";

//圖片
import exper1 from '../images/exper01.jpg';
import frofile1 from '../images/profile01.jpg';

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <div className='homeProfile'>
          <div className='pro_wrap'>
            <div className='pro_left'>
              <div className='homeHead'>
                <div className='sub'>{Data.profileHead.sub}</div>
                <div className='title'>{Data.profileHead.title}</div>
                <div className='p'>{Data.profileHead.p}</div>
              </div>
            </div>
            <div className='pro_right'>
              <div className="pro_img">
                <img src={frofile1} alt=""></img>
              </div>
            </div>
          </div>
        </div>
        <div className='homeExperience'>
          <div className="exper_wrap">
            <div className="exper_left">
              <div className='homeHead'>
                <div className='sub'>{Data.experienceHead.sub}</div>
                <div className='title'>{Data.experienceHead.title}</div>
                <div className='p'>{Data.experienceHead.p}</div>
              </div>
            </div>
            <div className="exper_right">
              <div className="exper_list">
                <div className="each_list">
                  <div className="list_word">
                    <div className="list_job">網頁前端設計師</div>
                    <div className="list_company">
                      <p>威德數位設計有限公司</p>
                      <span>2019/09~2022/09</span>
                    </div>
                    {/* <div className="list_time">2019/9~2022/9</div> */}
                    <ul className="list_ct">
                      <li>1. 負責網站前端開發及維護。</li>
                      <li>2. 與網頁設計師及後端工程師合作，開發前台互動功能。</li>
                      <li>3. 支援各種瀏覽器(Chrome、IE、Edge)、行動裝置(RWD)。</li>
                      <li>4. 與 PM 溝通協調客戶需求，提供合理的解決方案。</li>
                    </ul>
                    
                  </div>
                  <div className="list_pic">
                    <img alt='' src={exper1}></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='homeProject'>
          <div className='homeHead'>
            <div className='sub'>{Data.projectHead.sub}</div>
            <div className='title'>{Data.projectHead.title}</div>
            <div className='p'>{Data.projectHead.p}</div>
          </div>
          <div className="projectSwiper">
            <Swiper SwiperData={Data.projectItem.project.data}></Swiper>
          </div>
        </div>
        <div className='homeContact'>
          <div className='homeHead'>
            <div className='sub'>{Data.contactHead.sub}</div>
            <div className='title'>{Data.contactHead.title}</div>
            <div className='p'>{Data.contactHead.p}</div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
export default Home;
