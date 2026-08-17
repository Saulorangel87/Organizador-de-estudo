import styles from "./Header.module.css";

export default function Header({
  onLimparDados,
  onToggleModoEscuro,
  modoEscuro,
}) {
  return (
    <div>
      <h1 className={styles.header}>📚Organizador de estudo</h1>
      <button className={styles.onLimparDados} onClick={onLimparDados}>
        Limpar dados
      </button>
      <button
        className={styles.onToggleModoEscuro}
        onClick={onToggleModoEscuro}
      >
        {modoEscuro ? "Modo claro" : "Modo escuro"}
      </button>
    </div>
  );
}