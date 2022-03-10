import React from 'react';
import './profile.css'
import profile_banner from '../../assets/profile_banner.png'
import profile_pic from '../../assets/profile.png'
import Bids from '../../components/bids/Bids'

const Profile = () => {

  return (
    <div className='profile section__padding'>
      <div className="profile-top">
        <div className="profile-banner">
          <img src={profile_banner} alt="banner" />
        </div>
        <div className="profile-pic">
            <img src={profile_pic} alt="profile" />
            <h3>A3M.SMM</h3>
        </div>
      </div>
      <div className="profile-bottom">
        <div className="profile-bottom-input">
          <input type="text" placeholder='Buscar Servicio' />
          <select>
            <option>Recientes</option>
            <option>Populares</option>
            <option>Menor Precio</option>
            <option>Mayor Precio</option>
          </select>
        </div>
        <Bids   title="Item" />
      </div>
    </div>
  );
};

export default Profile;
