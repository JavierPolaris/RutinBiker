import React, { useEffect, useState } from 'react'
import flecha from '../assets/img/flechaHisto.png'
import { Card } from 'react-bootstrap';

import '../App.css';

const Historial = () => {

    const [historial, setHistorial] = useState([]);

    console.log(historial);

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            logId: JSON.parse(localStorage.getItem('user')).logId
        }),
    };

    useEffect(() => {
        fetch('historial', requestOptions)
            .then(res => res.json())
            .then((res) => {
                setHistorial(res);

            }
            )
    }, [])


    return (
        <div className="historial">
            {historial ?


                <Card className="home-historial-Block">
                    <Card className="home-historial-text">
                        <Card className="home-historial-Newtext">
                            <h1 style={{
                                color: 'Red',
                                fontFamily: 'poppins',
                                marginRight: '10px'

                            }}>NEW</h1>
                            <h1>RUTA</h1>
                        </Card>
                        <Card className="home-historial-text2">
                        <h3 className='kmRut'>{historial.fecha}</h3>
                            </Card>
                        <Card className="home-historial-baner">
                            <Card className="home-historial-banerRut">
                                <h1 className='nameRut'>{historial.nombre}</h1>
                                <h2 className='locationRut'>{historial.provincia}</h2>
                            </Card>
                            <Card className="home-historial-banerRutFlecha">
                                <img src={flecha} className="flecha" />
                                <h3 className='kmRut'>{historial.km}</h3>


                            </Card>
                        </Card>
                    </Card>
                </Card>
                : <div>Cargando...</div>}


        </div>
    )
}

export default Historial;