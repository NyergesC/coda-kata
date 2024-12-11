import React, { useState } from 'react';
import Sleigh from '../components/Sleigh';
import Elves from '../components/Elves';
import MrsClaus from '../components/MrsClaus';
import styles from './UserStory.module.css';
import Family from '../components/Family';
import Story from '../components/Story';
import { userStoryThreeText } from '../utils.js';


const UserStory3 = () => {
  const [familyQueue, setFamilyQueue] = useState([
    { familyId: '👨🏼‍👩🏼‍👧🏼 FamilyA', presents: [{ id: 1, state: 'unpacked' }, { id: 2, state: 'unpacked' }] },
    { familyId: '👨🏽‍👩🏽‍👧🏽 FamilyB', presents: [{ id: 3, state: 'unpacked' }] },
    { familyId: '👨🏻‍👩🏻‍👧🏻 FamilyC', presents: [{ id: 4, state: 'unpacked' }, { id: 5, state: 'unpacked' }] },
  ]);

  const [sleighPresents, setSleighPresents] = useState([]);
  const [availableElves, setAvailableElves] = useState([
    { id: 1, working: false },
    { id: 2, working: false },
    { id: 3, working: false },
  ]);

  const assignElvesToPack = () => {
    //Handle if familyQueue is empty

    // Extract the first family and their presents

    // Remove family if all their presents are packed

    // Update FamilyQueue


    // Assign an elf to pack the present Hint: UserStory2

    //Simulate the packing time
      setTimeout(() => {
       
      }, 2000); 

  };


  return (
   <div className={styles.container}>
        <Story title="User Story 3 - Family delivery" children={userStoryThreeText} />
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
        <Family familyQueue={familyQueue} />
        <div className={styles.card}>
        <MrsClaus onReceivePresent={assignElvesToPack} workQueue={familyQueue} />
        </div>
        <Elves availableElves={availableElves} />

        <Sleigh presents={sleighPresents} />
      </div>
    </div>
  );
};

export default UserStory3;
