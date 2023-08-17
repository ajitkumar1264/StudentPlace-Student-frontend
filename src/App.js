import "./App.css";
import Login from "./component/Auth/Login";
import Signup from "./component/Auth/Signup";
import StudentData from "./component/Auth/StudentData";
import StudentRegi from "./component/Auth/StudentRegi";
import Home from "./component/Home/Home";
import Navbar from "./component/Home/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StuState from "./component/context/StuState";
import Company from "./component/Company/Company";
import Cominfo from "./component/Company/Cominfo";

function App() {
  return (
    <>
      <BrowserRouter>
        <StuState>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/company" element={<Company />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/StudentRegi" element={<StudentRegi />} />
            <Route path="/StudentData" element={<StudentData />} />
            <Route path="/cominfor/:id" element={<Cominfo />} />
          </Routes>
        </StuState>
      </BrowserRouter>
    </>
  );
}

export default App;
