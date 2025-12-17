import React from "react";
import PerfilLateral from "../perfil_lateral/perfillateral"
import SobreMi from "../sobremi/sobremi"
import "./perfil.css"

function Perfil()
{
    return(
        <div>
        <h2 className="titulointerno">Sobre mi</h2>
        <div className="perfil">
            <PerfilLateral/>
            <SobreMi/>
        </div></div>
    )
}
export default Perfil;