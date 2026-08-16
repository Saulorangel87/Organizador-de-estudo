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
  const [modoEscuro, setModoEscuro] = useState(false);
  const sessoesTotais = materias.reduce((acumulador, materia) => {
    return acumulador + materia.sessoesEstudadas;
  }, 0);
  const materiaMaisEstudada = materias.reduce((atual, materia) => {
    return atual.sessoesEstudadas > materia.sessoesEstudadas ? atual : materia;
  }, materias[0]);
  const materiaMenosEstudada = materias.reduce((atual, materia) => {
    return atual.sessoesEstudadas < materia.sessoesEstudadas ? atual : materia;
  }, materias[0]);
  const mediaSessoes =
    Math.round(
      materias.reduce((acumulador, materia) => {
        return acumulador + materia.sessoesEstudadas;
      }, 0) / materias.length,
    ) || 0;
  const materiasConcluidas = materias.filter(
    (materia) => materia.sessoesEstudadas >= materia.meta,
  );
  const progressoTotal =
    Math.round((materiasConcluidas.length / materias.length) * 100) || 0;
  const hoje = new Date();
  const diaDaSemana = hoje.getDay();
  let diasParaVoltar;
  if (diaDaSemana === 0) {
    diasParaVoltar = 6;
  } else {
    diasParaVoltar = diaDaSemana - 1;
  }
  const diaDoMes = hoje.getDate();
  hoje.setDate(diaDoMes - diasParaVoltar);
  const inicioSemana = hoje.toISOString().split("T")[0];

  const diaDoMesFim = hoje.getDate();
  hoje.setDate(diaDoMesFim + 6);
  const fimSemana = hoje.toISOString().split("T")[0];

  const todasAsDatas = materias.flatMap((materia) => materia.historico || []);

  const sessoesDaSemana = todasAsDatas.filter(
    (data) => data >= inicioSemana && data <= fimSemana,
  ).length;

  useEffect(() => {
    localStorage.setItem("materias", JSON.stringify(materias));
  }, [materias]);

  function alternarModoEscuro() {
    setModoEscuro(!modoEscuro);
  }

  function excluirMateria(id) {
    setMaterias(materias.filter((materia) => materia.id !== id));
  }
  function estudarMateria(id) {
    const dataHoje = new Date().toISOString().split("T")[0];
    setMaterias(
      materias.map((materia) => {
        if (materia.id === id && materia.sessoesEstudadas < materia.meta) {
          return {
            ...materia,
            sessoesEstudadas: materia.sessoesEstudadas + 1,
            historico: [...(materia.historico || []), dataHoje],
          };
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
    <div className={`${styles.app} ${modoEscuro ? "dark" : ""}`}>
      <Header
        onLimparDados={limparDados}
        onToggleModoEscuro={alternarModoEscuro}
      />
      <FormMateria setMaterias={setMaterias} materias={materias} />
      <Pesquisa pesquisa={pesquisa} setPesquisa={setPesquisa} />
      <p>Total de materias: {materiasFiltradas.length}</p>{" "}
      <p>Total de sessões estudadas: {sessoesTotais}</p>
      {materias.length > 0 ? (
        <p>Matéria mais estudada: {materiaMaisEstudada.nome}</p>
      ) : (
        <p>Matéria mais estudada não foi cadastrada ainda.</p>
      )}
      {materias.length > 0 ? (
        <p>Matéria menos estudada: {materiaMenosEstudada.nome}</p>
      ) : (
        <p>Matéria menos estudada não foi cadastrada ainda.</p>
      )}
      <p>Media de sessões estudadas: {mediaSessoes}</p>
      <p>Progresso total: {progressoTotal}%</p>
      <p>Sessões estudadas essa semana: {sessoesDaSemana}</p>
      <ListaMateria
        materias={materiasFiltradas}
        onExcluirMateria={excluirMateria}
        onEstudarMateria={estudarMateria}
      />
    </div>
  );
}
