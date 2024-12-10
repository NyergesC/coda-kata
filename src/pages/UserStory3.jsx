import React, { useState } from 'react';
import Sleigh from '../components/Sleigh';
import Elves from '../components/Elves';
import MrsClaus from '../components/MrsClaus';
import Present from '../components/Present';
import styles from './UserStory.module.css';
import Family from '../components/Family';
import Story from '../components/Story';


const UserStory3 = () => {
  const [familyQueue, setFamilyQueue] = useState([
    { familyId: 'FamilyA', presents: [{ id: 1, state: 'unpacked' }, { id: 2, state: 'unpacked' }] },
    { familyId: 'FamilyB', presents: [{ id: 3, state: 'unpacked' }] },
    { familyId: 'FamilyC', presents: [{ id: 4, state: 'unpacked' }, { id: 5, state: 'unpacked' }] },
  ]);

  const [sleighPresents, setSleighPresents] = useState([]);
  const [availableElves, setAvailableElves] = useState([
    { id: 1, working: false },
    { id: 2, working: false },
    { id: 3, working: false },
  ]);

  const assignElvesToPack = () => {
    if (familyQueue.length === 0 || availableElves.every((elf) => elf.working)) return;

    // Extract the first family and their presents
    const nextFamily = familyQueue[0];
    const presentToPack = nextFamily.presents.shift();

    // Remove family if all their presents are packed
    const updatedQueue = nextFamily.presents.length > 0 
      ? [nextFamily, ...familyQueue.slice(1)] 
      : familyQueue.slice(1);

    setFamilyQueue(updatedQueue);

    // Assign an elf to pack the present
    const elfIndex = availableElves.findIndex((elf) => !elf.working);
    if (elfIndex !== -1) {
      const updatedElves = [...availableElves];
      updatedElves[elfIndex].working = true;
      setAvailableElves(updatedElves);

      setTimeout(() => {
        setSleighPresents((prev) => [
          ...prev,
          { ...presentToPack, state: 'packed', familyId: nextFamily.familyId },
        ]);
        updatedElves[elfIndex].working = false;
        setAvailableElves(updatedElves);
      }, 2000); // Simulate packing time
    }
  };

  return (
   <div className={styles.container}>
        <Story title="User Story 3 - Family delivery">
        <p>
          Each present forms part of a families delivery, which consist of 1..N presents.
          The Toy Machine cannot guarantee that all a families presents will be sent to Mrs Claus together. Other families presents could come in-between. 
          Where possible, presents from different families should not be put on the sleigh independently.
         But the delivery elves are an expensive resource so we’d prefer the requests to be interleaved rather than having them sit idle.
         You will need to devise a strategy to allow Mrs Claus to deliver presents by family when possible.
        </p>
      </Story>
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
