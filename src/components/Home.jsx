import { useContext, useEffect } from "react";
import { WeatherContext } from "../store/WeatherContext";
import { Link, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import { useParams } from "react-router-dom";

const Home = () => {
    const {city, setFetchedCity, setCity,weather, error, setLoading, setError, setWeather } = useContext(WeatherContext)
    const navigate = useNavigate()
    const {city:cityParam} = useParams();
    useEffect(()=>{
      if(cityParam && !weather){
        const fetchWeather = async () => {
          setLoading(true);
          setError(null);
          try{
            const response = await fetch(
            `https://api.weatherapi.com/v1/forecast.json?q=${cityParam}&days=14&key=ec73a4631e3f4d5899690729251203`,
            {
              method: "GET",
              mode: "cors",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          setWeather(data);
          setFetchedCity(cityParam)
          setCity(cityParam)
          } catch(err) {
            setError("Failed to fetch weather.");
          } finally {
            setLoading(false);
      }
        }
        fetchWeather();
      }
    },[cityParam, weather])


    const handleSubmit = async (e) => {
      e.preventDefault(); 
        try {
          setLoading(true);
          setError(null);
          setWeather(null);
          const response = await fetch(
            `https://api.weatherapi.com/v1/forecast.json?q=${city}&days=14&key=ec73a4631e3f4d5899690729251203`,
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
        navigate(`/${city}/today`);
      };

      return (
        <>
          <div
            className="relative bg-cover bg-center py-6 md:py-8 px-4"
            style={{
              backgroundImage: "url('https://source.unsplash.com/1600x900/?weather,clouds,sky')",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-3xl mx-auto text-center text-white space-y-4">
            <Link
              to="/"
              onClick={() => {
                setCity('');
                setWeather(null);
                setFetchedCity('');
                setError(null);
              }}
              className="block text-3xl md:text-4xl font-bold tracking-tight"
            >
              🌤️ Weather App
            </Link>

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
                  className="flex-1 px-5 py-2 text-gray-800 text-base focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="px-5 py-2 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                >
                  Search
                </button>
              </form>
            </div>
          </div>

        {/* Show layout (navbar + nested route) only if on /:city/* */}
        {cityParam && weather && <Layout />}
        </>

      );
};

export default Home;