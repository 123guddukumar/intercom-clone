import React, { useState } from 'react';
import dummyData from '../data/dummyData';

const Conversations = ({ setSelectedConversation }) => {
    const [filter, setFilter] = useState('All');

    const filters = ['All', 'Unread', 'Assigned to me'];

    return (
        <div className="conversations">
            <div className="filters">
                {filters.map((f) => (
                    <button
                        key={f}
                        className={filter === f ? 'active' : ''}
                        onClick={() => setFilter(f)}
                    >
                        {f}
                    </button>
                ))}
            </div>
            {dummyData.conversations.map((conv) => (
                <div
                    key={conv.id}
                    onClick={() => setSelectedConversation(conv)}
                    className={`conversation-item ${conv.unread ? 'unread' : ''}`}
                >
                    <img src={conv.avatar} alt={conv.user} />
                    <div className="info">
                        <div className="header">
                            <span className="user">{conv.user}</span>
                            <span className="time">{conv.time}</span>
                        </div>
                        <p>{conv.lastMessage}</p>
                        <span className={`status ${conv.status.toLowerCase()}`}>
                            {conv.status}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Conversations;