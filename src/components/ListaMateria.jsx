import styles from "./ListaMateria.module.css";

export default function ListaMateria({
  materias,
  onExcluirMateria,
  onEstudarMateria,
}) {
  if (materias.length === 0) {
    return <p>Nenhuma matéria cadastrada.</p>;
  }
  return (
    <ul className={styles.listaMateria}>
      {materias.map((materia) => {
        const progresso = Math.min(
          (materia.sessoesEstudadas / materia.meta) * 100,
          100,
        )
        const cor = progresso < 40 ? "red" : progresso < 99 ? "yellow" : "green";

        return (
          <li className={styles.item} key={materia.id}>
            <div className={styles.linhaTopo}>
              {materia.nome}
              <div className={styles.status}>
                <span>{Math.round(progresso)}%</span>
                {materia.sessoesEstudadas >= materia.meta ? "Concluído ✅" : ""}
              </div>
            </div>
            <div className={styles.linhaBaixo}>
              <div className={styles.barrafundo}>
                <div
                  className={styles.barrapreenchida + " " + (progresso === 100 ? styles.completo : "")}
                  style={{ width: `${progresso}%`, backgroundColor: cor }}
                ></div>
              </div>
              <button
                className={styles.botaoEstudar}
                onClick={() => onEstudarMateria(materia.id)}
              >
                Estudei hoje
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
