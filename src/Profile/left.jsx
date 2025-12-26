import './Profile.css';
import profileImg from "../assets/profile.jpg";
import {Etudiants} from "../Data/data.jsx";
import { useState } from "react";
import Form from './Form.jsx';

export default function Left() {

const [isEditing, setIsEditing] = useState(false);
const [student, setStudent] = useState(Etudiants[0]);
const handleChange = (e) => {
  const { name, value } = e.target;
  setStudent({ ...student, [name]: value });
};
const handleSubmit = (e) => {
  e.preventDefault();
  setIsEditing(false);
};


  return (
    <div className='leftcontainer' >
        {isEditing && (
  <div className="popupform">
    <Form/>
  </div>
  
)}
{isEditing && (
  <div className="overlay">
   
  </div>
  
)}

       <ul>
        <li className='image'><img src={profileImg} alt="Profile Photo"/></li>
        <li className='lefttop'>
            <h4 className='name'>{Etudiants[0].Name}</h4>
        </li>
        <li className='lefttop'>
            <p>Student</p>
        </li>
        <li>
            <h4>
                Full Name
            </h4>
        </li>
        <li className='form'>
            {Etudiants[0].Name}
        </li>
        <li>
            <h4>
                Student ID
            </h4>
        </li>
         <li className='form'>
            {Etudiants[0].Num}
        </li>
        <li>
            <h4>
                Date of Birth
            </h4>
        </li>
         <li className='form'>
            {Etudiants[0].datebirth}
        </li>
        <li>
            <button  onClick={() => setIsEditing(true)}>Edit</button>
        </li>
       </ul>

    </div>)}