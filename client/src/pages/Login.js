
import biciReg from '../assets/img/biciReg.png';
import React, { useState, useEffect } from "react";
import '../App.css';

const Login = () => {
    const [emailSend, setDataToSend] = useState("");
    const [passSend, setDataToSend1] = useState("");
    const [latitude, setLatitudeSend] = useState("");
    const [longitude, setLongitudeSend] = useState("");

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
            body: JSON.stringify({ email: emailSend, password: passSend }),

        };

        fetch("login", requestOptions)
            .then((response) => response.json())
            .then((res) => {
                setInterval(() => {
                    if (res.message === true) {
                        localStorage.setItem('user', JSON.stringify({
                            logId: res.id,
                            logNombre: res.nombre,
                            logEmail: res.email,
                            logUrlImg: res.urlImg,
                            logAbout: res.about,
                            longitude,
                            latitude,
                            logBike: res.bike,
                            logAnio: res.anio,


                        }));
                        window.location.assign("/UPage");
                    } else {
                        alert("Usuario o contraseña incorrectos")
                    }
                }
                    , 1000);
            });


    };


    return (
        <div className="container-Log">
            <div className="login">
                <div className="login-Text">
                    <h1>Explore the world to experience the beauty o nature</h1>
                    <p className="paLog">Acces the community of riders and motocyclists that is going to revolutionize the way to enjoy the world</p>
                </div>
                <div className='boinputsLog'>
                    <input type="text" onChange={(e) => setDataToSend(e.target.value)} placeholder="Email" className="buttonGoogle" required />
                    <input type="password" onChange={(e) => setDataToSend1(e.target.value)} placeholder="Password" className="buttonGoogle" required />
                    <div className='listaLog'>
                        <ul style={{
                            listStyle: 'none',
                            display: 'flex',
                            flexDirection: 'row',
                            flexFlow: 'row wrap',
                            flexWrap: 'wrap',
                            justifyContent: 'flex-start',
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
                <img className="loginImg" src={biciReg} />
            </div>
        </div>
    );
};

export default Login;