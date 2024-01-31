import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../styling/MobileNav.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const MobileNav = ({ menuOpen, toggleMenu }) => {
    const [isAboutSubMenuOpen, setIsAboutSubMenuOpen] = useState(false);
    const [isGrowSubMenuOpen, setIsGrowSubMenuOpen] = useState(false);
    const [userClosedMenu, setUserClosedMenu] = useState(false);
    const containerRef = useRef(null);
  
    const handleAboutSubMenuClick = () => {
      setIsAboutSubMenuOpen(!isAboutSubMenuOpen);
      setIsGrowSubMenuOpen(false);
      setUserClosedMenu(false); // User intentionally opened the menu
    };
  
    const handleGrowSubMenuClick = () => {
      setIsGrowSubMenuOpen(!isGrowSubMenuOpen);
      setIsAboutSubMenuOpen(false);
      setUserClosedMenu(false); // User intentionally opened the menu
    };
  
    const handleBackClick = (e) => {
      e.preventDefault();
      e.stopPropagation(); // Stop event propagation
      if (isAboutSubMenuOpen) {
        setIsAboutSubMenuOpen(false);
      } else if (isGrowSubMenuOpen) {
        setIsGrowSubMenuOpen(false);
      }
      setUserClosedMenu(true); // User intentionally closed the menu
    };
  
    const handleClickOutside = useCallback(
        (e) => {
          if (menuOpen && !userClosedMenu && containerRef.current && !containerRef.current.contains(e.target) && !e.target.closest('.menu-icon')) {
            toggleMenu();
          }
        },
        [containerRef, toggleMenu, userClosedMenu, menuOpen]
      );
  
    useEffect(() => {
      const handleDocumentClick = (e) => handleClickOutside(e);
  
      window.addEventListener('click', handleDocumentClick);
  
      return () => {
        window.removeEventListener('click', handleDocumentClick);
      };
    }, [handleClickOutside]);
  
  const renderSubMenu = (items) => {
    return (
      <ul className="sub-nav">
        <li className="sub-nav__item">
          <a className="sub-nav__link" href="/about" onClick={handleBackClick}>
            <i className="fas fa-chevron-left"></i> <i>Back</i>
          </a>
        </li>
        {items.map((item, index) => (
          <li key={index} className="sub-nav__item">
            <a className="sub-nav__link" href={item.link}>
              <strong>{item.label}</strong>
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={`mobile-nav-container${menuOpen ? ' open' : ''}`} ref={containerRef}>
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
            {isAboutSubMenuOpen && renderSubMenu([
              { label: 'Who We Are', link: '/about' },
              { label: 'Pastorate', link: '/pastorate' },
              { label: 'Youth Unusual', link: '/youth-unusual' },
              { label: 'Ministries', link: '/ministries' },
            ])}
          </li>
          <li className={`nav__item${isGrowSubMenuOpen ? ' is-active' : ''}`}>
            <button
              className={`nav__link${isGrowSubMenuOpen ? ' is-active' : ''}`}
              onClick={handleGrowSubMenuClick}
            >
              Grow <i className="fas fa-chevron-right"></i>
            </button>
            {isGrowSubMenuOpen && renderSubMenu([
              { label: 'Baptism', link: '/baptism' },
              { label: 'Membership', link: '/member-database' },
            ])}
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/visit">
              Visit
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/live-stream">
              Live Stream
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
