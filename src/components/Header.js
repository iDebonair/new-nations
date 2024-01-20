import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styling/Header.css';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [growMenuOpen, setGrowMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 0;
      setScrolling(isScrolling);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseOver = (menu) => {
    if (menu === 'about') {
      setAboutMenuOpen(true);
      setGrowMenuOpen(false); // Close the other menu if open
    } else if (menu === 'grow') {
      setGrowMenuOpen(true);
      setAboutMenuOpen(false); // Close the other menu if open
    }
  };

  const handleCloseMenu = () => {
    setAboutMenuOpen(false);
    setGrowMenuOpen(false);
  };

  return (
    <div className={`header-container${scrolling ? ' scroll' : ''}`}>
      <div className="logo-container">
        <Link to="/" className="d-flex align-items-center text-decoration-none text-dark">
          <img
            src="https://placekitten.com/40/40"
            alt="Church Logo"
            className="logo"
            width="40"
            height="40"
          />
          <div className="text-dark fs-5">New Nations Baptist Church</div>
        </Link>
      </div>

      <div className="menu-container">
        <div
          onMouseOver={() => handleMouseOver('about')}
          onMouseLeave={() => setAboutMenuOpen(false)}
        >
          <Link to="/about" className="menu-item" onClick={handleCloseMenu}>
            ABOUT
          </Link>
          {aboutMenuOpen && (
            <div className="sub-menu">
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
          <Link to="/grow" className="menu-item" onClick={handleCloseMenu}>
            GROW
          </Link>
          {growMenuOpen && (
            <div className="sub-menu">
              <Link to="/baptism" className="menu-item" onClick={handleCloseMenu}>
                BAPTISM
              </Link>
              <Link to="/member-database" className="menu-item" onClick={handleCloseMenu}>
                MEMBERSHIP
              </Link>
            </div>
          )}
        </div>

        <Link to="/live-stream" className="menu-item" onClick={handleCloseMenu}>
          STREAM LIVE
        </Link>
        <Link to="/visit" className="menu-item" onClick={handleCloseMenu}>
          VISIT
        </Link>
        <Link to="/offering" className="menu-item" onClick={handleCloseMenu}>
          GIVE
        </Link>
      </div>
    </div>
  );
};

export default Header;
