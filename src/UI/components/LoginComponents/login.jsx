import React from 'react';
import "./login.css";
import Image from "../../images/bck.jpg"

function login() {
  return (
      <div className="login">
      <div className="pic-side"
       style={{ backgroundImage : `url(${Image})` }}
       >
hello
      </div>
    <div className="form-side">
      
      <form>
<h1>Login</h1>
<div>
<input type="text" placeholder="email" />
</div>
<input type="text" placeholder="password" />
      </form>
    </div>
    </div>
  )
}

export default login