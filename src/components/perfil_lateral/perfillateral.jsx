import React from "react";
import "./perfillateral.css"

function PerfilLateral(){
    return(
        <div className="contendor_unacolum">
            <aside className="sidebar">
                <div className="profile">
                    <div className="profile-image">
                        <img src="/docs/Foto en Cafeteria.jpeg" alt="Foto informal" className="img-base"/>
                        <img src="/docs/Foto Profesional.png" alt="Foto profesional" className="img-hover"/>
                    </div>
                    <h2 className="nombre">Luciano Illuminati</h2>
                    <p className="role">Full Stack Developer</p>
                    <nav className="social-links">
                        <a href="www.linkedin.com/in/luciano-illuminati">Linkeind</a>
                        <br></br>
                        <a href="https://github.com/Luci-fer666">Github</a>
                    </nav>
                </div>
            </aside>
        </div>
    )
}
export default PerfilLateral;