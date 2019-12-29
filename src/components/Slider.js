import React from "react";
import "../assets/css/Slider.scss";

class Slider extends React.Component {
  render() {
    return (
      <div className="slider">
        <h1 className="slider__title">
          Bienvenido a mi primera web hecha con React
        </h1>
        <button className="slider__button">
          <a href="#">Ir al blog</a>
        </button>
      </div>
    );
  }
}

export default Slider;
