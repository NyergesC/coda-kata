import React, { useState } from 'react';
import MrsClaus from '../components/MrsClaus';
import Elves from '../components/Elves';
import Sleigh from '../components/Sleigh';
import Present from '../components/Present';
import Story from '../components/Story';
import styles from './UserStory.module.css';
import { userStoryTwoText } from '../utils.js';

const UserStory2 = () => {
  const [presentQueue, setPresentQueue] = useState([]);
  const [availableElves, setAvailableElves] = useState([
    { id: 1, working: false },
    { id: 2, working: false },
    { id: 3, working: false },
  ]);
  const [sleighPresents, setSleighPresents] = useState([]);
  const [presentId, setPresentId] = useState(1);


  const handleNewPresent = () => {
    const newPresent = { id: presentId, name: `Present #${presentId}` };
    setPresentQueue((prev) => [...prev, newPresent]);
    setPresentId((prev) => prev + 1);
  };

  const processPresent = () => {
    if (presentQueue.length === 0 || availableElves.every((elf) => elf.working)) return;

    const elfIndex = availableElves.findIndex((elf) => !elf.working);
    if (elfIndex !== -1) {
      const updatedElves = [...availableElves];
      updatedElves[elfIndex].working = true;
      setAvailableElves(updatedElves);

      const [present, ...remainingQueue] = presentQueue;
      setPresentQueue(remainingQueue);

      setTimeout(() => {
        setSleighPresents((prev) => [...prev, { ...present, state: 'packed' }]);
        updatedElves[elfIndex].working = false;
        setAvailableElves(updatedElves);
      }, 2000); // Simulate packing time
    }
  };

  return (
    <div className={styles.container}>
      <Story title="User Story 2 - Mrs. Claus and the Delivery Team" children={userStoryTwoText} />
  <button className={styles.button} onClick={handleNewPresent}>
        Generate New Present
      </button> 
      <div className={styles.grid}>
        <div className={styles.card}>
          <MrsClaus onReceivePresent={processPresent} workQueue={presentQueue} />
          <div className={styles.presentQueue}>
            {presentQueue.map((present) => (
              <Present key={present.id} id={present.id} />
            ))}
          </div>
        </div>
        <Elves availableElves={availableElves} />
        <Sleigh presents={sleighPresents.map((present) => present.name)} />
      </div>
    </div>
  );
};

export default UserStory2;