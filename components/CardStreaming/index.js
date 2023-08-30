import styles from "./cardStreaming.module.css";
export default function CardStreaming({ stream }) {
  return (
    <>
      <div className={styles.container}>
        <iframe src={stream.video}></iframe>
        <div className={styles.cuerpo}>
          <div className={styles.medio}>{stream.canal}</div>
          <div className={styles.titulo}>{stream.titulo}</div>
        </div>
      </div>
    </>
  );
}
