/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display-data.js":
/*!*****************************!*\
  !*** ./src/display-data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildPageSkeleton": () => (/* binding */ buildPageSkeleton),
/* harmony export */   "displayBackground": () => (/* binding */ displayBackground)
/* harmony export */ });
/* harmony import */ var _fetch_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch-data.js */ "./src/fetch-data.js");
// imports 
    

    // images
    





///////////build page based on data passed through function as argument.//////////////////////////////////////////

    function buildPageSkeleton(relativeData) {
        // delete old page
        document.body.innerHTML = "";
        // create elements
        const searchDiv = document.createElement("div");
        searchDiv.classList.add("search-div");
        searchDiv.id = "search-div";
        document.body.appendChild(searchDiv);
    
            const searchInput = document.createElement("input");
            searchInput.classList.add("search-input");
            searchInput.id = "search-input";
            searchInput.placeholder = "Search for a location";
            searchDiv.appendChild(searchInput);
    
            const searchBtn = document.createElement("img");
            searchBtn.src = "https://img.icons8.com/ios/50/ffffff/search--v1.png";
            searchBtn.classList.add("search-button");
            searchBtn.id = "search-button";
            searchBtn.textContent = "Search";
            searchDiv.appendChild(searchBtn);
            searchBtn.addEventListener("click", async () => {
                let data = await (0,_fetch_data_js__WEBPACK_IMPORTED_MODULE_0__.getSearchLocationData)(searchInput.value);
                displayBackground(data);
                buildPageSkeleton(data);
            }
            )
    
        const currentTimeDiv = document.createElement("div");
        currentTimeDiv.classList.add("current-time-div");
        currentTimeDiv.id = "current-time-div";
        document.body.appendChild(currentTimeDiv);
    
            const currentTime = document.createElement("h2");
            currentTime.classList.add("current-time");
            currentTime.id = "current-time";
            currentTime.textContent = relativeData[0].location.localtime.slice(-5);
            currentTimeDiv.appendChild(currentTime);
    
        const dashBoardDiv = document.createElement("div");
        dashBoardDiv.classList.add("dashboard-div");
        dashBoardDiv.id = "dashboard-div";
        document.body.appendChild(dashBoardDiv);
    
            const currentIcon = document.createElement("img");
            currentIcon.classList.add("current-icon");
            currentIcon.id = "current-icon";
            currentIcon.src = relativeData[0].current.condition.icon;
            dashBoardDiv.appendChild(currentIcon);
    
            const locationNameDiv = document.createElement("div");
            locationNameDiv.classList.add("location-name-div");
            locationNameDiv.id = "location-name-div";
            dashBoardDiv.appendChild(locationNameDiv);
    
                const cityName = document.createElement("h2");
                cityName.classList.add("city-name");
                cityName.id = "city-name";
                cityName.textContent = relativeData[0].location.name;
                locationNameDiv.appendChild(cityName);
    
                const countryName = document.createElement("h2");
                countryName.classList.add("country-name");
                countryName.id = "country-name";
                countryName.textContent = relativeData[0].location.country;
                locationNameDiv.appendChild(countryName);
    
            const currentTempDiv = document.createElement("div");
            currentTempDiv.classList.add("current-temp-div");
            currentTempDiv.id = "current-temp-div";
            dashBoardDiv.appendChild(currentTempDiv);

                const currentTempLogo = document.createElement("img");
                currentTempLogo.classList.add("current-temp-logo");
                currentTempLogo.id = "current-temp-logo";
                currentTempLogo.src = "https://img.icons8.com/ios/50/ffffff/temperature.png";
                currentTempDiv.appendChild(currentTempLogo);
    
                const currentTemp = document.createElement("h2");
                currentTemp.classList.add("current-temp");
                currentTemp.id = "current-temp";
                currentTemp.textContent = relativeData[0].current.temp_c + "°C";
                currentTempDiv.appendChild(currentTemp);
    
            const currentConditionDiv = document.createElement("div");
            currentConditionDiv.classList.add("current-condition-div");
            currentConditionDiv.id = "current-condition-div";
            dashBoardDiv.appendChild(currentConditionDiv);
    
                const currentCondition = document.createElement("h2");
                currentCondition.classList.add("current-condition");
                currentCondition.id = "current-condition";
                currentCondition.textContent = ("The weather right now is " + relativeData[0].current.condition.text);
                currentConditionDiv.appendChild(currentCondition);
    
        const forecastDiv = document.createElement("div");
        forecastDiv.classList.add("forecast-div");
        forecastDiv.id = "forecast-div";
        document.body.appendChild(forecastDiv);
    
            const forecastDay1Div = document.createElement("div");
            forecastDay1Div.classList.add("forecast-day-div");
            forecastDay1Div.id = "forecast-day1-div";
            forecastDiv.appendChild(forecastDay1Div);
    
                const forecastDay1Icon = document.createElement("img");
                forecastDay1Icon.classList.add("forecast-day-icon");
                forecastDay1Icon.id = "forecast-day1-icon";
                forecastDay1Icon.src = relativeData[1].forecast.forecastday[1].day.condition.icon;
                forecastDay1Div.appendChild(forecastDay1Icon);
    
                const forecastDay1Day = document.createElement("h2");
                forecastDay1Day.classList.add("forecast-day-day");
                forecastDay1Day.id = "forecast-day1-day";
                forecastDay1Day.textContent = relativeData[1].forecast.forecastday[1].date.slice(-2);
                forecastDay1Div.appendChild(forecastDay1Day);
    
            const forecastDay2Div = document.createElement("div");
            forecastDay2Div.classList.add("forecast-day-div");
            forecastDay2Div.id = "forecast-day2-div";
            forecastDiv.appendChild(forecastDay2Div);
    
                const forecastDay2Icon = document.createElement("img");
                forecastDay2Icon.classList.add("forecast-day-icon");
                forecastDay2Icon.id = "forecast-day2-icon";
                forecastDay2Icon.src = relativeData[1].forecast.forecastday[2].day.condition.icon;
                forecastDay2Div.appendChild(forecastDay2Icon);
    
                const forecastDay2Day = document.createElement("h2");
                forecastDay2Day.classList.add("forecast-day-day");
                forecastDay2Day.id = "forecast-day2-day";
                forecastDay2Day.textContent = relativeData[1].forecast.forecastday[2].date.slice(-2);
                forecastDay2Div.appendChild(forecastDay2Day);
    
            const forecastDay3Div = document.createElement("div");
            forecastDay3Div.classList.add("forecast-day-div");
            forecastDay3Div.id = "forecast-day3-div";
            forecastDiv.appendChild(forecastDay3Div);
    
                const forecastDay3Icon = document.createElement("img");
                forecastDay3Icon.classList.add("forecast-day-icon");
                forecastDay3Icon.id = "forecast-day3-icon";
                forecastDay3Icon.src = relativeData[1].forecast.forecastday[3].day.condition.icon;
                forecastDay3Div.appendChild(forecastDay3Icon);
    
                const forecastDay3Day = document.createElement("h2");
                forecastDay3Day.classList.add("forecast-day-day");
                forecastDay3Day.id = "forecast-day3-day";
                forecastDay3Day.textContent = relativeData[1].forecast.forecastday[3].date.slice(-2);
                forecastDay3Div.appendChild(forecastDay3Day);
    
            const forecastDay4Div = document.createElement("div");
            forecastDay4Div.classList.add("forecast-day-div");
            forecastDay4Div.id = "forecast-day4-div";
            forecastDiv.appendChild(forecastDay4Div);
    
                const forecastDay4Icon = document.createElement("img");
                forecastDay4Icon.classList.add("forecast-day-icon");
                forecastDay4Icon.id = "forecast-day4-icon";
                forecastDay4Icon.src = relativeData[1].forecast.forecastday[4].day.condition.icon;
                forecastDay4Div.appendChild(forecastDay4Icon);
    
                const forecastDay4Day = document.createElement("h2");
                forecastDay4Day.classList.add("forecast-day-day");
                forecastDay4Day.id = "forecast-day4-day";
                forecastDay4Day.textContent = relativeData[1].forecast.forecastday[4].date.slice(-2);
                forecastDay4Div.appendChild(forecastDay4Day);
    
            const forecastDay5Div = document.createElement("div");
            forecastDay5Div.classList.add("forecast-day-div");
            forecastDay5Div.id = "forecast-day5-div";
            forecastDiv.appendChild(forecastDay5Div);
    
                const forecastDay5Icon = document.createElement("img");
                forecastDay5Icon.classList.add("forecast-day-icon");
                forecastDay5Icon.id = "forecast-day5-icon";
                forecastDay5Icon.src = relativeData[1].forecast.forecastday[5].day.condition.icon;
                forecastDay5Div.appendChild(forecastDay5Icon);
    
                const forecastDay5Day = document.createElement("h2");
                forecastDay5Day.classList.add("forecast-day-day");
                forecastDay5Day.id = "forecast-day5-day";
                forecastDay5Day.textContent = relativeData[1].forecast.forecastday[5].date.slice(-2);
                forecastDay5Div.appendChild(forecastDay5Day);
    }
    

