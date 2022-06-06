import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase.js";

export const steps = document.getElementById("steps");

export default function Steps() {
  const username = auth.currentUser;

  return (
    <div id="steps" className="steps ">
      <h2 className="steps-title">Wystarczą 4 proste kroki</h2>
      <div className="decoration" />
      <div className="step-col-wrapper">
        <div className="steps-columns container">
          <div className="steps-single-col">
            <div className="steps-icon shirt-icon"></div>
            <h4 className="steps-col-title">Wybierz rzeczy</h4>
            <span className="steps-col-deco" />
            <p className="steps-col-snippet">ubrania, zabawki, sprzęt i inne</p>
          </div>
          <div className="steps-single-col">
            <div className="steps-icon bag-icon"></div>
            <h4 className="steps-col-title">Spakuj je</h4>
            <span className="steps-col-deco" />
            <p className="steps-col-snippet">skorzystaj z worków na śmieci</p>
          </div>
          <div className="steps-single-col">
            <div className="steps-icon search-icon"></div>
            <h4 className="steps-col-title">Zdecyduj komu chcesz pomóc</h4>
            <span className="steps-col-deco" />
            <p className="steps-col-snippet">wybierz zaufane miejsce</p>
          </div>
          <div className="steps-single-col">
            <div className="steps-icon recycle-icon"></div>
            <h4 className="steps-col-title">Zamów kuriera</h4>
            <span className="steps-col-deco" />
            <p className="steps-col-snippet">
              kurier przyjedzie w dogodnym terminie
            </p>
          </div>
        </div>
      </div>
      {username !== null ? (
        <Link className="cta-btn" to="/oddaj-rzeczy">
          Oddaj rzeczy
        </Link>
      ) : (
        <Link className="cta-btn" to="/logowanie">
          Oddaj rzeczy
        </Link>
      )}
    </div>
  );
}
