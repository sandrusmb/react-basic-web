import React from "react";
import "./assets/css/App.css";

// Importar componentes
import MiComponente from "./components/MiComponente";
import Peliculas from "./components/Peliculas";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <section className="componentes">
        <Header />
        <MiComponente />
        <Peliculas />
      </section>
    </div>
  );
}

export default App;
