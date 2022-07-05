import React from 'react';
import { Link } from 'react-router-dom';
// import { signInWithGoogle } from "../service/firebase";

import '../App.css';

const Nav = () => {
    return (
        <div className="headerNav" class="headerNav">
            <nav class="navbar"> 
                <div class="navbar-sing"> 
                    <input type="text" placeholder="Search" className="search" />
                    <Link to={"/login"} className="buttonLog">Log in </Link>
                    <Link to={"/singUp"} className="buttonReg">Sing up</Link>
                </div>
                <div class="navbar-brand"> 
                    <button className="buttonHome"><Link to={"/home"} className="buttonHome" >Home</Link></button>
                    <button className="buttonCom"><Link to={"/community"}className="buttonCom">Community</Link></button>
                </div>
            </nav>
        
        </div>
    )
    }

    export default Nav;