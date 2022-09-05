import React from 'react';
import "./Reset.css";
import Images from "../../images/kiraka.PNG";
import Vector from "../../images/Vector.png";
import { Link } from 'react-router-dom';

// import { Link } from 'react-router-dom';

function Reset(){
    return(
     <div className='Reset-form'>
        <img className='photo'src ={Images} alt ="logo"></img>
                   <h1>set new password</h1>
                   <div className='form1'>
           
              <p className='p2'>Your new password must be different the 
                previous used passwords.</p>
                 <p>password</p>
                     <input id="Rese" placeholder></input>
                          <p>Must be at least 8 characters </p>
                              <p>confirm password</p>
                                   <input id="Rese" placeholder=""></input>
                <button className='btn1'>Reset password</button>
                <div className='Vect'>
                <img src={Vector} alt="Vector" className='logv' />
                  {/* <p className='p1'>Back to login </p> */}
                  <Link to="/Login" class="btn"><p className='p1'>Back to login </p></Link>
                  </div>
                </div>
     </div>



    )


}

export default Reset