/**
 * @license MIT
 * @fileoverview Menage all routes
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

`use strict`;

 import { updateWeather,  error404} from "./app.js";
  
 const defaultLocation = "#/weather?lat=51.5073219&lon=-0.1276474" // London

//  const currentLocation = function(){
//     window.navigator.geolocation.getCurrentPosition(res => {
//         const { latitude , longitude} = res.coords;
        
//         updateWeather(`lat=${latitude}` , `lon${longitude}`);
//     }, err => {
//         window.location.hash = defaultLocation;
//     })

//  }

const currentLocation = function() {
    window.navigator.geolocation.getCurrentPosition(res => {
        const { latitude, longitude } = res.coords;
        
        // Pass latitude and longitude together as a query string or an object
        updateWeather(`lat=${latitude}&lon=${longitude}`);
    }, err => {
        window.location.hash = defaultLocation;  // Fallback to default location if geolocation fails
    });
}


 /**
  * 
  * @param {string} query  Searched query
  */

 const searchedLocation = query => updateWeather(...query.split("&"));
 //updateWeather("lat=51.5073219" ,"lon=-0.1276474")


 const routes = new Map ([
    ["/current-location", currentLocation],
    ["/weather", searchedLocation]
 ]);

 const  checkHash = function (){
    const requestURL = window.location.hash.slice(1);

    const [route , query] = requestURL.includes ? requestURL.split("?") : [requestURL];

    routes.get(route) ? routes.get(route)(query) : error404();
 }

 window.addEventListener("hashchange", checkHash);

 window.addEventListener("load", function () {
    if(!window.location.hash){
        window.location.hash = "#/current-location";
    }else{
        checkHash();
    }
 });



