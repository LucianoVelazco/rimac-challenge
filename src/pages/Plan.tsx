import React from 'react';
import { useHistory } from 'react-router-dom'
import InactiveIcon from '../assets/static/Icon_dissable.png'
import ActiveIcon  from '../assets/static/Icon_done.png'
import GoBack from '../assets/static/icon_Back.png'
import Guy from '../assets/static/Guy.png'
import Button from '../common/Button';
import '../assets/styles/pages/Plan.scss'


const Plan = () => {
  const history = useHistory()
  function irathanks () {
    history.push('/thanks')
  }
  return (
        <div className='plan-box'>
          <div className='plan-box__left'>
            <div className='plan-box__left--steps'>
            <img src={InactiveIcon} alt='inactive' />
            <p className='plan-box__left--steps--data1'>Datos</p>
            </div>
            <div className='plan-box__left--steps'>
            <img src={ActiveIcon} alt='active' />
              <p className='plan-box__left--steps--data2'>Arma tu plan</p>
            </div>
          </div>

        <div className='plan-box__center'>
            <div className='plan-box__center--goback'>
              <img src={GoBack} alt='goback' />
              <p className='plan-box__center--goback--turnback'>VOLVER</p>
            </div>
            <div className='plan-box__center--title'>
              <p className='plan-box__center--title--main'>Hola, <span>¡Juan!</span> </p>
              <p className='plan-box__center--title--secon'>Conoce las coberturas para tu plan</p>
            </div>
            <div className='plan-box__center--container'>
              <div>
              <p>placa:C2U-114</p>
              <h3>Marca y modelo</h3>
              </div>
              <div>
                <img src={Guy} alt='guy' />
              </div>

              
            </div>
          <div>
            <div>
            <p>Indica la suma asegurada</p>
              <div>
                <p>MIN $12,500</p>
                <p>MAX $16,500</p>
              </div>
          </div>
          <div>
            Monto
          </div>
          </div>
          <div>
            <h2>
              Agregar o quitar coverturas
            </h2>
          </div>
        </div>

        <div className='plan-box__right'>
          <div>
          <p>Monto</p>
          <h3>Suma</h3>
          <p>Mensuales</p>  
        </div>
        <div> 
            <h4>El precio incluye </h4>
              <p>Llanta de repuesto</p>
              <p>Llanta de repuesto</p>
              <p>Llanta de repuesto</p>
            <Button  onClickProp={irathanks} className='normal'>
              LO QUIERO
            </Button>
            </div>
        </div>
    </div>
    
  );
};

export default Plan;