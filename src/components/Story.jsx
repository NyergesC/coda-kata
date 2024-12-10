import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './story.module.css';

const Story = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      {/* Header */}
      <motion.div
        className={styles.header}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <h3>{title}</h3>
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={styles.icon}
        >
          ▼
        </motion.span>
      </motion.div>

      {/* Content */}
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <div className={styles.innerContent}>{children}</div>
      </motion.div>
    </div>
  );
};

export default Story;