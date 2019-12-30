import React from "react";
import "./assets/css/App.css";

// Importar componentes
import MiComponente from "./components/MiComponente";
import Peliculas from "./components/Peliculas";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <section className="componentes">
        <Header />
        <Slider />
        <div className="container">
          <div>Este componente es para la sección de la izquierda</div>
          <Sidebar />
        </div>
        <MiComponente />
        <Peliculas />
      </section>
    </div>
  );
}

export default App;
