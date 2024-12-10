import React, { useState } from 'react';
import Elf from '../components/Elf'; 
import Sleigh from '../components/Sleigh';
import Story from '../components/Story';
import { userStoryOneText } from '../utils.js';
import styles from './UserStory.module.css';

const UserStory1 = () => {
  const [presents, setPresents] = useState([]);
  const [presentId, setPresentId] = useState(1); 
  const [isElfPacking, setIsElfPacking] = useState(false); // Elf packing state
  const [isToyMachineGiving, setIsToyMachineGiving] = useState(false); // Toy machine state

  // Toy Machine passes a gift
  const handlePresentGive = () => {
    setIsToyMachineGiving(true);

    // After a delay, the Elf starts packing
    setTimeout(() => {
      setIsElfPacking(true);
      setTimeout(() => {
        setPresents((prev) => [...prev, `Present #${presentId}`]);
        setPresentId((prev) => prev + 1);
        setIsElfPacking(false); // Packing done
        setIsToyMachineGiving(false);
      }, 2500);
    }, 2000);
  };
  

  return (
    <div className={styles.container}>
      <Story title="User Story 1 - Santa's current Delivery System" children={userStoryOneText} />
      {/* Toy Machine */}
      <div className={styles.card}>
        <h2>Toy Machine</h2>
        <div className={styles.toyMachine}>
          {isToyMachineGiving && <div className={styles.gear}>⚙️</div>}
          <button
            className={styles.button}
            onClick={handlePresentGive}
            disabled={isToyMachineGiving}
          >
            {isToyMachineGiving ? 'Giving Present...' : 'Give Present to Elf'}
          </button>
        </div>
      </div>

      {/* Delivery Elf */}
      <div className={styles.card}>
        <Elf id={1} isPacking={isElfPacking} />
      </div>

      {/* Santa's Sleigh */}
      <Sleigh presents={presents} />
      <div className={styles.summary}>
        <p>Currently, the sleigh has {presents.length} present{presents.length === 1 ? '' : 's'}.</p>
      </div>
    </div>
  );
};

export default UserStory1;