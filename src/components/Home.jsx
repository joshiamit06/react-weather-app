import { useContext } from "react";
import { WeatherContext } from "../store/WeatherContext";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Layout from "./Layout";

const Home = () => {
    const {city, setFetchedCity, setCity,weather, error, setLoading, setError, setWeather } = useContext(WeatherContext)
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
      e.preventDefault(); 
        try {
          setLoading(true);
          setError(null);
          setWeather(null);
          const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?q=${city}&key=ec73a4631e3f4d5899690729251203`,
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
            console.log("called")
            return;
          }
    
          const result = await response.json()
          console.log("result :",result)
          setWeather(result)
          setFetchedCity(city)
    
        } catch(err) {
          setError(err.message)
          console.log("catch ", error)
        } finally {
          setLoading(false)
        }
        navigate('/today')
      };

      return (
        <>
        <div
          className="relative bg-cover bg-center py-10 px-4 md:py-16"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/1600x900/?weather,clouds,sky')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

          {/* Content */}
          <div className="relative z-10 w-full max-w-2xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">🌤️ Weather App</h1>
            <form
              onSubmit={handleSubmit}
              className="flex bg-white rounded-full overflow-hidden shadow-lg"
            >
              <input
                type="text"
                placeholder="Search for a city..."
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                  if (error) setError(null);
                }}
                className="flex-1 px-5 py-3 text-gray-800 text-base focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div>
          {weather && (
            <Layout />
          )}
        </div>
        </>
      );
};

export default Home;