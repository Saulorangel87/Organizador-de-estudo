import styles from "./BarraProgresso.module.css";

export default function BarraProgresso({ progresso, cor }) {
  return (
    <div className={styles.barrafundo}>
      <div
        className={
          styles.barrapreenchida + " " + (progresso === 100 ? styles.completo : "")
        }
        style={{ width: `${progresso}%`, backgroundColor: cor }}
      ></div>
    </div>
  );
}
