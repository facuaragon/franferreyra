import styles from "./cardEntrevista.module.css";
export default function CardEntrevista({ entrevista }) {
  const imagenStyle = {
    backgroundImage: `url(${entrevista.foto})`,
  };
  return (
    <>
      <a href={entrevista.link} target="_blank">
        <div className={styles.container}>
          <div className={styles.foto} style={imagenStyle}></div>
          <div className={styles.cuerpo}>
            <div className={styles.medio}>{entrevista.medio}</div>
            <div className={styles.titulo}>{entrevista.titulo}</div>
            <div className={styles.bajada}>{entrevista.bajada}</div>
          </div>
        </div>
      </a>
    </>
  );
}
