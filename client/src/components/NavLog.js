import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { signInWithGoogle } from "../service/firebase";

import '../App.css';

const NavLog = () => {
    var userLog = JSON.parse(localStorage.getItem('user').logNombre)
    const [user, setUser] = useState(null);
    const [search,setSearch] = useState();
    const handleLogout = () => setUser( null );

    function buscar(e){
        if (e.key === 'Enter') {
            
       
        const  requestOptions = {
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
            })
        }
    }


    
    return (
        <div className="headerNav" class="headerNav">
            <nav className="navbar"> 
                <div className="navbar-sing"> 
                    <input type="text" placeholder="Search" className="search" onChange={(e)=>setSearch(e.target.value)}/>
                    
                    <Link to={"/logOut"} className="buttonLog" onClick={handleLogout} >Log Out </Link>
                    
                     
                </div>
                <div className="navbar-brand"> 
           
                    <button className="buttonHome"><Link to={"/home"} className="buttonHome" >Home</Link></button>
                    <button className="buttonCom"><Link to={"/community"}className="buttonCom">Community</Link></button>
                    <button className="buttonCom"><Link to={"/UPage"}className="buttonCom">U Page</Link></button>
                </div>
            </nav>
        
        </div>
    )
    }

    export default NavLog;