import "./tarjetaCertificados.css"
import React, { useState } from "react"

function TarjetaCertificados({ certificado }) {
    const [abierto, setAbierto] = useState(false)

    return (
        <div className="certificado">
            <div className="imagencertficiado">
                <img
                    src={certificado.imagen}
                    alt={certificado.nombre}
                    className="portada"
                    onClick={() => setAbierto(true)}
                />
            </div>

            {abierto && (
                <div className="popup" onClick={() => setAbierto(false)}>
                    <img
                        src={certificado.imagen}
                        alt={certificado.nombre}
                        className="popup-img"
                    />
                </div>
            )}
        </div>
    )
}

export default TarjetaCertificados