import React, {useState} from 'react';
import {Link} from 'react-router-dom'

export default function SignIn() {

  const [values,setValues] = useState({
    email: '',
    password: '',
});

  const [errors,setErrors] = useState({});
  const[isSubmit, setIsSubmit] = useState(false);


  const handleChange = e => {
    const {name,value} = e.target
    setValues({
        ...values,
        [name]: value
    })
}

  const validate = () => {

  let errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!values.email) {
      errors.email = 'Pole nie może być puste';
  } else if (!emailRegex.test(values.email)) {
      errors.email = 'Podany email jest nieprawidłowy!';
  }

  if (!values.password) {
      errors.password = 'Pole nie może być puste';
  } else if (values.password.length < 6) {
      errors.password = 'Podane hasło jest za krótkie!';
  }

  return errors;
  }

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    // setIsSubmit(true);
}

  return (
    <div className='login-container'>
      <div className='login-header'>
        <h2 className='login-title'>Zaloguj się</h2>
        <div className='decoration'/>
      </div>
      <form className='form-login' onSubmit={handleSubmit}>
        <div className='inputs-container'>
          <div className='text-input-container'>
            <label className='text-label' >Email</label>
            <input 
              type='text' 
              name='email' 
              className={errors.email  ? 'error-input': 'text-input'} 
              value={values.email}
              onChange={handleChange}
            />
            <p className='error-message'>{errors.email}</p>                       

          </div>
          <div className='text-input-container'>
            <label className='text-label' >Hasło</label>
            <input 
              type='password' 
              name='password' 
              className={errors.password  ? 'error-input': 'text-input'} 
              value={values.password}
              onChange={handleChange}
            />
            <p className='error-message'>{errors.password}</p>                       

          </div>
        </div>
        <div className='buttons-container'>
          <Link  
          className='btn-secondary'
          to='/rejestracja'
          >
            Załóż konto
          </Link>
          <button 
            className='btn-submit'>
              Zaloguj się
          </button>
        </div>
      </form>
    </div>
  )
}
