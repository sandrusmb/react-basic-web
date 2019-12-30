import React from "react";
import "../assets/css/Sidebar.scss";

class Sidebar extends React.Component {
  render() {
    return (
      <aside className="sidebar">
        <div className="sidebar__item">
          <h3>Puedes hacer esto</h3>
          <button href="#" className="sidebar__item__btn">
            Crear artículo
          </button>
        </div>

        <div className="sidebar__item">
          <h3>Buscador</h3>
          <p>Encuentra el artículo que buscas</p>
          <form>
            <input type="text" name="search" />
            <input
              type="submit"
              name="submit"
              value="Buscar"
              className="sidebar__item__btn-search"
            />
          </form>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
