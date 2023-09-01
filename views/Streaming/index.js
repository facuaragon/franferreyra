import CardEntrevista from "@/components/CardEntrevista";
import styles from "./streaming.module.css";
import { streaming } from "@/utils/datos";
import CardStreaming from "@/components/CardStreaming";
export default function Streaming() {
  const mostradas = 6;

  return (
    <main id="streaming" className={styles.container}>
      <div className={styles.border}>
        {streaming.slice(0, mostradas).map((stream, i) => (
          <CardStreaming stream={stream} key={i} />
        ))}
      </div>
      {streaming?.length > mostradas && (
        <div className={styles.mas}>+ Ver Mas Streamings</div>
      )}
    </main>
  );
}
