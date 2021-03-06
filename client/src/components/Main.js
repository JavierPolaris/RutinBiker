import React, { Component } from "react";
import { Routes, Route } from "react-router-dom"; //importamos las rutas de react-router-dom para el Routing
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import UPage from "../pages/UPage";
import Community from "../pages/Community";
import RecRute from "../pages/RecRute";
import PaginaUsuarios from "../pages/paginaUsuarios";
import PWRecover from "../pages/PWRecovery";
import PWRecoverReset from "../pages/PWRecoveryReset";




class Main extends Component {
  
    render() {
        return (
        <div>
            <Routes>
                <Route path="/pwrecover" element={<PWRecover />} />
                <Route path="/pwrecoverReset/:email/:token" element={<PWRecoverReset />} />
                <Route path="/home" exact element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/singUp" element={<Registro />} />
                <Route path="/UPage" element={<UPage />} />
                <Route path="/community" element={<Community />} />
                <Route path="/recRute" element={<RecRute />} />
                <Route path="/paginaUsuarios" element={<PaginaUsuarios />} />
                <Route path="*" element={<p>There's nothing here: 404!</p>} />
                
            </Routes>
        </div>
        );
    }
}
export default Main;


