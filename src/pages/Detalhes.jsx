import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const KEY = import.meta.env.VITE_TMDB_API_KEY;

export default function Detalhes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=pt-BR`)
      .then((res) => res.json())
      .then((dados) => setFilme(dados));
  }, [id]);

  return (
    <>
      <button onClick={() => navigate(-1)}>← Voltar</button>
      {!filme ? (
        <p>Carregando...</p>
      ) : (
        <div>
          <h1>{filme.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
            alt={filme.title}
            width="250"
          />
          <p>⭐ {filme.vote_average.toFixed(1)} · {filme.release_date}</p>
          <p>{filme.overview}</p>
        </div>
      )}
    </>
  );
}
