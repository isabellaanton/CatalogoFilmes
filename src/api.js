const BASE = "https://api.themoviedb.org/3";
const KEY = import.meta.env.VITE_API;

export const IMG = "https://image.tmdb.org/t/p/w500";

export async function tmdb(caminho, params = {}) {
  const query = new URLSearchParams({
    api_key: KEY,
    language: "pt-BR",
    ...params,
  });
  const resposta = await fetch(`${BASE}${caminho}?${query}`);
  if (!resposta.ok) {
    throw new Error(`Erro ${resposta.status} ao consultar a API do TMDb.`);
  }
  return resposta.json();
}