import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Student Management Portal</h1>
      <CalculateScore
        Name="Subhajit Mitra"
        School="Cognizant Learning Academy"
        Total={360}
        goal={4}
      />
    </div>
  );
}

export default App;
