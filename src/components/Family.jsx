import React from 'react';
import styles from './style.module.css';


const Family = ({ familyQueue }) => {
  return (
    <div className={styles.card}>
      <h3>Family Queue</h3>
    <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        {familyQueue.map((family) => (
          <li key={family.familyId} style={{listStyleType: 'none'}}>
            <strong>{family.familyId}</strong> ({family.presents.length} presents)
            <ul style={{padding: '10px 0'}}>
              {family.presents.map((present, index) => (
                <li key={index}  style={{listStyleType: 'none'}}>
                  Present #{present.id} - {present.state}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Family;