import { NavLink } from "react-router-dom";

const estilo = ({ isActive }) => (isActive ? "ativo" : "");

export default function Navbar() {
  return (
    <header>
      <NavLink to="/" end className={estilo}>Início</NavLink>
      <NavLink to="/busca" className={estilo}>Busca</NavLink>
      <NavLink to="/favoritos" className={estilo}>Favoritos</NavLink>
    </header>
  );
}
