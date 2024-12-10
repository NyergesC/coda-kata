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
            {familyPresents
            .filter((present) => present)
            .map((present, index) => (
              <Present key={index} id={present.id} state={present.state} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sleigh;
/* import React from 'react';
import styles from './Sleigh.module.css';

const Sleigh = ({ presents }) => {
  return (
    <div className={styles.sleigh}>
      <h3>Santa's Sleigh</h3>
      {presents.length === 0 ? (
        <p>The sleigh is empty.</p>
      ) : (
        <ul>
          {presents.map((present, index) => (
            <li key={index}>{present}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sleigh; */