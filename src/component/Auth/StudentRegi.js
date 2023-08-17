import { useNavigate } from "react-router-dom";
import "./StudentRegi.css";
import React, { useState,useContext } from "react";
import context from "../context/context";

function StudentRegi() {
  const nav = useNavigate();
  const {setstudentRegi}=useContext(context)
  const [Data, setData] = useState({
    CollegeName: "",
    Name: "",
    emailAddress: "",
    SSCPercentage: "",
    Branch: "",
    SPI: "",
    HSCpercentage: "",
    CONTACTNO: "",
    projectName: "",
    projectDescri: "",
    projectLink: "",
  });

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(Data);

    const response = await fetch(
      `https://studentplace-bakend.onrender.com/api/student/v1/Studentinfo`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          Collagename: Data.CollegeName,
          Name: Data.Name,
          emailAddress: Data.emailAddress,
          SSCPercentage: Data.SSCPercentage,
          Branch: Data.Branch,
          SPI: Data.SPI,
          HSCpercentage: Data.HSCpercentage,
          CONTACTNO: Data.CONTACTNO,
          PROJECTS: [
            {
              projectName: Data.projectName,
              projectDescri: Data.projectDescri,
              projectLink: Data.projectLink,
            },
          ],
          CompanyApli: [],
        }),
      }
    );
    const res = await response.json();
    console.log(Data, res);
    if (res.status) {
      nav("/home");
      setstudentRegi(true);
    }
  };

  const handleonchange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="content13">
        <div className="con13">
          <h6>GET IN TOUCH</h6>
          <div className="line"></div>
          <h1>STUDENT REGISTER</h1>
        </div>

        <form action="" className="form17">
          <div className="form18">
            <div className="form19">
              <div className="grid">
                <div className="data">
                  <p>CollegeName</p>
                  <select
                    name="CollegeName"
                    id="cars"
                    onChange={handleonchange}
                  >
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div className="data">
                  <p>Name</p>
                  <input
                    type="text"
                    id="Name"
                    name="Name"
                    onChange={handleonchange}
                  />
                </div>
                <div className="data">
                  <p>emailAddress</p>
                  <input
                    type="text"
                    id="emailAddress"
                    name="emailAddress"
                    onChange={handleonchange}
                  />
                </div>
                <div className="data">
                  <p>SSCPercentage</p>
                  <input
                    type="text"
                    id="SSCPercentage"
                    name="SSCPercentage"
                    onChange={handleonchange}
                  />
                </div>
                <div className="data">
                  <p>Branch</p>
                  <select name="Branch" id="cars" onChange={handleonchange}>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div className="data">
                  <p>SPI</p>
                  <input
                    type="text"
                    id="SPI"
                    name="SPI"
                    onChange={handleonchange}
                  />
                </div>
                <div className="data">
                  <p>HSCpercentage</p>
                  <input
                    type="text"
                    id="HSCpercentage"
                    name="HSCpercentage"
                    onChange={handleonchange}
                  />
                </div>
                <div className="data">
                  <p>CONTACTNO</p>
                  <input
                    type="text"
                    id="CONTACTNO"
                    name="CONTACTNO"
                    onChange={handleonchange}
                  />
                </div>
              </div>

              <div className="data1">
                <p>projectName</p>
                <input
                  type="text"
                  id="projectName"
                  name="projectName"
                  onChange={handleonchange}
                />
              </div>
              <div className="data1">
                <p>projectDescri</p>
                <textarea
                  type="text"
                  rows={5}
                  id="projectDescri"
                  name="projectDescri"
                  onChange={handleonchange}
                />
              </div>
              <div className="data1">
                <p>projectLink</p>
                <input
                  type="text"
                  id="projectLink"
                  name="projectLink"
                  onChange={handleonchange}
                />
              </div>

              <button onClick={handlesubmit}>SUBMIT</button>
            </div>
          </div>
        </form>
      </div>

      <div className="content13_1"></div>
    </>
  );
}

export default StudentRegi;
