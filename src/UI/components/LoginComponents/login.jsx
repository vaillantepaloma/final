import React from 'react';
import "./login.css";
import { Link } from 'react-router-dom';
// import Reset from '../Resetcomponents/Reset';
import Image from "../../images/bck.jpg";
import Images from "../../images/kiraka.PNG";
import Google from "../../images/google.png";
import Twitter from "../../images/twitter.png";

function Login() {
  return (
    <div className="login">
      <div className="pic-side"
      
        style={{ backgroundImage: `url(${Image})` }}
        
      >
        <h1 className='head'>A single click can Grastically alter your life</h1>
      </div>
      <div className="form-side">
        
      <img src={Images} alt ="logo"></img>
      <h1 className='h'>Login</h1>

        <form>
          
          <div className="loginf">
            <p className='e'>Email address</p>
            <div className='input'> <input type ="email address " name="name@gmail.com" id="input"placeholder="name@gmail.com"></input>
            <p className='p'>password</p>
            <input type="password" name="password"id="input" placeholder=""></input>
            </div>
            

            <div className="word">
             {/* <p className='R'>Reset password</p>  */}
             <Link to="/Reset"><p className='R'>Reset password</p></Link>
                     <button className='log'>Log in</button>
 
               <div>
                          <p className="link">Don't have an account ? <Link to="/Signup" class="btn">Sign up</Link> </p>
                         <h4>or</h4>
                          <button className='loginb lo'>
                            <img src={Google} alt="google" className='logg' />
                            <h5 className='logt'>Log in with Google</h5>
                            </button>              
                          <button className='loginb '>
                          <img src={Twitter} alt="twitter" className='logg' />

                            <h6 className='logt'>Log in with twitter</h6>
                            </button>
 

 
                          </div> 

            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login