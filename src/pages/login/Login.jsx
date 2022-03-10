import React from 'react';
import './login.css'
import {Link} from 'react-router-dom'
const Login = () => {


  return (
    <div className='login section__padding'>
      <div className="login-container">
        <h2>Ingresar</h2>
        <form className='login-writeForm' autoComplete='off'>
          <div className="login-formGroup">
            <label>Usuario</label>
            <input type="text" placeholder='Username'  />
          </div>
          <div className="login-formGroup">
            <label>Contraseña</label>
            <input type="password" placeholder='Password'  />
          </div>
          
         <div className="login-button">
          <button className='login-writeButton' type='submit'>Ingresar</button>
          <Link to="/register">
            <button className='login-reg-writeButton' type='submit'>Registrar</button>
          </Link>
         </div>
        </form>
      </div>
    </div>
   )
};

export default Login;
