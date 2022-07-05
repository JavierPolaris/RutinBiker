
import fondoImg from '../assets/img/backgroundLog.png'
import Logo from '../assets/img/BikerRutin.png'
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../App.css';




const UPage = () => {
  var user = JSON.parse(localStorage.getItem('user'));
  console.log(user.logNombre);

  return (

    <div style={{
      backgroundImage: `url(${fondoImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
     
     
    }} className="home">

      {/* <img className="home-img" src={fondoImg}></img> */}
      <div className="home-text">
        <div className="home-text-text">
          <h1>Hello, {user.logNombre}</h1>

          <img  src={user.logUrlImg} className="avatar" />
          <img  src={ Logo } className="bikerRutin" />
          <button className="buttonRecRut">Grabar Ruta</button>
        </div>

        <div className="home-cont">
          <div className="home-text-text1">
            <div className="home-cont-text">
              <h1 style={{ color: 'red'}}>User</h1>
              <h1 style={{ color: 'grey', marginRight: '37px' }}>Name:</h1>
              <h1 style={{ fontSize: '20px'}}>{user.logNombre}</h1>
            </div>
            <div className="home-cont-text">
              <h1 style={{ color: 'red', marginRight: '0px' }}>User</h1>
              <h1 style={{ color: 'grey', marginRight: '37px' }}>Email:</h1>
              <h1 style={{ fontSize: '20px' }}>{user.logEmail}</h1>
            </div>
            <div className="home-cont-text">
              <h1 style={{ color: 'red', marginRight: '0px' }}>Lati</h1>
              <h1 style={{ color: 'grey', marginRight: '37px' }}>tud:</h1>
              <h1 style={{ fontSize: '20px' }}>{user.logLat}</h1>
            </div>
            <div className="home-cont-text">
              <h1 style={{ color: 'red', marginRight: '0px' }}>Longi</h1>
              <h1 style={{ color: 'grey', marginRight: '37px' }}>tud:</h1>
              <h1 style={{ fontSize: '20px' }}>{user.logLong}</h1>
            </div>
            <div className="home-cont-text">
              <h1 style={{ color: 'red', marginRight: '0px' }}>About</h1>
              <h1 style={{ color: 'grey', marginRight: '37px' }}>U:</h1>
              <h1 style={{ fontSize: '20px' }}>{user.logAbout}</h1>
            </div>
           
          </div>
        </div>
      </div>

    </div>
  );


}

export default UPage;  