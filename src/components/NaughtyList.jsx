/* import React from 'react';

const NaughtyList = ({ familyQueue, naughtyFamilies, onAddToNaughtyList, onDiscardPresents }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <h3>Naughty List</h3>
      {familyQueue.map((family) => (
        <div key={family.familyId} style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            checked={naughtyFamilies.includes(family.familyId)}
            onChange={() => onAddToNaughtyList(family.familyId)}
          />
          <label>{family.familyId}</label>
        </div>
      ))}
      <button onClick={onDiscardPresents} disabled={!naughtyFamilies.length}>
        Discard Presents
      </button>
    </div>
  );
};

export default NaughtyList; */
const NaughtyList = ({ familyQueue, naughtyFamilies, onAddToNaughtyList, onDiscardPresents }) => {
  return (
    <div style={{display:'flex', flexDirection: 'column', gap: '0.5rem', justifyContent: 'center', alignItems: 'center'}}>
      <h3>Naughty List</h3>
      <div style={{display:'flex', flexDirection: 'column', gap: '0.5rem'}}>
        {familyQueue?.map((family) => (
          <li key={family.familyId} style={{listStyleType: 'none'}}>
            <input
              type="checkbox"
              checked={naughtyFamilies?.includes(family.familyId)}
              onChange={() => onAddToNaughtyList(family.familyId)}
            />
            <label>{family.familyId}</label>
          </li>
        ))}
      </div>
      <button onClick={onDiscardPresents} disabled={naughtyFamilies?.length === 0} style={{ width: '150px', marginTop: '10px', }}>
        Discard Naughty Families' Presents
      </button>
    </div>
  );
};

export default NaughtyList;

