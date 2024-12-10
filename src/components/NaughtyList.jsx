import React from 'react';

const NaughtyList = ({ familyQueue, naughtyFamilies, onAddToNaughtyList, onDiscardPresents }) => {
  return (
    <div>
      <h3>Naughty List</h3>
      <ul>
        {familyQueue?.map((family) => (
          <li key={family.familyId}>
            <input
              type="checkbox"
              checked={naughtyFamilies?.includes(family.familyId)}
              onChange={() => onAddToNaughtyList(family.familyId)}
            />
            <label>{family.familyId}</label>
          </li>
        ))}
      </ul>
      <button onClick={onDiscardPresents} disabled={naughtyFamilies?.length === 0}>
        Discard Naughty Families' Presents
      </button>
    </div>
  );
};

export default NaughtyList;

