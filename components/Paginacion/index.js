import styles from "./paginacion.module.css";
export default function Paginacion({
  cardsPerPage,
  totalCards,
  paginate,
  currentPage,
}) {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }
  if (pageNumbers.length === 1) pageNumbers = [];

  return (
    <nav>
      <ul className={styles.list}>
        {pageNumbers?.map((page) => {
          return (
            <li key={page}>
              <button
                onClick={() => paginate(page)}
                className={currentPage === page ? styles.here : null}
              >
                {page}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
