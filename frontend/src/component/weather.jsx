import React, { useEffect, useState } from "react";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("위치 정보를 지원하지 않습니다.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      pos => {
        const { latitude, longitude } = pos.coords;
        const API_KEY = "68aba2217b339e542244ae59fbff52cc"; // OpenWeatherMap API 키
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=kr`)
          .then(res => res.json())
          .then(data => setWeather(data))
          .catch(() => setError("날씨 정보를 불러올 수 없습니다."));
      },
      () => setError("위치 정보를 가져올 수 없습니다.")
    );
  }, []);

  if (error) return <div className="weather">{error}</div>;
  if (!weather) return <div className="weather">날씨 정보를 불러오는 중...</div>;

return (
  <div className="weather">
    <p>현재 위치 날씨: {weather.weather[0].description}</p>
    <p>현재온도: {Math.round(weather.main.temp)}°C</p>
  </div>
);
}
export default Weather;