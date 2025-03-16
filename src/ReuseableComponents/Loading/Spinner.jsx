import styles from './Spinner.module.css';

function Spinner() {
  return (
    <div className="fixed inset-0  flex justify-center items-center z-10">
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner}></div>
      </div>
    </div>
  );
}

export default Spinner;
