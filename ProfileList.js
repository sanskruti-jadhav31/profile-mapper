import React from 'react';
import ProfileCard from './ProfileCard';
import Modal from './Modal';

const ProfileList = ({ profiles }) => {
    const [selectedProfile, setSelectedProfile] = React.useState(null);

    const handleProfileClick = (profile) => {
        setSelectedProfile(profile);
    };

    const closeModal = () => {
        setSelectedProfile(null); // Close the modal
    };

    return (
        <div>
            <div className="profile-list">
                {profiles.length > 0 ? (
                    profiles.map(profile => (
                        <ProfileCard key={profile.id} profile={profile} onClick={() => handleProfileClick(profile)} />
                    ))
                ) : (
                    <p>No profiles found.</p> // Message for no results
                )}
            </div>
            <Modal profile={selectedProfile} onClose={closeModal} /> {/* Pass profile and close handler */}
        </div>
    );
};

export default ProfileList;
