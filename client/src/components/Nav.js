import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { signInWithGoogle } from "../service/firebase";

import '../App.css';

const Nav = () => {
    const [search, setSearch] = useState();
    const [mensaje, setMensaje] = useState();
    const [idUser, setIdUser] = useState(null);
    const [aviso, setAviso] = useState();
    function LogOut() {
        localStorage.clear();

        window.location.assign("/");
    }

    function buscar(e) {
        if (e.code === 'Enter') {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userName: search,
                }),
            };
            fetch('searchUser', requestOptions)
                .then(res => res.json())
                .then((res) => {
                    console.log(res.message);
                    setIdUser(res.user.id);
                    setMensaje(res.message);

                })
        }
        if(mensaje === true){
            localStorage.setItem("idUser", idUser);
            window.location.assign("/paginaUsuarios");
        }else{
            setInterval (() => {
              setAviso("Usuario no encontrado");
            } , 1000);
        }
    }

console.log(aviso)
    return (

        <div className="headerNav" >
            {localStorage.getItem('user') ?
                <nav class="navbar">
                    <div class="navbar-sing">
                    <p style={{fontSize:"10px"}}>{aviso}</p>

                        <input type="text" placeholder="Search" className="search" onChange={(e) => setSearch(e.target.value)} onKeyPress={buscar} />
                        <imput type="button" onClick={() => LogOut()} className="buttonLogOut">Log Out</imput>

                    </div>
                    <div class="navbar-brand">
                        <button className="buttonHome"><Link to={"/home"} className="buttonHome" >Home</Link></button>
                        <button className="buttonCom"><Link to={"/community"} className="buttonCom">Community</Link></button>
                        <button className="buttonUpage" style={{ marginLeft: "58px" }} ><Link to={"/UPage"} className="buttonUpage" >Upage</Link></button>
                    </div>
                </nav> : <nav class="navbar">
                    <div class="navbar-sing">
                       
                        <Link to={"/login"} className="buttonLog">Log in </Link>
                        <Link to={"/singUp"} className="buttonReg">Sing up</Link>
                    </div>
                    <div class="navbar-brand">
                        <button className="buttonHome"><Link to={"/home"} className="buttonHome" >Home</Link></button>
                    </div>
                </nav>}

        </div>
    )
}

export default Nav;