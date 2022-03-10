import React from 'react'
import './header.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import seller1 from '../../assets/seller1.png'
import seller2 from '../../assets/seller2.png'
import seller3 from '../../assets/seller3.png'
import verify from '../../assets/verify.png'
import coin from '../../assets/coin.png'
import { Link  } from 'react-router-dom';
const Header = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide:true,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          swipeToSlide:true,
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          swipeToSlide:true,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
        }
      }
    ]
  };
  return (
    <div className='header section__padding'>
      <div className="header-content">
        <div>
          <h2> <span className='slogan'> Si esta en tu mente.. </span>Lo hacemos posible en <span className='slogan2'> A3M!</span> </h2>
          <img className='shake-vertical' src={coin} alt="" />
        </div>
      </div>
      <div className="header-slider">
        <h1>Planes a tu Medida!</h1>
       <Slider {...settings} className='slider'>
            <div className='slider-card'>
              <p className='slider-card-number'>1</p>
              <div className="slider-img">
                <img src={seller1} alt="" />
                <img src={verify} className='verify' alt="" />
              </div>
              <Link to={`/profile/Rian`}>
              <p className='slider-card-name'>Display</p>
              </Link>
              <p className='slider-card-price'>200 <span> $USD</span></p>
            </div>
            <div className='slider-card'>
              <p className='slider-card-number'>2</p>
              <div className="slider-img">
                <img src={seller2} alt="" />
                <img src={verify} className='verify' alt="" />
              </div>
              <Link to={`/profile/Rian`}>
              <p className='slider-card-name'>Intermedio</p>
              </Link>
              <p className='slider-card-price'>300 <span> $USD</span></p>
            </div>
            <div className='slider-card'>
              <p className='slider-card-number'>3</p>
              <div className="slider-img">
                <img src={seller3} alt="" />
                <img src={verify} className='verify' alt="" />
              </div>
              <Link to={`/profile/Rian`}>
              <p className='slider-card-name'>Full</p>
              </Link>
              <p className='slider-card-price'>800<span> $USD</span></p>
            </div>
        </Slider>
      </div>
    </div>
  )
}

export default Header
