import styles from "./page.module.css";
import Entrevistas from "@/views/Entrevistas";
import Notas from "@/views/Notas";
import Producion from "@/views/Produccion";

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
      <Producion />
      <hr />
      <Streaming />
      <section id="acerca" className={styles.acerca}>
        SECCION ACERCA DE MI
      </section>
    </>
  );
}
