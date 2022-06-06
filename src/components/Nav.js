import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase.js";
import { signOut } from "firebase/auth";

export default function Nav() {
  const location = useLocation();
  const navigate = useNavigate();

  const username = auth.currentUser;

  const logOut = () => {
    signOut(auth)
      .then(() => {
        navigate("wylogowano");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleScroll = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  return (
    <div className="nav-wrapper container">
      {username !== null ? (
        <ul className="nav-top">
          <li className="user-name">{username.email}</li>
          <button className="logout-btn" onClick={logOut}>
            Wyloguj
          </button>
        </ul>
      ) : (
        <ul className="nav-top">
          <li className="nav-top-element">
            <Link className="sign-in-btn" to="logowanie">
              Zaloguj
            </Link>
          </li>
          <li className="nav-top-element">
            <Link to="rejestracja" className="sign-up-btn">
              Załóż konto
            </Link>
          </li>
        </ul>
      )}
      <ul className="nav-bottom">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active" : "nav-bottom-element-link"
            }
          >
            Start
          </NavLink>
        </li>

        <li className="nav-bottom-element">
          <ScrollLink
            className="nav-bottom-element-link"
            to="steps"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-40}
            duration={600}
            onClick={handleScroll}
          >
            O co chodzi?
          </ScrollLink>
        </li>
        <li className="nav-bottom-element">
          <ScrollLink
            className="nav-bottom-element-link"
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={10}
            duration={600}
          >
            O nas
          </ScrollLink>
        </li>
        <li className="nav-bottom-element">
          <ScrollLink
            className="nav-bottom-element-link"
            to="carousel"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
          >
            Fundacja o organizacje
          </ScrollLink>
        </li>
        <li className="nav-bottom-element">
          <ScrollLink
            className="nav-bottom-element-link"
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={30}
            duration={600}
          >
            Kontakt
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
}
