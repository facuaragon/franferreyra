import CardEntrevista from "@/components/CardEntrevista";
import styles from "./notas.module.css";
import { notas } from "@/utils/datos";
import Link from "next/link";
export default function Notas() {
  const mostradas = 6;

  return (
    <main id="notas" className={styles.container}>
      <div className={styles.title}>Notas</div>
      <div className={styles.border}>
        {notas?.slice(0, mostradas).map((nota, i) => (
          <CardEntrevista entrevista={nota} key={i} />
        ))}
      </div>
      {notas?.length > mostradas && (
        <div className={styles.mas}>
          <Link href="/notas">+ Ver Mas Notas</Link>
        </div>
      )}
    </main>
  );
}
