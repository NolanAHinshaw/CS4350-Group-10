import React from 'react';
import styles from './RegistrationPage.module.css';

function RegistrationForm({registerForm, setRegisterForm, error, setError, handleFormSubmit}){
    const dropdownMenuItems = ['Student', 'Professor'];

    //FUNCTION FOR LOADING OPTIONS IN USER IDENTIFICATION DROPDOWN
    const loadDropdownMenu = (dropdownItems) => {
        return dropdownItems?.map(menuItem => (
            <option value={menuItem} key={menuItem} onClick={handleFormInputChanges}>
                {menuItem}
            </option>
        ));
    };

    //FUNCTION FOR HANDLING REGISTRATION INPUT CHANGES
    const handleFormInputChanges = (event) => {
        if(event.target.name === 'password'){
            if(registerForm.passwordConfirm && registerForm.passwordConfirm !== event.target.value){
                setError((error) => ({...error, password: "Passwords do not match! Try Again."}));
            } else{
                setError((error) => ({...error, password: null}));
            }
        }
        if (event.target.name === 'passwordConfirm') {
            if (registerForm.password && registerForm.password !== event.target.value) {
              setError((error) => ({...error, passwordConfirm: "Confirm Password does not match! Try again."}));
            } else {
              setError((error) => ({ ...error, passwordConfirm: null }));
            }
        }
        if (event.target.name === 'email') {
            if (event.target.value.indexOf("@") === -1) {
              setError((error) => ({ ...error, email: "Please enter a valid email! Try again." }));
            } else {
              setError((error) => ({ ...error, email: null }));
            }
        }
        if(event.target.name === 'userType'){
            var dropdownValue = document.getElementsByClassName('dropdown-menu')[0].value;
            setRegisterForm((form) => ({...form, 'userType': dropdownValue}));
        }

        setRegisterForm((form) => ({ ...form, [event.target.name]: event.target.value }));
    };

    return(
        <form action='' className={styles['register-form']} onSubmit={handleFormSubmit}>
            <div className={styles['dropdown-field']}>
                <label> Who Are You? </label>
                <select name="userType" className={styles['dropdown-menu']} onChange={handleFormInputChanges}>
                    {loadDropdownMenu(dropdownMenuItems)}
                </select>
            </div>

            <div className={styles['name-field']}>
                  <div className={styles['input-field-section']}>
                        <label>First Name</label>
                        <input type='name' name='firstname' placeholder='Enter first name' onChange={handleFormInputChanges} required/>
                  </div>
                  <div className={styles['input-field-section']}>
                        <label>Last Name</label>
                        <input type='name' name='lastname'placeholder='Enter last name' onChange={handleFormInputChanges} required/>
                  </div>
            </div>

            {error && <p className={styles['error-text']}>{error.email}</p>}
            <div className={styles['input-field-section']}>
                <label>Email</label>
                <input type='email' name='email' placeholder='Enter email' onChange={handleFormInputChanges} required/>
            </div>

            {error && <p className={styles['error-text']}>{error.username}</p>}
            <div className={styles['input-field-section']}>
                <label>Username</label>
                <input type='text' name='username' placeholder='Enter username' onChange={handleFormInputChanges} required/>
            </div>

            {error && <p className={styles['error-text']}>{error.password}</p>}
            <div className={styles['input-field-section']}>
                <label>Password</label>
                <input type='password' name='password' placeholder='Enter password'  onChange={handleFormInputChanges} required/>
            </div>

            {error && <p className={styles['error-text']}>{error.passwordConfirm}</p>}
            <div className={styles['input-field-section']}>
                <label>Confirm Password</label>
                <input type='password' name='passwordConfirm' placeholder='Enter password again' onChange={handleFormInputChanges} required/>
            </div>

            <input type='submit' className={styles['register-page-button']} onClick={handleFormSubmit}value='SIGN UP'/>
        </form>
    );
};

export default React.memo(RegistrationForm);