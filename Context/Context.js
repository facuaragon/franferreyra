"use client";
import { createContext, useState } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [entrevistas, setEntrevistas] = useState();
  const [notas, setNotas] = useState();
  const [producciones, setProducciones] = useState();
  const [streamings, setStreamings] = useState();

  const getEntrevistas = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_PROJECT_URL}/api/entrevistas`,
        {
          cache: "no-store",
        }
      );
      if (!res.ok) {
        throw new Error("Error al cargar Entrevistas");
      }
      return res.json();
    } catch (error) {
      console.log("Error al cargar Entrevistas: ", error);
    }
  };
  const getNotas = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_PROJECT_URL}/api/notas`,
        {
          cache: "no-store",
        }
      );
      if (!res.ok) {
        throw new Error("Error al cargar Notas");
      }
      return res.json();
    } catch (error) {
      console.log("Error al cargar Notas: ", error);
    }
  };
  const getProducciones = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_PROJECT_URL}/api/producciones`,
        {
          cache: "no-store",
        }
      );
      if (!res.ok) {
        throw new Error("Error al cargar Producciones");
      }
      return res.json();
    } catch (error) {
      console.log("Error al cargar Producciones: ", error);
    }
  };
  const getStreamings = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_PROJECT_URL}/api/streamings`,
        {
          cache: "no-store",
        }
      );
      if (!res.ok) {
        throw new Error("Error al cargar Streamings");
      }
      return res.json();
    } catch (error) {
      console.log("Error al cargar Streamings: ", error);
    }
  };

  const fetchEntrevistas = async () => {
    let entrevistasRes = await getEntrevistas();
    if (entrevistasRes && entrevistasRes.entrevistas) {
      setEntrevistas(entrevistasRes.entrevistas);
    }
  };
  const fetchNotas = async () => {
    let notasRes = await getNotas();
    if (notasRes && notasRes.notas) {
      setNotas(notasRes.notas);
    }
  };
  const fetchProducciones = async () => {
    let produccionesRes = await getProducciones();
    if (produccionesRes && produccionesRes.producciones) {
      setProducciones(produccionesRes.producciones);
    }
  };
  const fetchStreamings = async () => {
    let streamingsRes = await getStreamings();
    if (streamingsRes && streamingsRes.streamings) {
      setStreamings(streamingsRes.streamings);
    }
  };

  return (
    <Context.Provider
      value={{
        entrevistas,
        fetchEntrevistas,
        notas,
        fetchNotas,
        producciones,
        fetchProducciones,
        streamings,
        fetchStreamings,
      }}
    >
      <div>{children}</div>
    </Context.Provider>
  );
};
