import { GoPerson } from "react-icons/go";
import { BsTable } from "react-icons/bs";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Sidebare(){
   
    return(<div className="sidebare">
            <ul >
    <li className="T">
        <NavLink
    to="/"
    className={({ isActive }) =>
      isActive ? "sidebar-link active" : "sidebar-link"
    }
  >
         < BsTable className="Sicon" style={{ fontSize:68}}/> <span style={{ fontSize:20 , width:"150%"}}>Time Table </span>
        </NavLink>
       </li>
<li>
        <NavLink
    to="/Dashboard"
    className={({ isActive }) =>
      isActive ? "sidebar-link active" : "sidebar-link"
    }
  >
    <LuLayoutDashboard className="Sicon" style={{ fontSize:47}}/> <span style={{ fontSize:20}}>Dashboard</span></NavLink>
    </li>
    <li>
        <NavLink
    to="/Profile"
    className={({ isActive }) =>
      isActive ? "sidebar-link active" : "sidebar-link"
    }
  >
        <GoPerson className="Sicon"style={{ fontSize:50}} /> <span style={{ fontSize:20}}>Profile</span>
        </NavLink>
        </li>

</ul>
<ul className="logout">
<li > <MdLogout style={{ fontSize:40}} />
<span style={{ fontSize:20}}>Logout</span></li>
</ul>
        </div>



    )
}