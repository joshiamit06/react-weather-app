import { createContext, useRef } from "react";
import { useState } from "react";

export const WheatherContext = createContext();

const WheatherContextProvider = ({children}) => {
    const [city, setCity] = useState('');
    const [fetchedCity, setFetchedCity] = useState('')
    const [wheather, setWheather] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [selectedTab, setSelectedTab] = useState('Today');


    return (
    <WheatherContext.Provider value={{city, setCity, fetchedCity, setFetchedCity, wheather, setWheather, error, setError, loading,
        setLoading, selectedTab, setSelectedTab}}>
        {children}
    </WheatherContext.Provider>
    );
};

export default WheatherContextProvider;