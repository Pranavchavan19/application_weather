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
//       return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
//     },
//     reverseGeo(lat, lon){
//       return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
//     },
//     /**
//      * 
//      * @param {string} query Search query e.g.: "London" , "New York"
//      * @returns 
//      */
//     geo(query){
//       return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
//     }
//   }


/**
 * @license MIT
 * @fileoverview All API-related functions like api_key, API requests, etc.
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee
 */

"use strict";

const api_key = "cf6a0b63b2625078a36c4987feb5909e";

/**
 * Fetch data from server
 * @param {string} URL API URL
 * @param {Function} callback Callback function
 */
export const fetchData = function (URL, callback) {
  fetch(`${URL}&appid=${api_key}`)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    })
    .then((data) => callback(data))
    .catch((error) => {
      console.error("Error fetching data:", error);
      callback(null); // Pass null to indicate an error
    });
};

export const url = {
  currentWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;
  },
  forecast(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric`;
  },
  airPollution(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}`;
  },
  reverseGeo(lat, lon) {
    return `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5`;
  },
  /**
   * Build a URL for searching locations by query.
   * @param {string} query Search query (e.g., "London", "New York")
   * @returns {string} API URL
   */
  geo(query) {
    return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
  },
};
