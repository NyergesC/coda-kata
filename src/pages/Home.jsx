import React from 'react';
import { motion } from 'framer-motion';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', textAlign: 'left', width: '100%'}}>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', textAlign: 'left', width: '700px'}}>
        <h1 className={styles.title}>🎄 Christmas Delivery 🎁</h1>
        <p className={styles.description}>
          Welcome to the magical world of Santa's Christmas delivery! 🎅✨<br/>
          This year, Santa is facing a <strong>huge challenge:</strong> 🌍 the world’s population has grown so much that his old system can't keep up anymore. <br/>
          But don’t worry, <strong>Mrs. Claus</strong> and her team of hardworking elves 🧝‍♀️🧝‍♂️ are here to save the day!<br/>
          Together, they’re designing a brand-new delivery system that’s smarter, faster, and even more magical!  <br/>
        </p>
        <h2 className={styles.subtitle}>🎁 How It Works:</h2>
        <ul className={styles.storyList}>
          <li>🎁 <strong>Presents are created</strong> in the toy machines 🛠️.</li>
          <li>🤶🏻 Mrs. Claus manages <strong>multiple elves</strong>, assigning them tasks.</li>
          <li>🎅 <strong>Santa’s Sleigh</strong> gets packed efficiently, family by family.</li>
          <li>❌ Naughty families might lose their presents... behave well! 😉</li>
        </ul>
        <p className={styles.footer}>Let’s get ready for the most magical Christmas ever! 🎄❄️</p>
      </div>
    </div>
  );
};

export default Home;