import styles from "./Pesquisa.module.css";

export default function Pesquisa({ pesquisa, setPesquisa }) {
  return (
    <input
      className={styles.inputPesquisa}
      type="text"
      placeholder="Pesquisar matéria..."
      value={pesquisa}
      onChange={(e) => setPesquisa(e.target.value)}
    />
  );
}
