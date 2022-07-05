import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import UPage from "../pages/UPage";


class Main extends Component {
  
    render() {
        return (
        <div>
            <Routes>
                <Route path="/home" exact element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/singUp" element={<Registro />} />
                <Route path="/UPage" element={<UPage />} />
                
            </Routes>
        </div>
        );
    }
}
export default Main;


