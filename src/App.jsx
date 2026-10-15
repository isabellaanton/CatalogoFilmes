import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Detalhes from "./pages/Detalhes";
import Busca from "./pages/Busca";
import Favoritos from "./pages/Favoritos";
import NaoEncontrada from "./pages/NaoEncontrada";

export default function App() {
  // Lê a lista salva no navegador (ou começa vazia)
  const [favoritos, setFavoritos] = useState(
    JSON.parse(localStorage.getItem("favoritos")) || []
  );

  // Salva no navegador sempre que a lista mudar
  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  function toggleFavorito(filme) {
    if (favoritos.some((f) => f.id === filme.id)) {
      setFavoritos(favoritos.filter((f) => f.id !== filme.id)); // remove
    } else {
      setFavoritos([...favoritos, filme]); // adiciona
    }
  }

  const props = { favoritos, toggleFavorito };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home {...props} />} />
        <Route path="filme/:id" element={<Detalhes />} />
        <Route path="busca" element={<Busca {...props} />} />
        <Route path="favoritos" element={<Favoritos {...props} />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Route>
    </Routes>
  );
}
