import React, { useState } from 'react';
import Button from '../common/Button';
import '../assets/styles/components/FormHome.scss'
import { useHistory } from 'react-router-dom'
const items = [
  'DNI',
  'PASS',
  'CE'
]
const Formulario = () => {
  const [id, setId] = useState('')
  const [idError, setIdError] = useState('')
  const [phone, setPhone] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [license, setLicense] = useState('')
  const [licenseError, setLicenseError] = useState('')
  const [dropdown, setDropdown] = useState(false)
  const [type, setType] = useState(items[0])
  const history = useHistory()
  function iraplan () {
    history.push('/plan')
  }

  const onSubmit = (event:any) => {
    event.preventDefault();
    console.log('submit');
    console.log(id, phone);
    iraplan()
  }
  const handleId = (event:any) => {
    if (/^\d{8}$/.test(event.target.value)) {
      setIdError('')
    } else {
      setIdError('Id invalido')
    }
    setId(event.target.value)
  }
  const handlePhone = (event:any) => {
    if (/^\d{9}$/.test(event.target.value)){
      setPhoneError('')
    } else {
      setPhoneError('Numero invalido')
    }
    setPhone(event.target.value)
  }

  const handleLicense = (event:any) => {
    if (/([A-Z|a-z][-]*){3}([0-9][-]*){3}/.test(event.target.value)){
      setLicenseError('')
    } else {
      setLicenseError('Placa invalida')
    }
    setLicense(event?.target.value)
  }

  const handleValidation = () => {
    if (
      id !== '' &&
      phone !== '' &&
      idError === '' &&
      phoneError === '' &&
      license !== '' &&
      licenseError === ''
    ) {
      return false
    }
    return true
  }

  const handleType = (item:string) => {
    setType(item)
    setDropdown(!dropdown)
  }
  return (
    <div className='form'>
      <form onSubmit={onSubmit}>
        <div className='form__first-container'>
          <div className='form__first-container--dropwdown'>
            <p onClick={() =>setDropdown(!dropdown)}>{type}</p>
            {
              dropdown &&
              <div>
                {
                  items.map(item => (
                    <p className='form__first-container--dropwdown--float' onClick={()=> handleType(item)} key={item}>{item}</p>
                  ))
                }
              </div>
            }
          </div>
          <div className='form__first-container--input'>
            <input type='text' className="form__input" onChange={handleId} placeholder='Nro. de doc'/>
            <p style={{color: 'red'}}>{(idError !== '') && idError}</p>
          </div>
        </div>
        <input type='text' className="form__input" onChange={handlePhone} placeholder='Celular' />
        <p style={{color: 'red'}}>{phoneError !== '' && phoneError}</p>
        <input type='text' className="form__input" onChange={handleLicense} placeholder='Placa' />
        <p style={{color: 'red'}}>{licenseError !== '' && licenseError}</p>
        <div className='form__termsandconditions'>
        <input type='checkbox' className='form__termsandconditions--checkbox'/>
        <p className='form__termsandconditions--description'>Acepto Politica de Proteccion de Datos Personales y los Terminos y Condiciones</p>
          </div> 
          <Button  onClickProp={()=>{}} className='normal' disabled={handleValidation()}>
          COTIZALO
      </Button>
      </form>
    </div>
  );
};

export default Formulario;