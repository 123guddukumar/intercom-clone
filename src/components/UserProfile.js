import React from 'react';
import { FaSignInAlt, FaUserEdit, FaEnvelope } from 'react-icons/fa';
import dummyData from '../data/dummyData';

const iconMap = {
    FaSignInAlt: FaSignInAlt,
    FaUserEdit: FaUserEdit,
    FaEnvelope: FaEnvelope,
};

const UserProfile = () => (
    <div className="user-profile">
        <h2>User Profile</h2>
        <div className="details">
            <img src={dummyData.userProfile.avatar} alt={dummyData.userProfile.name} />
            <p><strong>{dummyData.userProfile.name}</strong></p>
            <p>{dummyData.userProfile.email}</p>
            <div className="tags">
                {dummyData.userProfile.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                ))}
            </div>
            <h3>Recent Activity</h3>
            <ul>
                {dummyData.userProfile.recentActivity.map((activity, index) => {
                    const Icon = iconMap[activity.icon];
                    return (
                        <li key={index}>
                            <Icon />
                            {activity.text} - <span>{activity.time}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    </div>
);

export default UserProfile;