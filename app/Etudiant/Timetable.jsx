 import { IoMdDownload } from "react-icons/io";
  import {Etudiants ,Timetables} from "../Data/data.jsx"
  import { ImPrinter } from "react-icons/im";
  import { LuListFilter } from "react-icons/lu";
  import { useState } from "react";
  import { IoClose } from "react-icons/io5";
  import Designe from "./designtimetable.jsx";
  export default function Timetable(){
    
     const [activePopup, setActivePopup] = useState("none");
const [darkTable, setDarkTable] = useState(false);
  const [Popup, setPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
const [selectedClass, setSelectedClass] = useState(null);
const filteredTimetables = Timetables.filter((item) => {
  if (selectedDate) return item.Date === selectedDate;
  if (selectedClass) return item.Class === selectedClass;
  return true;
});

    return(
        <div className="bodyTB">
       {Popup ==="true" &&  < div
          className="overlay" 
         >
      </div> }
        <div className="Center">
             <div className="Top">
            <div className="Left">
              
            <h1>{Etudiants[0].Name} Time Table</h1>
            <span>Shows the exam times, dates, and rooms</span></div>
 <ul>
            <li onClick={() =>{setActivePopup("true");
setDarkTable(false);

     }}><IoMdDownload /></li>
             <li><ImPrinter /></li>
              <li onClick={() =>{setPopup("true");
}}><LuListFilter /></li>
        </ul>
       
        </div>
         {Popup ==="true" && <Designe setPopup={setPopup} setDarkTable={setDarkTable}/> }
       <div className="table">
        {activePopup === "date" && (
  <div className="popup">
     <div onClick={() =>{setActivePopup("none");
setDarkTable(false);

     }}>< IoClose /></div>
    {Timetables.map((item) => (
          <tr key={item.id} className="container">
            <td className="class">{item.Date}</td>
          </tr>
        ))}
   
  </div>
)}
 {activePopup === "class" && (
  <div className="popup1">
     <div onClick={() =>{setActivePopup("none");
setDarkTable(false);

     }}>< IoClose /></div>
    {Timetables.map((item) => (
          <tr key={item.id}>
            <td className="class1">{item.Class}</td>
          </tr>
        ))}
   
  </div>
)}
{darkTable && <div className="table-overlay"></div>}

           <table>
      <thead>
        <tr className="fillter"><th >ALL</th>
             <th key={Timetables.id} onClick={()=> { setActivePopup("date");
              setDarkTable(true);
               setSelectedDate(Timetables.Date);
  setSelectedClass(null);
             }} style={{ backgroundColor: activePopup === "date" ? "white" : "" }}>Date</th>
             <th  onClick={()=> { setActivePopup("class");
              setDarkTable(true);
             
             }} style={{ backgroundColor: activePopup === "class" ? "white" : "" }}>Classe</th>
        </tr>
        
        <tr style={{ background: "white" }} className="tr" >
          <th>Date</th>
          <th>Module</th>
          <th>Time</th>
          <th>Group</th>
          <th>Classe</th>
          <th>Professor</th>
          <th>Type</th>
        </tr>
      </thead>
          <tbody>
        {filteredTimetables.map((item) => (
          <tr key={item.id}>
            <td>{item.Date}</td>
            <td>{item.Module}</td>
            <td>{item.Time}</td>
            <td>{item.Groups}</td>
            <td>{item.Class}</td>
            <td>{item.Professor}</td>
            <td>{item.Type}</td>
          </tr>
        ))}
      </tbody>
    </table>                                                                             
       </div>
        
        </div>
       
        </div>
    )
}
