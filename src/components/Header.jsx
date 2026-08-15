import styles from "./Header.module.css";

export default function Header({ onLimparDados }) {
  return (
    <div>
      <h1 className={styles.header}>📚Organizador de estudo</h1>
      <button className={styles.onLimparDados} onClick={onLimparDados}>Limpar dados</button>
    </div>
  );
}
