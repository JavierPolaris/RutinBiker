import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';

import '../App.css';


const Popular = () => {



    const [RutaPopular, setPopular] = useState([]);
    // const [UserPopular, setPopularUser] = useState([]);

    useEffect(() => {

        fetch('popular')
            .then(res => res.json())
            .then((res) => {
                setPopular(res.PopularUser);
                // setPopularUser(res.RutasPopularesUSer)
            }
            )
    }, [])




    // console.log(UserPopular);
    console.log(RutaPopular);
    return (
        <div className="fivePopular">

            
             
            {RutaPopular ? RutaPopular.map((popular, i) => {
                return (
                    <Card className="home-Popular-Block">
                        <Card className="home-Popular-text">
                            <Card className="home-Popular-text2">
                                <h3 className='newPopu'>NEW</h3>
                                <h3 className='newPopuRut'>TRACK</h3>
                            </Card>
                            <img src={popular.urlImg} className="imagenTop5" />
                            <Card className="home-Popular-baner ">
                               
                                <Card className="home-Popular-banerRut">
                                    <h1 className='nameRut'>{popular.nombreUser}</h1>
                                    <h2 className='locationRut'>{popular.provincia}</h2>
                                </Card>
                                <Card className="home-historial-banerRutFlecha">
                                    <h3 className='kmRut'>{popular.km}</h3>
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