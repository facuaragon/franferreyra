import CardEntrevista from "@/components/CardEntrevista";
import styles from "./entrevistas.module.css";
import { entrevistas } from "@/utils/datos";
export default function Entrevistas() {
  return (
    <main id="entrevistas" className={styles.container}>
      <div className={styles.border}>
        {entrevistas?.slice(0, 4).map((entrevista, i) => (
          <CardEntrevista entrevista={entrevista} key={i} />
        ))}
      </div>
      {entrevistas?.length > 4 && (
        <div className={styles.mas}>+ Ver Mas Entrevistas</div>
      )}
    </main>
  );
}
