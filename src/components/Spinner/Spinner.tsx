import styles from './Spinner.module.scss';

const Spinner = () => (
  <div className={styles.overlay}>
    <div className={styles.container} />
  </div>
);

export default Spinner;
