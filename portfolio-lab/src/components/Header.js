import React from 'react'
import {Link} from 'react-router-dom';
import {auth} from '../firebase.js';


export default function Header() {

    const username = auth.currentUser;
    return (
        <div className='header-wrapper container'>
        <img 
            src='https://trello.com/1/cards/6260055e792ad40342cc6892/attachments/6260055f792ad40342cc6cc5/download/Home-Hero-Image.jpg'
            className='header-photo'
            alt='header'
        />
        <div className='header-content'>
            <h2 className='header-title'>Zacznij pomagać! <br/>Oddaj niechciane rzeczy w zaufane ręce</h2>
            <div className='decoration'/>
            <div className='button-container'>
                {
                    (username!==null) ? 
                    <Link className="cta-btn" to='/oddaj-rzeczy'>Oddaj rzeczy</Link>
                    :
                    <Link className="cta-btn" to='/logowanie'>Oddaj rzeczy</Link>

                }
                <Link className="cta-btn" to='/logowanie'>Zorganizuj zbiórkę</Link>
            </div>
        </div>
    </div>
    )
}