async function displayBackground(relativeData) { 
    let backgroudObjecty = { 
        night: "black",
        morning: "linear-gradient(180deg, rgba(171,192,228,1) 0%, rgba(171,192,228,1) 30%, rgba(251,229,214,1) 70%, rgba(244,177,131,1) 100%);",
        day: "day colors",
        sunset: "sunset colors",
    }
    let data = await relativeData;


    function convertTo24Hour(time12hr) {
        const [time, period] = time12hr.split(' ');
        let [hour, minutes] = time.split(':');
        hour = parseInt(hour);
        hour = period.toLowerCase() === 'pm' ? hour + 12 : hour % 12;
        return `${hour.toString().padStart(2, '0')}:${minutes}`;
    }

    const sunRiseTimeData = data[1].forecast.forecastday[0].astro.sunrise;
    const sunRise24 = convertTo24Hour(sunRiseTimeData);
    const sunSetTimeData = data[1].forecast.forecastday[0].astro.sunset;
    const sunSet24 = convertTo24Hour(sunSetTimeData);
    const currentTime = data[0].location.localtime.slice(-5);

    console.log(sunRise24);
    console.log(sunSet24);
    console.log(currentTime);


    if (currentTime > sunRise24 && currentTime < sunSet24) {
        document.body.style.backgroundColor = 'linear-gradient(180deg, rgba(171,192,228,1) 0%, rgba(171,192,228,1) 30%, rgba(251,229,214,1) 70%, rgba(244,177,131,1) 100%);'
    } else {
        document.body.style.background = backgroudObjecty.night;
    }





}




/***/ }),

/***/ "./src/fetch-data.js":
/*!***************************!*\
  !*** ./src/fetch-data.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getIpLocationData": () => (/* binding */ getIpLocationData),
/* harmony export */   "getSearchLocationData": () => (/* binding */ getSearchLocationData)
/* harmony export */ });
/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load.js */ "./src/page-load.js");
// imports 
    



