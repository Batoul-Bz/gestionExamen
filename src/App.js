
import Home from "./Etudiant/Home.jsx";
import Profile from "./Profile/Profile.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/Profile" element={<Profile />} />
           <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
   
  );
}

export default App;
