/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState ,useRef} from "react";
import "../sass/layout/_header.sass";
import { Link } from "react-router-dom";
function Navbar(props) {
  // const ref123 = useRef(null)
  // anchorEvent();
  const [isScroll, setIsScroll] = useState(false);
  // useEffect(()=>{
  //   ref123.current.addEventListener("click",function(){
  //     // console.log("bbb")
  //     const target = ref123.current.getAttribute('anchor-target')
  //     // console.log(target.offsetTop());
  //     // console.log(document.offsetTop);
  //     ref123.current.scrollIntoView()
      
  //   })
  // },[ref123])
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
  function scrollToAnchor(targetName){
    if(targetName) {
      var anchorElement = document.getElementById(targetName);
      console.log('anchorElement',anchorElement);
      if(anchorElement) {
        anchorElement.scrollIntoView();
      }
    }
  }

  return (
    <div className={isScroll ? "header change" : "header"}>
      {/* <img alt='' className='logo'></img> */} 
      <a href='javascript:;' className='navigation' onClick={()=>{ scrollToAnchor('homeProfile')}}>
        關於
      </a>
      <a href='javascript:;' className='navigation' onClick={()=>{ scrollToAnchor('homeExperience')}}>
        經歷
      </a>
      <a href='javascript:;' className='navigation' onClick={()=>{ scrollToAnchor('homeProject')}}>
        作品
      </a>
      <a href='javascript:;' className='navigation' onClick={()=>{ scrollToAnchor('homeContact')}}>
        聯絡
      </a>
    </div>
  );
}
export default Navbar;
