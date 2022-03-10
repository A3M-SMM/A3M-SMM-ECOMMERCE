import React from 'react'
import './bids.css'
import { AiFillHeart,AiOutlineHeart } from "react-icons/ai";
import bids1 from '../../assets/bids1.png'
import bids2 from '../../assets/bids2.png'
import bids3 from '../../assets/bids3.png'
import bids4 from '../../assets/bids4.png'
import bids5 from '../../assets/bids5.png'
import bids6 from '../../assets/bids6.png'
import bids7 from '../../assets/bids7.png'
import bids8 from '../../assets/bids8.png'
import bids9 from '../../assets/bids9.png'
import bids10 from '../../assets/bids10.png'
import bids11 from '../../assets/bids11.png'
import bids12 from '../../assets/bids12.png'
import { Link } from 'react-router-dom';

const Bids = ({title}) => {
  return (
    <div className='bids section__padding'>
      <div className="bids-container">
        <div className="bids-container-text">
          <h1>{title}</h1>
        </div>
        <div className="bids-container-card">
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={bids1} alt="" />
              <Link to={`/post/123`}>
              <p className="bids-title">Paleta de Colores</p>
              </Link>
              </div>
              <div className="bids-card-bottom">
                <p>50 <span>USD</span></p>
                <p> <AiFillHeart /> 50 </p>
              </div>
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={bids2} alt="" />
              <Link to={`/post/123`}>
              <p className="bids-title">Logotipo</p>
              </Link>
              </div>
              <div className="bids-card-bottom">
                <p>100 <span>USD</span></p>
                <p> <AiFillHeart /> 25</p>
              </div>
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={bids3} alt="" />
              <Link to={`/post/123`}>
              <p className="bids-title">Perfil en Redes</p>
              </Link>
              </div>
              <div className="bids-card-bottom">
                <p>70 <span>USD</span></p>
                <p> <AiFillHeart /> 55</p>
              </div>
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={bids4} alt="" />
              <Link to={`/post/123`}>
              <p className="bids-title">UX|UI</p>
              </Link>
              </div>
              <div className="bids-card-bottom">
                <p>800 <span>USD</span></p>
                <p> <AiFillHeart /> 82</p>
              </div>
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={bids5} alt="" />
              <Link to={`/post/123`}>
              <p className="bids-title">Branding</p>
              </Link>
              </div>
              <div className="bids-card-bottom">
                <p>200 <span>USD</span></p>
                <p> <AiFillHeart /> 22</p>
              </div>
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={bids6} alt="" />
              <Link to={`/post/123`}>
              <p className="bids-title">Identidad de Marca</p>
              </Link>
              </div>
              <div className="bids-card-bottom">
                <p>250 <span>USD</span></p>
                <p> <AiFillHeart /> 71</p>
              </div>
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={bids7} alt="" />
              <Link to={`/post/123`}>
              <p className="bids-title">Historias y Portadas</p>
              </Link>
              </div>
              <div className="bids-card-bottom">
                <p>50 <span>USD</span></p>
                <p> <AiFillHeart /> 63</p>
              </div>
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={bids8} alt="" />
              <Link to={`/post/123`}>
              <p className="bids-title">Plantillas</p>
              </Link>
              </div>
              <div className="bids-card-bottom">
                <p>200 <span> USD</span></p>
                <p> <AiFillHeart /> 66</p>
              </div>
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={bids9} alt="" />
              <Link to={`/post/123`}>
              <p className="bids-title">Landing Page</p>
              </Link>
              </div>
              <div className="bids-card-bottom">
                <p>600<span>USD</span></p>
                <p> <AiFillHeart /> 66</p>
              </div>
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={bids10} alt="" />
              <Link to={`/post/123`}>
              <p className="bids-title">Paginas Web</p>
              </Link>
              </div>
              <div className="bids-card-bottom">
                <p>Cotizar! <span>USD</span></p>
                <p> <AiFillHeart /> 66</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bids
