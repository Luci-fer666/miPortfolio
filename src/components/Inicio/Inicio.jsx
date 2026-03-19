import React from "react"
import "./Inicio.css"
import Perfil from "../perfil/perfil.jsx"
import Certificados from "../certificados/certificados.jsx"
import Carrousel from "../carrusel/carrusel.jsx"

function Inicio(){
    return(<div>
        <Carrousel/>
            <div className="inicio">
                <Perfil/>
                <Certificados/>
            </div>
        </div>
    )
}
export default Inicio;