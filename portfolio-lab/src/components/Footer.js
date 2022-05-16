import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <div className='footer container'>
            <p className='footer-snippet'>Copyright by Coders Lab</p>
            <div className='social-icons'>
                <a  className='social-icon-link'   target='_blank' href='http://facebook.com/'>
                    <div className='social-icon facebook-icon'/>    
                </a>
                <a className='social-icon-link' target='_blank' href='http://instagram.com'>
                    <div className='social-icon instagram-icon' />
                </a>
            </div>
        </div>
    )
}
