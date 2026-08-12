import FormMateria from "./components/FormMateria.jsx";
import Header from "./components/Header.jsx";
import { useState } from "react";
import ListaMateria from "./components/ListaMateria.jsx";
import styles from "./App.module.css";

export default function App() {
  const [materias, setMaterias] = useState([]);

  function excluirMateria(index) {
    setMaterias(materias.filter((_, i) => i !== index));
  }
  return (
    <div className={styles.app}>
      <Header />
      <FormMateria setMaterias={setMaterias} materias={materias} />
      <ListaMateria materias={materias} onExcluirMateria={excluirMateria} />
    </div>
  );
}
