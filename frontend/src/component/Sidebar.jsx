import React from "react";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <span
          className="sidebar-today clickable"
          role="button"
          tabIndex={0}
          style={{ cursor: "pointer" }}
          onClick={() => alert('오늘 클릭!')}
        >오늘</span>
        <span
          className="sidebar-calendar clickable"
          role="button"
          tabIndex={0}
          style={{ cursor: "pointer" }}
          onClick={() => alert('캘린더 클릭!')}
        >캘린더</span>
      </div>
      <div className="sidebar-section">
        <div className="card">
          뉴스속보
          <ul>
            <li>속보1</li>
            <li>속보2</li>
            <li>속보3</li>
          </ul>
        </div>
        <div className="card">
          오늘의 운세
          <p>운좋으실듯</p>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;