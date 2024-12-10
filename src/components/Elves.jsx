
import styles from './style.module.css';
import Elf from './Elf';

const Elves = ({ availableElves }) => {
  return (
    <div className={styles.card}>
      <h3>Delivery Elves</h3>
      <div className={styles.elfList}>
        {availableElves?.map((elf) => (
          <Elf key={elf.id} id={elf.id} isPacking={elf.working} />
        ))}
      </div>
    </div>
  );
};

export default Elves;
