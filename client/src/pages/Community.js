import React, { useState, useEffect } from "react";
import arbol from '../assets/img/arbol.png'
import fondoImg from '../assets/img/backgroundLog.png'
import Popular from '../components/Popular';
import MapCommunity from '../components/MapCommunity';
import '../App.css';

const Community = () => {

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
            <div className="mostPopular-conten">
            <div className="mostPopular" style={{
                backgroundImage: `url(${arbol})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundBlendMode: 'color-burn',
                mixBlendMode: 'overlay',
                height: "100%",
            }}>
                <h1 style={{
                    color: 'yellow',
                    }}>Last Rute</h1>
                <div className="mostPopular-line"></div>

                {<Popular />} 
            </div>
            </div>
            <div className="MapaCommunity">
                    {/* {<MapCommunity />} */}
            </div>

        </div>

    )


}

export default Community;