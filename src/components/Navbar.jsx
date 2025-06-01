import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut, FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
      // Close menu when resizing to desktop view
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    // Set initial view
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Mobile menu button (only visible on mobile) */}
      {isMobileView && (
        <button
          onClick={toggleMobileMenu}
          className="mobile-menu-button"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      )}

      {/* Navigation links - desktop version */}
      <div className={`nav-links ${isMobileView ? 'mobile' : ''} ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to="/view" className="nav-link" onClick={() => isMobileView && setIsMobileMenuOpen(false)}>
          View Transactions
        </Link>
        <Link to="/add" className="nav-link" onClick={() => isMobileView && setIsMobileMenuOpen(false)}>
          Add Transaction
        </Link>
        <Link to="/filter" className="nav-link" onClick={() => isMobileView && setIsMobileMenuOpen(false)}>
          Filter Transactions
        </Link>
      </div>

      {/* Logout button */}
      <button onClick={onLogout} className="button secondary logout-button">
        <FiLogOut className="mr-2" />
        {!isMobileView && 'Logout'}
      </button>
    </nav>
  );
};

export default Navbar;