import { useContext } from "react";
import { WheatherContext } from "../store/WheatherContext";

const InputSearch = () => {
    const {city, setFetchedCity, setCity, error, setLoading, setError, setWheather } = useContext(WheatherContext)

    const handleSubmit = async (e) => {
      e.preventDefault(); 
        try {
          setLoading(true);
          setError(null);
          setWheather(null);
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
          setWheather(result)
          setFetchedCity(city)
    
        } catch(err) {
          setError(err.message)
          console.log("catch ", error)
        } finally {
          setLoading(false)
        }
      };

      return (
        <div className="flex flex-col items-center gap-4 p-6 bg-blue-500 text-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold">Weather App</h1>
          <form 
            onSubmit={handleSubmit}
            className="flex gap-2"
          >
            <input
              type="text"
              placeholder="Enter city"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
                if (error) setError(null);
              }
              }
              className="p-2 border rounded-md text-black"
            />
            <button
              type="submit"
              className="bg-white text-blue-500 px-4 py-2 rounded-md font-semibold hover:bg-gray-200"
            >
              Submit
            </button>
          </form>
        </div>
      );
};

export default InputSearch;