import CardEntrevista from "@/components/CardEntrevista";
import styles from "./streaming.module.css";
import { streaming } from "@/utils/datos";
import CardStreaming from "@/components/CardStreaming";
import Link from "next/link";
export default function Streaming() {
  const mostradas = 6;

  return (
    <main id="streaming" className={styles.container}>
      <div className={styles.title}>Streaming</div>
      <div className={styles.border}>
        {streaming.slice(0, mostradas).map((stream, i) => (
          <CardStreaming stream={stream} key={i} />
        ))}
      </div>
      {streaming?.length > mostradas && (
        <div className={styles.mas}>
          <Link href="/streamings">+ Ver Mas Streamings</Link>
        </div>
      )}
    </main>
  );
}
