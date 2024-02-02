// Header.js

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styling/Header.css';
import logo from '../assets/Church-Logo.png';
import MobileNav from './MobileNav';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [growMenuOpen, setGrowMenuOpen] = useState(false);
  const [isAboutSubMenuOpen, setIsAboutSubMenuOpen] = useState(false);
  const [isGrowSubMenuOpen, setIsGrowSubMenuOpen] = useState(false);
  const menuIconRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 0;
      setScrolling(isScrolling);

      // Add the 'scroll' class to the logo based on scrolling state
      const churchName = document.querySelector('.church-name');
      if (churchName) {
        if (isScrolling) {
          churchName.classList.add('scroll');
        } else {
          churchName.classList.remove('scroll');
        }
      }

      // Add the 'scroll' class to menu items based on scrolling state
      const menuItems = document.querySelectorAll('.menu-item');
      menuItems.forEach((menuItem) => {
        if (isScrolling) {
          menuItem.classList.add('scroll');
        } else {
          menuItem.classList.remove('scroll');
        }
      });
    };

    

    const handleOutsideClick = (event) => {
      if (menuOpen && menuIconRef.current && !menuIconRef.current.contains(event.target)) {
        setAboutMenuOpen(false);
        setGrowMenuOpen(false);
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [menuOpen]);

  const handleMouseOver = (menu) => {
    if (menu === 'about') {
      setAboutMenuOpen(true);
      setGrowMenuOpen(false);
    } else if (menu === 'grow') {
      setGrowMenuOpen(true);
      setAboutMenuOpen(false);
    }
  };

  const handleCloseMenu = () => {
    setAboutMenuOpen(false);
    setGrowMenuOpen(false);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const handleAboutClick = () => {
    if (isAboutSubMenuOpen) {
      setIsAboutSubMenuOpen(false);
      setAboutMenuOpen(false);
    }
  };

  const handleGrowClick = () => {
    if (isGrowSubMenuOpen) {
      setIsGrowSubMenuOpen(false);
      setGrowMenuOpen(false);
    }
  };

  const headerClass = `header-container${scrolling || menuOpen ? ' scroll' : ''}`;
  const isSmallScreen = window.innerWidth <= 882;

  return (
    <>
      <div className={headerClass}>
        <div className="logo-container">
        <Link to="/" className="logo-container">
            <img src={logo} alt="Church Logo" className={`logo${scrolling ? ' scroll' : ''}`} width="40" height="40" />
            <div className={`church-name${scrolling ? ' scroll' : ''}`}>New Nations Baptist Church</div>
          </Link>
        </div>

        {isSmallScreen ? (
          <MobileNav menuOpen={menuOpen} toggleMenu={toggleMenu} scrolling={scrolling} />
        ) : (
          <div className={`menu-container${menuOpen ? ' open' : ''}`}>
            <div
              onMouseOver={() => handleMouseOver('about')}
              onMouseLeave={() => setAboutMenuOpen(false)}
            >
              <div className="menu-item-container">
                <Link
                  to="/about"
                  className={`menu-item about-item ${window.innerWidth <= 768 ? 'plus-button' : ''}`}
                  onClick={() => {
                    handleCloseMenu();
                    handleAboutClick();
                  }}
                >
                  ABOUT
                </Link>
              </div>
              {aboutMenuOpen && (
                <div className={`sub-menu${isAboutSubMenuOpen ? ' open' : ''}`}>
                  <Link to="/about" className="menu-item" onClick={handleCloseMenu}>
                    WHO WE ARE
                  </Link>
                  <Link to="/pastorate" className="menu-item" onClick={handleCloseMenu}>
                    PASTORATE
                  </Link>
                  <Link to="/youth-unusual" className="menu-item" onClick={handleCloseMenu}>
                    YOUTH UNUSUAL
                  </Link>
                  <Link to="/ministries" className="menu-item" onClick={handleCloseMenu}>
                    MINISTRIES
                  </Link>
                </div>
              )}
            </div>

            <div
              onMouseOver={() => handleMouseOver('grow')}
              onMouseLeave={() => setGrowMenuOpen(false)}
            >
              <div className="menu-item-container">
                <Link
                  to="/grow"
                  className={`menu-item about-item ${window.innerWidth <= 882 ? 'plus-button' : ''}`}
                  onClick={() => {
                    handleCloseMenu();
                    handleGrowClick();
                  }}
                >
                  GROW
                </Link>
              </div>
              {growMenuOpen && (
                <div className={`sub-menu${isGrowSubMenuOpen ? ' open' : ''}`}>
                  <Link to="/baptism" className="menu-item" onClick={handleCloseMenu}>
                    BAPTISM
                  </Link>
                  <Link to="/member-database" className="menu-item" onClick={handleCloseMenu}>
                    MEMBERSHIP
                  </Link>
                </div>
              )}
            </div>

            <Link to="/visit" className="menu-item visit-item" onClick={handleCloseMenu}>
              VISIT
            </Link>
            <Link to="/live-stream" className="menu-item live-stream-item" onClick={handleCloseMenu}>
              LIVE STREAM
            </Link>
            <Link to="/calendar" className="menu-item calendar-item" onClick={handleCloseMenu}>
              NEED PRAYER?
            </Link>
            <Link to="/offering" className="menu-item donate-item" onClick={handleCloseMenu}>
              DONATE
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
