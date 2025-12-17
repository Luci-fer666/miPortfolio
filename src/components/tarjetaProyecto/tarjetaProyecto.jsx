import "./tarjetaProyecto.css";
import React from "react";

function TarjetaProyecto({ proyecto }) {
  return (
    <div className="proyecto">
        <a href={proyecto.paginaWeb} target="_blank" rel="noreferrer">
            <div className="imagen">
                <img
                src={proyecto.imagen}
                alt={`Proyecto ${proyecto.nombre}`}
                className="portada"
                />
            </div>
        </a>

      <a href={proyecto.paginaWeb} target="_blank" rel="noreferrer">
        <h3 className="titulo">{proyecto.nombre}</h3>
      </a>

      <div className="tecnologias">
        {proyecto.tecnologias.map((tecnologia, index) => (
          <span className="etiqueta" key={index}>
            {tecnologia}
          </span>
        ))}
      </div>

      <p className="descripcion">{proyecto.descripcion}</p>

      <div>
        <a href={proyecto.git} target="_blank" rel="noreferrer">
          Repositorio
        </a>
      </div>
    </div>
  );
}

export default TarjetaProyecto;