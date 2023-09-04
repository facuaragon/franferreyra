import styles from "./admin.module.css";

export default function Admin() {
  return (
    <main id="admin" className={styles.container}>
      <div className={styles.border}>
        <div className={styles.panel}></div>
        <div className={styles.viewport}></div>
      </div>
    </main>
  );
}
