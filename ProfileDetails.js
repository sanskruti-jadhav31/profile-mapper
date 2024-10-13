import React from 'react';

const ProfileDetails = ({ profile }) => {
    return (
        <div className="profile-details">
            <h2>{profile.name}</h2>
            <img src={profile.image} alt={profile.name} />
            <p><strong>Description:</strong> {profile.description}</p>
            <p><strong>Hobbies:</strong> {profile.hobbies}</p>
            <p><strong>Interests:</strong> {profile.interests}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Contact:</strong> {profile.contact}</p>
            <p><strong>Address:</strong> {profile.address}</p>
        </div>
    );
};

export default ProfileDetails;
