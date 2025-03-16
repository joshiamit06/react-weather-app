import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const cityRef = useRef(null);
  const [wheatherRes, setWheatherRes] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleSubmit = async () => {
    const cityVal = cityRef.current.value;

    try {
      setLoading(true);
      setError(null);
      setWheatherRes(null);
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?q=${cityVal}&key=ec73a4631e3f4d5899690729251203`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {      
        setError("No matching location found.")
        return;
      }

      const result = await response.json()
      console.log("result :",result)
      setWheatherRes(result)

    } catch(err) {
      setError(err.message)
      console.log("catch ", error)
    } finally {
      setLoading(false)
    }
  };

  return (
    <>
      <h1>Weather App</h1>
      <input type="text" placeholder="Enter city" ref={cityRef} />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      <h3>{loading ? <p>Loading...</p> : error ? <p>{error}</p> : wheatherRes ? <p>{wheatherRes.current.feelslike_c}°C</p> : <p>No data found</p>}</h3>
    </>
  );
}

export default App;
