import axios from 'axios';

export const getCurrentWeather = (city) => {
    return axios.get('http://api.openweathermap.org/data/2.5/weather', {
        params: {
            q:city,
            units:'metric',
            lang:'fr',
            APPID:'7dd2a0dabe181f6c9336b69f11ff86a2'
        }
    }).then(({data}) => {
        return {
            city,
            country: data.sys.country,
            temp: data.main.temp,
            desc: data.weather.map(w => w.description).join(',')
        }
    });
}