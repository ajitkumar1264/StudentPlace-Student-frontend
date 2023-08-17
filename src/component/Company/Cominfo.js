import React, { useEffect, useState } from "react";
import "./Cominfo.css";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import context from "../context/context";


function Cominfo() {

    const {login}=useContext(context);
    const nav=useNavigate();
    const [Data, setData] = useState({CName:"",Role:"",status:0});
    const [Dat, setDat] = useState([])


    const {id}=useParams();
    console.log(id)


    const getData=async()=>{

    
      const response = await fetch(`https://studentplace-bakend.onrender.com/api/company/Data/cominfor/com/${id}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
     const res= await response.json();
      console.log(res);
      setDat([res]);
    }



useEffect(()=>{

  getData();

},[id])





    const handlesubmit=async(e)=>{

      e.preventDefault();
  
  
      const response = await fetch(`https://studentplace-bakend.onrender.com/api/student/v1/CApply`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },
        body: JSON.stringify({Cname:Data.CName.toUpperCase(),Role:Data.Role,Status:Data.status}), 
      });
     const res= await response.json();
      console.log(Data,res);

      if(res.status)
      {
        nav("/company");
      }
    }
  
    const handleonchange=(e)=>{
  
      setData({...Data,[e.target.name]:e.target.value})
    }

    const data=true;
  return (
    <>
      <div className="content15">
        <div className="con15">

        {  data && Dat.map((data,key)=>{
          return(
            <>
            <div className="details" key={key}>
              <h2>{data.compname}</h2>
              <h3>{data.location}</h3>
              <h4>{data.link}</h4>
              </div><div className="line15"></div><div className="jobdet">
                <h3 className="ti">Job Details</h3>
                <div className="jobdetails">
                  <div className="skills">
                    <h3>Skills</h3>
                    {data.skills.map((val)=>{
                      return(
                        <h4>{val}</h4>
                      )
                    })}
                    
                  </div>
                  <div className="Role">
                    <h3>Role</h3>
                    {data.role.map((val)=>{
                      return(
                        <h4>{val}</h4>
                      )
                    })}
                  </div>
                  <div className="salary">
                    <h3>Salary</h3>
                    <h4>{data.salary}</h4>
                  </div>
                  <div className="jobtype">
                    <h3>Job Type</h3>
                    <h4>{data.type}</h4>
                  </div>
                  <div className="shift">
                    <h3>Shift and Schedule</h3>
                    <h4>{data.schedule}</h4>
                  </div>
                  <div className="job Description">
                    <h3>job Description</h3>
                    <h4>
                     {data.jobdescri}
                    </h4>
                  </div>
                  <div className="job Description">
                    <h3>Form</h3>
                    <input type="text" name="CName" placeholder="Company" value={Data.CName} onChange={handleonchange} />
                    <input type="text" name="Role" placeholder="Role" value={Data.Role} onChange={handleonchange} />
                  </div>

                {login &&  <button onClick={handlesubmit}>Apply here</button> } 
                </div>
              </div>
              </>

          )
        })}
          
        </div>
      </div>
    </>
  );
}

export default Cominfo;
