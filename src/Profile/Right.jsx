import {profile} from "../Data/data.jsx";
import './Profile.css';

export default function Right() {


  return (
    <div className="right-container">
        <ul>
            <li>
                <h4>Academic Information:</h4>
               
            </li>
            <hr />
            <li><h4>Faculty:<span>{profile[0].faculty}</span></h4>
           
            </li>
            <li>
                <h4>Level: <span>{profile[0].level}</span></h4>
                
            </li>
            <li>
                <h4>
                    Semester: <span>{profile[0].semester}</span>
                </h4>
               
            </li>
        </ul>

    </div>)}