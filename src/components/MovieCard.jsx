import { Link } from "react-router-dom";

export default function MovieCard({ filme, favorito, onToggle }) {
  return (
    <div className="card">
      <Link to={`/filme/${filme.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
          alt={filme.title}
        />
      </Link>
      <h3>{filme.title}</h3>
      <p>⭐ {filme.vote_average.toFixed(1)}</p>
      <button onClick={() => onToggle(filme)}>
        {favorito ? "Desfavoritar" : "Favoritar"}
      </button>
    </div>
  );
}
