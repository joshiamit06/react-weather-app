import React, { useContext, useEffect, useState } from 'react'
import { WeatherContext } from '../store/WeatherContext'

function Hourly() {
  const {city} = useContext(WeatherContext)
  const [hourData, setHourData] = useState([])
  console.log("hour data: ",hourData)
  const date = new Date()
  const currHours = date.getHours()

  useEffect(()=> {
   const hourlyData = async () => {
    try{
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?q=${city}&days=1&key=ec73a4631e3f4d5899690729251203`)
      const result = await response.json()
      console.log("hourly result: ", result.forecast.forecastday[0].hour)
      setHourData(result.forecast.forecastday[0].hour)

    } catch(error) {
      console.log(error)

    }
   }
   hourlyData()

  },[])
  return (
    <div className="flex gap-4 overflow-x-auto py-4">
      {hourData.map((data, index) => (data.time.split(" ")[1].split(":")[0] >= currHours &&
        <div
          key={index}
          className="flex flex-col justify-between items-center w-28 min-w-[7rem] h-64 bg-white rounded-2xl shadow-md p-4 text-center"
        >
          <div className="text-sm font-semibold text-gray-500">
            {data.time.split(" ")[1]}
          </div>
          <img
            src={data.condition.icon}
            alt={data.condition.text}
            className="w-12 h-12"
          />
          <div className="text-2xl font-bold text-blue-600">
            {data.temp_c}°C
          </div>
          <div className="text-xs text-gray-500">{data.condition.text}</div>
          <div className="text-sm text-gray-600 flex items-center gap-1">
            💧 {data.humidity}%
          </div>
          <div className="text-xs text-gray-500">
            🌬️ {data.wind_kph} km/h
          </div>
        </div>
      ))}
    </div>

    
  )
}

export default Hourly