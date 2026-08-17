import CardMateria from "./CardMateria";
import styles from "./ListaMateria.module.css";

export default function ListaMateria({
  materias,
  onExcluirMateria,
  onEstudarMateria,
}) {
  if (materias.length === 0) return <p>Nenhuma matéria cadastrada.</p>;
  return (
    <ul className={styles.listaMateria}>
      {materias.map((materia) => (
        <CardMateria
          key={materia.id}
          materia={materia}
          onEstudarMateria={onEstudarMateria}
          onExcluirMateria={onExcluirMateria}
        />
      ))}
    </ul>
  );
}
