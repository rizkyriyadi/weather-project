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
    .then(res => res.json())
    .then(data => callback(data));
}

export const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric&appid=aa516a8ee270e8c45a076bed2efdf668`
    },
    // forecast
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric&appid=aa516a8ee270e8c45a076bed2efdf668`
    },
    // airPolution
    airPollution(lat, lon) {
        return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}&appid=aa516a8ee270e8c45a076bed2efdf668`
    },
    //revers GEO
    reverseGeo(lat, lon) {
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5&appid=aa516a8ee270e8c45a076bed2efdf668`
    },
    // geo coding
    /**
     * 
     * @param {string} query Search query (City) 
    //  */
    // geo(query) {
    //     return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=aa516a8ee270e8c45a076bed2efdf668`;
    // }
    geo(query) {
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=aa516a8ee270e8c45a076bed2efdf668`
    }
    

}