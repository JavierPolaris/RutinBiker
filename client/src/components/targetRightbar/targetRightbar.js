import "./targetRightbar.css";
import { useState, useEffect } from "react";
import {Card,Button} from 'react-bootstrap';
import React from "react";

const Target = () => {
  const [target, setTarget] = useState([]);

  useEffect(() => {
    const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              logId: "prueba"
            }),
      
          };
      
      
          fetch('crearU', requestOptions)
            .then(res => res.json())
            .then((res) => {
               console.log("Esto es el CLG "+res.user);
              setTarget(res.user);
              
             
            }
            )
      
  }, []);
  const cogerId = (e) => {
    console.log(e);
    localStorage.setItem("idUser", e);
    setTimeout(() => {
      window.location.href = "/paginaUsuarios";;
    } , 300);
  }

  console.log(target);
  return (
   
        <div className="rightbarFollowings">
          {target.map((user) => (
            // console.log(user),
            <Button  className="cartasFolower" style={{"background": "none",
            "border": "none",
            "marginBottom":"15px",
            "marginTop":"10px",
            "textAlign":"center"}} 
            key={user.id} value={user.id} onClick={(e)=>cogerId(user.id)}>
          
              <Card.Img variant="top" className="fotosUser" src={user.urlImg} />
              <Card.Body>
                <Card.Title>{user.nombre}</Card.Title>
               
              </Card.Body>
            </Button>
          ))}
        </div>
     
  );
}
export default Target;

