import React from "react"
import Images from "../../images/kiraka.PNG";
// import { Link } from 'react-router-dom';
// import {BsBell,BsChatLeftText,} from "react-icons /bs";


import "./dashboard.css" ;
import slvt from "./../../images/slvt.png"

 function Dashboard(){
    return(
<div>
 <div className="top-nav-bar">

 <img src={Images} alt ="logo" id="lg"></img>
 <div className="defLog">
    <img src={slvt} alt=""/>
    <h>Company</h>
    <p>Solvit Africa</p>
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
        <p>Dashboard</p>
      <p>conversations</p>
      <p>Calender</p>
      <p>Recruitment</p>
      <p >Jobs </p>
      <p>Candidates</p>
      <p>Career Site</p>
      <p>Company</p>
      <p>Team</p>
      <p>Settings</p>
        </ul>
            <div className="Sub-Vst">
                <div className="Sub-Vst1">Visit Our Help Center</div>
            </div>
               
        </div>  
    </div>
    <div className="right">
        <div className="midle">

 <p>kevin kalimba</p>
 <p>applied 2 days ago</p>
        </div>

        <div className="right1">
     <p>Candidatesprofile</p>
      <p>Comments</p>
      <p>Messages</p>
      <p >interviews </p>
      <p>Timelines</p> 

       <div className="right2">
       <p>Personal details</p>
       <p>FIRSTNAME</p>
     <p>Gender</p>
     <p>My name is Melinda McIff and I'm writing to express my interest in your open Product Designer position at Starry Inc. I think my four years of experience, strong background in graphic design and passion for this industry make me an excellent candidate for this position.</p>


     <p>My experience lies in successfully ideation, engineering, graphic design, visual design, design thinking, technical knowledge, customer service, production cost, manufacturing, user testing, user experience, user interface, digital product design.</p>
     
       </div>

          
        </div>

    </div>
    
</div> 
</div>
    );
}
export default Dashboard