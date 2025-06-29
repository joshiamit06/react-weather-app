import { createContext, useRef } from "react";
import { useState } from "react";

export const WeatherContext = createContext();

const WeatherContextProvider = ({children}) => {
    const [city, setCity] = useState('');
    const [fetchedCity, setFetchedCity] = useState('')
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [selectedTab, setSelectedTab] = useState('Today');


    return (
    <WeatherContext.Provider value={{city, setCity, fetchedCity, setFetchedCity, weather, setWeather, error, setError, loading,
        setLoading, selectedTab, setSelectedTab}}>
        {children}
    </WeatherContext.Provider>
    );
};

export default WeatherContextProvider;