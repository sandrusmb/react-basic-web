import React from "react";
import "./assets/css/App.css";

// Importar componentes
import MiComponente from "./components/MiComponente";
import Peliculas from "./components/Peliculas";

function App() {
  return (
    <div>
      <section className="componentes">
        <MiComponente />
        <Peliculas />
      </section>
    </div>
  );
}

export default App;
