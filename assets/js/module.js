/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright PranavChavan 2025 All rights reserved
 * @author PranavChavan <pranav1952000@gmail.com>
 */

`use strict`;

export const  weekDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wensday",
    "Thrusday",
    "Friday",
    "Saturday"
];

export const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

/**
 * 
 * @param {number} dateUnix  Unix date in seconds
 * @param {number} timezone  Timezone shift form  UTC in seconds
 * @returns {string} Date String. formate:"Sunday 10, Jan"
 */

export const getDate = function(dateUnix, timezone) {
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDate()} , ${monthName}`;
}

/**
 * 
 * @param {number} timeUnix  Unix date seconds
 * @param {number} timezone  Timezone shift from UTC in seconds
 * @returns {string} Time string. format:"HH:MM AM/PM"
 */

export const getTime = function(timeUnix , timezone){
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const miniutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12}:${miniutes} ${period}`;
}


/**
 * 
 * @param {number} timeUnix  Unix date seconds
 * @param {number} timezone  Timezone shift from UTC in seconds
 * @returns {string} Time string. format:"HH AM/PM"
 */

export const getHours = function(timeUnix , timezone){
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12} ${period}`;
}

/**
 * 
 * @param {number} mps  Metter per seconds
 * @returns {number}  Kilometer per hours
 */

export const mps_to_kmh = mps => {
    const mph = mps * 3600;
    return mph / 1000;
}

export const aqiText = {
    1 : {
        level: "Good",
        message : "Air quality is considered  satisfactory, and air pollution poses little or no risk"
    },
    2:{
        level: "Fair",
        message: "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusuailly senstitive to air pollution"
    },
    3 : {
        level: "Moderate",
        message : "Member of senstitive groups may experiance health effect . the general public is not likely to be affected  "
    },
    3 : {
        level: "Poor",
        message : "Everyone may begain to experiance health effect . Members of sensitive groups may experiance more serious health affecct "
    },
    5 : {
        level: "very Poor",
        message : "Air quality is considered  satisfactory, and air pollution poses little or no risk"
    },
}