import React from 'react';
import { FaEnvelope, FaUsers, FaBullhorn, FaChartBar, FaCog, FaComments } from 'react-icons/fa';

const Sidebar = ({ isMobileMenuOpen, toggleMobileMenu }) => {
    const navItems = [
        { icon: FaComments, label: 'Conversations', active: true },
        { icon: FaUsers, label: 'People' },
        { icon: FaBullhorn, label: 'Engage' },
        { icon: FaChartBar, label: 'Reports' },
        { icon: FaCog, label: 'Settings' },
    ];

    return (
        <div className={`sidebar ${isMobileMenuOpen ? 'active' : 'hidden'} md:block`}>
            <div className="logo">
                <FaComments />
                Intercom
            </div>
            <nav>
                {navItems.map((item) => (
                    <div key={item.label} className={item.active ? 'active' : ''}>
                        <item.icon />
                        {item.label}
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;