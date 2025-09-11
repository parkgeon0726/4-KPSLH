import React, { useState } from "react";
import icon from '../assets/icon.svg';

function Sidebar() {
  const [active, setActive] = useState("");
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img src={icon} alt="icon" style={{ width: "25px", height: "25px"}} />
        <span
          className={`sidebar-today clickable${active === "today" ? " active-red" : ""}`}
          role="button"
          tabIndex={0}
          style={{ cursor: "pointer" }}
          onClick={() => setActive("today")}
        >오늘</span>
        <span
          className={`sidebar-calendar clickable${active === "calendar" ? " active-red" : ""}`}
          role="button"
          tabIndex={0}
          style={{ cursor: "pointer" }}
          onClick={() => setActive("calendar")}
        >캘린더</span>
      </div>
      <div className="sidebar-section">
        <div className="card">
          <h3>뉴스속보</h3>
          <ul>
            <li>속보1</li>
            <li>속보2</li>
            <li>속보3</li>
          </ul>
        </div>
        <div className="card">
          <h3>오늘의 운세</h3>
          <p>운좋으실듯</p>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;