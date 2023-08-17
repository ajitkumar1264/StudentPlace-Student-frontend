import React, { useEffect, useState, useContext } from "react";
import context from "../context/context";

function StudentData() {
  const { setstudentRegi } = useContext(context);
  const [Data, setData] = useState([]);
  const [len, setlen] = useState(0);
  const getData = async () => {
    const response = await fetch(
      `https://studentplace-bakend.onrender.com/api/student/v1/userdatafetch`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const res = await response.json();
    console.log(res.length);
   setlen(res.length);
    if (res.length != 0) {
      setstudentRegi(false);
    }
    else{
      setstudentRegi(true);
    }
    setData([res[0]]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="content13">
        <div className="con13">
          <h6>GET IN TOUCH</h6>
          <div className="line"></div>
          <h1>STUDENT Data</h1>
        </div>
        {
          len==0 && <h1>Go insight section And Register</h1>
        }
        {len !== 0 &&
          Data.map((data, key) => {
            return (
              <form action="" className="form17" key={key}>
                <div className="form18">
                  <div className="form19">
                    <div className="grid">
                      <div className="data">
                        <p>CollegeName</p>
                        <h3>{data.Collagename}</h3>
                      </div>
                      <div className="data">
                        <p>Name</p>
                        <h3>{data.Name}</h3>
                      </div>
                      <div className="data">
                        <p>emailAddress</p>
                        <h5>{data.emailAddress}</h5>
                      </div>
                      <div className="data">
                        <p>SSCPercentage</p>
                        <h3>{data.SSCPercentage}%</h3>
                      </div>
                      <div className="data">
                        <p>Branch</p>
                        <h3>{data.Branch}</h3>
                      </div>
                      <div className="data">
                        <p>SPI</p>
                        <h3>{data.SPI}</h3>
                      </div>
                      <div className="data">
                        <p>HSCpercentage</p>
                        <h3>{data.HSCpercentage}%</h3>
                      </div>
                      <div className="data">
                        <p>CONTACTNO</p>
                        <h4>{data.CONTACTNO}</h4>
                      </div>
                      <div className="data">
                        <p>TotalapplyCompany</p>
                        <h4>{data.CompanyApli.length}</h4>
                      </div>
                      {data.CompanyApli.map((value, key) => {
                        return (
                          <div className="data">
                            <p>{value.Cname}</p>
                            <h4>{value.Status}</h4>
                          </div>
                        );
                      })}
                    </div>

                    <div className="data1">
                      <p>projectName</p>
                      <h3>{data.PROJECTS[0].projectName}</h3>
                    </div>
                    <div className="data1">
                      <p>projectDescri</p>
                      <h4>{data.PROJECTS[0].projectDescri}</h4>
                    </div>
                    <div className="data1">
                      <p>projectLink</p>
                      <h3>{data.PROJECTS[0].projectLink}</h3>
                    </div>
                  </div>
                </div>
              </form>
            );
          })}
      </div>

      <div className="content13_1"></div>
    </>
  );
}

export default StudentData;
