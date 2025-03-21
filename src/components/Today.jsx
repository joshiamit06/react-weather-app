import React, { useContext } from 'react'
import { WheatherContext } from '../store/WheatherContext'

function Today() {
    const {wheather, fetchedCity} = useContext(WheatherContext)
    return (
        <div className="mt-4 p-4 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-bold">Today's Weather at {wheather.location.name} ({wheather.location.region})</h2>
          <p className="text-lg">{wheather.current.feelslike_c} °C</p>
        </div>
      );
};

export default Today