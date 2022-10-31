/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState ,useRef} from "react";
import "../sass/layout/_header.sass";
import { Link } from "react-router-dom";
function Navbar(props) {
  const ref123 = useRef(null)
  // anchorEvent();
  const [isScroll, setIsScroll] = useState(false);
  useEffect(()=>{
    ref123.current.addEventListener("click",function(){
      // console.log("bbb")
      const target = ref123.current.getAttribute('anchor-target')
      // console.log(target.offsetTop());
      // console.log(document.offsetTop);
      ref123.current.scrollIntoView()
      
    })
  },[ref123])
  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // ref123.current.addEventListener('click',function(){
    //   console.log(ref123.current.getAttribute('anchor-target'));
    // })

  }, []);
  // window.animate(function(){
  //   window.scrollTo = 300;
  // },600)
  // onClick={anchorEvent}
  return (
    <div className={isScroll ? "header change" : "header"}>
      {/* <img alt='' className='logo'></img> */} 
      
      <a href='javascript:;' className='navigation anchor4' anchor-target="homeProfile" anchor-speed="600" anchor-gap="100" anchor>
        關於
      </a>
      <a ref={ref123} href='javascript:;' className='navigation anchor4' anchor-target="homeExperience" anchor-speed="600" anchor-gap="100" anchor>
        經歷
      </a>
      <a href='javascript:;' className='navigation anchor4' anchor-target="homeProject" anchor-speed="600" anchor-gap="100" anchor>
        作品
      </a>
      <a href='javascript:;' className='navigation anchor4' anchor-target="homeContact" anchor-speed="600" anchor-gap="100" anchor>
        聯絡
      </a>
    </div>
  );
}
export default Navbar;
