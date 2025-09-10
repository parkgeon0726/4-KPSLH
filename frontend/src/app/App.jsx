import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/home";
import Calendar from "./pages/calendar";    // 파일명과 대소문자 일치
import News from "./component/news";
import Taro from "./component/taro";
import Weather from "./component/weather";
import Stock from "./component/stock";

export default function App() {
  return (
    <Router>
      <div className="app-root flex min-h-screen">
        {/* 사이드바 */}
        <aside className="sidebar w-[220px] bg-[#f8f5fa] border-r border-[#ece4eb] p-8 flex flex-col justify-between">
          <nav>
            <NavLink to="/" end className="nav-link" activeclassname="active">
              오늘
            </NavLink>
            <NavLink to="/calendar" className="nav-link" activeclassname="active">
              캘린더
            </NavLink>
          </nav>
          <div className="widgets mt-10">
            <div className="widget-title">뉴스속보</div>
            <News />
            <div className="widget-title mt-8">오늘의 운세</div>
            <Taro />
          </div>
        </aside>

        {/* 메인 컨텐츠 */}
        <main className="main-content flex-1 flex flex-col bg-white">
          {/* 헤더 */}
          <header className="header flex justify-between items-start p-8 bg-[#fffdfc] border-b border-[#ece4eb]">
            <div className="text-2xl font-bold text-[#2b2631]">오늘 (현재날짜 표시)</div>
            <div className="header-weather flex items-center text-base">
              <Weather />
            </div>
          </header>

          {/* 페이지 라우팅 영역 */}
          <section className="content-section flex-1 p-8 overflow-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </section>
        </main>
      </div>
    </Router>
  );
}


