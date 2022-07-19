import { useState, useEffect } from "react";
import Map, { Marker, NavigationControl, Popup, } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import marcadorRed from '../assets/img/ubicacion1.png'



function MyMap() {
  const [viewport, setViewport] = useState({});


  const logitud = -3.6097723; //Alberto
  const latitud = 37.1753306;
  const logitud1 = -3.040100; //Mihai
  const latitud1 = 39.594100;
  const logitud2 =  -3.692673268914573; //JoseLuis
  const latitud2 = 40.42158636438815;
  const logitud3 = -2.471661;//soria
  const latitud3 = 41.766224;
  const logitud4 = -6.590692681363353;
  const latitud4 = 38.3880707548768;
  useEffect(() => {
  

    navigator.geolocation.getCurrentPosition((pos) => {
      if(localStorage.getItem("idUser") === "1"){
        setViewport({
          latitude: latitud1,
          longitude: logitud1,
          zoom: 13,
        })
      }else if(localStorage.getItem("idUser") === "2"){
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 13,
      });
      }else if(localStorage.getItem("idUser") === "3"){
      setViewport({
        ...viewport,
        latitude: latitud3,
        longitude: logitud3,
        zoom: 13,
      });
      } else if(localStorage.getItem("idUser") === "4"){
      setViewport({
        ...viewport,
        latitude: latitud,
        longitude: logitud,
        zoom: 13,
      });
      } else if(localStorage.getItem("idUser") === "5"){
      setViewport({
        ...viewport,
        latitude: latitud2,
        longitude: logitud2,
        zoom: 13,
      });
      }else{
        setViewport({
          ...viewport,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          zoom: 13,
        });
      }


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
            
              
         
            <Marker
              anchor="bottom"
              longitude={logitud}
              latitude={latitud}
              offsetLeft={-20}
              offsetTop={-10}

            >
              <Popup
                className="popup"
                latitude={latitud}
                longitude={logitud}
                closeOnClick={false}
                onClose={() => {
                  console.log("closed");
                }
                }
              >
                <div className="popup-content">
                  <h3>Alberto!</h3>
                </div>
              </Popup>
              <Popup
                className="popup"
                latitude={latitud1}
                longitude={logitud1}
                closeOnClick={false}
                onClose={() => {
                  console.log("closed");
                }
                }
              >
                <div className="popup-content">
                  <h3>Mihai!</h3>
                </div>
              </Popup>
              <Popup
                className="popup"
                latitude={latitud2}
                longitude={logitud2}
                closeOnClick={false}
                onClose={() => {
                  console.log("closed");
                }
                }
              >
                <div className="popup-content">
                  <h3>Joseluis!</h3>
                </div>
              </Popup>
              <Popup
                className="popup"
                latitude={latitud3}
                longitude={logitud3}
                closeOnClick={false}
                onClose={() => {
                  console.log("closed");
                }
                }
              >
                <div className="popup-content">
                  <h3>Juan!</h3>
                </div>
              </Popup>
              <Popup
                className="popup"
                latitude={latitud4}
                longitude={logitud4}
                closeOnClick={false}
                onClose={() => {
                  console.log("closed");
                }
                }
              >
                <div className="popup-content">
                  <h3>Lolo!</h3>
                </div>
              </Popup>
              <img style={{ width: "50px" }} src={marcadorRed} />
            </Marker>
            <Marker
              anchor="bottom"
              longitude={logitud1}
              latitude={latitud1}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <img style={{ width: "50px" }} src={marcadorRed} />
            </Marker>
            <Marker
              anchor="bottom"
              longitude={logitud2}
              latitude={latitud2}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <img style={{ width: "50px" }} src={marcadorRed} />
            </Marker>
            <Marker
              anchor="bottom"
              longitude={logitud3}
              latitude={latitud3}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <img style={{ width: "50px" }} src={marcadorRed} />
            </Marker>
            <Marker
              anchor="bottom"
              longitude={logitud4}
              latitude={latitud4}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <img style={{ width: "50px" }} src={marcadorRed} />
            </Marker>


            < Popup 

              longitude={viewport.longitude}
              latitude={viewport.latitude}
              offsetLeft={-20}
              offsetTop={-10}
              onOpen={() => {
                console.log("open");
              }
              }
            >
              <div>
                <h1>Ultima conexion!</h1> 
              </div>
            </Popup>
            



          </Map>
        </div>
      )}
    </div>
  );
}
export default MyMap;