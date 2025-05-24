🌟 Intercom Clone Admin Panel



A modern, responsive admin panel inspired by Intercom, built with React and styled using plain CSS. This project allows you to manage customer conversations, view AI-powered suggestions, and display user profiles in a clean and professional UI.



🚀 Features


📱 Responsive Dashboard Layout: Includes a sidebar, topbar, conversations inbox, conversation details, and user profile panel.


🧭 Sidebar Navigation: Navigation items (Conversations, People, Engage, Reports, Settings) with a vibrant active state and smooth slide-in animation on mobile.



🔍 Topbar with Centered Search: Features a centered search bar and a hamburger menu for mobile navigation, with a cross icon to close the sidebar.



💬 Conversations Inbox: Lists conversations with user avatars, unread indicators, status tags (Open, Waiting, Closed), and filters (All, Unread, Assigned to me).



📩 Conversation Details: Displays messages in chat bubble style with timestamps, AI suggestions, and a reply input area.



🤖 AI Assistant: Branded as "Copilot Suggestions" with a gradient background, icons, and fade-in animation.



👤 User Profile: Shows customer details (name, email, tags, recent activity) in a right-side panel.



🎥 Animations: Smooth sidebar transitions with a bounce effect, background overlay on mobile, and fade-in animations for AI suggestions.



📱 Responsive Design: Mobile-friendly with a collapsible sidebar, stacked layout, and touch-friendly elements.



📂 Project Structure

Here’s the structure of the project:

intercom-clone/
├── public/
│   ├── index.html          # Main HTML file
│   └── favicon.ico         # Favicon
├── src/
│   ├── assets/             # Folder for custom icons or images (optional)
│   ├── components/         # React components
│   │   ├── Sidebar.js      # Sidebar navigation component
│   │   ├── Topbar.js       # Topbar with search and hamburger menu
│   │   ├── Conversations.js # Conversations list with filters
│   │   ├── ConversationDetails.js # Selected conversation details
│   │   ├── AIAssistant.js  # AI suggestions component
│   │   ├── UserProfile.js  # User profile panel
│   │   └── MobileMenu.js   # Placeholder for mobile menu logic
│   ├── data/
│   │   └── dummyData.js    # Static JSON data for conversations and profiles
│   ├── styles/
│   │   └── index.css       # Custom CSS for styling
│   ├── App.js              # Main app component
│   └── index.js            # Entry point
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation (this file)



🛠️ Setup Instructions

Prerequisites





Node.js: Ensure Node.js (v14 or higher) and npm are installed.



Git: Optional, for cloning the repository.

Installation Steps





Clone the Repository (if applicable):

git clone <repository-url>
cd intercom-clone

Alternatively, create a new directory and set up the project manually using the provided code files.



Initialize the React Project: If you haven't already set up the project, create a new React app:

npx create-react-app intercom-clone
cd intercom-clone



Install Dependencies: Install react-icons for icons:

npm install react-icons



Set Up Project Files:





Copy the provided code into the respective files as per the project structure above.



Ensure all files (App.js, index.js, components, etc.) are placed in the correct directories.



Run the Development Server: Start the app:

npm start

The app will open at http://localhost:3000 in your browser.



Build for Production (optional): Create an optimized build:

npm run build



💻 Code Explanation

Main Components







Component



Description





App.js



The root component that integrates all other components and manages state for the mobile menu and selected conversation.





Sidebar.js



Displays the sidebar navigation with icons and labels, featuring a smooth slide-in animation on mobile.





Topbar.js



Renders the topbar with a centered search bar and hamburger menu for mobile navigation.





Conversations.js



Lists all conversations with filtering options, user avatars, and status tags.





ConversationDetails.js



Shows details of the selected conversation with chat bubble messages and AI suggestions.





AIAssistant.js



Provides AI-powered suggestions branded as "Copilot Suggestions" with animations.





UserProfile.js



Displays customer details (name, email, tags, recent activity) in a right-side panel.





dummyData.js: Contains static JSON data for conversations, user profiles, and AI suggestions.





Structure:





conversations: Array of conversation objects (user, avatar, lastMessage, status, time, unread).



userProfile: Object with user details (name, email, avatar, tags, recentActivity).



aiSuggestions: Array of suggestion objects (icon, text).

Styling (index.css)





🎨 Colors:





Primary: Teal (#38b2ac) for active states and buttons.



Secondary: Blue (#2b6cb0) for AI suggestions and accents.



Background: Light grey (#f7f9fc) for the main area, white for panels.



Text: Dark grey (#4a5568) for body text, lighter grey (#718096) for secondary text.



🎥 Animations:





Sidebar slide-in with a bounce effect (cubic-bezier(0.68, -0.55, 0.27, 1.55)).



Fade-in animation for AI suggestions (@keyframes fadeIn).



📱 Responsive Design:





Sidebar collapses on mobile, triggered by the hamburger menu.



Layout stacks vertically on smaller screens.



Search bar scales down appropriately on mobile.



📖 Usage





View Conversations:





The Conversations panel on the left lists all conversations.



Use filters ("All," "Unread," "Assigned to me") to sort conversations.



Click a conversation to view its details in the center panel.



Interact with Conversations:





In the ConversationDetails panel, view messages in chat bubble style.



Use action buttons (Assign, Tag, Close) to manage the conversation.



Type a reply in the textarea and click "Send" (functionality not implemented in this frontend-only app).



AI Suggestions:





The AIAssistant component displays suggestions below the conversation messages.



Suggestions are static but styled with a gradient background and icons.



User Profile:





The UserProfile panel on the right shows the selected user's details.



Displays name, email, avatar, tags, and recent activity with icons.



Mobile Navigation:





On mobile, click the hamburger icon in the topbar to open the sidebar.



The sidebar slides in with a bounce effect and a background overlay.



Click the cross icon to close the sidebar.




📝 Notes





No Backend: This is a frontend-only application using static data from dummyData.js. To add real-time data, integrate a backend (e.g., Django with REST APIs).



Styling: All styling is done with plain CSS in index.css, avoiding frameworks like Tailwind CSS for simplicity.



Icons: Uses react-icons for professional and scalable icons.



Future Improvements:





Add a backend for real-time data and message sending.



Implement actual AI suggestions using an API (e.g., Gemini API).



Enhance animations and interactions for an even smoother user experience.



📜 License

This project is licensed under the MIT License. Feel free to modify and use it for learning or personal projects.



Built with ❤️ on May 24, 2025
