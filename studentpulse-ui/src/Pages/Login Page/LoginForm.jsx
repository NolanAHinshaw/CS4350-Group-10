import React,{useState} from 'react';
import './LoginPage.css';




function LoginForm(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Client-side verification
        if (!username || !password) {
          setError('Please fill in both fields.');
          return;
        } else {
          setError('');
          // You can add your login logic here
        }
      };
  
    return(
        <form action='' className='login-form'>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}></form>
         <div className='name-field'>
            <div className='input-field-section'>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} required/>
            </div>
            
            <div className='input-field-section'>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required/>
            </div>
            <button className='login-page-button'> SIGN IN </button>
        </div>
        </form>
    );
};

export default React.memo(LoginForm);
