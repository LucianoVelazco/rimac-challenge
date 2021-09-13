import React from 'react';
import { useHistory } from 'react-router-dom'
import Navbar  from '../components/Navbar'
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
    <div>
      <Navbar  className='second'/>
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
              <p className='plan-box__center--title--main'>¡Hola, <span>Juan!</span> </p>
              <p className='plan-box__center--title--secon'>Conoce las coberturas para tu plan</p>
            </div>
            <div className='plan-box__center--container'>
              <div>
                <p className='plan-box__center--container--license'>Placa:FCW-522</p>
                <h3 className='plan-box__center--container--model'>Posrche 911 Carrera Turbo S</h3>
              </div>
              <div >
                <img className='plan-box__center--container--guy' src={Guy} alt='guy' />
              </div>
            </div>
            <div className='plan-box__center--insurance'>
              <div>
               <p className='plan-box__center--insurance--amount'>Indica la suma asegurada</p>
                <div className='plan-box__center--insurance--minmax'>
                  <p className='plan-box__center--insurance--money'>MIN $12,500</p>
                  <p className='plan-box__center--insurance--money'>MAX $16,500</p>
                </div>
              </div>
              <div className='plan-box__center--insurance--add'>
                <p>Monto</p>
              </div>
            </div>
          <div className='plan-box__center--coverages'>
            <h2 className='plan-box__center--coverages--title'>
              Agrega o quita coverturas
            </h2>
            <div className='plan-box__center--coverages--choices'>
              <p className='plan-box__center--coverages--choices--elementone'>Protege a tu auto</p>
              <p className='plan-box__center--coverages--choices--elementtwo'>Protege a los que te rodean</p>
              <p className='plan-box__center--coverages--choices--elementtwo'>Mejora tu plan</p>
            </div>
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
    </div>
        
    
  );
};

export default Plan;