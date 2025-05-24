import React from 'react';
import AIAssistant from './AIAssistant';

const ConversationDetails = ({ selectedConversation }) => (
    <div className="conversation-details">
        {selectedConversation ? (
            <>
                <div className="header">
                    <h2>{selectedConversation.user}</h2>
                    <div className="actions">
                        <button className="assign">Assign</button>
                        <button className="tag">Tag</button>
                        <button className="close">Close</button>
                    </div>
                </div>
                <div className="content">
                    <div className="message">
                        <img src={selectedConversation.avatar} alt={selectedConversation.user} />
                        <div className="bubble">
                            <p>{selectedConversation.lastMessage}</p>
                            <div className="time">{selectedConversation.time}</div>
                        </div>
                    </div>
                    <AIAssistant />
                </div>
                <div className="reply">
                    <textarea placeholder="Type a reply..."></textarea>
                    <button>Send</button>
                </div>
            </>
        ) : (
            <p>Select a conversation</p>
        )}
    </div>
);

export default ConversationDetails;