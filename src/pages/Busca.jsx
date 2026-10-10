import { useState } from "react";
import MovieCard from "../components/MovieCard";

const KEY = import.meta.env.VITE_TMDB_API_KEY;

export default function Busca({ favoritos, toggleFavorito }) {
  const [termo, setTermo] = useState("");
  const [resultados, setResultados] = useState([]);
  const [erro, setErro] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (termo.trim() === "") {
      setErro("Digite o nome de um filme.");
      return;
    }

    setErro("");
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=pt-BR&query=${termo.trim()}`
    )
      .then((res) => res.json())
      .then((dados) => setResultados(dados.results));
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
