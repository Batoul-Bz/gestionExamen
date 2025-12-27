import { IoClose } from "react-icons/io5";
export default function Designe({setPopup , setDarkTable}) {


  return (
    <div className="deigntables">
<ul>
     <li className="deselect">Select <span onClick={() =>{setPopup(false);
setDarkTable(false);}}><IoClose/></span></li>
    <li>List</li>
    <li>Table</li>
    <li>Calebdeier</li>
</ul>
    </div>)}