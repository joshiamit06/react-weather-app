import { useContext, useEffect, useRef, useState } from "react";
import "./App.css";
import InputSearch from "./components/InputSearch";
import { WheatherContext } from "./store/WheatherContext";
import Loading from "./components/Loading";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import Today from "./components/Today";
import Hourly from "./components/Hourly";
import Daily from "./components/Daily";

function App() {
  const {wheather, error, loading, selectedTab} = useContext(WheatherContext)

  const tabComponent = {
    Today : <Today/>,
    Hourly : <Hourly/>,
    Daily : <Daily/>
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <InputSearch/>
      {loading ? <Loading/> : error ? <Error/> : wheather ? 
      <>
      <Navbar/>
      {tabComponent[selectedTab]}
      </> 
      
      : null}
  </div>
  );
}

export default App;
