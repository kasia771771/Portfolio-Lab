import React from 'react'
import {Link as ScrollLink} from "react-scroll";
import {Link} from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav-header-wrapper container">
    <nav className="nav container">
        <ul className="nav-top">
            <li>
                <Link to="/logowanie" className="sign-in-btn">
                    Zaloguj
                </Link>
            </li>
            <li>
                <Link to="/rejestracja" className="sign-up-btn">
                    Załóż konto
                </Link>
            </li>
            

        </ul>
        <ul className="nav-bottom">
            <li className="nav-bottom-element"> 
                <ScrollLink 
                    to="Home"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Start
                </ScrollLink> 
            </li>
            <li className="nav-bottom-element"> 
                <ScrollLink 
                    to="steps"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration={600}
                >
                    O co chodzi?
                </ScrollLink> 
            </li>
            <li className="nav-bottom-element">
                <ScrollLink 
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
                <ScrollLink to="/"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={10}
                duration={600}
                >
                    Fundacja o organizacje
                </ScrollLink> 
            </li>
            <li className="nav-bottom-element"> <ScrollLink to="/">Kontakt</ScrollLink> </li>
        </ul>
    </nav>
</div>
  )
}
