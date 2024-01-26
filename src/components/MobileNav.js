// MobileNav.js

import React, { useState, useEffect} from 'react';
import $ from 'jquery';
import '../styling/MobileNav.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const MobileNav = ({ menuOpen, toggleMenu }) => {
  const [isAboutSubMenuOpen, setIsAboutSubMenuOpen] = useState(false);
  const [isGrowSubMenuOpen, setIsGrowSubMenuOpen] = useState(false);

  const handleAboutSubMenuClick = () => {
    setIsAboutSubMenuOpen(!isAboutSubMenuOpen);
    setIsGrowSubMenuOpen(false);
  };

  const handleGrowSubMenuClick = () => {
    setIsGrowSubMenuOpen(!isGrowSubMenuOpen);
    setIsAboutSubMenuOpen(false);
  };

  const handleBackClick = (e) => {
    e.preventDefault();
    setIsAboutSubMenuOpen(false);
    setIsGrowSubMenuOpen(false);
  };

  // Dynamically add Back button to sub-menu on mount
  useEffect(() => {
    if (isAboutSubMenuOpen || isGrowSubMenuOpen) {
      $('.nav__sub').prepend(
        '<li class="nav__item"><a class="nav__link sub__close" href="#"><i class="fas fa-chevron-left"></i> Back</a></li>'
      );

      // Close out sub menu when Back is clicked
      $('.sub__close').click(function (e) {
        e.preventDefault();
        $(this).parent().parent().removeClass('is-active');
        setIsAboutSubMenuOpen(false);
        setIsGrowSubMenuOpen(false);
      });
    }
  }, [isAboutSubMenuOpen, isGrowSubMenuOpen]);

  return (
    <div className={`mobile-nav-container${menuOpen ? ' open' : ''}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {menuOpen && (
        <ul className="nav">
          <li className={`nav__item${isAboutSubMenuOpen ? ' is-active' : ''}`}>
            <button
              className={`nav__link${isAboutSubMenuOpen ? ' is-active' : ''}`}
              onClick={handleAboutSubMenuClick}
            >
              About <i className="fas fa-chevron-right"></i>
            </button>
            {isAboutSubMenuOpen && (
              <ul className="sub-nav">
                <li className="sub-nav__item">
                  <a className="sub-nav__link" href="/about" onClick={handleBackClick}>
                    <i className="fas fa-chevron-left"></i> <i>Back</i>
                  </a>
                </li>
                <li className="sub-nav__item">
                  <a className="sub-nav__link" href="/about">
                    <strong>Who We Are</strong>
                  </a>
                </li>
                <li className="sub-nav__item">
                  <a className="sub-nav__link" href="/pastorate">
                    <strong>Pastorate</strong>
                  </a>
                </li>
                <li className="sub-nav__item">
                  <a className="sub-nav__link" href="/youth-unusual">
                    <strong>Youth Unusual</strong>
                  </a>
                </li>
                <li className="sub-nav__item">
                  <a className="sub-nav__link" href="/ministries">
                    <strong>Ministries</strong>
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className={`nav__item${isGrowSubMenuOpen ? ' is-active' : ''}`}>
            <button
              className={`nav__link${isGrowSubMenuOpen ? ' is-active' : ''}`}
              onClick={handleGrowSubMenuClick}
            >
              Grow <i className="fas fa-chevron-right"></i>
            </button>
            {isGrowSubMenuOpen && (
              <ul className="sub-nav">
                <li className="sub-nav__item">
                  <a className="sub-nav__link" href="/about" onClick={handleBackClick}>
                    <i className="fas fa-chevron-left"></i> <i>Back</i>
                  </a>
                </li>
                <li className="sub-nav__item">
                  <a className="sub-nav__link" href="/baptism">
                    <strong>baptism</strong>
                  </a>
                </li>
                <li className="sub-nav__item">
                  <a className="sub-nav__link" href="/member-database">
                    <strong>Membership</strong>
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/visit">
              Visit
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/calendar">
              Need Prayer?
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/offering">
              Offering
            </a>
          </li>
          {/* Add more items as needed */}
        </ul>
      )}
    </div>
  );
};

export default MobileNav;
