
import React from 'react';
import "./carrusel.css"
import { Link } from 'react-router-dom';

function Carrousel(){
    return(
    <section>
        <div className="carruselportada">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">

                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                    <li data-target="#myCarousel" data-slide-to="4"></li>
                    <li data-target="#myCarousel" data-slide-to="5"></li>
                </ol>
                <div className="carousel-inner">

                    <div className="item active">
                        <Link to="/contacto">
                            <img src="/docs/carrousel/tarjeta.jpg" alt="Portada" className="carousel_img"/>
                        </Link>
                    </div>

                    <div className="item">
                        <a href='https://luci-fer666-hermanos-jota-sping-7-8-nu.vercel.app/productos'>
                            <img src="/docs/carrousel/hermanos.jpg" alt="Portada" className="carousel_img"/>
                        </a>
                    </div>

                    <div className="item">
                        <a href='https://cyberfest-lovat.vercel.app'>
                            <img src="/docs/carrousel/cyberfest.jpg" alt="Portada" className="carousel_img"/>
                        </a>
                    </div>

                    <div className="item">
                        <a href='https://game-hub-solidario.vercel.app'>
                            <img src="/docs/carrousel/gamehub.jpg" alt="Portada" className="carousel_img"/>
                        </a>
                    </div>

                    <div className="item">
                        <img src="/docs/carrousel/egresados.jpg" alt="Portada" className="carousel_img"/>
                    </div>

                    <div className="item">
                        <img src="/docs/carrousel/dibujo.jpg" alt="Portada" className="carousel_img"/>
                    </div>
                </div>

                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    </section>
    )}
export default Carrousel;