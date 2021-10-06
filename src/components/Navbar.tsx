import React from 'react';
import LogoRimac from '../assets/static/Logo RIMAC.png'
import { MdPhone } from "react-icons/md";
import '../assets/styles/components/Navbar.scss'
import { useMediaQuery } from 'react-responsive'

interface NavbarProps{ 
  className:string
 }

const Navbar = ({
  className,
}: NavbarProps) => { 
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 800px)'
  })
  const isResponsive = useMediaQuery({ query: '(max-width: 800px)' }) 
  
  return (
    <div className={`navbar__${className}`}>
      <div className='navbar__logo'>
        <img src={LogoRimac} alt= 'rimaclogo' />
      </div>
      <div className='navbar__contact'> 
      {
          isDesktopOrLaptop &&
          <div className='navbar__contact--desktop'>
          <div className='navbar__contact--doubt'> 
          <div className='navbar__contact--doubt--items'>
          <p>Tienes alguna duda?</p>
           </div>         
         <div className='navbar__contact--phone'>
           <MdPhone />
           <p className='navbar__contact--phone--number'>(01)411 6001</p>
         </div> 
          </div>
         </div> 
      }    
      {
        isResponsive &&      
         <div className='navbar__contact--phone--responsive'>
         <MdPhone />
         <p className='navbar__contact--phone--number'>Llamanos</p>
         </div> 
       
      }
      </div>
    </div>
    
  );
};

export default Navbar;