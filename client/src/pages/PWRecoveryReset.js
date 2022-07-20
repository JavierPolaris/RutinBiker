import React, { useState, useEffect } from "react";
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import biciReg from '../assets/img/biciReg.png';


function PWRecoveryReset() {
    const { email, token } = useParams();
    const [contrasena, setContrasena] = useState("")
    const [message, setMessage] = useState("")


    const cambiarContrasena = () => {

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email, contrasena: contrasena, token: token }),
        };

        fetch("pwrecoverReset", requestOptions)
            .then((res) => res.json())
            .then((res) => {
                setMessage(res.message);



                setInterval(() => {
                    window.location.assign("/login");
                }
                    , 1000);
            });


    }


    return (

        <div class="password">
            <h1 class="aviso" ><h1 className="Recupe">{message ? message : "Recuperar contraseña"}</h1></h1>
            <div className="container-Log">
                <div className="login">
                    <div className='boinputsLog1'>
                        <Form.Label>Introduce tu nueva contraseña</Form.Label>
                        <Form.Control type="password" onChange={(e) => setContrasena(e.target.value)} />

                        <Button variant="primary" onClick={() => cambiarContrasena()}>
                            Recuperar contraseña
                        </Button>
                    </div>

                </div>
                <div className="login-Im3">
                    <img className="loginImg" src={biciReg} />
                </div>
            </div>
        </div>
    );
}

export default PWRecoveryReset;