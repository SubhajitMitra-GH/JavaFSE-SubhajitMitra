import React from 'react';
import CohortDetails from './Components/CohortDetails';

function App() {
  const cohorts = [
    { id: 1, title: 'Java FSE Academy', code: 'INTADM23JF001', techStack: 'Java, Spring Boot, React', status: 'ongoing', startDate: '2026-06-01' },
    { id: 2, title: 'Cloud Native Developer', code: 'INTADM23CN002', techStack: 'AWS, Microservices, Docker', status: 'ongoing', startDate: '2026-06-15' },
    { id: 3, title: 'Data Engineering Specialist', code: 'INTADM23DE003', techStack: 'Python, PySpark, Snowflake', status: 'completed', startDate: '2026-01-10' },
    { id: 4, title: 'Frontend UI/UX Specialist', code: 'INTADM23FE004', techStack: 'React, TypeScript, CSS Modules', status: 'completed', startDate: '2026-03-01' }
  ];

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Cognizant Academy Cohort Dashboard</h1>
      <p>Overview of active and finished cohort details:</p>
      <div>
        {cohorts.map(cohort => (
          <CohortDetails key={cohort.id} cohort={cohort} />
        ))}
      </div>
    </div>
  );
}

export default App;
