import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export default function SignUp() {

  const [values,setValues] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
});

  return (
    <div className='login-container'>
      <div className='login-header'>
        <h2 className='login-title'>Załóż konto</h2>
        <div className='decoration'/>
    </div>
      <div className='form-login'>
        <div className='inputs-container'>
          <div className='text-input-container'>
            <label className='text-label' >Email</label>
            <input 
              type='text' 
              name='email' 
              className='text-input'
              value={values.email}
              // onChange={handleChange}
            />
          </div>
          <div className='text-input-container'>
            <label className='text-label' >Hasło</label>
            <input 
              type='text' 
              name='password'  
              className='text-input'
              value={values.password}
              // onChange={handleChange}
            />
          </div>
          <div className='text-input-container'>
            <label className='text-label' >Powtórz hasło</label>
            <input 
              type='text' 
              name='passwordConfirm' 
              className='text-input'
              value={values.passwordConfirm}
              // onChange={handleChange}
            />
          </div>
        </div>
        <div className='buttons-container'>
          <Link  
          className='btn-secondary'
          to='/logowanie'
          >
            Zaloguj
          </Link>
          <button 
            className='btn-submit'>
              Załóż konto
          </button>
        </div>
      </div>
    </div>
  )
}
