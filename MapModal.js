import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for marker images not appearing
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapModal = ({ address, onClose }) => {
    const [position, setPosition] = React.useState([0, 0]); // Default position
    const [loading, setLoading] = React.useState(true); // Loading state

    React.useEffect(() => {
        const fetchCoordinates = async () => {
            setLoading(true); // Start loading
            try {
                const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`);
                const data = await response.json();
                if (data.length > 0) {
                    setPosition([data[0].lat, data[0].lon]); // Set the fetched position
                } else {
                    setPosition([0, 0]); // Fallback to default if no results
                }
            } catch (error) {
                console.error("Error fetching coordinates:", error);
                setPosition([0, 0]); // Fallback to default on error
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchCoordinates();
    }, [address]);

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <h2>Map for: {address}</h2>
                {loading ? (
                    <p>Loading map...</p> // Show loading message
                ) : (
                    <MapContainer 
                        center={position} 
                        zoom={13} 
                        style={{ height: '400px', width: '100%' }} 
                        whenCreated={map => map.setView(position, 13)} // Center the map
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={position}>
                            <Popup>
                                {address}
                            </Popup>
                        </Marker>
                    </MapContainer>
                )}
            </div>
        </div>
    );
};

export default MapModal;
