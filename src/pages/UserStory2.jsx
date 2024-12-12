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

  // Generate a new present and add it to the present queue
  const handleNewPresent = () => {
    const newPresent = { id: presentId, name: `Present #${presentId}` };
    setPresentQueue((prev) => [...prev, newPresent]);
    setPresentId((prev) => prev + 1); // Increment the present ID for the next present
  };

  // Process a present if an elf is available
  const processPresent = () => {
    
     //Handle if presentQueue is empty
    if (presentQueue.length === 0) return;

    // Find the index of first available elf (who is not working)
    const firstElf = availableElves.findIndex((elf) => !elf.working);
    
    if (firstElf !== -1) {
      const updatedElves = [...availableElves];
      updatedElves[firstElf].working = true;
      setAvailableElves(updatedElves);

      const [nextPresent, ...remainingQueue] = presentQueue;
      setPresentQueue(remainingQueue);

      // Simulate packing the present
      setTimeout(() => {
        setSleighPresents((prev) => [...prev, { ...nextPresent, state: 'packed' }]);
        updatedElves[firstElf].working = false;
        setAvailableElves(updatedElves);
      }, 2000); // Simulated packing delay
    }
    //If statement: if the avaliable elf is found:
        //Create a copy of the current elves array
        // Mark the selected elf as working
        // Update the state with the modified elves array

        // Take the first present from the queue
        // Update the present queue by removing the first present

        // Simulate the packing process
      setTimeout(() => {
        // Update sleighPresents: Add packed present to sleigh
        // Mark the elf as available again
        // update the staten with the modified avaliable elves array
      }, 2000); // Simulated packing delay
    }
  
  

  return (
    <div className={styles.container}>
      <Story title="User Story 2: Mrs. Claus and the Delivery Team" children={userStoryTwoText} />
      <button className={styles.button} onClick={handleNewPresent}>
        Generate New Present
      </button>
      <div className={styles.grid}>
        {/* Present Queue and Mrs. Claus */}
        <div className={styles.card}>
          <MrsClaus onReceivePresent={processPresent} workQueue={presentQueue} />
          <div className={styles.presentQueue}>
            {presentQueue.map((present, index) => (
              <Present key={index} id={present.id} state="unpacked" />
            ))}
          </div>
        </div>
        {/* Elves */}
        <Elves availableElves={availableElves} />
        {/* Santa's Sleigh */}
        <Sleigh presents={sleighPresents} />
      </div>
    </div>
  );
};

export default UserStory2;