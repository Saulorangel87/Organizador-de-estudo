import styles from "./ListaMateria.module.css";

export default function ListaMateria({
  materias,
  onExcluirMateria,
  onEstudarMateria,
}) {
  return (
    <ul className={styles.listaMateria}>
      {materias.map((materia) => {
        const progresso = (materia.sessoesEstudadas / materia.meta) * 100;
        return (
          <li className={styles.item} key={materia.id}>
            <div className={styles.linhaTopo}>
              {materia.nome}
              <p>{Math.round(progresso)}%</p>
            </div>
            <div className={styles.linhaBaixo}>
              <div className={styles.barrafundo}>
                <div
                  className={styles.barrapreenchida}
                  style={{ width: `${progresso}%` }}
                ></div>
              </div>
              <button
                className={styles.botaoEstudar}
                onClick={() => onEstudarMateria(materia.id)}
              >
                Estudar
              </button>
              <button
                className={styles.botaoExcluir}
                onClick={() => onExcluirMateria(materia.id)}
              >
                Excluir
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
