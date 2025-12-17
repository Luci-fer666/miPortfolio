import React from "react";
import { Link } from 'react-router-dom';

import "./footer.css"
function Footer()
{
    return(
        <footer>
            <div className="piedepagina">
                <div className="columna">
                   <Link to="/contacto">Contacto</Link>
                    <a href="#proyectos">Proyectos</a>
                    <a href="#certificados">Certificados</a>
                </div>

                <div className="columna">
                    <p>©Luciano Illuminati</p>
                </div>

                <div className="columna">
                    <a href="www.linkedin.com/in/luciano-illuminati">Linkeind</a>
                    <a href="https://github.com/Luci-fer666">Github</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;