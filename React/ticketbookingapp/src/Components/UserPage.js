import React, { useState } from 'react';

const UserPage = ({ onLogout }) => {
  const [selectedFlight, setSelectedFlight] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [booked, setBooked] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();
    if (selectedFlight) {
      setBooked(true);
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#e6f4ea', borderRadius: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>User Dashboard - Ticket Booking</h2>
        <button 
          onClick={onLogout}
          style={{ padding: '8px 16px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Logout
        </button>
      </div>

      <p>Welcome back! Reserve your flight tickets below.</p>

      {booked ? (
        <div style={{ padding: '15px', backgroundColor: '#d4edda', color: '#155724', borderRadius: '5px', marginTop: '15px' }}>
          <h3>Booking Confirmed!</h3>
          <p>Flight: <strong>{selectedFlight}</strong> for <strong>{passengers} passenger(s)</strong>.</p>
          <button onClick={() => setBooked(false)} style={{ padding: '5px 10px', cursor: 'pointer' }}>Book Another Ticket</button>
        </div>
      ) : (
        <form onSubmit={handleBooking} style={{ marginTop: '20px', maxWidth: '400px' }}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Select Flight:</label>
            <select 
              value={selectedFlight} 
              onChange={(e) => setSelectedFlight(e.target.value)} 
              required
              style={{ width: '100%', padding: '8px' }}
            >
              <option value="">-- Select Flight --</option>
              <option value="AI-202 (Kolkata to Delhi)">AI-202 (Kolkata to Delhi)</option>
              <option value="6E-504 (Mumbai to Bengaluru)">6E-504 (Mumbai to Bengaluru)</option>
              <option value="UK-811 (Chennai to Hyderabad)">UK-811 (Chennai to Hyderabad)</option>
            </select>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Passengers:</label>
            <input 
              type="number" 
              min="1" 
              max="10" 
              value={passengers} 
              onChange={(e) => setPassengers(e.target.value)}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>

          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Confirm Booking
          </button>
        </form>
      )}
    </div>
  );
};

export default UserPage;
