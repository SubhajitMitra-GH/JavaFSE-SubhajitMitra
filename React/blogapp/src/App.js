import React from 'react';
import Posts from './Posts';

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', padding: '20px 0' }}>Cognizant Blog Portal</h1>
      <Posts />
    </div>
  );
}

export default App;
