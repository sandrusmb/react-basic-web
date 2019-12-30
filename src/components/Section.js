import React from "react";
/* import MiComponente from "./MiComponente";
import Peliculas from "./Peliculas"; */
import "../assets/css/Section.scss";
import logo from "../assets/images/logo192.png";

class Section extends React.Component {
  render() {
    return (
      <section className="article">
        <h2 className="article__title">Últimos artículos</h2>
        <div className="article__container">
          <img src={logo} alt="foto blog" className="article__container__img" />
          <div className="article__container__div">
            <h3 className="article__container__div__h3">Artículo de prueba</h3>
            <p className="article__container__div__text">Hace 5 minutos</p>
            <p className="article__container__div__read">Leer más</p>
          </div>
        </div>
        {/* <MiComponente />
        <Peliculas /> */}
      </section>
    );
  }
}

export default Section;
