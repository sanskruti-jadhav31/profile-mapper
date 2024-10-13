import React from 'react';
import './Modal.css'; // Import CSS for the modal
import MapModal from './MapModal'; // Import the MapModal component

const Modal = ({ profile, onClose }) => {
    const [showMapModal, setShowMapModal] = React.useState(false); // State to manage map modal visibility

    if (!profile) return null; // If no profile, don't render anything

    const toggleMapModal = () => {
        setShowMapModal(!showMapModal); // Toggle map modal visibility
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <h2>{profile.name}</h2>
                <img src={profile.image} alt={profile.name} />
                <p><strong>Description:</strong> {profile.description}</p>
                <p><strong>Hobbies:</strong> {profile.hobbies}</p>
                <p><strong>Interests:</strong> {profile.interests}</p>
                <p><strong>Email:</strong> {profile.email}</p>
                <p><strong>Contact:</strong> {profile.contact}</p>
                <p><strong>Address:</strong> {profile.address}</p>
                <button onClick={toggleMapModal}>Summary</button> {/* Summary button */}
            </div>
            {showMapModal && <MapModal address={profile.address} onClose={toggleMapModal} />} {/* Conditionally render the MapModal */}
        </div>
    );
};

export default Modal;
