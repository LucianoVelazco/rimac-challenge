import React, { useEffect } from 'react';
import Navbar  from '../components/Navbar'
/* import { Link } from 'react-router-dom' */
import Formulario from '../components/FormHome'
import axios from 'axios'
import Girl from '../assets/static/Carnandgirl.png'
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/actions';
const Home = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: {user: any}) => state.user)
  // const {handleUser,user}:any  = useUserContext()
   const API = 'https://jsonplaceholder.typicode.com/posts'
   
  useEffect(() => {
    let data ={
      "name": "Juan",
      "email": "joel.sanchez@gmail.com"
    };
    let config = {
      method: 'post',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    axios.post(API, config)
    .then(function (response:any) {
      // handleUser(response.data.data)
      dispatch(actions.setUser(response.data.data))
    })
    .catch(function (error:any) {
      console.log(error);
    }); 
  }, [dispatch])
  return (
    <div>
       <Navbar className='main' />
     <div className='container'>
      <div className='left__container'>
        <img src={Girl} alt= 'camnadgirl' className='left__container--image'/ >
        <div>
          <p className='left__container--p'>¡Nuevo!</p>
          <h2 className='left__container--title'><span>Seguro</span> Vehicular Tracking</h2>
          <p className='left__container--subtitle'>Cuentanos donde haras el seguimiento del seguro</p>
          <p className='left__container--copyright'>2021 RIMAC Seguros y Reaseguros</p>
        </div>
      </div>
      <div className='right__container'>
        <h2 className='right__container--title'>Déjanos tus datos</h2>
        <Formulario />
      </div>
    </div>
    </div>
  );
};

export default Home;