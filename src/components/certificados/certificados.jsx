import React from "react";
import TarjetaCertificados from "../tarjetacertificados/tarjetaCertificados";
import certificados from "./certificados.js";
import "./certificados.css"

function Certificados(){
    return(<div>
        <h2 className="titulointerno">Certificaciones</h2>
        <div className="certificados">
            {certificados.map((certificado, index) => (
            <TarjetaCertificados key={index} certificado={certificado} />
                ))}
        </div></div>
    )
}
export default Certificados;