// fetch data based on current location 
async function getIpLocationData() {
    let userIP = await (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.getIp)();
    let todaysDateYYYYMMDD = new Date().toISOString().slice(0, 10);
    let responseCurrent = await fetch(`http://api.weatherapi.com/v1/current.json?key=a9811b07fc0241d8b7145620232505&q=${userIP}&dt=${todaysDateYYYYMMDD}&aqi=no`)
    let responseForecast = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=a9811b07fc0241d8b7145620232505&q=${userIP}&days=7&aqi=no&alerts=no`)
    let ipDataCurrent = await responseCurrent.json()
    let ipDataForecast = await responseForecast.json()
    console.log(ipDataCurrent)
    console.log(ipDataForecast)
    return [ipDataCurrent, ipDataForecast]
}


// fetch data based on search request

async function getSearchLocationData(searchRequest) {
    let todaysDateYYYYMMDD = new Date().toISOString().slice(0, 10);
    let responseCurrent = await fetch(`http://api.weatherapi.com/v1/current.json?key=a9811b07fc0241d8b7145620232505&q=${searchRequest}&dt=${todaysDateYYYYMMDD}&aqi=no`)
    let responseForecast = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=a9811b07fc0241d8b7145620232505&q=${searchRequest}&days=7&aqi=no&alerts=no`)
    let searchDataCurrent = await responseCurrent.json()
    let searchDataForecast = await responseForecast.json()
    console.log(searchDataCurrent)
    console.log(searchDataForecast)
    return [searchDataCurrent, searchDataForecast]
}


// build page skeleton with no data. 



/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getIp": () => (/* binding */ getIp)
/* harmony export */ });
// get users IP adress
async function getIp() {
    try {
        const response = await fetch('https://api.ipify.org/?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.log("error getting ip");
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-data.js */ "./src/display-data.js");
/* harmony import */ var _fetch_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-data.js */ "./src/fetch-data.js");
//IMPORTS 
    
    
    


// on page load. fun pageload function. 1. get ip. 2. get ip location data. 3. build page skeleton. 4. fill page with data.
async function pageLoad() {
    let data = await (0,_fetch_data_js__WEBPACK_IMPORTED_MODULE_1__.getIpLocationData)();
    (0,_display_data_js__WEBPACK_IMPORTED_MODULE_0__.buildPageSkeleton)(data);
    (0,_display_data_js__WEBPACK_IMPORTED_MODULE_0__.displayBackground)(data);
}
pageLoad();




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUE0RDs7QUFFNUQ7QUFDQTs7Ozs7O0FBTUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMscUVBQXFCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBLDhJQUE4STtBQUM5STtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQ0FBaUMsR0FBRyxRQUFRO0FBQzlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLDJLQUEySztBQUMzSyxNQUFNO0FBQ047QUFDQTs7Ozs7O0FBTUE7O0FBRTZCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hQN0I7QUFDQSxJQUEyQzs7OztBQUkzQztBQUNBO0FBQ0EsdUJBQXVCLG9EQUFLO0FBQzVCO0FBQ0Esd0hBQXdILE9BQU8sTUFBTSxtQkFBbUI7QUFDeEosMEhBQTBILE9BQU87QUFDakk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZCOztBQUU3Qjs7QUFFQTtBQUNBO0FBQ0Esd0hBQXdILGNBQWMsTUFBTSxtQkFBbUI7QUFDL0osMEhBQTBILGNBQWM7QUFDeEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2lDOztBQUVqQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ2lCOzs7Ozs7O1VDVmpCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxJQUEwRDtBQUMxRCxJQUF3RDtBQUN4RCxJQUEwRDs7O0FBRzFEO0FBQ0E7QUFDQSxxQkFBcUIsaUVBQWlCO0FBQ3RDLElBQUksbUVBQWlCO0FBQ3JCLElBQUksbUVBQWlCO0FBQ3JCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kaXNwbGF5LWRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZmV0Y2gtZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnRzIFxuICAgIGltcG9ydCB7IGdldFNlYXJjaExvY2F0aW9uRGF0YSB9IGZyb20gXCIuL2ZldGNoLWRhdGEuanNcIjtcblxuICAgIC8vIGltYWdlc1xuICAgIFxuXG5cblxuXG5cbi8vLy8vLy8vLy8vYnVpbGQgcGFnZSBiYXNlZCBvbiBkYXRhIHBhc3NlZCB0aHJvdWdoIGZ1bmN0aW9uIGFzIGFyZ3VtZW50Li8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgZnVuY3Rpb24gYnVpbGRQYWdlU2tlbGV0b24ocmVsYXRpdmVEYXRhKSB7XG4gICAgICAgIC8vIGRlbGV0ZSBvbGQgcGFnZVxuICAgICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIC8vIGNyZWF0ZSBlbGVtZW50c1xuICAgICAgICBjb25zdCBzZWFyY2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzZWFyY2hEaXYuY2xhc3NMaXN0LmFkZChcInNlYXJjaC1kaXZcIik7XG4gICAgICAgIHNlYXJjaERpdi5pZCA9IFwic2VhcmNoLWRpdlwiO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlYXJjaERpdik7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIHNlYXJjaElucHV0LmNsYXNzTGlzdC5hZGQoXCJzZWFyY2gtaW5wdXRcIik7XG4gICAgICAgICAgICBzZWFyY2hJbnB1dC5pZCA9IFwic2VhcmNoLWlucHV0XCI7XG4gICAgICAgICAgICBzZWFyY2hJbnB1dC5wbGFjZWhvbGRlciA9IFwiU2VhcmNoIGZvciBhIGxvY2F0aW9uXCI7XG4gICAgICAgICAgICBzZWFyY2hEaXYuYXBwZW5kQ2hpbGQoc2VhcmNoSW5wdXQpO1xuICAgIFxuICAgICAgICAgICAgY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgIHNlYXJjaEJ0bi5zcmMgPSBcImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzUwL2ZmZmZmZi9zZWFyY2gtLXYxLnBuZ1wiO1xuICAgICAgICAgICAgc2VhcmNoQnRuLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2gtYnV0dG9uXCIpO1xuICAgICAgICAgICAgc2VhcmNoQnRuLmlkID0gXCJzZWFyY2gtYnV0dG9uXCI7XG4gICAgICAgICAgICBzZWFyY2hCdG4udGV4dENvbnRlbnQgPSBcIlNlYXJjaFwiO1xuICAgICAgICAgICAgc2VhcmNoRGl2LmFwcGVuZENoaWxkKHNlYXJjaEJ0bik7XG4gICAgICAgICAgICBzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IGdldFNlYXJjaExvY2F0aW9uRGF0YShzZWFyY2hJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgZGlzcGxheUJhY2tncm91bmQoZGF0YSk7XG4gICAgICAgICAgICAgICAgYnVpbGRQYWdlU2tlbGV0b24oZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY3VycmVudFRpbWVEaXYuY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtdGltZS1kaXZcIik7XG4gICAgICAgIGN1cnJlbnRUaW1lRGl2LmlkID0gXCJjdXJyZW50LXRpbWUtZGl2XCI7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3VycmVudFRpbWVEaXYpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgICAgICBjdXJyZW50VGltZS5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC10aW1lXCIpO1xuICAgICAgICAgICAgY3VycmVudFRpbWUuaWQgPSBcImN1cnJlbnQtdGltZVwiO1xuICAgICAgICAgICAgY3VycmVudFRpbWUudGV4dENvbnRlbnQgPSByZWxhdGl2ZURhdGFbMF0ubG9jYXRpb24ubG9jYWx0aW1lLnNsaWNlKC01KTtcbiAgICAgICAgICAgIGN1cnJlbnRUaW1lRGl2LmFwcGVuZENoaWxkKGN1cnJlbnRUaW1lKTtcbiAgICBcbiAgICAgICAgY29uc3QgZGFzaEJvYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGFzaEJvYXJkRGl2LmNsYXNzTGlzdC5hZGQoXCJkYXNoYm9hcmQtZGl2XCIpO1xuICAgICAgICBkYXNoQm9hcmREaXYuaWQgPSBcImRhc2hib2FyZC1kaXZcIjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkYXNoQm9hcmREaXYpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgY3VycmVudEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgY3VycmVudEljb24uY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtaWNvblwiKTtcbiAgICAgICAgICAgIGN1cnJlbnRJY29uLmlkID0gXCJjdXJyZW50LWljb25cIjtcbiAgICAgICAgICAgIGN1cnJlbnRJY29uLnNyYyA9IHJlbGF0aXZlRGF0YVswXS5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuICAgICAgICAgICAgZGFzaEJvYXJkRGl2LmFwcGVuZENoaWxkKGN1cnJlbnRJY29uKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uTmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBsb2NhdGlvbk5hbWVEaXYuY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uLW5hbWUtZGl2XCIpO1xuICAgICAgICAgICAgbG9jYXRpb25OYW1lRGl2LmlkID0gXCJsb2NhdGlvbi1uYW1lLWRpdlwiO1xuICAgICAgICAgICAgZGFzaEJvYXJkRGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uTmFtZURpdik7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgICAgICAgICAgY2l0eU5hbWUuY2xhc3NMaXN0LmFkZChcImNpdHktbmFtZVwiKTtcbiAgICAgICAgICAgICAgICBjaXR5TmFtZS5pZCA9IFwiY2l0eS1uYW1lXCI7XG4gICAgICAgICAgICAgICAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSByZWxhdGl2ZURhdGFbMF0ubG9jYXRpb24ubmFtZTtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbk5hbWVEaXYuYXBwZW5kQ2hpbGQoY2l0eU5hbWUpO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50cnlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICAgICAgICAgIGNvdW50cnlOYW1lLmNsYXNzTGlzdC5hZGQoXCJjb3VudHJ5LW5hbWVcIik7XG4gICAgICAgICAgICAgICAgY291bnRyeU5hbWUuaWQgPSBcImNvdW50cnktbmFtZVwiO1xuICAgICAgICAgICAgICAgIGNvdW50cnlOYW1lLnRleHRDb250ZW50ID0gcmVsYXRpdmVEYXRhWzBdLmxvY2F0aW9uLmNvdW50cnk7XG4gICAgICAgICAgICAgICAgbG9jYXRpb25OYW1lRGl2LmFwcGVuZENoaWxkKGNvdW50cnlOYW1lKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGN1cnJlbnRUZW1wRGl2LmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50LXRlbXAtZGl2XCIpO1xuICAgICAgICAgICAgY3VycmVudFRlbXBEaXYuaWQgPSBcImN1cnJlbnQtdGVtcC1kaXZcIjtcbiAgICAgICAgICAgIGRhc2hCb2FyZERpdi5hcHBlbmRDaGlsZChjdXJyZW50VGVtcERpdik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VGVtcExvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUZW1wTG9nby5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC10ZW1wLWxvZ29cIik7XG4gICAgICAgICAgICAgICAgY3VycmVudFRlbXBMb2dvLmlkID0gXCJjdXJyZW50LXRlbXAtbG9nb1wiO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUZW1wTG9nby5zcmMgPSBcImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzUwL2ZmZmZmZi90ZW1wZXJhdHVyZS5wbmdcIjtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGVtcERpdi5hcHBlbmRDaGlsZChjdXJyZW50VGVtcExvZ28pO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUZW1wLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50LXRlbXBcIik7XG4gICAgICAgICAgICAgICAgY3VycmVudFRlbXAuaWQgPSBcImN1cnJlbnQtdGVtcFwiO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gcmVsYXRpdmVEYXRhWzBdLmN1cnJlbnQudGVtcF9jICsgXCLCsENcIjtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGVtcERpdi5hcHBlbmRDaGlsZChjdXJyZW50VGVtcCk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q29uZGl0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGN1cnJlbnRDb25kaXRpb25EaXYuY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtY29uZGl0aW9uLWRpdlwiKTtcbiAgICAgICAgICAgIGN1cnJlbnRDb25kaXRpb25EaXYuaWQgPSBcImN1cnJlbnQtY29uZGl0aW9uLWRpdlwiO1xuICAgICAgICAgICAgZGFzaEJvYXJkRGl2LmFwcGVuZENoaWxkKGN1cnJlbnRDb25kaXRpb25EaXYpO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgICAgICAgICAgY3VycmVudENvbmRpdGlvbi5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC1jb25kaXRpb25cIik7XG4gICAgICAgICAgICAgICAgY3VycmVudENvbmRpdGlvbi5pZCA9IFwiY3VycmVudC1jb25kaXRpb25cIjtcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29uZGl0aW9uLnRleHRDb250ZW50ID0gKFwiVGhlIHdlYXRoZXIgcmlnaHQgbm93IGlzIFwiICsgcmVsYXRpdmVEYXRhWzBdLmN1cnJlbnQuY29uZGl0aW9uLnRleHQpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRDb25kaXRpb25EaXYuYXBwZW5kQ2hpbGQoY3VycmVudENvbmRpdGlvbik7XG4gICAgXG4gICAgICAgIGNvbnN0IGZvcmVjYXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZm9yZWNhc3REaXYuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWRpdlwiKTtcbiAgICAgICAgZm9yZWNhc3REaXYuaWQgPSBcImZvcmVjYXN0LWRpdlwiO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcmVjYXN0RGl2KTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGZvcmVjYXN0RGF5MURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBmb3JlY2FzdERheTFEaXYuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWRheS1kaXZcIik7XG4gICAgICAgICAgICBmb3JlY2FzdERheTFEaXYuaWQgPSBcImZvcmVjYXN0LWRheTEtZGl2XCI7XG4gICAgICAgICAgICBmb3JlY2FzdERpdi5hcHBlbmRDaGlsZChmb3JlY2FzdERheTFEaXYpO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcmVjYXN0RGF5MUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgICAgIGZvcmVjYXN0RGF5MUljb24uY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWRheS1pY29uXCIpO1xuICAgICAgICAgICAgICAgIGZvcmVjYXN0RGF5MUljb24uaWQgPSBcImZvcmVjYXN0LWRheTEtaWNvblwiO1xuICAgICAgICAgICAgICAgIGZvcmVjYXN0RGF5MUljb24uc3JjID0gcmVsYXRpdmVEYXRhWzFdLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5jb25kaXRpb24uaWNvbjtcbiAgICAgICAgICAgICAgICBmb3JlY2FzdERheTFEaXYuYXBwZW5kQ2hpbGQoZm9yZWNhc3REYXkxSWNvbik7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgZm9yZWNhc3REYXkxRGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICAgICAgICAgIGZvcmVjYXN0RGF5MURheS5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtZGF5LWRheVwiKTtcbiAgICAgICAgICAgICAgICBmb3JlY2FzdERheTFEYXkuaWQgPSBcImZvcmVjYXN0LWRheTEtZGF5XCI7XG4gICAgICAgICAgICAgICAgZm9yZWNhc3REYXkxRGF5LnRleHRDb250ZW50ID0gcmVsYXRpdmVEYXRhWzFdLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRhdGUuc2xpY2UoLTIpO1xuICAgICAgICAgICAgICAgIGZvcmVjYXN0RGF5MURpdi5hcHBlbmRDaGlsZChmb3JlY2FzdERheTFEYXkpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZm9yZWNhc3REYXkyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGZvcmVjYXN0RGF5MkRpdi5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtZGF5LWRpdlwiKTtcbiAgICAgICAgICAgIGZvcmVjYXN0RGF5MkRpdi5pZCA9IFwiZm9yZWNhc3QtZGF5Mi1kaXZcIjtcbiAgICAgICAgICAgIGZvcmVjYXN0RGl2LmFwcGVuZENoaWxkKGZvcmVjYXN0RGF5MkRpdik7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgZm9yZWNhc3REYXkySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICAgICAgZm9yZWNhc3REYXkySWNvbi5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtZGF5LWljb25cIik7XG4gICAgICAgICAgICAgICAgZm9yZWNhc3REYXkySWNvbi5pZCA9IFwiZm9yZWNhc3QtZGF5Mi1pY29uXCI7XG4gICAgICAgICAgICAgICAgZm9yZWNhc3REYXkySWNvbi5zcmMgPSByZWxhdGl2ZURhdGFbMV0uZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmNvbmRpdGlvbi5pY29uO1xuICAgICAgICAgICAgICAgIGZvcmVjYXN0RGF5MkRpdi5hcHBlbmRDaGlsZChmb3JlY2FzdERheTJJY29uKTtcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JlY2FzdERheTJEYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgICAgICAgICAgZm9yZWNhc3REYXkyRGF5LmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1kYXktZGF5XCIpO1xuICAgICAgICAgICAgICAgIGZvcmVjYXN0RGF5MkRheS5pZCA9IFwiZm9yZWNhc3QtZGF5Mi1kYXlcIjtcbiAgICAgICAgICAgICAgICBmb3JlY2FzdERheTJEYXkudGV4dENvbnRlbnQgPSByZWxhdGl2ZURhdGFbMV0uZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF0ZS5zbGljZSgtMik7XG4gICAgICAgICAgICAgICAgZm9yZWNhc3REYXkyRGl2LmFwcGVuZENoaWxkKGZvcmVjYXN0RGF5MkRheSk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBmb3JlY2FzdERheTNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZm9yZWNhc3REYXkzRGl2LmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1kYXktZGl2XCIpO1xuICAgICAgICAgICAgZm9yZWNhc3REYXkzRGl2LmlkID0gXCJmb3JlY2FzdC1kYXkzLWRpdlwiO1xuICAgICAgICAgICAgZm9yZWNhc3REaXYuYXBwZW5kQ2hpbGQoZm9yZWNhc3REYXkzRGl2KTtcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JlY2FzdERheTNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgICAgICBmb3JlY2FzdERheTNJY29uLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1kYXktaWNvblwiKTtcbiAgICAgICAgICAgICAgICBmb3JlY2FzdERheTNJY29uLmlkID0gXCJmb3JlY2FzdC1kYXkzLWljb25cIjtcbiAgICAgICAgICAgICAgICBmb3JlY2FzdERheTNJY29uLnNyYyA9IHJlbGF0aXZlRGF0YVsxXS5mb3JlY2FzdC5mb3JlY2FzdGRheVszXS5kYXkuY29uZGl0aW9uLmljb247XG4gICAgICAgICAgICAgICAgZm9yZWNhc3REYXkzRGl2LmFwcGVuZENoaWxkKGZvcmVjYXN0RGF5M0ljb24pO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcmVjYXN0RGF5M0RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgICAgICAgICBmb3JlY2FzdERheTNEYXkuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWRheS1kYXlcIik7XG4gICAgICAgICAgICAgICAgZm9yZWNhc3REYXkzRGF5LmlkID0gXCJmb3JlY2FzdC1kYXkzLWRheVwiO1xuICAgICAgICAgICAgICAgIGZvcmVjYXN0RGF5M0RheS50ZXh0Q29udGVudCA9IHJlbGF0aXZlRGF0YVsxXS5mb3JlY2FzdC5mb3JlY2FzdGRheVszXS5kYXRlLnNsaWNlKC0yKTtcbiAgICAgICAgICAgICAgICBmb3JlY2FzdERheTNEaXYuYXBwZW5kQ2hpbGQoZm9yZWNhc3REYXkzRGF5KTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGZvcmVjYXN0RGF5NERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBmb3JlY2FzdERheTREaXYuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWRheS1kaXZcIik7XG4gICAgICAgICAgICBmb3JlY2FzdERheTREaXYuaWQgPSBcImZvcmVjYXN0LWRheTQtZGl2XCI7XG4gICAgICAgICAgICBmb3JlY2FzdERpdi5hcHBlbmRDaGlsZChmb3JlY2FzdERheTREaXYpO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcmVjYXN0RGF5NEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgICAgIGZvcmVjYXN0RGF5NEljb24uY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWRheS1pY29uXCIpO1xuICAgICAgICAgICAgICAgIGZvcmVjYXN0RGF5NEljb24uaWQgPSBcImZvcmVjYXN0LWRheTQtaWNvblwiO1xuICAgICAgICAgICAgICAgIGZvcmVjYXN0RGF5NEljb24uc3JjID0gcmVsYXRpdmVEYXRhWzFdLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzRdLmRheS5jb25kaXRpb24uaWNvbjtcbiAgICAgICAgICAgICAgICBmb3JlY2FzdERheTREaXYuYXBwZW5kQ2hpbGQoZm9yZWNhc3REYXk0SWNvbik7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgZm9yZWNhc3REYXk0RGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICAgICAgICAgIGZvcmVjYXN0RGF5NERheS5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtZGF5LWRheVwiKTtcbiAgICAgICAgICAgICAgICBmb3JlY2FzdERheTREYXkuaWQgPSBcImZvcmVjYXN0LWRheTQtZGF5XCI7XG4gICAgICAgICAgICAgICAgZm9yZWNhc3REYXk0RGF5LnRleHRDb250ZW50ID0gcmVsYXRpdmVEYXRhWzFdLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzRdLmRhdGUuc2xpY2UoLTIpO1xuICAgICAgICAgICAgICAgIGZvcmVjYXN0RGF5NERpdi5hcHBlbmRDaGlsZChmb3JlY2FzdERheTREYXkpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZm9yZWNhc3REYXk1RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGZvcmVjYXN0RGF5NURpdi5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtZGF5LWRpdlwiKTtcbiAgICAgICAgICAgIGZvcmVjYXN0RGF5NURpdi5pZCA9IFwiZm9yZWNhc3QtZGF5NS1kaXZcIjtcbiAgICAgICAgICAgIGZvcmVjYXN0RGl2LmFwcGVuZENoaWxkKGZvcmVjYXN0RGF5NURpdik7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgZm9yZWNhc3REYXk1SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICAgICAgZm9yZWNhc3REYXk1SWNvbi5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtZGF5LWljb25cIik7XG4gICAgICAgICAgICAgICAgZm9yZWNhc3REYXk1SWNvbi5pZCA9IFwiZm9yZWNhc3QtZGF5NS1pY29uXCI7XG4gICAgICAgICAgICAgICAgZm9yZWNhc3REYXk1SWNvbi5zcmMgPSByZWxhdGl2ZURhdGFbMV0uZm9yZWNhc3QuZm9yZWNhc3RkYXlbNV0uZGF5LmNvbmRpdGlvbi5pY29uO1xuICAgICAgICAgICAgICAgIGZvcmVjYXN0RGF5NURpdi5hcHBlbmRDaGlsZChmb3JlY2FzdERheTVJY29uKTtcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JlY2FzdERheTVEYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgICAgICAgICAgZm9yZWNhc3REYXk1RGF5LmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1kYXktZGF5XCIpO1xuICAgICAgICAgICAgICAgIGZvcmVjYXN0RGF5NURheS5pZCA9IFwiZm9yZWNhc3QtZGF5NS1kYXlcIjtcbiAgICAgICAgICAgICAgICBmb3JlY2FzdERheTVEYXkudGV4dENvbnRlbnQgPSByZWxhdGl2ZURhdGFbMV0uZm9yZWNhc3QuZm9yZWNhc3RkYXlbNV0uZGF0ZS5zbGljZSgtMik7XG4gICAgICAgICAgICAgICAgZm9yZWNhc3REYXk1RGl2LmFwcGVuZENoaWxkKGZvcmVjYXN0RGF5NURheSk7XG4gICAgfVxuICAgIGV4cG9ydCB7IGJ1aWxkUGFnZVNrZWxldG9uIH07XG5cbmFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlCYWNrZ3JvdW5kKHJlbGF0aXZlRGF0YSkgeyBcbiAgICBsZXQgYmFja2dyb3VkT2JqZWN0eSA9IHsgXG4gICAgICAgIG5pZ2h0OiBcImJsYWNrXCIsXG4gICAgICAgIG1vcm5pbmc6IFwibGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgxNzEsMTkyLDIyOCwxKSAwJSwgcmdiYSgxNzEsMTkyLDIyOCwxKSAzMCUsIHJnYmEoMjUxLDIyOSwyMTQsMSkgNzAlLCByZ2JhKDI0NCwxNzcsMTMxLDEpIDEwMCUpO1wiLFxuICAgICAgICBkYXk6IFwiZGF5IGNvbG9yc1wiLFxuICAgICAgICBzdW5zZXQ6IFwic3Vuc2V0IGNvbG9yc1wiLFxuICAgIH1cbiAgICBsZXQgZGF0YSA9IGF3YWl0IHJlbGF0aXZlRGF0YTtcblxuXG4gICAgZnVuY3Rpb24gY29udmVydFRvMjRIb3VyKHRpbWUxMmhyKSB7XG4gICAgICAgIGNvbnN0IFt0aW1lLCBwZXJpb2RdID0gdGltZTEyaHIuc3BsaXQoJyAnKTtcbiAgICAgICAgbGV0IFtob3VyLCBtaW51dGVzXSA9IHRpbWUuc3BsaXQoJzonKTtcbiAgICAgICAgaG91ciA9IHBhcnNlSW50KGhvdXIpO1xuICAgICAgICBob3VyID0gcGVyaW9kLnRvTG93ZXJDYXNlKCkgPT09ICdwbScgPyBob3VyICsgMTIgOiBob3VyICUgMTI7XG4gICAgICAgIHJldHVybiBgJHtob3VyLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX06JHttaW51dGVzfWA7XG4gICAgfVxuXG4gICAgY29uc3Qgc3VuUmlzZVRpbWVEYXRhID0gZGF0YVsxXS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5zdW5yaXNlO1xuICAgIGNvbnN0IHN1blJpc2UyNCA9IGNvbnZlcnRUbzI0SG91cihzdW5SaXNlVGltZURhdGEpO1xuICAgIGNvbnN0IHN1blNldFRpbWVEYXRhID0gZGF0YVsxXS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5zdW5zZXQ7XG4gICAgY29uc3Qgc3VuU2V0MjQgPSBjb252ZXJ0VG8yNEhvdXIoc3VuU2V0VGltZURhdGEpO1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gZGF0YVswXS5sb2NhdGlvbi5sb2NhbHRpbWUuc2xpY2UoLTUpO1xuXG4gICAgY29uc29sZS5sb2coc3VuUmlzZTI0KTtcbiAgICBjb25zb2xlLmxvZyhzdW5TZXQyNCk7XG4gICAgY29uc29sZS5sb2coY3VycmVudFRpbWUpO1xuXG5cbiAgICBpZiAoY3VycmVudFRpbWUgPiBzdW5SaXNlMjQgJiYgY3VycmVudFRpbWUgPCBzdW5TZXQyNCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDE3MSwxOTIsMjI4LDEpIDAlLCByZ2JhKDE3MSwxOTIsMjI4LDEpIDMwJSwgcmdiYSgyNTEsMjI5LDIxNCwxKSA3MCUsIHJnYmEoMjQ0LDE3NywxMzEsMSkgMTAwJSk7J1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGJhY2tncm91ZE9iamVjdHkubmlnaHQ7XG4gICAgfVxuXG5cblxuXG5cbn1cblxuZXhwb3J0IHsgZGlzcGxheUJhY2tncm91bmQgfTtcbiIsIi8vIGltcG9ydHMgXG4gICAgaW1wb3J0IHsgZ2V0SXAgfSBmcm9tIFwiLi9wYWdlLWxvYWQuanNcIjtcblxuXG5cbi8vIGZldGNoIGRhdGEgYmFzZWQgb24gY3VycmVudCBsb2NhdGlvbiBcbmFzeW5jIGZ1bmN0aW9uIGdldElwTG9jYXRpb25EYXRhKCkge1xuICAgIGxldCB1c2VySVAgPSBhd2FpdCBnZXRJcCgpO1xuICAgIGxldCB0b2RheXNEYXRlWVlZWU1NREQgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgIGxldCByZXNwb25zZUN1cnJlbnQgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PWE5ODExYjA3ZmMwMjQxZDhiNzE0NTYyMDIzMjUwNSZxPSR7dXNlcklQfSZkdD0ke3RvZGF5c0RhdGVZWVlZTU1ERH0mYXFpPW5vYClcbiAgICBsZXQgcmVzcG9uc2VGb3JlY2FzdCA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWE5ODExYjA3ZmMwMjQxZDhiNzE0NTYyMDIzMjUwNSZxPSR7dXNlcklQfSZkYXlzPTcmYXFpPW5vJmFsZXJ0cz1ub2ApXG4gICAgbGV0IGlwRGF0YUN1cnJlbnQgPSBhd2FpdCByZXNwb25zZUN1cnJlbnQuanNvbigpXG4gICAgbGV0IGlwRGF0YUZvcmVjYXN0ID0gYXdhaXQgcmVzcG9uc2VGb3JlY2FzdC5qc29uKClcbiAgICBjb25zb2xlLmxvZyhpcERhdGFDdXJyZW50KVxuICAgIGNvbnNvbGUubG9nKGlwRGF0YUZvcmVjYXN0KVxuICAgIHJldHVybiBbaXBEYXRhQ3VycmVudCwgaXBEYXRhRm9yZWNhc3RdXG59XG5leHBvcnQgeyBnZXRJcExvY2F0aW9uRGF0YSB9O1xuXG4vLyBmZXRjaCBkYXRhIGJhc2VkIG9uIHNlYXJjaCByZXF1ZXN0XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFNlYXJjaExvY2F0aW9uRGF0YShzZWFyY2hSZXF1ZXN0KSB7XG4gICAgbGV0IHRvZGF5c0RhdGVZWVlZTU1ERCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgbGV0IHJlc3BvbnNlQ3VycmVudCA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9YTk4MTFiMDdmYzAyNDFkOGI3MTQ1NjIwMjMyNTA1JnE9JHtzZWFyY2hSZXF1ZXN0fSZkdD0ke3RvZGF5c0RhdGVZWVlZTU1ERH0mYXFpPW5vYClcbiAgICBsZXQgcmVzcG9uc2VGb3JlY2FzdCA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWE5ODExYjA3ZmMwMjQxZDhiNzE0NTYyMDIzMjUwNSZxPSR7c2VhcmNoUmVxdWVzdH0mZGF5cz03JmFxaT1ubyZhbGVydHM9bm9gKVxuICAgIGxldCBzZWFyY2hEYXRhQ3VycmVudCA9IGF3YWl0IHJlc3BvbnNlQ3VycmVudC5qc29uKClcbiAgICBsZXQgc2VhcmNoRGF0YUZvcmVjYXN0ID0gYXdhaXQgcmVzcG9uc2VGb3JlY2FzdC5qc29uKClcbiAgICBjb25zb2xlLmxvZyhzZWFyY2hEYXRhQ3VycmVudClcbiAgICBjb25zb2xlLmxvZyhzZWFyY2hEYXRhRm9yZWNhc3QpXG4gICAgcmV0dXJuIFtzZWFyY2hEYXRhQ3VycmVudCwgc2VhcmNoRGF0YUZvcmVjYXN0XVxufVxuZXhwb3J0IHsgZ2V0U2VhcmNoTG9jYXRpb25EYXRhIH07XG5cbi8vIGJ1aWxkIHBhZ2Ugc2tlbGV0b24gd2l0aCBubyBkYXRhLiBcblxuIiwiLy8gZ2V0IHVzZXJzIElQIGFkcmVzc1xuYXN5bmMgZnVuY3Rpb24gZ2V0SXAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuaXBpZnkub3JnLz9mb3JtYXQ9anNvbicpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YS5pcDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGdldHRpbmcgaXBcIik7XG4gICAgfVxufVxuZXhwb3J0IHsgZ2V0SXAgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9JTVBPUlRTIFxuICAgIGltcG9ydCB7IGJ1aWxkUGFnZVNrZWxldG9uIH0gZnJvbSBcIi4vZGlzcGxheS1kYXRhLmpzXCI7XG4gICAgaW1wb3J0IHsgZ2V0SXBMb2NhdGlvbkRhdGEgfSBmcm9tIFwiLi9mZXRjaC1kYXRhLmpzXCI7XG4gICAgaW1wb3J0IHsgZGlzcGxheUJhY2tncm91bmQgfSBmcm9tIFwiLi9kaXNwbGF5LWRhdGEuanNcIjtcblxuXG4vLyBvbiBwYWdlIGxvYWQuIGZ1biBwYWdlbG9hZCBmdW5jdGlvbi4gMS4gZ2V0IGlwLiAyLiBnZXQgaXAgbG9jYXRpb24gZGF0YS4gMy4gYnVpbGQgcGFnZSBza2VsZXRvbi4gNC4gZmlsbCBwYWdlIHdpdGggZGF0YS5cbmFzeW5jIGZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xuICAgIGxldCBkYXRhID0gYXdhaXQgZ2V0SXBMb2NhdGlvbkRhdGEoKTtcbiAgICBidWlsZFBhZ2VTa2VsZXRvbihkYXRhKTtcbiAgICBkaXNwbGF5QmFja2dyb3VuZChkYXRhKTtcbn1cbnBhZ2VMb2FkKCk7XG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=