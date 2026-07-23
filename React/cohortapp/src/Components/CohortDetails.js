import React from 'react';
import styles from '../CohortDetails.module.css';

const CohortDetails = ({ cohort }) => {
  const headerStyle = {
    color: cohort.status === 'ongoing' ? 'green' : 'blue'
  };

  return (
    <div className={styles.box}>
      <h3 style={headerStyle}>{cohort.title}</h3>
      <dl>
        <dt>Cohort Code:</dt>
        <dd>{cohort.code}</dd>

        <dt>Technology Stack:</dt>
        <dd>{cohort.techStack}</dd>

        <dt>Status:</dt>
        <dd style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>{cohort.status}</dd>

        <dt>Start Date:</dt>
        <dd>{cohort.startDate}</dd>
      </dl>
    </div>
  );
};

export default CohortDetails;
