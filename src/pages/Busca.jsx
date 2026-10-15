import { useState } from "react";
import MovieCard from "../components/MovieCard";
import { tmdb } from "../api";

export default function Busca({ favoritos, toggleFavorito }) {
  const [termo, setTermo] = useState("");
  const [resultados, setResultados] = useState([]);
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (termo.trim() === "") {
      setErro("Digite o nome de um filme.");
      return;
    }

    setErro("");
    setLoading(true);

    tmdb("/search/movie", { query: termo.trim() })
      .then((dados) => setResultados(dados.results))
      .catch((err) => setErro(err.message))
      .finally(() => setLoading(false));
  }

  return (
    <>
      <h1>Buscar filmes</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={termo}
          onChange={(e) => setTermo(e.target.value)}
          placeholder="Nome do filme"
        />
        <button type="submit">Buscar</button>
      </form>

      {loading && <p>Carregando...</p>}
      {erro && <p className="erro">{erro}</p>}

      <div className="grade">
        {resultados.map((filme) => (
          <MovieCard
            key={filme.id}
            filme={filme}
            favorito={favoritos.some((f) => f.id === filme.id)}
            onToggle={toggleFavorito}
          />
        ))}
      </div>
    </>
  );
}