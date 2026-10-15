import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { tmdb, IMG } from "../api";

export default function Detalhes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
  tmdb(`/movie/${id}`)
    .then((dados) => setFilme(dados))
    .catch((e) => setErro(e.message));
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
