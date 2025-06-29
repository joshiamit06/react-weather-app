import { useContext } from "react";
import { WeatherContext } from "../store/WeatherContext";

function Daily() {
  const { weather } = useContext(WeatherContext);
  const { forecast } = weather;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {forecast.forecastday.map((day, idx) => (
        <div key={idx} className="bg-white shadow rounded-xl p-4">
          <h3 className="font-bold text-blue-600">{day.date}</h3>
          <p>{day.day.condition.text}</p>
          <img src={day.day.condition.icon} alt="" />
          <p>Max: {day.day.maxtemp_c}°C | Min: {day.day.mintemp_c}°C</p>
          <p>Humidity: {day.day.avghumidity}%</p>
        </div>
      ))}
    </div>
  );
}

export default Daily;
