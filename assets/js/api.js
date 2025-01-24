// /**
//  * @license MIT
//  * @fileoverview All api related stuff like api_key, api request etc.
//  * @copyright codewithsadee 2023 All rights reserved
//  * @author codewithsadee <mohammadsadee24@gmail.com>
//  */
  
//   'api strict';

//   const api_key =  "cf6a0b63b2625078a36c4987feb5909e";

//   /**
//    * fetch data from server
//    * @param {string} URL  API url 
//    * @param {Function} callback  callback
//    */

//   export const fetchData = function(URL , callback){
//     fetch(`${URL}&appid=${api_key}`)
//     .then(res => res.json())
//     .then(data => callback(data));
//   }

  
//   export const url = {
//     currentWeather(lat, lon){
//     return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
//     },
//     forecast(lat, lon){
//       return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
//     },
//     airPollution(lat, lon){
//       return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
//     },
//     reverseGeo(lat, lon){
//       return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
//     },
//     /**
//      * 
//      * @param {string} query Search query e.g.: "London" , "New York"
//      * @returns 
//      */
//     geo(query){
//       return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
//     }
//   }





/**
 * @license MIT
 * @fileoverview All API-related functionality, such as API keys and requests.
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee
 */

'api strict';

const api_key = "cf6a0b63b2625078a36c4987feb5909e";

/**
 * Fetch data from server
 * @param {string} URL - API URL
 * @param {Function} callback - Callback function to handle the response data
 */
export const fetchData = function (URL, callback) {
  fetch(`${URL}&appid=${api_key}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => callback(data))
    .catch((error) => console.error('Error fetching data:', error));
};

export const url = {
  /**
   * Generate a current weather API URL.
   * @param {number} lat - Latitude
   * @param {number} lon - Longitude
   * @returns {string} - API URL
   */
  currentWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;
  },

  /**
   * Generate a forecast API URL.
   * @param {number} lat - Latitude
   * @param {number} lon - Longitude
   * @returns {string} - API URL
   */
  forecast(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric`;
  },

  /**
   * Generate an air pollution API URL.
   * @param {number} lat - Latitude
   * @param {number} lon - Longitude
   * @returns {string} - API URL
   */
  airPollution(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}`;
  },

  /**
   * Generate a reverse geocoding API URL.
   * @param {number} lat - Latitude
   * @param {number} lon - Longitude
   * @returns {string} - API URL
   */
  reverseGeo(lat, lon) {
    return `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5`;
  },

  /**
   * Generate a geocoding API URL for searching locations by name.
   * @param {string} query - Search query (e.g., "London", "New York")
   * @returns {string} - API URL
   */
  geo(query) {
    return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
  },
};
