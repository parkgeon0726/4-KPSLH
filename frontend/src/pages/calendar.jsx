import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarPage() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="calendar-page flex flex-col items-center space-y-6">
      <div className="flex justify-between items-center w-full px-4">
        <button onClick={() => onChange(new Date(value.setMonth(value.getMonth() - 1)))}>◀</button>
        <h2 className="text-3xl font-semibold">{value.toLocaleString("default", { month: "long" })} {value.getFullYear()}</h2>
        <button onClick={() => onChange(new Date(value.setMonth(value.getMonth() + 1)))}>▶</button>
      </div>
      <Calendar onChange={onChange} value={value} />
      <p className="mt-4 text-center">특정 날짜 클릭 시 1년 전~5년 후 일정 수정 가능</p>
    </div>
  );
}

