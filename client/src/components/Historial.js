import React, { useEffect, useState } from 'react'
import flecha from '../assets/img/flechaHisto.png'
import { Card } from 'react-bootstrap';

import '../App.css';


const Historial = () => {
    
    
    
    const [UserHistorial, setHistorial] = useState([]);
    
    
    
    
    useEffect(() => {
        
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    logId: JSON.parse(localStorage.getItem('user')).logId
                }),
            };
        
            fetch('historial', requestOptions)
                .then(res => res.json())
                .then((res) => {
                    setHistorial(res.rutasUser);
                    console.log(res.rutasUser);
                    
                }
                )
                .catch(err => {
                    console.log(err);
                }
                )
        
    }, [])
    
 


console.log(UserHistorial);
    return (
      <div className="historial">

        {UserHistorial ? UserHistorial.map((historial,i) => {

              console.log(historial);

 
                return (
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
                                <Card.Img src={flecha} className="flecha" />
                                <h3 className='kmRut'>{historial.km}</h3>


                            </Card>
                        </Card>
                    </Card>
                </Card>
                ) 
              }): <div className='noRutes'>
                <h1>Create new routes...</h1>
                <h1>Conquer your dreams!!</h1>
                </div>}  
          </div>      


        
    )
}

export default Historial;