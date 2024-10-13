import React, { useState } from 'react';

const AdminPanel = ({ profiles, setProfiles }) => {
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        description: '',
        hobbies: '',
        interests: '',
        email: '',
        contact: '',
        address: '',
    });
    const [editingIndex, setEditingIndex] = useState(null); // Track the index of the profile being edited
    const [isAddingProfile, setIsAddingProfile] = useState(false); // State to manage add profile form visibility

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAddProfile = () => {
        setProfiles((prevProfiles) => [...prevProfiles, formData]);
        resetForm();
    };

    const handleEditProfile = (index) => {
        setEditingIndex(index);
        setFormData(profiles[index]); // Pre-fill form with the selected profile's data
        setIsAddingProfile(false); // Ensure add profile form is closed
    };

    const handleSaveProfile = () => {
        const updatedProfiles = [...profiles];
        updatedProfiles[editingIndex] = formData; // Update the profile at the editing index
        setProfiles(updatedProfiles);
        resetForm();
    };

    const handleDeleteProfile = (index) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this profile?");
        if (confirmDelete) {
            const updatedProfiles = profiles.filter((_, i) => i !== index);
            setProfiles(updatedProfiles);
        }
    };

    const resetForm = () => {
        setFormData({
            name: '',
            image: '',
            description: '',
            hobbies: '',
            interests: '',
            email: '',
            contact: '',
            address: '',
        });
        setEditingIndex(null); // Reset editing index
        setIsAddingProfile(false); // Reset add profile form visibility
    };

    return (
        <div className="admin-panel">
            <h2>Admin Panel</h2>
            <button onClick={() => { resetForm(); setIsAddingProfile(true); }}>Add Profile</button>

            {isAddingProfile || editingIndex !== null ? (
                <div className="form-container">
                    <h3>{editingIndex !== null ? 'Edit Profile' : 'Add Profile'}</h3>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
                        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
                        <input type="text" name="hobbies" placeholder="Hobbies" value={formData.hobbies} onChange={handleChange} required />
                        <input type="text" name="interests" placeholder="Interests" value={formData.interests} onChange={handleChange} required />
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                        <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} required />
                        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
                        <button type="button" onClick={editingIndex !== null ? handleSaveProfile : handleAddProfile}>
                            {editingIndex !== null ? 'Save Profile' : 'Add Profile'}
                        </button>
                        {editingIndex !== null && <button type="button" onClick={resetForm}>Cancel</button>}
                    </form>
                </div>
            ) : null}

            <div className="profile-list">
                <h3>Existing Profiles</h3>
                {profiles.length === 0 ? (
                    <p>No profiles available.</p>
                ) : (
                    <ul>
                        {profiles.map((profile, index) => (
                            <li key={index}>
                                <span>{profile.name} - {profile.address}</span>
                                <button onClick={() => handleEditProfile(index)}>Edit</button>
                                <button onClick={() => handleDeleteProfile(index)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default AdminPanel;
