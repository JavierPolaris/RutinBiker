import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import UPage from "../pages/UPage";
import Community from "../pages/Community";


class Main extends Component {
  
    render() {
        return (
        <div>
            <Routes>
                <Route path="/home" exact element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/singUp" element={<Registro />} />
                <Route path="/UPage" element={<UPage />} />
                <Route path="/community" element={<Community />} />
                <Route path="*" element={<p>There's nothing here: 404!</p>} />
                
            </Routes>
        </div>
        );
    }
}
export default Main;


