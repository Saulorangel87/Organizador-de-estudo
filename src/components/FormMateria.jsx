import { useState } from "react";
import styles from "./FormMateria.module.css";

export default function FormMateria({ setMaterias, materias }) {
  const [nome, setNome] = useState("");
  return (
    <form
      className={styles.formMateria}
      onSubmit={(e) => {
        e.preventDefault();
        setMaterias([...materias,{id: new Date().getTime(), nome, sessoesEstudadas: 0, meta: 5 }]);
        setNome("");
      }}
    >
      <label htmlFor="nome">Nome da matéria:</label>
      <input
        className={styles.input}
        type="text"
        id="nome"
        name="nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <button className={styles.botao}>Adicionar</button>
    </form>
  );
}
