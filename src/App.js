import React from "react";
import "./assets/css/App.css";

// Importar componentes
/* import MiComponente from "./components/MiComponente";
import Peliculas from "./components/Peliculas"; */
import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Section from "./components/Section";

function App() {
  return (
    <div>
      <section className="componentes">
        <Header />
        <Slider />
        <div className="container">
          <div>
            <Section />
            {/* <MiComponente />
            <Peliculas /> */}
          </div>
          <Sidebar />
        </div>
        <Footer />
      </section>
    </div>
  );
}

export default App;
