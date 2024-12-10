import React from 'react';
import NaughtyList from './NaughtyList';

const MrsClaus = ({
  familyQueue,
  naughtyFamilies,
  onAddToNaughtyList,
  onDiscardPresents,
  onReceivePresent,
  workQueue,  
  isNaughty,
}) => {
  const isWaitingDisabled = naughtyFamilies?.length > 0 ;
  const totalPresents = workQueue?.reduce((sum, family) => sum + family?.presents?.length, 0);

  console.log(familyQueue)

  return (
    <div>
      <h3>Mrs. Claus 🤶</h3>
      <div>
        {isNaughty && <NaughtyList familyQueue={familyQueue} naughtyFamilies={naughtyFamilies} onAddToNaughtyList={onAddToNaughtyList} onDiscardPresents={onDiscardPresents} /> }
      </div>

      <h4>Present Queue</h4>
      <p>
        { totalPresents ? (
           <p>Mrs. Claus is managing <strong>{workQueue?.length}</strong> families and <strong>{totalPresents}</strong> presents.</p>
        ) : <p>Mrs. Claus is currently holding {workQueue?.length} presents.</p>
         }
      </p>
      <button onClick={onReceivePresent} disabled={isNaughty ? isWaitingDisabled : totalPresents === 0}>
        {totalPresents > 0 ? 'Pack Next Present' : 'Wait for Elves'}
      </button>
    </div>
  );
};

export default MrsClaus;
/* import React from 'react';

const MrsClaus = ({ onReceivePresent, workQueue }) => {
  const totalPresents = workQueue?.reduce((sum, family) => sum + family?.presents?.length, 0);

  return (
    <div>
      <h3>Mrs. Claus 🤶</h3>
      <p>
        { totalPresents ? (
           <p>Mrs. Claus is managing <strong>{workQueue.length}</strong> families and <strong>{totalPresents}</strong> presents.</p>
        ) : <p>Mrs. Claus is currently holding {workQueue.length} presents.</p>
         }
      </p>
      <button onClick={onReceivePresent} disabled={totalPresents === 0}>
        {totalPresents > 0 ? 'Pack Next Present' : 'Wait for Elves'}
      </button>
    </div>
  );
};

export default MrsClaus; */
