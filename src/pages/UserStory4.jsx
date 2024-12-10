import React, { useState } from 'react';
import Sleigh from '../components/Sleigh';
import MrsClaus from '../components/MrsClaus';
import Family from '../components/Family';
import Story from '../components/Story';
import styles from './UserStory.module.css';
import { userStoryFourText } from '../utils.js';


const UserStory4 = () => {
  const [familyQueue, setFamilyQueue] = useState([
    { familyId: '👨🏼‍👩🏼‍👧🏼 FamilyA', presents: [{ id: 1, state: 'unpacked' }, { id: 2, state: 'unpacked' }] },
    { familyId: '👨🏽‍👩🏽‍👧🏽 FamilyB', presents: [{ id: 3, state: 'unpacked' }] },
    { familyId: '👨🏻‍👩🏻‍👧🏻 FamilyC', presents: [{ id: 4, state: 'unpacked' }, { id: 5, state: 'unpacked' }] },
  ]);

  const [isNaughty, setIsNaughty] = useState(true)

  const [presentQueue, setPresentQueue] = useState([]);
  const [naughtyFamilies, setNaughtyFamilies] = useState([]);

  const handleAddToNaughtyList = (familyId) => {
    if (!naughtyFamilies.includes(familyId)) {
      setNaughtyFamilies((prev) => [...prev, familyId]);
    } else {
      setNaughtyFamilies((prev) => prev.filter((id) => id !== familyId));
    }
  };

  const discardPresents = () => {
    const updatedQueue = familyQueue.filter(
      (family) => !naughtyFamilies.includes(family.familyId)
    );
    setFamilyQueue(updatedQueue);
    setNaughtyFamilies([]); // Clear the naughty list after discarding presents
  };

  const handleReceivePresent = () => {
    // Add a new present to the queue (or handle logic for receiving)
    setPresentQueue((prev) => [...prev, { id: prev.length + 1, state: 'unpacked' }]);
  };

  return (
     <div className={styles.container}>
      <Story title="User Story 4 - The Naughty List" children={userStoryFourText} />
      <div className={styles.grid}>
        <Family familyQueue={familyQueue} />
        <div className={styles.card}>
        <MrsClaus
          familyQueue={familyQueue}
          naughtyFamilies={naughtyFamilies}
          onAddToNaughtyList={handleAddToNaughtyList}
          onDiscardPresents={discardPresents}
          onReceivePresent={handleReceivePresent}
          workQueue={presentQueue}
          isNaughty={isNaughty}
        />
        </div>
        <Sleigh presents={presentQueue} />
      </div>
    </div>
  );
};

export default UserStory4;