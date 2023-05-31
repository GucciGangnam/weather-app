// imports 
    import { getSearchLocationData } from "./fetch-data.js";

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
                let data = await getSearchLocationData(searchInput.value);
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
    export { buildPageSkeleton };

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

export { displayBackground };
