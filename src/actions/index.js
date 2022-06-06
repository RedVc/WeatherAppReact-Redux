import transformForecast from './../services/transformForecast';
import transformWeather from '../services/transformWeather';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

const setCity = value => ({ type: SET_CITY, value });
const setForecastData = value => ({ type: SET_FORECAST_DATA, value })

const getWeatherCity = value => ({ type: GET_WEATHER_CITY, value })
const setWeatherCity = value => ({ type: SET_WEATHER_CITY, value })

const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";
const url = "http://api.openweathermap.org/data/2.5/forecast";
const url_weather = "http://api.openweathermap.org/data/2.5/weather";

export const setSelectedCity = payload => {

    /* el async es porque lo recomendaba el ide */
    return async (dispatch, getState) => {
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

        /* Activar en el estado un indicador de busqueda de datos */
        dispatch(setCity(payload))

        const state = getState();

        const date = state.cities[payload] && state.cities[payload].forecastDataDate;

        const now = new Date();

        /* en milisegundos */
        if (date && (now - date) < 1 * 60 * 1000){
            return;
        }

        return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);

                //Modificar el estado con el resultado de la promise(fetch)
                dispatch(setForecastData({ city: payload, forecastData }));
            }
        );
    };
};

export const setWeather = value => {

    return dispatch => {
        value.forEach(city => {

            dispatch(getWeatherCity(city));

            const api_weather = `${url_weather}?q=${city}&appid=${api_key}`;
            fetch(api_weather).then(data => {
                return data.json();
            }).then(weather_data => {
                const weather = transformWeather(weather_data);

                dispatch(setWeatherCity({ city, weather }));
            });
        });
    }

};