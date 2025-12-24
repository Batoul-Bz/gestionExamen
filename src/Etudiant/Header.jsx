import { IoMdNotifications } from "react-icons/io";
import {Etudiants , notif} from "../Data/data.jsx";
import profileImg from "../assets/profile.jpg";
import Notification from "./notification.jsx";
import './Home.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { useState } from "react";
export default function Header(){
   
  const [showNotification, setShowNotification] = useState(false);

 

    return(
      <div>
      <div className="head">
    <h1>ExOrderIt</h1>
<ul> 

    <li className="notification" onClick={() => setShowNotification(!showNotification)} style={{ color: showNotification ? 'white' : ' ' }}><IoMdNotifications /></li>
    
    <li >
      <div className="Profile"><img src={profileImg} alt="Profile Photo"/>
      <span>{Etudiants[0].Name}</span>
      </div> </li>
   
</ul>

</div>
<Notification notif={notif} show={showNotification} setShowNotification={setShowNotification}/>
{showNotification && (
        < div
          className="overlay" 
         >
      </div>
      
        )}
</div>

)}