import React from 'react';
import LogoRimac from '../assets/static/Logo RIMAC.png'
import { MdPhone } from "react-icons/md";
import '../assets/styles/components/Navbar.scss'

interface NavbarProps{ 
  className:string
 }

const Navbar = ({
  className,
}: NavbarProps) => { 
  return (
    <div className={`navbar__${className}`}>
      <div className='navbar__logo'>
        <img src={LogoRimac} alt= 'rimaclogo' />
      </div>
      <div className='navbar__contact'>     
        <div className='navbar__contact--doubt'>
         <p>Tienes alguna duda?</p>
          </div>         
        <div className='navbar__contact--phone'>
          <MdPhone />
          <p className='navbar__contact--phone--number'>(01)411 6001</p>
        </div> 
      </div>
    </div>
    
  );
};

export default Navbar;