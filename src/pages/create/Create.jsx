import './create.css'
import Image from '../../assets/Image.png'
const Create = () => {

  return (
    <div className='create section__padding'>
      <div className="create-container">
        <h1>Crear tus Items</h1>
        <p className='upload-file'>Sube tu Avatar</p>
        <div className="upload-img-show">
            <img src={Image} alt="banner" />
            <p>A3M - Avatar</p>
        </div>
        <form className='writeForm' autoComplete='off'>
          
          <div className="formGroup">
            <label>Subir</label>
            <input type="file" className='custom-file-input'
          />
          </div>
          <div className="formGroup">
            <label>Nombre</label>
            <input type="text" placeholder='Item Name' autoFocus={true} />
          </div>
          <div className="formGroup">
            <label>Descripcion</label>
            <textarea type="text" rows={4}
          placeholder='Decription of your item' 
          ></textarea>
          </div>
          <div className="formGroup">
            <label>Precio</label>
            <div className="twoForm">
              <input type="text" placeholder='Price'  />
              <select>
                <option value="ETH">USD</option>
                <option value="BTC">EUR</option>
                <option value="LTC">LIB</option>
              </select>
            </div>
          </div>
          <div className="formGroup">
            <label>Categorias</label>
            <select >
               <option>Maquillaje</option>
               <option>Belleza</option>
               <option>Comidas</option>
               <option>Postres</option>
               <option>Deportes</option>
               <option>Entretenimiento</option>
            </select>
          </div>
          <div className="formGroup">
            <label>Available Items</label>
            <input type="text" placeholder='No of Items'/>
          </div>
          <button className='writeButton'>Crear Items</button>
        </form>
      </div>
    </div>
   
  )
};

export default Create;
