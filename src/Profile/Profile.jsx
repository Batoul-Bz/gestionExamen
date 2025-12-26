import Right from "./Right.jsx"
import Sidebare from "../Sidebare.jsx"
import Header from "../Etudiant/Header.jsx"
import Email from "./Email.jsx"
import Left from "./left.jsx"
export default function Profile() {


  return (
    <div>
        <div >
        <Header/>
        <Sidebare/>
        </div>
        <div >
            <Right/>
<Email/>
            </div>
            <Left/>
       

    </div>)}