import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { Provider } from "@/Context/Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Francisco Ferreyra",
  description: "Periodista, Productor y Creador de Contenido",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/FF-favicon.ico" />
      <body className={inter.className}>
        <Provider>
          <Navbar />
          <Footer />
          {children}
        </Provider>
      </body>
    </html>
  );
}
