import React from "react";
import { NavLink } from "react-router-dom";
import "./Style.css";
const Header = () => {
  return (
    <header className="header">
      <div className="bell-icon">
        <NavLink to="/Account" className="bell-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M7.02502 13C7.02335 11.8145 7.25625 10.6403 7.7103 9.54522C8.16435 8.45009 8.83058 7.45561 9.67061 6.61906C10.5106 5.78251 11.5079 5.12042 12.6049 4.67093C13.7019 4.22144 14.877 3.99342 16.0625 4.00002C21.0125 4.03752 24.975 8.15002 24.975 13.1125V14C24.975 18.475 25.9125 21.075 26.7375 22.5C26.8251 22.6518 26.8713 22.8239 26.8715 22.9991C26.8716 23.1744 26.8258 23.3466 26.7384 23.4985C26.651 23.6504 26.5253 23.7767 26.3738 23.8647C26.2223 23.9527 26.0503 23.9994 25.875 24H6.12502C5.94978 23.9994 5.77778 23.9527 5.62625 23.8647C5.47472 23.7767 5.34899 23.6504 5.26163 23.4985C5.17428 23.3466 5.12839 23.1744 5.12854 22.9991C5.1287 22.8239 5.1749 22.6518 5.26252 22.5C6.08752 21.075 7.02502 18.475 7.02502 14V13Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 24V25C12 26.0609 12.4214 27.0783 13.1716 27.8284C13.9217 28.5786 14.9391 29 16 29C17.0609 29 18.0783 28.5786 18.8284 27.8284C19.5786 27.0783 20 26.0609 20 25V24"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle cx="23" cy="4" r="4" fill="#000AFF" />
          </svg>
        </NavLink>
      </div>
      <div className="profile-icon">
        <NavLink to="/Account" className="profile-link">
          <p>User Profile</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="43"
            viewBox="0 0 43 43"
            fill="none"
          >
            <circle
              cx="21.5"
              cy="21.5"
              r="21"
              fill="#D9D9D9"
              stroke="#989898"
            />
             <circle cx="34.7" cy="7.5" r="7.5" fill="#000AFF" />
          </svg>
          
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
