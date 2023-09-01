import styles from "./produccion.module.css";
// import { producciones } from "@/utils/datos";
import CardProduccion from "@/components/CardProduccion";
export default function Producion({ producciones }) {
  const mostradas = 6;

  return (
    <main id="produccion" className={styles.container}>
      <div className={styles.title}>Producción</div>
      <div className={styles.border}>
        {producciones?.slice(0, mostradas).map((produccion, i) => (
          <CardProduccion produccion={produccion} key={i} />
        ))}
      </div>
      {producciones?.length > mostradas && (
        <div className={styles.mas}>+ Ver Mas Producciones</div>
      )}
    </main>
  );
}
