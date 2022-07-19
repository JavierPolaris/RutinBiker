import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import Target from './targetCommunity/targetCommunity'

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
    // console.log(RutaPopular);
    return (
        <div className="fivePopular">
          <>
        
      
        <div className="rightbarFollowings">
         <Target />
          
        </div>
      </>
            

        </div> 



    )
}

export default Popular;