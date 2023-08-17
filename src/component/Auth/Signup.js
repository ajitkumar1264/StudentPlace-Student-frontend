import React,{useState} from 'react'
import "./Signup.css"
import { useNavigate } from 'react-router-dom'

function Signup() {


  const nav=useNavigate();

  const [Data, setData] = useState({name:"",email:"",password:""})

  const handlesubmit=async(e)=>{

    e.preventDefault();


    const response = await fetch(`https://studentplace-bakend.onrender.com/api/student/createuser`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
       
      },
      body: JSON.stringify({name:Data.name,email:Data.email,password:Data.password}), 
    });
   const res= await response.json();
    console.log(Data,res);
    localStorage.setItem('token',res.authtoken);
    if(res.status)
    {
      nav("/login");
    }
  }

  const handleonchange=(e)=>{

    setData({...Data,[e.target.name]:e.target.value})
  }

  return (
   <>
   
   <div className="content12">
        <div className="con12">
          <h6>GET IN TOUCH</h6>
          <div className="line"></div>
          <h1>Sign up Here</h1>
        </div>

        <form action="" className="form14">
          <div className="form15">
            <div className="form16">
              <div className="grid">
                <div className="data">
                  <p>Name</p>
                  <input type="text" id="name"  name='name' onChange={handleonchange}/>
                </div>
                <div className="data">
                  <p>Emaill</p>
                  <input type="text" id="name" name='email' onChange={handleonchange} />
                </div>
                <div className="data">
                  <p>Password</p>
                  <input type="text" id="name" name='password' onChange={handleonchange} />
                </div>
              </div>

              <button onClick={handlesubmit} >SIGN UP</button>
            </div>
          </div>
        </form>
      </div>

      <div className="content5_1"></div>
   
   
   </>
  )
}

export default Signup