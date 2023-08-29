import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Francisco Ferreyra",
  description: "Periodista, Productor y Creador de Contenido",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/FF-favicon.ico" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
