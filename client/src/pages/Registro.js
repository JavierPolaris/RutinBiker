
import biciReg from '../assets/img/motoReg.png';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../App.css';

const Registro = () => {
    const [message, setMessage] = useState("");
    const [emailSend, setEmailSend] = useState("");
    const [passSend, setPassSend] = useState("");
    const [passConfSend, setPassConfSend] = useState("");
    const [username, setUserSend] = useState("");
    const [urlImg, setUrlImgSend] = useState("");
    const [about, setAboutSend] = useState("");
    const [latitude, setLatitudeSend] = useState("");
    const [longitude, setLongitudeSend] = useState("");
    const [bike, setBikeSend] = useState("");
    const [anio, setAnioSend] = useState("");


    navigator.geolocation.watchPosition(function (position, error) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        setLatitudeSend(latitude)
        setLongitudeSend(longitude)
    }
    );
    const sendData = () => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: emailSend,
                password: passSend,
                passConfSend: passConfSend,
                username: username,
                urlImg: urlImg,
                about: about,
                latitud: latitude,
                longitud: longitude,
                bike: bike,
                anio: anio 
            }),

        };

        fetch("registro", requestOptions)
            .then((response) => response.json())
            .then((res) => {
                setInterval(() => {
                    if (res.message === true) {
                        localStorage.setItem('user', JSON.stringify({
                            logNombre: res.nombre,
                            logEmail: res.email,
                            logUrlImg: res.urlImg,
                            logAbout: res.about,
                            latitud: res.latitud,
                            longitud: res.longitud,
                            logBike: res.bike,
                            logAnio: res.anio,


                        }));
                        window.location.assign("/UPage");
                    } else {
                        alert("Usuario o contraseña incorrectos")
                    }
                }
                    , 2000);

            });


    };

    return (
        <div className="container-Log">

            <div className="registro">
                <div className="register-Text">
                    <h1>Welcome to our community  </h1>
                    <p className="paReg">Already have an ccount? <Link to={"/home"} className="buttonHome" >Log in</Link></p>
                </div>
                <div className='boinputsReg'>
                    <input type="text" onChange={(e) => setUserSend(e.target.value)} placeholder="Username" className="buttonGoogle" required />
                    <input type="text" onChange={(e) => setUrlImgSend(e.target.value)} placeholder="Añade URL para imagen de usuario" className="buttonGoogle" required />
                    <input type="text" onChange={(e) => setAboutSend(e.target.value)} placeholder="Cuentanos que te motiva" className="buttonGoogle" required />
                    <input type="text" onChange={(e) => setEmailSend(e.target.value)} placeholder="Email" className="buttonGoogle" required />
                    <input type="text" onChange={(e) => setBikeSend(e.target.value)} placeholder="Introduce el modelo de moto" className="buttonGoogle" required />
                    <input type="text" onChange={(e) => setAnioSend(e.target.value)} placeholder="Año del modelo" className="buttonGoogle" required />
                    <input type="password" onChange={(e) => setPassSend(e.target.value)} placeholder="Password" className="buttonGoogle" required />
                    <input type="password" onChange={(e) => setPassConfSend(e.target.value)} placeholder="Confirm Password" className="buttonGoogle" required />


                    <div className='listaReg'>
                        <ul style={{
                            listStyle: 'none',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gridGap: '0px',

                            justifyContent: 'flex-start',
                            justifyItems: 'left',
                            color: 'grey',
                            fontFamily: 'poppins',
                            fontSize: '12px',
                        }}>
                            <li className='liStile'> Use 8 or more characters</li>
                            <li className='liStile'> One Uppercase character</li>
                            <li className='liStile'> One lowercase character</li>
                            <li className='liStile'> One special character</li>
                            <li className='liStile'> One number</li>

                        </ul>
                    </div>
                </div>
                <div className="login-Text">

                    <p className="paLog1">By signing up, you agree to the Terms of Service and Privacy
                        Policy, including cookie use.</p>
                </div>
                <button className="buttonSing" onClick={() => sendData()}>Log in</button>

            </div>
            <div className="login-Img">
                <img className="loginImg1" src={biciReg} />
            </div>
        </div>
    );
};

export default Registro;