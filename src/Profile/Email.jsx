import {profile} from "../Data/data.jsx";
import './Profile.css';
export default function Email() {


  return (
    <div className="email-container">
      
            <ul>
                <li>
                    <h4>
                        Contact Informaton:
                    </h4>
                </li>
                <hr />
                <li>
                    <h4>
                        Gmail: <span>{profile[0].email}</span>
                    </h4>
                </li>
            </ul>
       

    </div>)}