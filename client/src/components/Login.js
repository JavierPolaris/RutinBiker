import { signInWithFacebook, signInWithGoogle } from "../service/firebase";

import biciReg from '../assets/img/biciReg.png';
import '../App.css';

const Login = () => {
    return (
        <div className="container-Log">
            <div className="login">
                <div className="login-Text">
                    <h1>Explore the world to experience the beauty o nature</h1>
                    <p className="paLog">Acces the community of riders and motocyclists that is going to revolutionize the way to enjoy the world</p>
                </div>
                <button className="buttonGoogle" onClick={signInWithGoogle}>
                    <img className="googleLog" src="https://www.pngplay.com/wp-content/uploads/13/Google-Logo-PNG-Photo-Image.png" />
                    <div className="textGoogle">
                        Continue with Google
                    </div>
                </button>
                <button className="buttonFacebook" onClick={signInWithFacebook}>
                    <img className="googleLog" src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3-1.png" />
                    <div className="textGoogle">
                        Continue with Facebook
                    </div>
                </button>
                <div className="Or">
                    <div className="orLine">
                    </div>
                    <p className="Ortext">OR</p>
                    <div className="orLine">
                    </div>
                </div>
                <button className="buttonSing">Sing up with email</button>
                <div className="login-Text">
                    
                    <p className="paLog1">By signing up, you agree to the Terms of Service and Privacy
                        Policy, including cookie use.</p>
                </div>
            </div>
            <div className="login-Img">
                <img className="loginImg" src={biciReg} />
            </div>
        </div>
    )
}

export default Login;