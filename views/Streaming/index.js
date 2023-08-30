import CardEntrevista from "@/components/CardEntrevista";
import styles from "./streaming.module.css";
import { streaming } from "@/utils/datos";
import CardStreaming from "@/components/CardStreaming";
export default function Streaming() {
  return (
    <main id="streaming" className={styles.container}>
      <div className={styles.border}>
        {streaming.slice(0, 4).map((stream, i) => (
          <CardStreaming stream={stream} key={i} />
        ))}
      </div>
      {streaming?.length > 4 && (
        <div className={styles.mas}>+ Ver Mas Streamings</div>
      )}
    </main>
  );
}
