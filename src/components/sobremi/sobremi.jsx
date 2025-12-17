import React from "react";
import "./sobremi.css"

function SobreMi(){
    return(
        <div className="contendor_trescolum">
            <h3 className="titulointerno">Bienvenido a mi Portfolio!</h3>

            <section>
                <div id="sobremi" className="contenedor_seccion">
                    <h4> Sobre mí</h4>
                    <p>Apasionado por la tecnología, la programación y el diseño interactivo.
                    Disfruto aprender nuevas herramientas y trabajar en equipo para crear soluciones innovadoras.
                    En mi tiempo libre desarrollo videojuegos en Unity y realizo ilustraciones digitales, combinando creatividad y lógica.</p>
                </div>
            </section>

            <section>
                <div id="tec_nol" className="contenedor_seccion">
                    <h4> Tecnologías y Lenguajes</h4>
                    <p>Lenguajes: HTML, CSS, JavaScript, Python, Java, C#, PHP, SQL
                    Frameworks y herramientas: ReactJS, NodeJS, ExpressJS, Flask, .NET, MongoDB

                    Habilidades clave:
                    Maquetación web con HTML y CSS moderno (responsive, accesible).
                    Desarrollo frontend con JavaScript y ReactJS.
                    Creación de APIs y servidores con NodeJS, Express o Flask.
                    Integración con bases de datos SQL y NoSQL.
                    Aplicaciones orientadas a objetos en C# y Java.</p>
                </div>
            </section>

            <section>
                <div id="prof_objetc" className="contenedor_seccion">
                    <h4> Objetivo profesional</h4>
                    <p>Busco incorporarme a equipos de desarrollo donde pueda seguir creciendo profesionalmente y aportar mis conocimientos técnicos.
                    Estoy siempre dispuesto a aprender nuevas tecnologías y adaptarme a los desafíos del entorno IT.</p>
                </div>
            </section>

            <section>
                <div id="academic_for" className="contenedor_seccion">
                    <h4> Formación Académica</h4>
                    <ul>
                        <li>Tecnicatura en Programación – Universidad Nacional de Hurlingham (2025 – Actualidad)</li>
                        <li>Full Stack Developer – ITBA Escuela de Innovación (2025)</li>
                        <li>Programador Anual – CFL 404 FOETRA (2025)</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
export default SobreMi;