import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../src/navigation.module.css'

const Navigation = () => {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navTabs}>
        <li className={styles.navTab}>
          <Link to="/userstory1" className={styles.navLink}>User Story 1: Get Present</Link>
        </li>
        <li className={styles.navTab}>
          <Link to="/userstory2" className={styles.navLink}>User Story 2: Santa Sleigh</Link>
        </li>
        <li className={styles.navTab}>
          <Link to="/userstory3" className={styles.navLink}>User Story 3: Santa Sleigh</Link>
        </li>
        <li className={styles.navTab}>
          <Link to="/userstory4" className={styles.navLink}>User Story 4: Santa Sleigh</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;