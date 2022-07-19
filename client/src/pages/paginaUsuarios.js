import React, { useState, useEffect } from "react";
import '../App.css';
import MapView from "../components/MapView";
import Post from "../components/postFanPage/postFanPage";
import Logo from '../assets/img/BikerRutin.png'

const UsuarioFanPage = () => {
    const [user, setUser] = useState();
    const [userImg, setUserImg] = useState();
    const [userName, setUserName] = useState();
    const [userAbout, setUserAbout] = useState();

    const idUser = localStorage.getItem("idUser");
    console.log(idUser);
    
    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                idUser: idUser
            }),
        };
        fetch('userFanpage', requestOptions)
            .then(res => res.json())
            .then((res) => {
                console.log(res.user.urlImg);
                setUser(res.user);
                setUserImg(res.user.urlImg);
                setUserName(res.user.nombre);
                setUserAbout(res.user.about);

            }
            )
    }, []);

console.log(user);
   
    return (
        <>
        <div className="MapaFanPage">
            <MapView />
            
            <div className="post-fanpage">
            
            <div className="imgFanPageBox">
                <h1 style={{
                    color: 'white',
                    position: 'relative',
                    top: '33px',

                }} >{userName}<br></br>{userAbout}</h1>
                
                <img  className="imgFanPage" src={userImg} alt=""/>
                </div>

            <Post />
            </div>
        </div>
        
        </>
    )

}

export default UsuarioFanPage;