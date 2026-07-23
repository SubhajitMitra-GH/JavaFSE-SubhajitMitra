import React from 'react';

const IndianPlayers = () => {
  const players = ['Virat Kohli', 'Rohit Sharma', 'Jasprit Bumrah', 'Ravindra Jadeja', 'Shubman Gill', 'Hardik Pandya'];

  const [first, second, third, ...remaining] = players;
  const oddTeam = [first, third, remaining[1]];
  const evenTeam = [second, remaining[0], remaining[2]];

  const T20players = ['Suryakumar Yadav', 'Rinku Singh', 'Yashasvi Jaiswal'];
  const RanjiTrophy = ['Cheteshwar Pujara', 'Ajinkya Rahane', 'Hanuma Vihari'];
  const mergedPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div style={{ padding: '15px', border: '1px solid #0056b3', borderRadius: '8px', margin: '15px 0' }}>
      <h2>Indian Team Players & Squads</h2>
      
      <h3>Odd Team Players (Destructured):</h3>
      <ul>
        {oddTeam.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h3>Even Team Players (Destructured):</h3>
      <ul>
        {evenTeam.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h3>Merged Squad (T20 + Ranji Trophy via Spread Operator):</h3>
      <ul>
        {mergedPlayers.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
