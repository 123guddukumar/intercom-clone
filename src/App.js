import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Conversations from './components/Conversations';
import ConversationDetails from './components/ConversationDetails';
import UserProfile from './components/UserProfile';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="app">
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      <div className="main">
        <Topbar toggleMobileMenu={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />
        <div className="main-content" style={{ display: 'flex', height: 'calc(100vh - 60px)', marginTop: '60px' }}>
          <Conversations setSelectedConversation={setSelectedConversation} />
          <ConversationDetails selectedConversation={selectedConversation} />
          <UserProfile />
        </div>
      </div>
    </div>
  );
}

export default App;