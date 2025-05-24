const dummyData = {
    conversations: [
        {
            id: 1,
            user: "Guddu Verma",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
            lastMessage: "Hi, I need help with my account.",
            status: "Open",
            time: "2h ago",
            unread: true
        },
        {
            id: 2,
            user: "Riya Wills",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg",
            lastMessage: "Payment issue with my subscription.",
            status: "Waiting",
            time: "5h ago",
            unread: false
        },
        {
            id: 3,
            user: "Neha win",
            avatar: "https://randomuser.me/api/portraits/women/3.jpg",
            lastMessage: "Can you reset my password?",
            status: "Closed",
            time: "1d ago",
            unread: false
        },
    ],
    userProfile: {
        name: "RIya will",
        email: "riyawill@gmail.com",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        lastActive: "2025-05-20 10:30 AM",
        tags: ["Premium", "Support"],
        recentActivity: [
            { icon: "FaSignInAlt", text: "Logged in", time: "Today, 9:00 AM" },
            { icon: "FaUserEdit", text: "Updated profile", time: "Yesterday, 3:00 PM" },
            { icon: "FaEnvelope", text: "Sent message", time: "Yesterday, 2:00 PM" },
        ],
    },
    aiSuggestions: [
        { icon: "FaLink", text: "Try suggesting a password reset link." },
        { icon: "FaSearch", text: "Offer to check the account status." },
        { icon: "FaPhone", text: "Propose a follow-up call." },
    ],
};

export default dummyData;