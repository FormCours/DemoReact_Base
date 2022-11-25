import { useCallback, useState } from 'react';
import SearchBar from '../../components/search-bar/search-bar';
import WeatherRequester from '../../components/weather-requester/weather-requester';

const ExoAjaxWeather = () => {

    const [city, setCity] =  useState(null);

    const handleSearch = useCallback((city) => {
        setCity(city);
    });

    return (
        <>
            <SearchBar 
                label='Recherche météo'
                placeholder='Boussu'
                onSearch={handleSearch} />
            {city ? (
                <WeatherRequester city={city} />
            ) : (
                <p>Veuillez recherche une ville !</p>
            )}
        </>
    )
}

export default ExoAjaxWeather;