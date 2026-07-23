import React from 'react';
import '../Stylesheets/mystyle.css';

const percentToName = (name, score) => {
  return (
    <div className="score-details">
      <p><strong>Student Name:</strong> {name}</p>
      <p className="average-score"><strong>Average Score:</strong> {score.toFixed(2)}%</p>
    </div>
  );
};

export const CalculateScore = ({ Name, School, Total, goal }) => {
  const average = (Total / goal) * 100;
  return (
    <div className="score-card">
      <h2>Student Score Details</h2>
      <div className="score-details">
        <p><strong>School:</strong> {School}</p>
        <p><strong>Total Marks:</strong> {Total} / {goal * 100}</p>
      </div>
      {percentToName(Name, average)}
    </div>
  );
};

export default CalculateScore;
