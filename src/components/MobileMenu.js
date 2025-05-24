import React from 'react';

const MobileMenu = ({ isOpen, toggleMenu }) => (
    <div className={`mobile-menu ${isOpen ? 'block' : 'hidden'}`}>
        {/* Mobile menu content is handled by Sidebar */}
    </div>
);

export default MobileMenu;