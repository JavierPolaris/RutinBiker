import "./post.css";
import { MoreVert } from "@material-ui/icons";

import { useEffect, useState } from "react";


export default function Post({ post }) {
  const [newComent, setComentario] = useState();
 
  const [like, setLike] = useState()
  const [love, setLove] = useState()
  const [cards, setCard] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));


  function enviarComentario(id) {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
        comentario: newComent,
        userName: user.logNombre,
        userUrlImg: user.logUrlImg,
      })
    }
    fetch("insrtComentario", requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data.parseo.comentarios);
       
        setInterval(() => { window.location.assign("/UPage") }, 300);
      })

  }


  const likeHandler = (id) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        usermail: user.logEmail,
        id,
      }),
    };
   ;


    fetch("like", requestOptions)
      .then(res => res.json())
      .then((res) => {
        // console.log(res)
        setInterval(() => { window.location.assign("/UPage") }, 300);
      }
      )

  }
  const likeHandlerHeart = (id) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
      }),
    };

    fetch("love", requestOptions)
      .then(res => res.json())
      .then((res) => {
        setInterval(() => { window.location.assign("/UPage") }, 300);
      }
      )

  }




  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        usermail: user.logEmail,
        userUrlImg: user.logUrlImg,
        userName: user.logNombre,

      }),
    };
    fetch('searchPost', requestOptions)
      .then(res => res.json())
      .then((res) => {
        console.log(res.message)
        if (res.message === false) {
          console.log("no hay post")
          setCard([])
        } else {
          setCard(res.posteo)
        }
      }
      )
    console.log(cards)

  }, [])


  return (
    <div className="post">
      {cards != [] ? cards.map((tarjeta, i) => {

        return (
          <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <img
                  className="postProfileImg"
                  src={tarjeta.userUrlImg}
                  alt=""
                />
                <span className="postUsername">
                  {tarjeta.userName}
                </span>
                <span className="postDate">{tarjeta.createdAt}</span>
              </div>
              <div className="postTopRight">
                <MoreVert />
              </div>
            </div>
            <div className="postCenter">
              <span className="postText" id={i + "p"} >{tarjeta.message}</span>
              <img className="postImg" src={tarjeta.urlImg} alt="" />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <div className="postBottomLike">
                  <img className="likeIcon" id={i + "l"} src="assets/like.png" onClick={() => { likeHandler(tarjeta._id); setLike(tarjeta.like) }} alt="" />
                  <span className="postLikeCounter">{tarjeta.like} people like it</span>
                </div>
                <div className="postBottomHeart">
                  <img className="likeIcon" id={i + "v"} src="assets/heart.png" onClick={() => { likeHandlerHeart(tarjeta._id); setLove(tarjeta.heart) }} alt="" />
                  <span className="postLikeCounter">{tarjeta.heart} people love it</span>
                </div>

              </div>

              <div className="postBottomRight">
                {/* <span className="postCommentText">{post.comment} comments</span> */}
              </div>
            </div>
            <div className="comentarios">
              <input type="text" className="comentarioIn" placeholder="Comentario" onChange={(e) => setComentario(e.target.value)} />
              <button className="comentarioBtn" onClick={() => enviarComentario(tarjeta._id)}>Comentar</button>
              <div class="mostPopular-line"></div>
              <div className="comentariosBox">
                {tarjeta.comentarios ? tarjeta.comentarios.slice(0).reverse().map((comentario, i) => {
                  
                  return (
                    <div className="comentarioWrapper">
                      <img
                        className="comentarioProfileImg"
                        src={comentario.userUrlImg}
                        alt=""
                      />
                      <span className="comentarioUsername">
                        {comentario.userName}:
                      </span>
                      <span className="comentario">{comentario.comentario}</span>

                    </div>
                  )
                }) : ""}



              </div>
            </div>
          </div>
        )
      }) : <div>
        <h1>Aun no has escrito ningun Post</h1>
      </div>}


    </div>
  );
}