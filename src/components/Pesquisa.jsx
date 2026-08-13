export default function Pesquisa({ pesquisa, setPesquisa }) {
  return (
    <input
      className="input"
      type="text"
      placeholder="Pesquisar matéria..."
      value={pesquisa}
      onChange={(e) => setPesquisa(e.target.value)}
    />
  );
}
