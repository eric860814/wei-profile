/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "../scss/header.scss";
import { Link } from "react-router-dom";
function Header(props) {
  const [isScroll, setIsScroll] = useState(false);
  const settext = () => {
    props.setText("abc");
  };
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
  return (
    <div className={isScroll ? "header change" : "header"}>
      <img alt='' className='logo'></img>
      <Link to='/' className='navigation'>
        關於
      </Link>
      <Link to='/' className='navigation'>
        經歷
      </Link>
      <Link to='/Home' className='navigation'>
        作品
      </Link>
      <Link to='Home' className='navigation'>
        聯絡
      </Link>

      <a href='' className='navigation'></a>
    </div>
  );
}
export default Header;
