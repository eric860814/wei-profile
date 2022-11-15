/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState ,useRef} from "react";
import "../sass/layout/_header.sass";
import { Link } from "react-router-dom";

function Navbar(props) {
  
  const [isScroll, setIsScroll] = useState(false);
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
  }, []);
  
  const header1 = useRef(null)
  const [headerHeight,setHeaderHeight] = useState(0)
  useEffect(()=>{
    setHeaderHeight(header1.current.clientHeight)
  },[header1])
  function scrollToAnchor(targetName){
    if(targetName) {
      const anchorElement = document.getElementById(targetName);
      // if(anchorElement) anchorElement.scrollIntoView();
      window.scrollTo(0,anchorElement.offsetTop-headerHeight)
    }
  }

  return (
    <header ref={header1} className={isScroll ? "header change" : "header"}>
      {/* <img alt='' className='logo'></img> */} 
      <div  className='navigation' onClick={()=> scrollToAnchor('homeProfile')}>
        關於
      </div>
      <div  className='navigation' onClick={()=> scrollToAnchor('homeExperience')}>
        經歷
      </div>
      <div  className='navigation' onClick={()=>scrollToAnchor('homeProject')}>
        作品
      </div>
      <div  className='navigation' onClick={()=> scrollToAnchor('homeContact')}>
        聯絡
      </div>
    </header>
  );
}
export default Navbar;
