import React from "react";
import MiComponente from "./MiComponente";
import Peliculas from "./Peliculas";

class Section extends React.Component {
  render() {
    return (
      <section className="content">
        <h2>Últimos artículos</h2>
        <MiComponente />
        <Peliculas />
      </section>
    );
  }
}

export default Section;
