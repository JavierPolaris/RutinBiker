import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { signInWithGoogle } from "../service/firebase";

import '../App.css';

const NavLog = () => {
    var userLog = JSON.parse(localStorage.getItem('user').logNombre)
    const [user, setUser] = useState(null);
    const handleLogout = () => setUser( null );


    
    return (
        <div className="headerNav" class="headerNav">
            <nav class="navbar"> 
                <div class="navbar-sing"> 
                    <input type="text" placeholder="Search" className="search" />
                    <Link to={"/logOut"} className="buttonLog" onClick={handleLogout}>Log Out </Link>
                    
                </div>
                <div class="navbar-brand"> 
                    <button className="buttonHome"><Link to={"/home"} className="buttonHome" >Home</Link></button>
                    <button className="buttonCom"><Link to={"/community"}className="buttonCom">Community</Link></button>
                    <button className="buttonCom"><Link to={"/UPage"}className="buttonCom">U Page</Link></button>
                </div>
            </nav>
        
        </div>
    )
    }

    export default NavLog;