import MovieCard from "../components/MovieCard";

export default function Favoritos({ favoritos, toggleFavorito }) {
  return (
    <>
      <h1>Favoritos</h1>
      {favoritos.length === 0 ? (
        <p>Nenhum filme favoritado ainda.</p>
      ) : (
        <div className="grade">
          {favoritos.map((filme) => (
            <MovieCard
              key={filme.id}
              filme={filme}
              favorito={true}
              onToggle={toggleFavorito}
            />
          ))}
        </div>
      )}
    </>
  );
}
