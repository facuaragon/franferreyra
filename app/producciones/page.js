"use client";
import styles from "./page.module.css";
import CardProduccion from "@/components/CardProduccion";
import Paginacion from "@/components/Paginacion";
import { producciones } from "@/utils/datos";
import { useState } from "react";
export default function Entrevistas() {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(10);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = producciones.slice(indexOfFirstCard, indexOfLastCard);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <main id="producciones" className={styles.container}>
        <div className={styles.border}>
          <div className={styles.border}>
            {currentCards.map((produccion, i) => (
              <CardProduccion produccion={produccion} key={i} />
            ))}
          </div>
        </div>
        <Paginacion
          cardsPerPage={cardsPerPage}
          totalCards={producciones.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </main>
    </>
  );
}
