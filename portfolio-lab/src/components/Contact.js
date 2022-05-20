import React, {useState} from 'react'

export default function Contact() {

    const [values,setValues] = useState({
        name:'',
        email: '',
        message: '',
    });

    const [errors,setErrors] = useState({})

    const handleChange = e => {
        const {name,value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
    }

    const validate = () => {

        let errors = {};
        const nameRegex = /[a-zA-z]/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.name.trim()) {
            errors.name = 'Pole nie może być puste';
        } else if(!nameRegex.test(values.name))  {
            errors.name = 'Imię musi być jednym wyrazem';
        }

        if (!values.email) {
            errors.email = 'Pole nie może być puste';
        } else if (!emailRegex.test(values.email)) {
            errors.email = 'Email powinien być poprawny';
        }

        if (!values.message) {
            errors.message = 'Pole nie może być puste';
        } else if (values.message.length < 120) {
            errors.message = 'Wiadomość musi mieć conajmniej 120 znaków';
        }

        return errors;
    }

    return (
        <div className='contact' id='contact'>
            <div className='contact-photo'/>
            <div className='contact-form container'>
                <h2 className='contact-title'>Skontaktuj się z nami</h2>
                <div className='decoration'/>
                <form className='form-container'onSubmit={handleSubmit}>
                    <div className='default-input-container'>
                        <div className='text-input-container'>
                            <label className='text-label'>Wpisz swoje imię</label>
                            <input 
                            type='text' 
                            className='text-input' 
                            name='name' 
                            placeholder='Krzysztof'
                            value={values.name}
                            onChange={handleChange}
                            />
                            <p className='error-message'>{errors.name}</p>                       
                        </div>
                        <div className='text-input-container'>
                            <label className='text-label' >Wpisz swój email</label>
                            <input 
                                type='text' 
                                name='email' 
                                className='text-input'
                                placeholder='abc@xyz.pl'
                                value={values.email}
                                onChange={handleChange}
                            />
                        <p className='error-message'>{errors.email}</p>                       

                        </div>
                    </div>
                    <div className='textarea-input-container'>
                        <label className='text-label'>Wpisz swoją wiadomość</label>
                        <textarea  
                            rows='6' 
                            name='message' 
                            className='textarea-input' 
                            value={values.message}
                            onChange={handleChange}
                            placeholder='Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad 
                            minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat.'
                            >
                        </textarea>
                        <p className='error-message'>{errors.message}</p>                       

                    </div>
                    <button type='submit' className='btn-submit'>Wyślij</button>
                </form>
            </div>
        </div>
    ) 
}
