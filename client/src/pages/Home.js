import React from 'react'
import banerHome from '../assets/img/banerHome.png'
import { Link } from 'react-router-dom';
import biciHome from '../assets/img/biciHome.png'
import ktm790 from '../assets/img/ktm790.png'
const Home = () => {

  //-------------- Comienza el slider fotografico

  var imagenes = [
    'https://scontent.fmad7-1.fna.fbcdn.net/v/t1.6435-9/93964416_1563007227205885_3912828679691960320_n.jpg?stp=dst-jpg_p960x960&_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=oyih3gZRyO8AX8AA3ag&_nc_ht=scontent.fmad7-1.fna&oh=00_AT9n_c32-EIT4vzKFv0t8GlY4EqdyOD6Msz-Ko5m4iOXEg&oe=62F0397D',
    'https://www.twintrailexperience.es/wp-content/uploads/2021/11/0-producte_transcarpatic-rally-1.jpg',
    'https://i0.wp.com/www.adventureexperience.es/wp-content/uploads/2022/02/Adventure-Experience-Tour-2022-2.jpg',
    'https://motosprint.com/blog/wp-content/uploads/2018/05/ARTIC-Biescas.jpg'];

  let cont = 0;

  function carrusel() {
    document.addEventListener('click', (e) => {
      let atras = document.querySelector('.atras');
      let adelante = document.querySelector('.adelante');
      let img = document.querySelector('.imgBaner');
      let tgt = e.target;

      if (tgt == atras) {
        if (cont > 0) {
          img.src = imagenes[cont - 1];
          cont--;
        } else {
          img.src = imagenes[imagenes.length - 1]
          cont = imagenes.length - 1;
        }
      } else if (tgt == adelante) {
        if (cont < imagenes.length - 1) {
          img.src = imagenes[cont + 1];
          cont++;
        } else {
          img.src = imagenes[0]
          cont = 0;
        }
      }
    });
  }
  

  return (
    <div className="home-conten">
      <div className="Desplegable">
        <div className="biciHome">
          <Link to="/Login" className='linkLogHome'>Log In </Link>
          <h1 className='logBack'>LOGIN</h1>
          <img src={biciHome} alt="biciHome" className='biciImgHome' />
        </div>
        <div className="motoHome">
          <Link to="/SingUp" className='linkRegHome'>Sing Up </Link>
          <h1 className='RegBack'>REGISTRO</h1>
          <img src={ktm790} alt="biciHome" className='motoImgHome' />
        </div>
      </div>
      <div className="banerHomeContendor">
        <div className='bannerHome'>
          <img src={banerHome} alt='banerHome' className='bannerHome' />
        </div>
        {/* <div className='noticias'>
          <h1>Noticias</h1>
          <div className="homeNoticias-line"></div>
        </div> */}
        {/* <div className="contFoto" onChange={carrusel()}>
          <div className="atras botones">
            ⇠
          </div>
          <div className="adelante botones">
            ⇢
          </div>
          <img src="https://s3.eu-west-1.amazonaws.com/cdn.motorbikemag.es/wp-content/uploads/2022/03/puntapunta-2022.png" width="100%" height="350px" alt="" className="imgBaner" />
        </div> */}
      </div>
    </div >

  )
}

export default Home