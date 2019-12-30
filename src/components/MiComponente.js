import React from "react";
import logo from "../assets/images/logo192.png";

class MiComponente extends React.Component {
  render() {
    let receta = {
      nombre: "pizza",
      ingredientes: ["tomate", "queso", "jamón cocido"],
      calorias: 400
    };

    return (
      <div className="">
        <img src={logo} alt="foto blog" />

        {/* <h1>{"Receta: " + receta.nombre}</h1>
        <h2>{"Calorías: " + receta.calorias}</h2>
        <ul>
          {receta.ingredientes.map((elemento, i) => {
            return <li key={i}>{elemento}</li>;
          })}
        </ul> */}
      </div>
    );
  }
}

export default MiComponente;
