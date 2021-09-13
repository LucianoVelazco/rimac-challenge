import React from 'react';
import Navbar from '../components/Navbar'
import PleasantGuy from '../assets/static/Gracias.png'
import Button from '../common/Button'
import { useSelector, useDispatch } from 'react-redux';

const Thanks = () => {
  const user = useSelector((state: {user: any}) => state.user)
  return (
    <div>
     <Navbar className='second' />
       <div className='thank-container'>
      <div className='thank-container__left'>
       <img src={PleasantGuy} alt='' className='thank-container__left--img'/>
      </div>
      <div className='thank-container__right'>
      <h2 className='thank-container__right--title'>¡Te damos la bienvenida!<span> Cuenta con nosotros para proteger tu vehiculo</span></h2>
      <p className='thank-container__right--subtitle'>Enviaremos la confirmacion de compra de tu plan vehicular Tracking a tu correo:</p>
      <p>{user.email}</p>
      <Button onClickProp={() => {}} className='block'>
        COMO USAR MI SEGURO
      </Button>
      </div>
    </div>
    </div>
   
  );
};

export default Thanks;