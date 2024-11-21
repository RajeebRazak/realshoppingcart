import React, { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../Features/ContextProvider";

function Nav() {
  const { cart } = useContext(CartContext);

  const cartLength = cart ? cart.length : 0;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <Link className="navbar-brand" to="/">
            Apple Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <Link className="btn btn-outline-dark" type="submit" to="/cart">
                <i className="bi-cart-fill me-1"></i>
                {cartLength}
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  <BsCart />
                </span>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
