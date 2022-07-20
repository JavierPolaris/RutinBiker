import React from "react";
import { Popup } from "react-leaflet";

const MarkerPopup = (props) => { //utilizacion de la clase Popup de react-leaflet para poder mostrar un popup en el mapa
  const { name } = props.data;
  return (
    <Popup>
      <div>{name}</div>
    </Popup>
  );
};

export default MarkerPopup;
