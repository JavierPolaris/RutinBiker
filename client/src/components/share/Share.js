import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions, Refresh } from "@material-ui/icons"
import { useState, useEffect } from "react";

export default function Share() {
  const [share, setShare] = useState({});
  const [shareImg, setShareImg] = useState();
  const user = JSON.parse(localStorage.getItem("user"));
  const [printMessage, setPrintMessage] = useState();
 
  const placehol = "What's in your mind ? " + user.logNombre;


  function handleClick(e) {
    // console.log(e.target.value);
    setShare(e.target.value);

  }
  function handleClickImg(e) {
    // console.log(e.target.value);
    setShareImg(e.target.value);

  }
  function enviar(e) {
    if (shareImg === " " || shareImg === {} || shareImg === undefined) {
      console.log("No se puede enviar MALDITO MIHAI")
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          usermail: user.logEmail,
          post: share,
          logNombre: user.logNombre,
          userUrlImg: user.logUrlImg,
        }),
      };
      fetch('insertPost', requestOptions)
        .then(res => res.json())
        .then((res) => {
          // console.log(res.post);


        }
        )
    } else {
      console.log("Se puede enviar")
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          usermail: user.logEmail,
          post: share,
          urlImg: shareImg,
          logNombre: user.logNombre,
          userUrlImg: user.logUrlImg,
        }),
      };
      fetch('insertPost', requestOptions)
        .then(res => res.json())
        .then((res) => {
          // console.log(res.post);


        }
        )
    }

    window.location.reload();


  }

  function mostrar() {
    document.querySelector(".shareInputImg").style.display = "block";
  }
  function mostrarEmo() {
    document.querySelector(".shareOptionFeels").style.display = "block";
  }
  function darUbi() {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      var latlon = "Esta es tu ubicación ha tiempo real " + lat + "," + lon;
      setPrintMessage(latlon);
      setShare(latlon)
    });

  }
  function feelsEmo(e) {
   
    var feel = "Hoy me siento " +e+ "!!!";
    setPrintMessage(feel);
    setShare(feel);
  }


  

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={user.logUrlImg} alt="" />
          <input
            onChange={(e) => {

              handleClick(e);
            }}
            placeholder={placehol}
            className="shareInput"
            value={printMessage}
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText" onClick={() => mostrar()} >Photo </span>
              <input type="text" className="shareInputImg" style={{ display: "none" }} onChange={(e) => {

                handleClickImg(e);
              }} placeholder="Introduce url" />

            </div>
            
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText" onClick={() => darUbi()}>Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText"  onClick={() => mostrarEmo()}>Feelings</span>
              <div className="shareOptionFeels" style={{
                  display: "none",
                
                }} >
               
                <input type="button" value="😁" className="feliz" style={{
                  background: "none",
                  border: "none",
                  fontSize: "36px",
                }} onClick={(e) => feelsEmo(e.target.value)} />
                <input type="button" value="😂" className="gracioso" style={{
                  background: "none",
                  border: "none",
                  fontSize: "36px",
                }}onClick={(e) => feelsEmo(e.target.value)}/>
                <input type="button" value="😅" style={{
                  background: "none",
                  border: "none",
                  fontSize: "36px",
                }} onClick={(e) => feelsEmo(e.target.value)}/>
                <input type="button" value="😍" style={{
                  background: "none",
                  border: "none",
                  fontSize: "36px",
                }}onClick={(e) => feelsEmo(e.target.value)} />
                <input type="button" value="😜" style={{
                  background: "none",
                  border: "none",
                  fontSize: "36px",
                }}onClick={(e) => feelsEmo(e.target.value)}/>
                <input type="button" value="😒" style={{
                  background: "none",
                  border: "none",
                  fontSize: "36px",
                }}onClick={(e) => feelsEmo(e.target.value)}/>
                <input type="button" value="😡" style={{
                  background: "none",
                  border: "none",
                  fontSize: "36px",
                }}onClick={(e) => feelsEmo(e.target.value)} />

              </div>
            </div>
          </div>
          <button className="shareButton" onClick={() => enviar()}>Share</button>
        </div>
      </div>
    </div>
  );
}