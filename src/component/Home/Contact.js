import React from "react";
import "./Contact.css";
//import image1 from "../../Images/svg+xml;base64,PHN2ZyBpZD0idGhlLWNvdyIgY2xhc3M9ImNvdyIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iMzVweCIgdmlld0JveD0iMCAwIDQ4IDM1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly.svg"

function Contact() {
  return (
    <>
      <div className="content5">
      <img src={image1} alt="warn" />
        <div className="con5">
          <h6>GET IN TOUCH</h6>
          <div className="line"></div>
          <h1>Take Me to Your Leader</h1>
          <h5>
            Got a project you're excited about and think we can help? Contact
            Bryan at getstarted@zurb.com and (650) 533-0469
          </h5>
        </div>

        <form action="" className="form">
          <div className="form1">
            <div className="form2">
              <div className="grid">
                <div className="data">
                  <p>Name</p>
                  <input type="text" id="name" />
                </div>
                <div className="data">
                  <p>Phone Number</p>
                  <input type="text" id="name" />
                </div>
                <div className="data">
                  <p>Company</p>
                  <input type="text" id="name" />
                </div>
                <div className="data">
                  <p>Company</p>
                  <input type="text" id="name" />
                </div>
              </div>
              <div className="data1">
                <p>Email Address</p>
                <input type="text" id="name" />
              </div>

              <button>Beam Me Up</button>
            </div>
          </div>
        </form>
      </div>

      <div className="content5_1">
      </div>

    </>
  );
}

export default Contact;
