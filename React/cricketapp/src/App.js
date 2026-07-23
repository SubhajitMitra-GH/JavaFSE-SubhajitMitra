import React, { useState } from 'react';
import ListofPlayers from './Components/ListofPlayers';
import IndianPlayers from './Components/IndianPlayers';

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '700px', margin: '0 auto' }}>
      <h1>Indian Cricket Portal</h1>
      <button 
        onClick={() => setFlag(!flag)} 
        style={{ padding: '10px 15px', cursor: 'pointer', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}
      >
        Toggle View (Current Flag: {flag ? 'True' : 'False'})
      </button>

      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
