import React from 'react'
import "./pagenotfound.css"
import Images from "../../images/kiraka.PNG";
import { Link } from 'react-router-dom';

// import Pic from "../../images/not.png"

function Pagenotfound() {
  return (


    <div className="RegForm">
          <div className="sign-form">

      <img className='pic'src ={Images} alt ="logo"></img>
      <h2>Signup</h2>
      <form>  
            
<p className='p'>Firstname</p>
            <input  id="in" placeholder=""></input>
            <p className='p'>Lastname</p>
            <input id="in" placeholder=""></input>
            <p className='p'>Email</p>
            <input id="in" placeholder=""></input>
            <p className='p'>password</p>
            <input  id="in" placeholder=""></input>
            <p className='p'>phonenumber</p>
            <input id="in" placeholder=""></input>
            <button className='logc' ><Link to="/dashboard" class="butn"> submit </Link></button>

            
</form>
</div>

        {/* <h1>what are you trying to do searching for an invalid page</h1> */}
        {/* <img src={Pic} alt="" width="550px" /> */}
    </div>
  )
}

export default Pagenotfound;