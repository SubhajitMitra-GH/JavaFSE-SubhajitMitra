import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat Kohli', score: 95 },
    { name: 'Rohit Sharma', score: 88 },
    { name: 'KL Rahul', score: 65 },
    { name: 'Shubman Gill', score: 72 },
    { name: 'Suryakumar Yadav', score: 58 },
    { name: 'Hardik Pandya', score: 81 },
    { name: 'Ravindra Jadeja', score: 62 },
    { name: 'Kuldeep Yadav', score: 45 },
    { name: 'Jasprit Bumrah', score: 50 },
    { name: 'Mohammed Siraj', score: 30 },
    { name: 'Mohammed Shami', score: 76 }
  ];

  const highScorers = players.filter(player => player.score >= 70);

  return (
    <div style={{ padding: '15px', border: '1px solid #333', borderRadius: '8px', margin: '15px 0' }}>
      <h2>List of Players (Scores >= 70)</h2>
      <ul>
        {highScorers.map((player, index) => (
          <li key={index} style={{ margin: '5px 0' }}>
            Mr. {player.name} - <strong>{player.score} runs</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
