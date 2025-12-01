import React from 'react';
import './SideBar.css';
import { FaBars, FaUser, FaSearch, FaChartBar, FaInfoCircle, FaSignOutAlt } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="sidebar">
      
      <nav>
        <ul>
          <li>
            <FaBars className="icon" />
            <span>Menu</span>
          </li>
          <li>
            <FaUser className="icon" />
            <span>Gestion du profil</span>
          </li>
          <li>
            <FaSearch className="icon" />
            <span>C & V</span>
          </li>
          <li className='active'>
            <FaChartBar className="icon" />
            <span>Tableau de bord</span>
          </li>
        </ul>
      </nav>
      <div className="bottom-icons">
        <li>
          <FaInfoCircle className="icon" />
          <span>Info</span>
        </li>
        <li>
          <FaSignOutAlt className="icon" />
          <span>Logout</span>
        </li>
      </div>
    </div>
  );
}