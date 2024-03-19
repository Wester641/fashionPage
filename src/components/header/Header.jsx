import logoImg from "./../../Images/logo-svg/Vector.svg";
import "./header.css";

// import Home from "../../pages/Home";
// import Catalogues from "../../pages/Catalogues";
// import FashionPage from "../../pages/FashionPage";
// import Favourite from "../../pages/Favourite";
// import Lifestyle from "../../pages/Lifestyle";
// import SignUp from "../../pages/SignUp";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <img src={logoImg} alt="Logo" />
            <a href="/" className="header__logo__title">
              <span>Fashion</span>
            </a>
          </div>
          <nav className="header__nav">
            <ul>
              <li>
                <a href="/Catalogues" className="nav__link">
                  CATALOGUES
                </a>
              </li>
              <li>
                <a href="/Fashionpage" className="nav__link">
                  FASHION
                </a>
              </li>
              <li>
                <a href="/Favourite" className="nav__link">
                  FAVOURITE
                </a>
              </li>
              <li>
                <a href="/Lifestyle" className="nav__link">
                  LIFESTYLE
                </a>
              </li>
              <li>
                <a href="/Signuppage" className="nav__link header__nav-btn">
                  SIGN UP
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
