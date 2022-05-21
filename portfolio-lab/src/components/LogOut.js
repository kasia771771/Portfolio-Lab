import React from 'react'
import {Link} from 'react-router-dom'

export default function LogOut() {
  return (
    <div className='logout-container'>
        <div className='logout-header'>
            <h2 className='logout-title'>Wylogowanie nastąpiło <br/> pomyślnie!</h2>
            <div className='decoration'/>
            <Link className='logout-btn' to='/'>
                Strona główna
            </Link>
        </div>
    </div>
  )
}
