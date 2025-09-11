import React from "react";
function getTodayString() {
  const today = new Date();
  const year = today.getFullYear() % 10000;
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const dayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const day = dayNames[today.getDay()];
  return `${year}년 ${month}월 ${date}일 ${day}`;
}
export default getTodayString;