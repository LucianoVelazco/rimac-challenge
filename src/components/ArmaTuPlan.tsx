import React, { useState } from 'react';
import '../assets/styles/components/ArmaTuPlan.scss'
import LlantaRobabda from '../assets/static/LlantaRobada.png'
import ChevronUp from '../assets/static/chevrotup.png'
import MinusIcon from '../assets/static/minus.png'
import ChevronDown from '../assets/static/chevrotdown.png'
import ChoqueVehicular from '../assets/static/ChoqueVehicular.png'
import VehiculoDestruido from '../assets/static/CocheDestruido.png'
import PlusIcon from '../assets/static/plus.png'

const ArmaTuPlan = () => {
  const [showIcon, setShowIcon] = useState(false)
  return (
    <div className='armatuplan-container'>
      <div className='armatuplan-container__option'>  
        <div>
          <img src={LlantaRobabda} alt='llantarobada' className='armatuplan-container__option--img'/>
        </div>
        <div className='armatuplan-container__option--description'>
          <div className='armatuplan-container__option--description--titleandicon'>
            <h3>Llanta Robada</h3>
            {
              !showIcon
              ?  <img src={ChevronUp} alt='checronup' onClick={() => setShowIcon(true)} />
              :  <img src={ChevronDown} alt='chevrondown' onClick={() => setShowIcon(false)}/>
            }
          </div>
          <div className='armatuplan-container__option--description--addremove'>
            <img src={MinusIcon} alt='minus' />
            <p>Quitar</p>
          </div>
          {
            showIcon &&
          <p className='armatuplan-container__option--description--text'>
          He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis
          y mucho más
          </p>
          }
        </div>
      </div>
      <div className='armatuplan-container__option'>
        <div>
          <img src={ChoqueVehicular} alt='choquevehicular' className='armatuplan-container__option--img'/>
        </div>
        <div className='armatuplan-container__option--description'>
          <div className='armatuplan-container__option--description--titleandicon'>
            <h3>Choque y/o pasarte la luz roja </h3>
            <img src={ChevronDown} alt='chevrondown'/>
          </div>
          <div className='armatuplan-container__option--description--addremove'>
            <img src={PlusIcon} alt='plus' />
            <p>Agregar</p>
          </div>
        </div>
      </div>
      <div className='armatuplan-container__option'>
        <div>
          <img src={VehiculoDestruido} alt='vehiculodestruido' className='armatuplan-container__option--img'/>
        </div>
        <div className='armatuplan-container__option--description'>
          <div className='armatuplan-container__option--description--titleandicon'>
          <h3>Atropello en la vía Evitamiento</h3>
          <img src={ChevronDown} alt='chevrondown'/>
          </div>
          <div className='armatuplan-container__option--description--addremove'>
            <img src={PlusIcon} alt='plus' />
            <p>Agregar</p>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default ArmaTuPlan;