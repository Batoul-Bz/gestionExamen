
import React from 'react';
import './Header.css';
import { FaBell } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h2 className="logo">Ex<span>Order</span>It</h2>
      </div>
      <div className="header-right">
        <div className="notification">
          <FaBell />
        </div>
        <div className="profile-card">
         <img src="avatar.png" alt="Profile" className="avatar" />
          <div className="profile-info">
            <h4>Maatallah hosin</h4>
            <p>chef d'epartement</p>
          </div>
        </div>
      </div>
    </header>
  );
}
