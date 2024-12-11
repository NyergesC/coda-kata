import React, { useState } from 'react';
import Sleigh from '../components/Sleigh';
import MrsClaus from '../components/MrsClaus';
import Family from '../components/Family';
import Story from '../components/Story';
import Elves from '../components/Elves';
import styles from './UserStory.module.css';
import { userStoryFourText } from '../utils.js';


const UserStory4 = () => {
  const [familyQueue, setFamilyQueue] = useState([
    { familyId: '👨🏼‍👩🏼‍👧🏼 FamilyA', presents: [{ id: 1, state: 'unpacked' }, { id: 2, state: 'unpacked' }] },
    { familyId: '👨🏽‍👩🏽‍👧🏽 FamilyB', presents: [{ id: 3, state: 'unpacked' }] },
    { familyId: '👨🏻‍👩🏻‍👧🏻 FamilyC', presents: [{ id: 4, state: 'unpacked' }, { id: 5, state: 'unpacked' }] },
  ]);

  const [isNaughty, setIsNaughty] = useState(true);
  const [presentQueue, setPresentQueue] = useState([]);
  const [naughtyFamilies, setNaughtyFamilies] = useState([]);
  const [availableElves, setAvailableElves] = useState([
    { id: 1, working: false },
    { id: 2, working: false },
    { id: 3, working: false },
  ]);

  // Add or remove families from the naughty list
  const handleAddToNaughtyList = (familyId) => {
    setNaughtyFamilies((prev) =>
      prev.includes(familyId) ? prev.filter((id) => id !== familyId) : [...prev, familyId]
    );
  };

  // Discard presents for families on the naughty list
  const discardPresents = () => {
    //Filter the FamilyQueue with the naughty Families

    //update the FamilyQueue
   // Clear the naughty list after discarding presents
  };

  // Handle receiving presents from the elves
  const handleReceivePresent = () => {
    // Wait if all elves are busy

    // Simulate packing with an available elf

    setTimeout(() => {
    
    }, 2000); // Simulated delay for packing
  };


  const handlePackNextFamily = () => {

    // Pack the first family's presents and remove them from the queue

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
          onPackNextFamily={handlePackNextFamily}
          workQueue={presentQueue}
          isNaughty={isNaughty}
        />
        </div>
        <Elves availableElves={availableElves} />
        <Sleigh presents={presentQueue} />
      </div>
    </div>
  );
};
export default UserStory4;

