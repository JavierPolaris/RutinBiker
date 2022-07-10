import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, useMap ,Marker, Popup} from 'react-leaflet'
import { renderMatches } from 'react-router-dom';

import '../App.css';

const MapCommunity = () => {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [zoom, setZoom] = useState(10);
    const [markers, setMarkers] = useState([]);
    const [marker, setMarker] = useState([]);
    const [popup, setPopup] = useState([]);
    const [popup2, setPopup2] = useState([]);


    useEffect(() => {
        navigator.geolocation.watchPosition(function (position, error) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            setLatitude(latitude)
            setLongitude(longitude)
        }
        );
    }
    , []);
    const handleClick = (e) => {
        setMarkers([...markers, { lat: e.latlng.lat, lng: e.latlng.lng }])
    }
    const handleClick2 = (e) => {
        setMarker([...marker, { lat: e.latlng.lat, lng: e.latlng.lng }])
    }
    const handleClick3 = (e) => {
        setPopup([...popup, { lat: e.latlng.lat, lng: e.latlng.lng }])
    }
    const handleClick4 = (e) => {
        setPopup2([...popup2, { lat: e.latlng.lat, lng: e.latlng.lng }])
    }
    const handleZoom = (e) => {
        setZoom(e.target.value)
    }
  

    return (
        <div className="map-container">
           <MapContainer center={[latitude, longitude]} zoom={13} >
  
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
   />
</MapContainer>
        </div>
    )






}
export default MapCommunity;