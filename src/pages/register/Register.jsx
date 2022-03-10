import React from 'react';
import './register.css'
import {Link} from 'react-router-dom'
import Image from '../../assets/Image.png'

const Register = () => {

  return (
    <div className='register section__padding'>
      <div className="register-container">
        <h1>Registrarse</h1>
        <div className="upload-img-show">
          <img src={Image} alt="banner" />
        </div>
        <form className='register-writeForm' autoComplete='off' >
          <div className="register-formGroup">
            <label>Subir</label>
            <input type="file" className='custom-file-input'
          />
          </div>
          <div className="register-formGroup">
            <label>Nombe Completo</label>
            <input type="text" placeholder='Name' />
          </div>
          <div className="register-formGroup">
            <label>Usuario</label>
            <input type="text" placeholder='Username'  />
          </div>
          <div className="register-formGroup">
            <label>Email</label>
            <input type="email" placeholder='Email' />
          </div>
          <div className="register-formGroup">
            <label>Contraseña</label>
            <input type="text" placeholder='Password'   />
          </div>
         <div className="register-button">
          <button className='register-writeButton'>Registrar</button>
          <Link to="/login">
            <button className='reg-login-writeButton' >Ingresar</button>
          </Link>
         </div>
        </form>
      </div>
    </div>
   )
};

export default Register;
