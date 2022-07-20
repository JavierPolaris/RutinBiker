import { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React from "react";
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import { MapGL, GeolocateControl, Marker, Popup } from "react-map-gl";


import marcadorRed from '../assets/img/ubicacion1.png'

mapboxgl.accessToken = "pk.eyJ1IjoiamF2aWVycG9sYXJpcyIsImEiOiJjbDVrd2c1M3kwOW4xM2tuemJ2ZGhsOTRpIn0.RFZT37w_mvgoT1KRk6Emqg";

class recMap extends React.Component {
   
    componentDidMount() {
        
       navigator.geolocation.getCurrentPosition((pos) => {
        this.setState({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
            zoom: 13,
        });
    }
    );
    
             
      
      
       
        // Creates new map instance
        const map = new mapboxgl.Map({
          container: this.mapWrapper,
          style: 'mapbox://styles/mapbox/streets-v10',
          center: [this.state.longitude, this.state.latitude],
          zoom: 12
        });
        map.on('mousemove', function (e) {
            document.getElementById('coordenadas').innerHTML =
                JSON.stringify(e.lngLat);
        });
        map.addControl(new mapboxgl.NavigationControl());
    
        map.addControl(new mapboxgl.FullscreenControl());
        map.addControl(new mapboxgl.ScaleControl());
       
      
        map.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        }));
    
  

        navigator.geolocation.getCurrentPosition((pos) => {
            map.setCenter([pos.coords.longitude, pos.coords.latitude]);
        }
        );
       
        map.addControl(new mapboxgl.Marker({
            draggable: true,
            color: 'red',
            icon: marcadorRed
        }).setLngLat([-73.985664, 40.748514]).addTo(map));
        const marker = new mapboxgl.Marker()
    .setLngLat([0, 0])
    .setPopup(new mapboxgl.Popup().setHTML("<h1>Hello World!</h1>")) // add popup
    .addTo(map);

        
    }


    render() {
        return (
          // Populates map by referencing map's container property
          <div ref={el => (this.mapWrapper = el)} className="mapWrapper" /> 
         
        );
      }
    }
    
    export default recMap;