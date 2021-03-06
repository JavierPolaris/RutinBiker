
import fondoImg from '../assets/img/backgroundLog.png'
import Logo from '../assets/img/BikerRutin.png'
import Historial from '../components/Historial'
import Rightbar from "../components/rightbar/Rightbar"
import Feed from "../components/feed/Feed";
import React, { useState, useEffect } from "react";

import '../App.css';




const UPage = () => {
  var user = JSON.parse(localStorage.getItem('user'));
  // console.log(user.logNombre);

  function ocultarInfo() {
    // document.querySelector(".home-text-text1").style.display = "none";
    // document.querySelector(".cierreInfo").style.display = "none";
    document.querySelector(".home-cont").style.display = "none";
  }
  function mostrarInfo() {
    // document.querySelector(".home-text-text1").style.display = "block";
    // document.querySelector(".cierreInfo").style.display = "block";
    document.querySelector(".home-cont").style.display = "block";
  }
  function addNweImg(){
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        usermail: JSON.parse(localStorage.getItem('user')).logEmail,
        urlImg: document.querySelector(".urlImg").value,
      }),
    };
    fetch('addImg', requestOptions)
      .then(res => res.json())
      .then((res) => {
        console.log(res.user)
        let dataStorage = JSON.parse(localStorage.getItem("user"));
        console.log(dataStorage)
        dataStorage.logUrlImg = res.user.urlImg;
        console.log(dataStorage)
        localStorage.setItem("user", JSON.stringify(dataStorage));
        setInterval(() => { window.location.assign("/UPage") }, 300);

      }
      )
  }


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

          <img src={user.logUrlImg} className="avatar" />
          <div style={{ display: "flex" }}>
          <input type="text" className="urlImg" placeholder="URL de tu imagen" />
          <button className="btn-upload" onClick={() => addNweImg() }>Subir</button>
          </div>
          <img src={Logo} className="bikerRutin" />
          <div className="home-historial">
            <h1 className='tusRutas'>Tus rutas:</h1>
            <div>

              {<Historial />}

            </div>
          </div>
          {/* <button className="buttonRecRut">Grabar Ruta</button> */}
        </div>
        <div className="home-Right">

          <div className="home-cont" style={{
            display: "none",
          }}>
            <h1 className='cierreInfo' onClick={() => ocultarInfo()} style={{
              display: "flex"
            }}>X</h1>
            <div className="home-text-text1">
              <div className="home-cont-text">
                <h1 style={{ color: 'red' }}>User</h1>
                <h1 style={{ color: 'grey', marginRight: '37px' }}>Name:</h1>
                <h1 style={{ fontSize: '20px' }}>{user.logNombre}</h1>
              </div>
              <div className="home-cont-text">
                <h1 style={{ color: 'red', marginRight: '0px' }}>User</h1>
                <h1 style={{ color: 'grey', marginRight: '37px' }}>Email:</h1>
                <h1 style={{ fontSize: '20px' }}>{user.logEmail}</h1>
              </div>
              <div className="home-cont-text">
                <h1 style={{ color: 'red', marginRight: '0px' }}>Lati</h1>
                <h1 style={{ color: 'grey', marginRight: '37px' }}>tud:</h1>
                <h1 style={{ fontSize: '20px' }}>{user.latitud}</h1>
              </div>
              <div className="home-cont-text">
                <h1 style={{ color: 'red', marginRight: '0px' }}>Longi</h1>
                <h1 style={{ color: 'grey', marginRight: '37px' }}>tud:</h1>
                <h1 style={{ fontSize: '20px' }}>{user.longitud}</h1>
              </div>
              <div className="home-cont-text">
                <h1 style={{ color: 'red', marginRight: '0px' }}>About</h1>
                <h1 style={{ color: 'grey', marginRight: '37px' }}>U:</h1>
                <h1 style={{ fontSize: '20px' }}>{user.logAbout}</h1>
              </div>
              <div className="home-cont-text">
                <h1 style={{ color: 'red', marginRight: '0px' }}>B</h1>
                <h1 style={{ color: 'grey', marginRight: '37px' }}>ike:</h1>
                <h1 style={{ fontSize: '20px' }}>{user.logBike}</h1>
              </div>
              <div className="home-cont-text">
                <h1 style={{ color: 'red', marginRight: '0px' }}>A??o</h1>
                <h1 style={{ color: 'grey', marginRight: '37px' }}>Modelo:</h1>
                <h1 style={{ fontSize: '20px' }}>{user.logAnio}</h1>
              </div>

            </div>
          </div>

          <div className='info'>
            <button className="btnInfo" onClick={() => mostrarInfo()}>+Informaci??n</button>
            <div className="profileRightBottom">
              <Feed />
              <Rightbar profile />

            </div>
          </div>
        </div>
      </div>

    </div>
  );


}

export default UPage;  