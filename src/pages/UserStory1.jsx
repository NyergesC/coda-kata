import React, { useState } from 'react';
import Present from '../components/Present'; 
import Elf from '../components/Elf'; 
import Sleigh from '../components/Sleigh';
import Story from '../components/Story';
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
      <Story title="User Story 1 - Santa's current Delivery System">
        <p>
          Start off by recreating the current system Santa has. Currently his system allows a single delivery elf to 
          move presents onto his Sleigh. Once a delivery elf has a present it will take him a while to put it onto 
          Santa’s Sleigh. Once he has he calls back to say he’s available to transport another present.
        </p>
      </Story>

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