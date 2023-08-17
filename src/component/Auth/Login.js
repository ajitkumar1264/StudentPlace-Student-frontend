import React,{useState,useContext} from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import context from "../context/context";

function Login() {

  const {setlogin,setstudentRegi}=useContext(context);
  const nav=useNavigate();

  const [Data, setData] = useState({email:"",password:""})

  const handlesubmit=async(e)=>{

    e.preventDefault();


    const response = await fetch(`https://studentplace-bakend.onrender.com/api/student/login`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({email:Data.email,password:Data.password}), 
    });
   const res= await response.json();
    console.log(Data,res);
    localStorage.setItem('token',res.authtoken);
    if(res.status)
    {
      nav("/home");
      setlogin(true);
    }
  }

  const handleonchange=(e)=>{

    setData({...Data,[e.target.name]:e.target.value})
  }



  return (
    <>
      <div className="content11">
        <div className="con11">
          <h6>GET IN TOUCH</h6>
          <div className="line"></div>
          <h1>Login Here</h1>
        </div>

        <form action="" className="form11">
          <div className="form12">
            <div className="form13">
              <div className="grid">
                <div className="data">
                  <p>Emaill</p>
                  <input type="text" id="name" name="email" onChange={handleonchange} />
                </div>
                <div className="data">
                  <p>Password</p>
                  <input type="text" id="name" name="password" onChange={handleonchange} />
                </div>
              </div>

              <button onClick={handlesubmit}>Login</button>
            </div>
          </div>
        </form>
      </div>

      <div className="content5_1"></div>
    </>
  );
}

export default Login;
