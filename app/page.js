"use client";
import { Context } from "@/Context/Context";
import styles from "./page.module.css";
import Entrevistas from "@/views/Entrevistas";
import Notas from "@/views/Notas";
import Producion from "@/views/Produccion";
import Streaming from "@/views/Streaming";

import { useContext, useEffect, useState } from "react";
import Loading from "@/components/Loading";

export default function Home() {
  const { fetchEntrevistas, fetchNotas, fetchProducciones, fetchStreamings } =
    useContext(Context);
  const { entrevistas, notas, producciones, streamings } = useContext(Context);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!entrevistas || !notas || !producciones || !streamings) {
      setLoading(false);
    } else setLoading(true);

    const fetch = async () => {
      if (!entrevistas) await fetchEntrevistas();
      if (!notas) await fetchNotas();
      if (!producciones) await fetchProducciones();
      if (!streamings) await fetchStreamings();
    };
    fetch();
    // console.log("entrevistas", entrevistas);
    // console.log("notas", notas);
    // console.log("producciones", producciones);
    // console.log("streamings", streamings);
  }, [entrevistas, producciones, notas, streamings, loading]);

  if (loading) {
    return (
      <>
        {/* <section id="welcome" className={styles.welcome}>
          SECCION BIENVENIDA
        </section> */}
        <Entrevistas entrevistas={entrevistas} />
        <hr />
        <Notas notas={notas} />
        <hr />
        <Producion producciones={producciones} />
        <hr />
        <Streaming streamings={streamings} />
        {/* <section id="acerca" className={styles.acerca}>
          SECCION ACERCA DE MI
        </section> */}
      </>
    );
  } else {
    return (
      <div className={styles.loaderContent}>
        <Loading />
      </div>
    );
  }
}
