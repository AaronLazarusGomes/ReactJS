import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";
import img from "./b.png";
import { auth } from "./Firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-brand-center navbar-dark sticky-top uy">
      <Link to="/">
        <a href="#" className="navbar-brand">
          <img src={img} alt="" className="header__logo" />
        </a>
        <a href="#" className="navbar-brand name">
          Good Reads
        </a>
      </Link>

      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarToggle"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarToggle">
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item" onClick={login}>
            <Link to={!user && "/login"}>
              <p className="header__option">
                <span className="link__name">Hello {user?.email} </span>
                <span className="link__name">
                  {user ? "Sign Out" : "Sign In"}
                </span>
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/checkout">
              <ShoppingCartIcon className="wh" />
              <span className="wh">{basket?.length}</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
