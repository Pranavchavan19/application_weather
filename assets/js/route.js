// /**
//  * @license MIT
//  * @fileoverview Menage all routes
//  * @copyright codewithsadee 2023 All rights reserved
//  * @author codewithsadee <mohammadsadee24@gmail.com>
//  */

// `use strict`;

//  import { updateWeather,  error404} from "./app.js";
  
//  const defaultLocation = "#/weather?lat=51.5073219&lon=-0.1276474" // London

//  const currentLocation = function(){
//     window.navigator.geolocation.getCurrentPosition(res => {
//         const { latitude , longitude} = res.coords;

//         updateWeather(`lat=${latitude} , lon${longitude}`)
//     }, err => {
//         window.location.hash = defaultLocation;
//     })

//  }

//  /**
//   * 
//   * @param {string} query  Searched location
//   */

//  const searchedLocation = query => updateWeather(...query.split("&"));
//  //updateWeather("lat=51.5073219" ,"lon=-0.1276474")


//  const routes = new Map ([
//     ["/current-location", currentLocation],
//     ["/weather", searchedLocation]
//  ]);

//  const  checkHash = function (){
//     const requestURL = window.location.hash.slice(1);

//     const [route , query] = requestURL.includes ? requestURL.split("?") : [requestURL];

//     routes.get(route) ? routes.get(route)(query) : error404();
//  }

//  window.addEventListener("hashchange", checkHash)

//  window.addEventListener("load", function () {
//     if(!window.location.hash){
//         window.location.hash = "#/current-location";
//     }else{
//         checkHash();
//     }
//  });




/**
 * @license MIT
 * @fileoverview Manage all routes
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee
 */

"use strict";

import { updateWeather, error404 } from "./app.js";

const defaultLocation = "#/weather?lat=51.5073219&lon=-0.1276474"; // London

// Function to handle current location
const currentLocation = function () {
  window.navigator.geolocation.getCurrentPosition(
    (res) => {
      const { latitude, longitude } = res.coords;

      // Correctly format the query string for lat & lon
      updateWeather(`lat=${latitude}&lon=${longitude}`);
    },
    (err) => {
      console.error("Error fetching location:", err.message);
      // Redirect to default location if geolocation fails
      window.location.hash = defaultLocation;
    }
  );
};

/**
 * Handle searched location
 * @param {string} query - Query string for searched location
 */
const searchedLocation = (query) => updateWeather(...query.split("&"));

// Define available routes
const routes = new Map([
  ["/current-location", currentLocation],
  ["/weather", searchedLocation],
]);

// Function to handle route changes
const checkHash = function () {
  const requestURL = window.location.hash.slice(1);

  // Correctly split route and query
  const [route, query] = requestURL.includes("?")
    ? requestURL.split("?")
    : [requestURL];

  // Call the appropriate route handler or show error page
  routes.get(route) ? routes.get(route)(query) : error404();
};

// Listen for hash changes
window.addEventListener("hashchange", checkHash);

// Initialize app on page load
window.addEventListener("load", function () {
  if (!window.location.hash) {
    // Set default route if hash is missing
    window.location.hash = "#/current-location";
  } else {
    checkHash();
  }
});
