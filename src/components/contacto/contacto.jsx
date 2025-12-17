import React, { useState } from "react";
import "./contacto.css";

function Contacto() {
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false);

  const manejarSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mpwvgvyo", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setEnviado(true);
        e.target.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <section className="contacto">
      <h2 className="titulo-contacto">Contacto</h2>

      {enviado && (
        <p className="mensaje-exito">
          ✅ Tu mensaje fue enviado correctamente.
        </p>
      )}

      {error && (
        <p className="mensaje-error">
          ❌ Ocurrió un error. Intentá nuevamente.
        </p>
      )}

      {!enviado && (
        <form className="formulario-contacto" onSubmit={manejarSubmit}>
          <div className="campo">
            <label htmlFor="email">Tu email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="campo">
            <label htmlFor="asunto">Asunto</label>
            <input
              type="text"
              id="asunto"
              name="asunto"
              required
            />
          </div>

          <div className="campo">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="message"
              rows="5"
              required
            />
          </div>

          <button type="submit" className="boton-enviar">
            Enviar
          </button>
        </form>
      )}
    </section>
  );
}

export default Contacto;