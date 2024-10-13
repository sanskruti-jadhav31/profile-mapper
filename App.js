import React, { useState } from 'react';
import './styles.css';
import ProfileList from './components/ProfileList';
import AdminPanel from './components/AdminPanel';
import Loader from './components/Loader';
import SearchBar from './components/SearchBar';

const App = () => {
    const [profiles, setProfiles] = useState([
      {
        name: "Aarav Sharma",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        description: "Aarav is a software developer with a passion for coding.",
        hobbies: "Coding, Reading, Traveling",
        interests: "Technology, Gaming",
        email: "aarav.sharma@example.com",
        contact: "+91 98765 43210",
        address: "Mumbai, Maharashtra, India"
    },
    {
        name: "Diya Singh",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        description: "Diya is an avid reader and loves to explore new places.",
        hobbies: "Reading, Painting, Traveling",
        interests: "Art, Culture",
        email: "diya.singh@example.com",
        contact: "+91 87654 32109",
        address: "Delhi, India"
    },
    {
        name: "Vihaan Gupta",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        description: "Vihaan is a fitness enthusiast and loves to play cricket.",
        hobbies: "Cricket, Gym, Cooking",
        interests: "Sports, Fitness",
        email: "vihaan.gupta@example.com",
        contact: "+91 76543 21098",
        address: "Bangalore, Karnataka, India"
    },
    {
        name: "Ananya Rao",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        description: "Ananya is a marketing professional with a creative edge.",
        hobbies: "Writing, Dancing, Traveling",
        interests: "Marketing, Fashion",
        email: "ananya.rao@example.com",
        contact: "+91 65432 10987",
        address: "Hyderabad, Telangana, India"
    },
    {
        name: "Kabir Khan",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        description: "Kabir is a tech enthusiast and loves to tinker with gadgets.",
        hobbies: "Gadgets, Gaming, Music",
        interests: "Technology, Music",
        email: "kabir.khan@example.com",
        contact: "+91 54321 09876",
        address: "Chennai, Tamil Nadu, India"
    },
    {
        name: "Isha Mehta",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
        description: "Isha is a passionate photographer and travel blogger.",
        hobbies: "Photography, Blogging, Hiking",
        interests: "Travel, Nature",
        email: "isha.mehta@example.com",
        contact: "+91 43210 98765",
        address: "Ahmedabad, Gujarat, India"
    },
    {
        name: "Ayaan Verma",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
        description: "Ayaan is a software engineer who loves to code and build applications.",
        hobbies: "Coding, Video Games, Basketball",
        interests: "Software Development, Sports",
        email: "ayaan.verma@example.com",
        contact: "+91 32109 87654",
        address: "Pune, Maharashtra, India"
    },
    {
        name: "Riya Nair",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
        description: "Riya is an environmentalist and loves to volunteer.",
        hobbies: "Volunteering, Gardening, Yoga",
        interests: "Environment, Wellness",
        email: "riya.nair@example.com",
        contact: "+91 21098 76543",
        address: "Kochi, Kerala, India"
    },
    {
        name: "Arjun Yadav",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
        description: "Arjun is a data scientist who enjoys analyzing data.",
        hobbies: "Data Analysis, Reading, Traveling",
        interests: "Data Science, Traveling",
        email: "arjun.yadav@example.com",
        contact: "+91 10987 65432",
        address: "Jaipur, Rajasthan, India"
    },
    {
        name: "Sneha Patel",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
        description: "Sneha is a software tester with a keen eye for detail.",
        hobbies: "Testing Software, Cooking, Music",
        interests: "Quality Assurance, Cooking",
        email: "sneha.patel@example.com",
        contact: "+91 98765 43210",
        address: "Lucknow, Uttar Pradesh, India"
    },
    {
        name: "Devansh Joshi",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
        description: "Devansh is a business analyst who loves to solve problems.",
        hobbies: "Problem Solving, Reading, Traveling",
        interests: "Business, Technology",
        email: "devansh.joshi@example.com",
        contact: "+91 87654 32109",
        address: "Surat, Gujarat, India"
    },
    {
        name: "Meera Choudhary",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
        description: "Meera is a graphic designer who creates stunning visuals.",
        hobbies: "Designing, Drawing, Traveling",
        interests: "Design, Art",
        email: "meera.choudhary@example.com",
        contact: "+91 76543 21098",
        address: "Indore, Madhya Pradesh, India"
    },
    {
        name: "Rohan Sinha",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
        description: "Rohan is an aspiring entrepreneur with a creative mindset.",
        hobbies: "Entrepreneurship, Networking, Reading",
        interests: "Business, Innovation",
        email: "rohan.sinha@example.com",
        contact: "+91 65432 10987",
        address: "Nagpur, Maharashtra, India"
    },
    {
        name: "Tara Bansal",
        image: "https://randomuser.me/api/portraits/women/7.jpg",
        description: "Tara is a student with a passion for literature.",
        hobbies: "Reading, Writing, Traveling",
        interests: "Literature, Education",
        email: "tara.bansal@example.com",
        contact: "+91 54321 09876",
        address: "Dehradun, Uttarakhand, India"
    },
    {
        name: "Nikhil Reddy",
        image: "https://randomuser.me/api/portraits/men/8.jpg",
        description: "Nikhil is a web developer who enjoys creating websites.",
        hobbies: "Web Development, Gaming, Music",
        interests: "Technology, Music",
        email: "nikhil.reddy@example.com",
        contact: "+91 43210 98765",
        address: "Visakhapatnam, Andhra Pradesh, India"
    }
    ]);

    const [loading, setLoading] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleAdmin = () => {
        setIsAdmin(!isAdmin);
    };

    // Filter profiles based on the search query
    const filteredProfiles = profiles.filter(profile =>
        profile.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container">
            <h1>Profile Management</h1>
            <SearchBar query={searchQuery} setQuery={setSearchQuery} setLoading={setLoading} />
            <button className="admin-button" onClick={toggleAdmin}>
                {isAdmin ? 'Switch to User View' : 'Switch to Admin Panel'}
            </button>
            {loading && <Loader />}
            {isAdmin ? (
                <AdminPanel profiles={profiles} setProfiles={setProfiles} />
            ) : (
                <ProfileList profiles={filteredProfiles} />
            )}
        </div>
    );
};

export default App;
