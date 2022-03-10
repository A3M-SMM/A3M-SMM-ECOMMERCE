import React,{ useState} from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png'
import {  Link } from "react-router-dom";

const Menu = () => (
  <>
     <Link to="/"><p>Explorar</p> </Link>
  </>
 )

 const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false)
   const [user,setUser] = useState(false)

  const handleLogout = () => {
    setUser(false);
  }
  const handleLogin = () => {
    setUser(true);
  }

  return (
    <div className='navbar'>
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <Link to="/"> 
          <h1><span>A3M.</span>SMM</h1>
          </Link>
        </div>
        <div className="navbar-links_container">
          <input type="text" placeholder='Buscar' autoFocus={true} />
         <Menu />
         {user && <Link to="/"><p onClick={handleLogout}>Logout</p></Link> }
        
        </div>
      </div>
      <div className="navbar-sign">
      {user ? (
        <>
         <Link to="/create"> 
          <button type='button' className='primary-btn' >Crear</button>
        </Link>
        <button type='button' className='secondary-btn'>Conectar</button>
        </>
      ): (
        <>
        <Link to="/login"> 
         <button type='button' className='primary-btn' onClick={handleLogin} >Ingresar</button>
        </Link>
        <Link to="/register"> 
          <button type='button' className='secondary-btn'>Registrarse</button>
        </Link>
        </>
      )}
       

       
      </div>
      <div className="navbar-menu">
        {toggleMenu ? 
        <RiCloseLine  color="#fff" size={27} onClick={() => setToggleMenu(false)} /> 
        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center" >
            <div className="navbar-menu_container-links">
             <Menu />
            </div>
            <div className="navbar-menu_container-links-sign">
            {user ? (
              <>
              <Link to="/create"> 
                <button type='button' className='primary-btn' >Create</button>
              </Link>
              <button type='button' className='secondary-btn'>Connect</button>
              </>
            ): (
              <>
              <Link to="/login"> 
              <button type='button' className='primary-btn' onClick={handleLogin} >Ingresar</button>
              </Link>
              <Link to="/register"> 
                <button type='button' className='secondary-btn'>Registrarse</button>
              </Link>
              </>
            )}
           
            </div>
            </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
