import React from 'react';
import './item.css'
import creator from '../../assets/bids6.png'
import item from '../../assets/item1.png'

const Item = () => {



  return( 
      <div className='item section__padding'>
        <div className="item-image">
          <img src={item} alt="item" />
        </div>
          <div className="item-content">
            <div className="item-content-title">
              <h1>Plan Full A3M</h1>
              <p>Desde <span>800 USD</span> ‧ Plan Disponible</p>
            </div>
            <div className="item-content-creator">
              <div>
                <img src={creator} alt="creator" />
                <p>Social Media Marketing A3M</p>
              </div>
            </div>
            <div className="item-content-detail">
              <p>Nuestro Plan Full A3M incluye toda la identidad visual que tu marca necesita, creando tus perfiles en redes sociales, set de plantillas autoadministrables, el logotipo que mejor represente a tu negocio y una Landing Page o Diseño de Website 100% responsive para Desktop y móviles de Hasta 5 Secciones, con SEO Estándar para lograr un 
              posicionamiento y visibilidad en los motores de búsqueda </p>
            </div>
            <div className="item-content-buy">
              <button className="primary-btn">Comprar por 800 USD</button>
              <button className="secondary-btn">Cotizar Otro Tipo de Plan!</button>
            </div>
          </div>
      </div>
  )
};

export default Item;
