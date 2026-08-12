import styles from "./ListaMateria.module.css";

export default function ListaMateria({ materias, onExcluirMateria }) {
  return (
    <ul className={styles.listaMateria}>
      {materias.map((materia, index) => (
        <li className={styles.item} key={index}>
          {materia}{" "}
          <button className={styles.botaoExcluir} onClick={() => onExcluirMateria(index)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
}
