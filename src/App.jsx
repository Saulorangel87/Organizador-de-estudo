import FormMateria from "./components/FormMateria.jsx";
import Header from "./components/Header.jsx";
import { useState, useEffect } from "react";
import ListaMateria from "./components/ListaMateria.jsx";
import styles from "./App.module.css";
import Pesquisa from "./components/Pesquisa.jsx";

export default function App() {
  const [materias, setMaterias] = useState(() => {
    const dadosSalvos = localStorage.getItem("materias");
    return dadosSalvos ? JSON.parse(dadosSalvos) : [];
  });

  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    localStorage.setItem("materias", JSON.stringify(materias));
  }, [materias]);

  function excluirMateria(id) {
    setMaterias(materias.filter((materia) => materia.id !== id));
  }
  function estudarMateria(id) {
    setMaterias(
      materias.map((materia) => {
        if (materia.id === id && materia.sessoesEstudadas < materia.meta) {
          return { ...materia, sessoesEstudadas: materia.sessoesEstudadas + 1 };
        }
        return materia;
      }),
    );
  }

  function limparDados() {
    if (confirm("Tem certeza que deseja limpar os dados?")) {
      localStorage.removeItem("materias");
      setMaterias([]);
    }
  }
  const materiasFiltradas = materias
    .filter((materia) =>
      materia.nome.toLowerCase().includes(pesquisa.toLowerCase()),
    )
    .sort((a, b) => a.nome.localeCompare(b.nome));

  return (
    <div className={styles.app}>
      <Header onLimparDados={limparDados} />
      <FormMateria setMaterias={setMaterias} materias={materias} />
      <Pesquisa pesquisa={pesquisa} setPesquisa={setPesquisa} />
      <p>Total de materias: {materiasFiltradas.length}</p>
      <ListaMateria
        materias={materiasFiltradas}
        onExcluirMateria={excluirMateria}
        onEstudarMateria={estudarMateria}
      />
    </div>
  );
}
