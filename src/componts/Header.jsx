/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "../scss/header.scss";
import { Link } from "react-router-dom";
function Header() {
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
  return (
    <div className={isScroll ? "header change" : "header"}>
      {/* <img alt='' className='logo'></img> */}
      <Link to='/' className='navigation'>
        HOME
      </Link>
      <Link to='/' className='navigation'>
        關於我
      </Link>
      <Link to='/Article' className='navigation'>
        文章
      </Link>
      <Link to='project' className='navigation'>
        作品
      </Link>

      <a href='' className='navigation'></a>
    </div>
  );
}
export default Header;
