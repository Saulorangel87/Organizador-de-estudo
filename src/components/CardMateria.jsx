import BarraProgresso from "./BarraProgresso";
import styles from "./CardMateria.module.css";

export default function CardMateria({
  materia,
  onEstudarMateria,
  onExcluirMateria,
}) {
  const progresso = Math.min(
    (materia.sessoesEstudadas / materia.meta) * 100,
    100,
  );
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
        <BarraProgresso progresso={progresso} cor={cor} />
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
}
