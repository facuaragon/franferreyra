import styles from "./cardProduccion.module.css";
export default function CardProduccion({ produccion }) {
  return (
    <>
      <div className={styles.container}>
        <iframe src={produccion.video}></iframe>
        <div className={styles.cuerpo}>
          <div className={styles.medio}>{produccion.productora}</div>
          <div className={styles.titulo}>{produccion.titulo}</div>
          <div className={styles.bajada}>{produccion.servicio}</div>
        </div>
      </div>
    </>
  );
}
