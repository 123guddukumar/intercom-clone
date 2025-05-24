import React from 'react';
import { FaRobot } from 'react-icons/fa';
import dummyData from '../data/dummyData';

const AIAssistant = () => (
    <div className="ai-assistant">
        <div className="header">
            <FaRobot />
            <h3>Copilot Suggestions</h3>
        </div>
        {dummyData.aiSuggestions.map((suggestion, index) => (
            <div key={index} className="suggestion">
                <suggestion.icon />
                {suggestion.text}
            </div>
        ))}
    </div>
);

export default AIAssistant;