import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { tmdb } from "../api";

export default function Home({ favoritos, toggleFavorito }) {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    tmdb("/movie/popular")
      .then((dados) => setFilmes(dados.results))
      .catch((e) => setErro(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (erro) return <p className="erro">{erro}</p>;

  return (
    <>
      <h1>Filmes populares</h1>
      <div className="grade">
        {filmes.map((filme) => (
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
