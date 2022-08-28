
// // above needs to take the user input in the curlies... 

// // below is my button for searching, need to call it here so I can attach the function to it 
// const searchButton = document.querySelector('#searchButton');

// searchButton.addEventListener('click', getAPI);
// // lat and lon are required and for the latitude and longitude of place being called on
// async function getAPI(url) {

//     const response = await fetch(url);

//     let data = await response.json();
//     console.log(data);
//     if (response) {
//         return console.log('weather api has been searched');

//         // not sure if the below is necessary
//         // hideLoader()
//     }
//     show(data);
// }
// for ( let i = 0; i < data.length; i++) {
//     console.log(data[i].name)
// }
// // for innerhtml stuff, to show on the page
// async function show() {
//     // name of city, replaceChild() for this one perhaps?
//     const cityName = document.querySelector(".cityName");
//     document.body.appendChild(cityName);
//     // double check 27 below
//     const obj = parser(await requestUrl()); 
//     cityName.innerHTML = JSON.stringify(obj, null, 2);
// }
// getAPI(requestUrl);


//     fetch(requestUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//         console.log(data)
//             // for (let i = 0; i <data.length; i++) {
//             //     const listItem = document.create
//             // }
//         });
// }

// getAPI();



//  index will cover the main page functions

// input bar for users to search for a city
// the city searched for needs to be fetched from the api
// api then needs to provide and populate the necessary information for the user in the right field of the screen
// info needed: city name, current weather conditions, future weather conditions
// upon search and enter, city search is stored locally 


// viewing weather conditions, presents:
// city name, date, icon for weather conditions, temp, humidity, wind speed, uv index
// need to assign a color for conditions: favorable, moderate, severe (green, orange, red obvs)


// future conditions  gives 5 day forecast
// each bit of the 5day forecast gives date, icon for weather conditions, temp, windspeed, humidity

// search history is populated from the local storage, can click and research

// searchButton is the button attached to the input. cityInputElem is the input bar
const searchButton = document.querySelector("#searchButton");
const cityInputElem = document.querySelector("#userInput");
// const searchedCityElem = document.querySelector(".cityName");
const searchHistory = [];

// we are going to want to edgecase for all lowercase, uppercase, etc
const formSubmitHandler = function (e) {
    e.preventDefault();

    // this needs to call the input from the html
    const cityName = cityInputElem.value.trim();

    if(cityName) {
        
        getWeather(cityName);

    } else {
        alert("invalid: please enter a city name")
    }
};
searchButton.addEventListener('click', formSubmitHandler);

const getWeather = function (cityName) {

    const apiKey = "ec4f51ab549c402396d72795f8b68224"
    // do not understand how to make an api call with my key without revealing the secret???
    const apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&appid=" + apiKey;

    fetch(apiUrl)
        .then(function (res) {
            console.log(res);
            res.json().then(function (data) {
                console.log(data);
                var lat = data[0].lat;
                var lon = data[0].lon;


                const secondApi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=imperial";

                fetch(secondApi)
                    .then(function (res) {
                        console.log(res);
                        return res.json()
                    }).then(function (data) {
                        console.log(data);
                        displayWeather(data);
                })
            })
        })
}

const displayWeather = function(weatherData) {

    let date = moment.unix(weatherData.current.dt).format("LL")
    let dateEl = document.createElement("p");
    dateEl.innerText = date;
    document.getElementById("dailyDate").prepend(dateEl)

    let iconUrl = "http://openweathermap.org/img/wn/" + weatherData.current.weather[0].icon + ".png";
    let icon = document.createElement("img")
    icon.setAttribute("src", iconUrl)
    document.getElementById("dailyDate").append(icon)
    
    document.querySelector(".dailyTemp").innerText = weatherData.current.temp;
    document.querySelector(".dailyWind").innerText = weatherData.current.wind_speed;
    document.querySelector(".dailyHumid").innerText = weatherData.current.humidity;
    document.querySelector(".dailyIndex").innerText = weatherData.current.uvi;
    for( i = 1; i < 6; i++) {
        let card = document.querySelector(".card" + (i))

        // let fiveDate = moment.unix(weatherData.daily[i].dt).format("LL")
        // let fiveEl = document.createElement("p");
        // fiveEl.innerText = fiveDate;
        // card.appendChild(fiveDate);

        let iconUrl = "http://openweathermap.org/img/wn/" + weatherData.daily[i].weather[0].icon + ".png";
        let icon = document.createElement("img")
        icon.setAttribute("src", iconUrl)
        card.appendChild(icon)

        let temp = document.createElement("p")
        temp.innerText = weatherData.daily[i].temp.day;
        card.appendChild(temp);

        let wind = document.createElement("p")
        wind.innerText = weatherData.daily[i].wind_speed;
        card.appendChild(wind);

        let humid = document.createElement("p")
        humid.innerText = weatherData.daily[i].humidity;
        card.appendChild(humid);
    }
}