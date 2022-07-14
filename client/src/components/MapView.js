import { useState, useEffect } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";


function MyMap() {

  const [viewport, setViewport] = useState({});
  useEffect(() => {
  
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 13,
      });
     

    });
  }, []);
  return (
    <div>
      {viewport.latitude && viewport.longitude && (
        <div>
          <Map 
            mapboxAccessToken="pk.eyJ1IjoiamF2aWVycG9sYXJpcyIsImEiOiJjbDVrd2c1M3kwOW4xM2tuemJ2ZGhsOTRpIn0.RFZT37w_mvgoT1KRk6Emqg"
            initialViewState={viewport}
            mapStyle="mapbox://styles/mapbox/satellite-v9"
            onViewportChange={(viewport) => setViewport(viewport)}

          >
            <Marker 
            
              longitude={viewport.longitude}
              latitude={viewport.latitude}
              offsetLeft={-20}
              offsetTop={-10}
            />

            < Popup 
              longitude={viewport.longitude}
              latitude={viewport.latitude}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <div>
                <h1>Hello!</h1> <h1> are u</h1> <h1>here</h1>
              </div>
            </Popup>


            
          </Map>
        </div>
      )}
    </div>
  );
}
export default MyMap;