import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
function Header({ showMenu }) {
  const [sideMenu, setSideMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const showSideMenu = () => {
    setSideMenu(!sideMenu);
  };
  useEffect(() => {
    if (sideMenu) {
      document.documentElement.style.setProperty("overflow-Y", "hidden");
    } else {
      document.documentElement.style.setProperty("overflow-Y", "");
    }
  }, [sideMenu]);

  const handleClick = () => {
    setDropdown(!dropdown);
  };

  return (
    <header className={showMenu ? "header" : "header header--hidden"}>
      <div className="container">
        <nav className="header__nav">
          <Link to="/" className="header__logo">
            <h1 className="header__title">Cake a moment</h1>
          </Link>
          <ul
            className={
              sideMenu
                ? "header__links "
                : "header__links header__links--hidden"
            }
          >
            <li className="header__cat">
              <Link to="/entradas" className="header__link">
                Entradas
              </Link>
            </li>
            <li className="header__cat">
              <Link to="/pratoprincipal" className="header__link">
                Pratos principais
              </Link>
            </li>
            <li className="header__cat header__dropdown">
              <Link to="/sobremesas" className="header__link">
                Sobremesas
              </Link>
              <button
                className="header__icon material-icons-outlined"
                onClick={handleClick}
              >
                expand_more
              </button>
              <ul
                className={`header__subcat ${
                  dropdown ? "header__subcat-show" : ""
                } `}
              >
                <li>
                  <Link to="/construction" className="header__link">
                    Tartes
                  </Link>
                </li>
                <li>
                  <Link to="/construction" className="header__link">
                    Bolos
                  </Link>
                </li>
              </ul>
            </li>
            <li className="header__cat">
              <Link to="/dicas" className="header__link">
                Dicas
              </Link>
            </li>
            <li className="header__cat">
              <Link to="/sobre" className="header__link">
                Sobre
              </Link>
            </li>
          </ul>
          <div className="header__burger" onClick={showSideMenu}>
            <span className="material-icons-outlined">
              {sideMenu ? "close" : "menu"}
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
