import { motion } from 'framer-motion';
import styles from './Present.module.css';

const Present = ({ id, state, familyId }) => {
  const presentClass = state ? styles[state] : ''; // Dynamically applying the state class

  return (
    <motion.div
      className={`${styles.present} ${presentClass}`}
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 0.5, ease: "linear" }}
    >
      🎁 Present #{id} {familyId && `(${familyId})`}
    </motion.div>
  );
};

export default Present;