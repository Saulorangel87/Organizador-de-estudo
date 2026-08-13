import FormMateria from "./components/FormMateria.jsx";
import Header from "./components/Header.jsx";
import { useState } from "react";
import ListaMateria from "./components/ListaMateria.jsx";
import styles from "./App.module.css";
import Pesquisa from "./components/Pesquisa.jsx";

export default function App() {
  const [materias, setMaterias] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  function excluirMateria(id) {
    setMaterias(materias.filter((materia) => materia.id !== id));
  }
  const materiasFiltradas = materias
    .filter((materia) =>
      materia.nome.toLowerCase().includes(pesquisa.toLowerCase()),
    )
    .sort((a, b) => a.nome.localeCompare(b.nome));

  return (
    <div className={styles.app}>
      <Header />
      <FormMateria setMaterias={setMaterias} materias={materias} />
      <Pesquisa pesquisa={pesquisa} setPesquisa={setPesquisa} />
      <p>Total de materias: {materiasFiltradas.length}</p>
      <ListaMateria
        materias={materiasFiltradas}
        onExcluirMateria={excluirMateria}
      />
    </div>
  );
}
