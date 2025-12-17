import React from "react"

import Perfil from "../perfil/perfil.jsx"
import Certificados from "../certificados/certificados.jsx"

function Inicio(){
    return(
        <div className="inicio">
            <Perfil/>
            <Certificados/>
        </div>
    )
}
export default Inicio;