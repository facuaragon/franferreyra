"use client";
import styles from "./page.module.css";
import CardEntrevista from "@/components/CardEntrevista";
import Paginacion from "@/components/Paginacion";
import { entrevistas } from "@/utils/datos";
import { useState } from "react";
export default function Entrevistas() {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(10);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = entrevistas.slice(indexOfFirstCard, indexOfLastCard);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <main id="entrevistas" className={styles.container}>
        <div className={styles.border}>
          <div className={styles.border}>
            {currentCards.map((entrevista, i) => (
              <CardEntrevista entrevista={entrevista} key={i} />
            ))}
          </div>
        </div>
        <Paginacion
          cardsPerPage={cardsPerPage}
          totalCards={entrevistas.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </main>
    </>
  );
}
