import "./tarjetaCertificados.css"
import React from "react"

function TarjetaCertificados({ certificado }){
    return(
        <div className="certificado">
            <div className="imagencertficiado">
                <img
                src={certificado.imagen}
                alt={certificado.nombre}
                className="portada"
                />
            </div>
        </div>
    )
}
export default TarjetaCertificados;