/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

//const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";
//const url = "http://api.openweathermap.org/data/2.5/forecast";

const renderForecastItemDays = (forecastData) => {
    return forecastData.map( forecast => (
        <ForecastItem 
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay} 
            hour={forecast.hour} 
            data={forecast.data}>
        </ForecastItem>));
}

const renderProgress = () => {
    return <h3>Cargando Pronóstico extendido...</h3>;
}

const ForecastExtended = ({city, forecastData}) => (
         <div>
            <h2 className='forecast-title'>Pronóstico Extendido para</h2>
            <h3 className='forecast-title country'>{city}</h3>
            {forecastData ? 
                renderForecastItemDays(forecastData) :
                renderProgress()}
        </div>
);


ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired
}

export default ForecastExtended;