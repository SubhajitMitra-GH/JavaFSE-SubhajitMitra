import React, { useState } from 'react';
import GuestPage from './Components/GuestPage';
import UserPage from './Components/UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ maxWidth: '800px', margin: '30px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>SkyWings Ticket Booking Portal</h1>
      {isLoggedIn ? (
        <UserPage onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <GuestPage onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
