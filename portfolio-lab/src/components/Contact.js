import React from 'react'

export default function Contact() {
  return (
    <div className='contact'>
        <div className='contact-photo'/>
        <div className='contact-form'>
            <h2 className='contact-title'>Skontaktuj się z nami</h2>
            <div className='decoration'/>
            <form className='form-container'>
                <div className='default-input-container'>
                    <div className='text-input-container'>
                        <label className='text-label'>Wpisz swoje imię</label>
                        <input type='text' className='text-input'/>
                    </div>
                    <div className='text-input-container'>
                        <label className='text-label'>Wpisz swój email</label>
                        <input type='text' className='text-input'/>
                    </div>
                </div>
                <div className='textarea-input'>
                    <label className='text-label'>Wpisz swoją wiadomość</label>
                    <input type='textare' className='textarea-input'></input>
                </div>
            </form>
        </div>
    </div>
  )
}
