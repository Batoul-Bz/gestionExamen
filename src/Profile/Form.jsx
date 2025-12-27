import { useState } from "react";
import { Etudiants } from "../Data/data";

export default function Form({setIsEditing}) {

const [student, setStudent] = useState(Etudiants[0]);
const handleChange = (e) => {
  const { name, value } = e.target;
  setStudent({ ...student, [name]: value });
};
const handleSubmit = (e) => {
  e.preventDefault();
  setIsEditing(false);
}
  return (
    <div className="formpopup">
      
        <form>
            <label>Full Name:</label>
<input type="text"
    name="Name"
    value={Etudiants.Name}
    onChange={handleChange} ></input>
 <label>ID:</label>
<input type="text"
    name="Num"
    value={Etudiants.Num}
    onChange={handleChange} ></input>
 <label>Date Birth:</label>
<input  type="date"
    name="datebirth"
    value={Etudiants.datebirth}
    onChange={handleChange} ></input>
    <div>
        <button type="submit" className="buttonform">Submit</button>
<button type="cancel" className="buttonform"  onClick={() => setIsEditing(false)}>cancel</button>
    </div>

        </form>

    </div>)}