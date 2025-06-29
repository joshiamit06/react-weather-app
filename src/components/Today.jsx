import React, { useContext } from 'react';
import { WeatherContext } from '../store/WeatherContext';

function Today() {
  const { weather, fetchedCity } = useContext(WeatherContext);
  const { location, current } = weather;

  return (
    <div className="mt-4 w-full max-w-xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Today's Weather in <span className="text-blue-600">{location.name}</span>, {location.region}
      </h2>

      <div className="flex items-center justify-between gap-6">
        {/* Weather Icon & Description */}
        <div className="flex items-center gap-4">
          <img src={current.condition.icon} alt={current.condition.text} className="w-16 h-16" />
          <span className="text-lg text-gray-700">{current.condition.text}</span>
        </div>

        {/* Temperature */}
        <div className="text-4xl font-bold text-blue-600">
          {current.feelslike_c}°C
        </div>
      </div>
    </div>
  );
}

export default Today;
