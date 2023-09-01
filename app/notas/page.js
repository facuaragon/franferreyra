"use client";
import styles from "./page.module.css";
import CardEntrevista from "@/components/CardEntrevista";
import Paginacion from "@/components/Paginacion";
import { notas } from "@/utils/datos";
import { useState } from "react";
export default function Entrevistas() {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(10);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = notas.slice(indexOfFirstCard, indexOfLastCard);
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
      <main id="notas" className={styles.container}>
        <div className={styles.border}>
          <div className={styles.border}>
            {currentCards.map((entrevista, i) => (
              <CardEntrevista entrevista={entrevista} key={i} />
            ))}
          </div>
        </div>
        <Paginacion
          cardsPerPage={cardsPerPage}
          totalCards={notas.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </main>
    </>
  );
}
