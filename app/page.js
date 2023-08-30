import styles from "./page.module.css";
import Entrevistas from "@/views/Entrevistas";
import Notas from "@/views/Notas";

import Streaming from "@/views/Streaming";

export default function Home() {
  return (
    <>
      <section id="welcome" className={styles.welcome}>
        SECCION BIENVENIDA
      </section>
      <Entrevistas />
      <hr />
      <Notas />
      <hr />
      <section id="produccion" className={styles.produccion}>
        SECCION PRODUCCION
      </section>
      <Streaming />
      <section id="acerca" className={styles.acerca}>
        SECCION ACERCA DE MI
      </section>
    </>
  );
}
