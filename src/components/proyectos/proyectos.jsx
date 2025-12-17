import React from "react";
import "./proyectos.css"
import proyectos from "./proyectos.js";
import TarjetaProyecto from "../tarjetaProyecto/tarjetaProyecto";

function Proyectos(){
    return(
        <div className="proyectos">
            {proyectos.map((proyecto, index) => (
                <TarjetaProyecto key={index} proyecto={proyecto} />
                ))}
        </div>
    )
}
export default Proyectos;