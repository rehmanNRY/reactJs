import React, { useState, useEffect, useRef } from 'react';
import SocialIcons from "./SocialIcons";
import slogo from '../../images/slogo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
  
    const handleMenuClick = () => {
      if (menuRef.current && menuOpen) {
        setMenuOpen(false);
      }
    };
  
    let menuRefCurrent = menuRef.current; // Store menuRef.current in a variable
  
    if (menuOpen && menuRefCurrent) {
      document.addEventListener('mousedown', handleClickOutside);
      menuRefCurrent.addEventListener('click', handleMenuClick);
    }
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (menuRefCurrent) {
        menuRefCurrent.removeEventListener('click', handleMenuClick);
      }
    };
  }, [menuOpen]);
  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <header className='header_pc'>
        <ul>
          <label htmlFor="">
            <a href="#Home">
              <img src={slogo} alt="Logo" />
              <h4>Spider</h4>
            </a>
          </label>
          <li><a href="#Home">Home</a></li>
          <li><a href="#Features">Features</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Benefits">Benefits</a></li>
          <li><a href="#Faqs">Faqs</a></li>
          <li><a href="#Difference">Difference</a></li>
          <li><a href="#ContactForm">Contact</a></li>
        </ul>
        <button type="button"><a href="#ContactForm">Contact Us 🚀</a></button>
      </header>
      <header className="header_mbl">
        <div className="header_main-mbl">
          <label htmlFor="">
            <a href="#Home">
              <img src={slogo} alt="Logo" />
              <h4>Spider</h4>
            </a>
          </label>
          <div className={`header_btns ${menuOpen ? 'open' : ''}`}>
            <button type="button" onClick={toggleMenu}>
              <i className='bx bx-menu-alt-right'></i>
            </button>
            <button type="button"><i className='bx bx-x'></i></button>
          </div>
        </div>
        {menuOpen && (
          <div ref={menuRef} className="header_menu-mbl">
            <ul>
              <li><a href="#Home">Home</a></li>
              <li><a href="#Features">Features</a></li>
              <li><a href="#About">About</a></li>
              <li><a href="#Benefits">Benefits</a></li>
              <li><a href="#Faqs">Faqs</a></li>
              <li><a href="#Difference">Difference</a></li>
              <li><a href="#ContactForm">Contact</a></li>
              <button type="button"><a href="#ContactForm">Contact Us 🚀</a></button>
            </ul>
            <SocialIcons/>
          </div>
        )}
      </header>
    </nav>
  );
};

export default Header;