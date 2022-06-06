import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase.js";

export default function SignUp() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const validate = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Pole nie może być puste";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Podany email jest nieprawidłowy!";
    }

    if (!values.password) {
      errors.password = "Pole nie może być puste";
    } else if (values.password.length < 6) {
      errors.password = "Podane hasło jest za krótkie!";
    }

    if (!values.passwordConfirm) {
      errors.passwordConfirm = "Pole nie może być puste";
    } else if (values.passwordConfirm.length < 6) {
      errors.passwordConfirm = "Podane hasło jest za krótkie!";
    } else if (values.passwordConfirm !== values.password) {
      errors.passwordConfirm = "Hasła muszą być takie same";
    }

    return errors;
  };

  // const register = () => {
  //   createUserWithEmailAndPassword(auth, values.email, values.password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ..
  //     });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmit(true);
    // register(navigate("/"));
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h2 className="login-title">Załóż konto</h2>
        <div className="decoration" />
      </div>
      <form className="form-login" onSubmit={handleSubmit}>
        <div className="inputs-container">
          <div className="text-input-container">
            <label className="text-label">Email</label>
            <input
              type="text"
              name="email"
              className={errors.email ? "error-input" : "text-input"}
              value={values.email}
              onChange={handleChange}
            />
            <p className="error-message">{errors.email}</p>
          </div>
          <div className="text-input-container">
            <label className="text-label">Hasło</label>
            <input
              type="password"
              name="password"
              className={errors.password ? "error-input" : "text-input"}
              value={values.password}
              onChange={handleChange}
            />
            <p className="error-message">{errors.password}</p>
          </div>
          <div className="text-input-container">
            <label className="text-label">Powtórz hasło</label>
            <input
              type="password"
              name="passwordConfirm"
              className={errors.passwordConfirm ? "error-input" : "text-input"}
              value={values.passwordConfirm}
              onChange={handleChange}
            />
            <p className="error-message">{errors.passwordConfirm}</p>
          </div>
        </div>
        <div className="buttons-container">
          <Link className="btn-secondary" to="/logowanie">
            Zaloguj
          </Link>
          <button className="btn-submit">Załóż konto</button>
        </div>
      </form>
    </div>
  );
}
