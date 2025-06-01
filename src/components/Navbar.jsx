import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

const Navbar = ({ onLogout }) => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/view" className="nav-link">
          View Transactions
        </Link>
        <Link to="/add" className="nav-link">
          Add Transaction
        </Link>
        <Link to="/filter" className="nav-link">
          Filter Transactions
        </Link>
      </div>
      <button onClick={onLogout} className="button secondary">
        <FiLogOut className="mr-2" />
        Logout
      </button>
    </nav>
  );
};

export default Navbar;