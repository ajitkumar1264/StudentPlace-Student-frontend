import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "./Company.css";

function Company() {

const [Data, setData] = useState([])
const getData=async()=>{
    
const response = await fetch(`https://studentplace-bakend.onrender.com/api/company/Data/fetchallcomp`, {
 method: "GET",
 mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
   const res= await response.json();
    console.log(res); 
    setData(res);
    console.log(Data);
  }

  useEffect(()=>{


    getData();

  },[])


  return (
    <>
      <div className="content14">
        <div className="con14">
          <div className="category">
           <h4 id="web">Web Developer</h4> 
            <h4 id="app">App Developer</h4>
          </div>

         <div className="line14"></div>

          <div className="grid">
      
          {Data.map((data,key)=>{
          
              return(
                <div className="box" key={key}>
                <h4><Link to={`/cominfor/${data._id}`}>{data.compname}</Link></h4>
              </div>
              )
            
           
          })}
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Company;
