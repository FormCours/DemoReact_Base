import { useEffect, useState } from 'react';
import * as weatherAPI from '../../api/weather.api';
import Loading from '../loading/loading';

const WeatherResult = ({city, country, temp, desc}) => (
    <div>
        <p>{city} ({country})</p>
        <p>{temp}°c</p>
        <p>{desc}</p>
    </div>
);

const WeatherRequester = ({city}) => {

    const [result, setResult] = useState({
        loading: false,
        data: null,
        error: null
    });

    useEffect(() => {
        setResult({
            loading: true, data: null, error: null
        });

        weatherAPI.getCurrentWeather(city)
            .then(data => setResult({
                loading: false,
                data
            }))
            .catch(({message}) => setResult({
                loading: false,
                error: message
            }));

    }, [city])

    if(result.loading) {
        return <Loading />
    }

    if(result.error) {
        return <p>{result.error}</p>
    }

    return <WeatherResult {...result.data} />
}

export default WeatherRequester;