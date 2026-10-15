import { useOutletContext } from "react-router-dom";
import MovieCard from "./MovieCard";

export default function ListaFilmes({ filmes }) {
  const { favoritos, toggleFavorito } = useOutletContext();
  return (
    <div className="grade">
      {filmes.map((filme) => (
        <MovieCard
          key={filme.id}
          filme={filme}
          favorito={favoritos.some((f) => f.id === filme.id)}
          onToggleFavorito={toggleFavorito}
        />
      ))}
    </div>
  );
}
