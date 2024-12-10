import React from 'react';
import styles from './style.module.css';


const Family = ({ familyQueue }) => {
  return (
    <div className={styles.card}>
      <h3>Family Queue</h3>
      <ul>
        {familyQueue.map((family) => (
          <li key={family.familyId}>
            <strong>{family.familyId}</strong> ({family.presents.length} presents)
            <ul>
              {family.presents.map((present, index) => (
                <li key={index}>
                  Present #{present.id} - {present.state}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Family;