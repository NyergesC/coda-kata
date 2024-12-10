import React, { useState } from 'react';
import MrsClaus from '../components/MrsClaus';
import Elves from '../components/Elves';
import Sleigh from '../components/Sleigh';
import Present from '../components/Present';
import Story from '../components/Story';
import styles from './UserStory.module.css';

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
      <Story title="User Story 2 - Santa's Multi-Elf Delivery System">
        <p>
          Santa has asked Mrs Claus to organise a number of delivery elves who will put presents onto his Sleigh.
          Mrs Claus will operate as a present receiver for the Toy Machines. She will then give these presents to the available delivery elves.
          If no elves are available she will keep hold of the present until they are available.
        </p>
      </Story>
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