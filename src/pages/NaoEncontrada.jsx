import { Link } from "react-router-dom";

export default function NaoEncontrada() {
  return (
    <>
      <h1>404 - Página não encontrada</h1>
      <Link to="/">Voltar para a Home</Link>
    </>
  );
}
