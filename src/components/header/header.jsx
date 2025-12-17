import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="encabezado">
        <h1 className="titulo">Luciano Illuminati</h1>
        <h4 className="subtitulo">Full Stack Developer</h4>
      </div>

      <nav className="navegacion">
        <Link className="link" to="/">Inicio</Link>
        <Link className="link" to="/proyectos">Proyectos</Link>
        <Link className="link" to="/contacto">Contactame</Link>
      </nav>
    </header>
  );
}

export default Header;