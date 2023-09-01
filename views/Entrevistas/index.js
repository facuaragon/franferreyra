import CardEntrevista from "@/components/CardEntrevista";
import styles from "./entrevistas.module.css";
import { entrevistas } from "@/utils/datos";
import Link from "next/link";
export default function Entrevistas() {
  const mostradas = 6;
  return (
    <main id="entrevistas" className={styles.container}>
      <div className={styles.title}>Entrevistas</div>
      <div className={styles.border}>
        {entrevistas?.slice(0, mostradas).map((entrevista, i) => (
          <CardEntrevista entrevista={entrevista} key={i} />
        ))}
      </div>
      {entrevistas?.length > mostradas && (
        <div className={styles.mas}>
          <Link href="/entrevistas">+ Ver Mas Entrevistas</Link>
        </div>
      )}
    </main>
  );
}
