import React from 'react';
import { motion } from 'framer-motion';
import styles from './Elf.module.css';

const Elf = ({ id, isPacking }) => {
  return (
    <motion.div
      className={`${styles.elf} ${isPacking ? styles.packing : ''}`}
      animate={isPacking ? { rotate: [0, 10, -10, 0] } : {}}
      transition={{ duration: 0.5, repeat: isPacking ? Infinity : 0 }}
    >
      {isPacking ? (
        <>
          🛠️ <p>Elf #{id} is packing</p>
        </>
      ) : (
        <>
          🧝 <p>Elf #{id} is available</p>
        </>
      )}
    </motion.div>
  );
};

export default Elf;



