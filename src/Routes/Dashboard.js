import React from "react";
import "../Style.css";
import img from "../images/Dashboard1.jpg";
import { NavLink } from "react-router-dom";
function Dashboard() {
  return (
    <div className="dashboard aside">
      <div>
        {" "}
        <p className="p_head">
          Engage in mock interviews with our virtual interviewers, each designed
          to simulate the interviewing styles of HR managers, hiring managers,
          and industry professionals.
        </p>
        <img src={img} alt="Dashboard" />
        <NavLink className="btn_1 text-decoration-none" to="/Schedule">
          Start Interview
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M3 7.5H19C20.0609 7.5 21.0783 7.92143 21.8284 8.67157C22.5786 9.42172 23 10.4391 23 11.5V23.5C23 23.7652 22.8946 24.0196 22.7071 24.2071C22.5196 24.3946 22.2652 24.5 22 24.5H6C4.93913 24.5 3.92172 24.0786 3.17157 23.3284C2.42143 22.5783 2 21.5609 2 20.5V8.5C2 8.23478 2.10536 7.98043 2.29289 7.79289C2.48043 7.60536 2.73478 7.5 3 7.5V7.5Z"
              stroke="white"
              stroke-width="2"
              strokeLinecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M23 14L30 10V22L23 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </NavLink>
        <p className="p_foot">
          Our virtual interviewers are trained to evaluate your performance
          objectively, providing constructive feedback to help you improve.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
