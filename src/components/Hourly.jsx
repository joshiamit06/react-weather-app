import React, { useContext, useEffect, useState } from 'react'
import { WheatherContext } from '../store/WheatherContext'

function Hourly() {
  const {city} = useContext(WheatherContext)
  const [hourData, setHourData] = useState([])

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
    <div>
      {hourData.map((data)=> (<div>
        <h3>{data.time}</h3>
        <p>{data.temp_c}</p>
      </div>) )}

    </div>
    
  )
}

export default Hourly