import React from 'react';
import Present from './Present.jsx';
import styles from './style.module.css';

const Sleigh = ({ presents }) => {
  const groupedByFamily = presents.reduce((acc, present) => {
    if (!acc[present.familyId]) acc[present.familyId] = [];
    acc[present.familyId].push(present);
    return acc;
  }, {});

  return (
      <div className={styles.card}>
      <h3>Santa's Sleigh</h3>
      {Object.entries(groupedByFamily).map(([familyId, familyPresents]) => (
        <div key={familyId}>
          <h4>{familyId}</h4>
          <ul>
            {familyPresents.map((present, index) => (
              <Present key={index} id={present.id} state={present.state} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sleigh;
