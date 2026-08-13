import styles from "./ListaMateria.module.css";

export default function ListaMateria({ materias, onExcluirMateria }) {
  return (
    <ul className={styles.listaMateria}>
      {materias.map((materia) => (
        <li className={styles.item} key={materia.id}>
          {materia.nome}{" "}
          <button className={styles.botaoExcluir} onClick={() => onExcluirMateria(materia.id)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
}
