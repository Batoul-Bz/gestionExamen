import { IoClose } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import {notif} from "../Data/data.jsx";
import {notification} from"./Header.jsx";
import { useState } from "react";
export default function Notification({ notif, setShowNotification ,show  }) {


  return (
    <div className={`notificationpage ${show ? "show" : ""}`}>
<ul className="notifhead">
   <li> <h1>Notifications</h1></li>
   <li><div className="close"  onClick={() => setShowNotification(false)}><IoClose /></div></li>
</ul>
<div className="nodifibody">
<ul>
  
  <li > {notif.map((note) => (
              <div key={note.id} className="notification-item" >
                <div className="Icon"><IoMdNotifications /></div>
               <div className="text"><h4>{note.Title}</h4>
                <p>{note.text}</p></div> 
              </div>
            ))}</li>
</ul>

</div>
    </div>)}
