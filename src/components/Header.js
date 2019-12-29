import React from "react";
import logo from "../assets/images/logo192.png";
import "../assets/css/Header.scss";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__center">
          {/*  LOGO */}
          <div className="header__center__logo">
            <img
              src={logo}
              className="header__center__logo__icon"
              alt="Logotipo"
            />
            <span className="header__center__logo__brand">
              <strong>Aprendiendo</strong>React
            </span>
          </div>

          {/* MENU */}
          <nav className="header__center__menu">
            <ul className="header__center__menu__ul">
              <li>
                <a href="index.html">Inicio</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="formulario.html">Formulario</a>
              </li>
              <li>
                <a href="#">Pagina 1</a>
              </li>
              <li>
                <a href="#">Pagina 2</a>
              </li>
            </ul>
          </nav>

          {/* OTRA COSA QUE NO SÉ QUÉ ES */}
          <div className="clearfix"></div>
        </div>
      </header>
    );
  }
}

export default Header;
