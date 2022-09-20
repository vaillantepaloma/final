import React from "react"
import Images from "../../images/kiraka.PNG";
import Vector1 from "../../images/Vector1.png";
// import Vector2 from "../../images/Vector2.png";
import Vector4 from "../../images/Vector4.png";
import Vector5 from "../../images/Vector5.png";
import Vector6 from "../../images/Vector6.png";
import Vector7 from "../../images/Vector7.png";
import Vector8 from "../../images/Vector8.png";
import Vector9 from "../../images/Vector9.png";
import Vector10 from "../../images/Vector10.png";
import Vecto from "../../images/Vecto.png";
// import { Link } from 'react-router-dom';
// import {BsBell,BsChatLeftText,} from "react-icons /bs";
// import Vector11  from "../../images/Vector11.png";
// import Vector12  from "../../images/Vector12.png";
// import Vector13  from "../../images/Vector13.png";
// import Recta from "../../images/Recta.png";
import "./dashboard.css" ;
import slvt from "./../../images/slvt.png"
import PersonalDetails from "./personal-details";
import { Link, useParams } from "react-router-dom";
import Messages from "./messages";
import {FiPhone} from 'react-icons/fi'
import {AiOutlineMail} from 'react-icons/ai'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {AiOutlineSkype} from 'react-icons/ai'
import {HiThumbDown} from 'react-icons/hi'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'
import {GoBook} from 'react-icons/go'
import {AiOutlineMessage} from 'react-icons/ai' 
import {IoMdNotificationsOutline} from 'react-icons/io'
 import Recta from "../../images/Recta.png";

 function Dashboard(){
  const {page = "profile"} = useParams("page");
  console.log(page);

  const pages = {
    profile: <PersonalDetails />,
    messages: <Messages />
  }
  
    return(
<div>
 <div className="top-nav-bar">

 <img src={Images} alt ="logo" id="lg"></img>
 
 <div className="defLog">
    <img src={slvt} alt=""/>
    <h>Company</h>
    <p>Solvit Africa</p>
    <div className="iconss">
      < AiOutlinePlus/>
      <AiOutlineSearch/>
      <GoBook/>
      <AiOutlineMessage/>
      <IoMdNotificationsOutline/>
      <img src={Recta} alt="" id="lg2"></img>
      <p className="s">steve Gerald</p>
     {/* <img src={Vector11} alt=""/>
    <img src={Vector12} alt=""/>
    <img src={Vector13} alt=""/> */}
    {/* <img src={Recta} alt ="logo" id="lg2">steve Gerald</img>  */}
    
    {/* < img src={Recta} alt=""/> */}
</div>
    
 </div>


 {/* <input type="text" placeholder="search Dashboard"/>
                       <li><div className="li_logo"><BsChatLeftText size="0.8em"/></div></li>
                        <li> <div className="li_logo"><BsBell size="0.8em"/></div></li> */}
 {/* <BsSearch className="header_icon" size="0.8em"/> */}
                    {/* <input type="text" placeholder="search Dashboard"/>
                    <BsSliders className="header_icon" size="0.8em"/> */}
</div>  
<div className="main" >
    <div className="left">
      <div className="left-content">
        <ul>
        <img className ='vec' src={Vector1} alt=""/>
        <p>Dashboard</p>
        {/* <img className ='vec' src={Vector2} alt=""/> */}
        <img className ='vec' src={Vector10} alt=""/>
    <p>conversations</p>
      <img className ='vec' src={Vector4} alt=""/>
      <p>Calender</p>

      <p>Recruitment</p>
      <img className ='vec' src={Vector5} alt=""/>
      <p >Jobs </p>
      <img className ='vec' src={Vector6} alt=""/>
      <p>Candidates</p>
      <img className ='vec' src={Vector7} alt=""/>
      <p>Career Site</p>
      <p>Company</p>
      <img className ='vec' src={Vector8} alt=""/>
      <p>Team</p>
      <img className ='vec' src={Vector9} alt=""/>
      <p>Settings</p>
        </ul>
            <div className="Sub-Vst">
                <div className="Sub-Vst1">Visit Our Help Center</div>
            </div>
               
        </div>  
    </div>
    <div className="right">
        <div className="midle">
          <div className="f-middle">
          <img src={Vecto} alt ="logo" id="lg1"></img>
 <h3>kevin kalimba</h3>
 <p>applied 2days ago</p>
 </div>
 <div className="s-middle">
  <HiThumbDown/>
      <div className="s-rate">Ratings</div>
      <div className="s-add">Advance</div>
 </div>
 <p className="A">applied jobs</p>
 <div className="t-middle">
  
  <h3>senior product Designer</h3>
  <p>fulltime. Rugando ,Kigali</p>
 


  </div>

  <div className="u-middle">
  <h3>Contact Details</h3>
  <p><AiOutlineMail/>Email</p>
  <p> <FiPhone/> phone</p>
  <p><HiOutlineLocationMarker/>location</p>
  <p><AiOutlineSkype/> skype</p>


 </div>
        </div>
       
        <div className="right1">
        <Link to="/dashboard/profile">Candidates profile</Link>
     <Link to="/dashboard/messages">Notifications</Link>
     {/* <Link to="/dashboard/comment">Comments</Link> */}
       

      {pages[page]}

          
        </div>

    </div>
    
</div> 
</div>
    );
}
export default Dashboard