"use client";
import styles from "./page.module.css";
import CardStreaming from "@/components/CardStreaming";
import Paginacion from "@/components/Paginacion";
import { streaming } from "@/utils/datos";
import { useState } from "react";
export default function Entrevistas() {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(10);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = streaming.slice(indexOfFirstCard, indexOfLastCard);
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
      <main id="streaming" className={styles.container}>
        <div className={styles.border}>
          <div className={styles.border}>
            {currentCards.map((stream, i) => (
              <CardStreaming stream={stream} key={i} />
            ))}
          </div>
        </div>
        <Paginacion
          cardsPerPage={cardsPerPage}
          totalCards={streaming.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </main>
    </>
  );
}
