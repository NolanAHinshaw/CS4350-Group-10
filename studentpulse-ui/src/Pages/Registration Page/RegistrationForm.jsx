import React from 'react';
import './RegistrationPage.css';

function RegistrationForm(){
    return(
        <form action='' className='register-form'>
            <div className='name-field'>
                  <div className='input-field-section'>
                        <label>First Name</label>
                        <input type='name' placeholder='Enter first name' required/>
                  </div>
                  <div className='input-field-section'>
                        <label>Last Name</label>
                        <input type='name' placeholder='Enter last name' required/>
                  </div>
            </div>
            <div className='input-field-section'>
                <label>Email</label>
                <input type='email' placeholder='Enter email' required/>
            </div>
            <div className='input-field-section'>
                <label>Password</label>
                <input type='password' placeholder='Enter password' required/>
            </div>
            <div className='input-field-section'>
                <label>Confirm Password</label>
                <input type='password' placeholder='Enter password again' required/>
            </div>
        </form>
    );
};

export default React.memo(RegistrationForm);