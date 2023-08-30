"use client";
import { useEffect, useState } from "react";
import styles from "./cardEntrevista.module.css";
import { usePathname } from "next/navigation";

export default function CardEntrevista({ entrevista }) {
  const pathname = usePathname();
  const [titleFont, setTitleFont] = useState(20);
  const [bajadaFont, setBajadaFont] = useState(15);
  const [companyFont, setCompanyFont] = useState(15);
  useEffect(() => {
    if (pathname === "/") {
      setTitleFont(20);
      setBajadaFont(15);
      setCompanyFont(15);
    } else {
      setTitleFont(15);
      setBajadaFont(13);
      setCompanyFont(10);
    }
  }, [pathname]);

  const titleFontStyle = {
    fontSize: `${titleFont}px`,
  };
  const bajadaFontStyle = {
    fontSize: `${bajadaFont}px`,
  };
  const companyFontStyle = {
    fontSize: `${companyFont}px`,
  };
  const imagenStyle = {
    backgroundImage: `url(${entrevista.foto})`,
  };

  return (
    <>
      <a href={entrevista.link} target="_blank">
        <div className={styles.container}>
          <div className={styles.foto} style={imagenStyle}></div>
          <div className={styles.cuerpo}>
            <div className={styles.medio} style={companyFontStyle}>
              {entrevista.medio}
            </div>
            <div className={styles.titulo} style={titleFontStyle}>
              {entrevista.titulo}
            </div>
            <div className={styles.bajada} style={bajadaFontStyle}>
              {entrevista.bajada}
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
