import React from 'react';
// import { signInWithGoogle } from "../service/firebase";
import '../App.css';

const Nav = () => {
    return (
        <div className="headerNav" class="headerNav">
            <nav class="navbar"> 
                <div class="navbar-sing"> 
                    <input type="text" placeholder="Search" className="search" />
                    <button className="buttonLog">Log in</button>
                    <button className="buttonReg">Sing up</button>
                </div>
                <div class="navbar-brand"> 
                    <button className="buttonHome">Home</button>
                    <button className="buttonCom">Community</button>
                </div>
            </nav>
        
        </div>
    )
    }

    export default Nav;