import React, { useContext } from 'react'
import { WeatherContext } from '../store/WeatherContext'

function Error() {
    const {error} = useContext(WeatherContext)
    console.log(error);
    console.log("error called")
    
  return (
    <div>{error}</div>
  )
}

export default Error