import React from 'react';

const GuestPage = ({ onLogin }) => {
  const flights = [
    { id: 'AI-202', airline: 'Air India', from: 'Kolkata', to: 'Delhi', price: '₹4,500' },
    { id: '6E-504', airline: 'IndiGo', from: 'Mumbai', to: 'Bengaluru', price: '₹3,800' },
    { id: 'UK-811', airline: 'Vistara', from: 'Chennai', to: 'Hyderabad', price: '₹5,200' }
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
      <h2>Welcome Guest User</h2>
      <p style={{ color: '#6c757d' }}>You are browsing available flights. Please log in to book tickets.</p>
      
      <button 
        onClick={onLogin} 
        style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '20px' }}
      >
        Login to Book
      </button>

      <h3>Available Flight Schedules</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
        <thead>
          <tr style={{ backgroundColor: '#e9ecef', textAlign: 'left' }}>
            <th style={{ padding: '10px', border: '1px solid #dee2e6' }}>Flight No</th>
            <th style={{ padding: '10px', border: '1px solid #dee2e6' }}>Airline</th>
            <th style={{ padding: '10px', border: '1px solid #dee2e6' }}>From - To</th>
            <th style={{ padding: '10px', border: '1px solid #dee2e6' }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {flights.map(f => (
            <tr key={f.id}>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>{f.id}</td>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>{f.airline}</td>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>{f.from} &rarr; {f.to}</td>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>{f.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GuestPage;
