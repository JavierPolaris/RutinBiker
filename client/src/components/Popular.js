import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';

import '../App.css';


const Popular = () => {



    const [UserPopular, setPopular] = useState([]);



    useEffect(() => {

        fetch('popular')
            .then(res => res.json())
            .then((res) => {
                setPopular(res.rutas);
            }
            )
    }, [])




    console.log(UserPopular);
    return (
        <div className="fivePopular">

            {UserPopular ? UserPopular.map((popular, i) => {
                return (
                    <Card className="home-Popular-Block">
                        <Card className="home-Popular-text">
                            <Card className="home-Popular-text2">
                                <h3 className='newPopu'>NEW</h3>
                                <h3 className='newPopuRut'>RUTA</h3>
                            </Card>
                            <Card className="home-historial-baner">
                                <Card className="home-historial-banerRut">
                                    <h1 className='nameRut'>{popular.nombre}</h1>
                                    <h2 className='locationRut'>{popular.nombre}</h2>
                                </Card>
                                <Card className="home-historial-banerRutFlecha">
                                   
                                    <h3 className='kmRut'>{popular.nombre}</h3>


                                </Card>
                            </Card>
                        </Card>
                    </Card>
                )
            }) : <h1>Loading...</h1>}

                    </div>



                )
            }

                        export default Popular;