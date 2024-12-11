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

    // Find the first available elf

    // Mark the elf as working

    // Take the first present from the queue
    // Update the present queue

    // Simulate the packing process
      setTimeout(() => {
        // Update sleighPresents: Add packed present to sleigh
        // Mark the elf as available again
        //update avaliableElves
      }, 2000); // Simulated packing delay
    }
  
  

  return (
    <div className={styles.container}>
      <h1>User Story 2 - Mrs. Claus and the Delivery Team</h1>
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