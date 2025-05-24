import React from 'react';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';

const Topbar = ({ toggleMobileMenu, isMobileMenuOpen }) => (
    <div className="topbar">
        <button onClick={toggleMobileMenu} className="md:hidden">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className="search-container">
            <FaSearch />
            <input type="text" placeholder="Search for conversations..." />
        </div>
    </div>
);

export default Topbar;