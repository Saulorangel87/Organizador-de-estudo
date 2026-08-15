import { useState, useRef } from "react";
import styles from "./FormMateria.module.css";

export default function FormMateria({ setMaterias, materias }) {
  const [nome, setNome] = useState("");
  const [meta, setMeta] = useState(0);
  const inputNomeRef = useRef(null);

  return (
    <form
      className={styles.formMateria}
      onSubmit={(e) => {
        e.preventDefault();
        if (Number(meta) <= 0) {
          alert("A meta não pode ser zero ou negativa.");
          return;
        }
        setMaterias([
          ...materias,
          {
            id: new Date().getTime(),
            nome,
            sessoesEstudadas: 0,
            meta: Number(meta),
          },
        ]);
        setNome("");
        setMeta(0);
        inputNomeRef.current.focus();
      }}
    >
      <label htmlFor="nome">Nome da matéria:</label>
      <input
        ref={inputNomeRef}
        className={styles.input}
        type="text"
        id="nome"
        name="nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <label htmlFor="meta">Meta da sessão:</label>
      <input
        className={styles.input}
        type="number"
        min="1"
        value={meta}
        onChange={(e) => setMeta(e.target.value)}
      />
      <button className={styles.botao}>Adicionar</button>
    </form>
  );
}
