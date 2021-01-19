import React, { useState } from 'react';
import '../styles/navbar.scss';
import Moon from '../srcImg/moon.svg';
import Sun from '../srcImg/sun.svg';
import SVG from 'react-inlinesvg';
export default function Navbar(props) {
  const [mobile, setMobile] = useState(false);
  function toggleMobileNav() {
    setMobile(!mobile);
  }

  return (
    <div>
      <header className={`${props.darkmode ? '' : 'dark'}`}>
        <div className="navBrand">
          <h2>
            <a href="/">Learn Calculus</a>
          </h2>
        </div>

        <div className="navLinks">
          <span
            className="navLink"
            onClick={() => {
              props.setDarkmode(!props.darkmode);
              localStorage.setItem('darkmodeChoice', props.darkmode);
            }}
          >
            <a>
              {props.darkmode ? (
                <img height="30px" width="30px" src={Moon}></img>
              ) : (
                <img height="30px" width="30px" src={Sun}></img>
              )}
            </a>
          </span>
          <span className="navLink">
            <a href="/">Home</a>
          </span>
          <span className="navLink">
            <a href="/about">About</a>
          </span>
        </div>
        <div className="mobileBurger">
          <i onClick={toggleMobileNav} className="fas fa-bars fa-2x"></i>
        </div>
      </header>
      <div className={`mobileNavLinks ${mobile ? 'active' : ''}`}>
        <span className="mobileNavLink">
          <a href="/">Home</a>
        </span>
        <span className="mobileNavLink">
          <a href="/about">About</a>
        </span>
      </div>
    </div>
  );
}
