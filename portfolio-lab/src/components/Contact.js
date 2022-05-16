import React from 'react'

export default function Contact() {
    return (
        <div className='contact' id='contact'>
            <div className='contact-photo'/>
            <div className='contact-form container'>
                <h2 className='contact-title'>Skontaktuj się z nami</h2>
                <div className='decoration'/>
                <form className='form-container'>
                    <div className='default-input-container'>
                        <div className='text-input-container'>
                            <label className='text-label'>Wpisz swoje imię</label>
                            <input type='text' className='text-input' placeholder='Krzysztof'/>
                        </div>
                        <div className='text-input-container'>
                            <label className='text-label' >Wpisz swój email</label>
                            <input type='text' className='text-input'placeholder='abc@xyz.pl'/>
                        </div>
                    </div>
                    <div className='textarea-input-container'>
                        <label className='text-label'>Wpisz swoją wiadomość</label>
                        <textarea  rows='6' className='textarea-input'placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'></textarea>
                    </div>
                    <button type='submit' className='btn-submit'>Wyślij</button>
                </form>
            </div>
        </div>
    )
}
