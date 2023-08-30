import styles from "./produccion.module.css";
import { producciones } from "@/utils/datos";
import CardProduccion from "@/components/CardProduccion";
export default function Producion() {
  return (
    <main id="produccion" className={styles.container}>
      <div className={styles.border}>
        {producciones.slice(0, 4).map((produccion, i) => (
          <CardProduccion produccion={produccion} key={i} />
        ))}
      </div>
      {producciones?.length > 4 && (
        <div className={styles.mas}>+ Ver Mas Streamings</div>
      )}
    </main>
  );
}
