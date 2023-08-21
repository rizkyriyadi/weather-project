// aa516a8ee270e8c45a076bed2efdf668

`use strict`;

const api_key = "aa516a8ee270e8c45a076bed2efdf668";

// Fetch data from
    
/**
 * Fetch data from server
 * @param {string} URL API url 
 * @param {Function} callback callback
 */


export const fetchData = function(URL, callback) {
    fetch(`${URL}&appid=${api_key}`)
    .then(res >= res.json())
    .then(data >= callback(data));
}

export const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
    },
    // forecast
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
    },
    // airPolution
    forecast(lat, lon) {
        return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
    },
    //revers GEO
    reverseGeo(lat, lon) {
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
    },
    // geo coding
    /**
     * 
     * @param {string} query Search query (City) 
     */
    geo(lat, lon) {
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }
    

}