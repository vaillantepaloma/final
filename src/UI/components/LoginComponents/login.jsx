import React from 'react';
import "./login.css";
import Image from "../../images/bck.jpg"
import Images from "../../images/kiraka.PNG"

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
        <form>
          <h1>Login</h1>
          <div className="login-form">
            <p className='e'>Email address</p>
            <div className='input'> <input type ="email address " name="name@gmail.com" id="in"placeholder="name@gmail.com"></input>
            <p className='p'>password</p>
            <input type="password " name="password"id="in" placeholder="....."></input>
            </div>
            {/* <input type ="email address " name="name@gmail.com" placeholder="name@gmail.com"></input>
            <p>password</p>
            <input type="password " name="password" placeholder="....."></input> */}


            <div className="word">

              <p className='R'>Reset password</p>

              <button className='log'>Log in</button>
 
               <div>
                          <p className="link">Don't have an account ? SIGNUP </p>
                         
                          <button className='loginb'>Log in with Google</button>              
                          <button className='loginb '>Log in with twitter </button>
 

 
                          </div> 

            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login