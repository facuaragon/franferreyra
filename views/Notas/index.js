import CardEntrevista from "@/components/CardEntrevista";
import styles from "./notas.module.css";
import { notas } from "@/utils/datos";
export default function Notas() {
  return (
    <main id="notas" className={styles.container}>
      <div className={styles.border}>
        {notas?.slice(0, 4).map((nota, i) => (
          <CardEntrevista entrevista={nota} key={i} />
        ))}
      </div>
      {notas?.length > 4 && <div className={styles.mas}>+ Ver Mas Notas</div>}
    </main>
  );
}
