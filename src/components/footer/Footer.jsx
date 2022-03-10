import React from 'react'
import './footer.css'
import nftlogo from '../../assets/logo.png'
import { AiOutlineInstagram,AiOutlineTwitter, AiOutlineLinkedin,AiOutlineBehance,AiOutlineGithub} from "react-icons/ai";
import { RiDiscordFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer section__padding'>
      <div className="footer-links">
        <div className="footer-links_logo">
        <div>
          <img src={nftlogo} alt="logo" />
          <p>A3M.SMM</p>
        </div>
        <div>
          <h3>Social Media Marketing - A3M</h3>
        </div>
        <div>
          <input type="text" placeholder='Correo' />
          <button>Email</button>
        </div>
        </div>
        <div className="footer-links_div">
          <h4>A3M.SMM</h4>
          <p>Explorar</p>
          <p>Nosotras</p>
          <p>Planes</p>
          <p>Contacto</p>
        </div>
        <div className="footer-links_div">
          <h4>Asesoria</h4>
          <p>Ayuda</p>
          <p>Termino y Condiciones</p>
          <p>Legales</p>
          <p>Derechos de Autor</p>
        </div>
      </div>
      <div className="footer-copyright">
        <div>
        <p> © {(new Date().getFullYear())}Copyright @ 2021 by A3M.SMM </p>
        </div>
        <div>
          <AiOutlineInstagram size={25} color='white' className='footer-icon' />
          <AiOutlineLinkedin size={25} color='white'  className='footer-icon' />
          <AiOutlineBehance size={25} color='white'  className='footer-icon' />
          < AiOutlineGithub size={25} color='white'  className='footer-icon' />
        </div>

      </div>
    </div>
  )
}

export default Footer
