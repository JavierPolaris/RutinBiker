import React, { useState, useEffect } from "react";
import { Form, Button } from 'react-bootstrap';
import biciReg from '../assets/img/biciReg.png';


function PWRecovery() {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const sendEmail = () => {
        //let respuesta = { email: email }
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email }),
        };

        fetch("pwrecover", requestOptions)
            .then((res) => res.json())
            .then((res) => {
                setMessage(res.message);



                // setInterval(() => {
                //     window.location.assign("/");
                //   }
                //     , 1000);


            });





    }


    return (
        <div class="password ">
            <h1 class="aviso" >{message ? message : "Recuperar contraseña"}</h1>

            <div className="container-Log">
                <div className="login">
                    <div className='boinputsLog2'>
                        <Form.Label>Introduce tu email</Form.Label>
                        <Form.Control type="text" onChange={(e) => setEmail(e.target.value)} />

                        <Button variant="primary" onClick={() => sendEmail()}>
                            Recuperar contraseña
                        </Button>
                    </div>
                </div>
                <div className="login-Img2">
                    <img className="loginImg" src={biciReg} />
                </div>
            </div>

        </div>
    );
}

export default PWRecovery;