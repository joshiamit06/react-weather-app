import React, { useContext } from 'react'
import { WheatherContext } from '../store/WheatherContext';

function Navbar() {
    const {selectedTab, setSelectedTab} = useContext(WheatherContext)
    const tabs = ["Today", "Hourly", "Daily", "Historical", "Astronomical"];

  return (
    <nav className='bg-gray-200 py-2 mt-4 w-full flex justify-center'>
    {tabs.map((tab)=> (
        <button 
        key={tab}
        onClick={()=> setSelectedTab(tab)}
        className={`px-4 py-2 mx-2 rounded-md ${
            selectedTab === tab ? "bg-blue-500 text-white" : "text-gray-700"
          }`}
        >
        {tab}
        </button>
    ))}

    </nav>
  )
}

export default Navbar