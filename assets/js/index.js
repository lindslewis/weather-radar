
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

// searchButton.addEventListener('click', getAPI);

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
const cityInputElem = document.querySelector("#userInput");

// we are going to want to edgecase for all lowercase, uppercase, etc
const formSubmitHandler = function (e) {
    e.preventDefault();

    // this needs to call the input from the html
    const cityName = cityInputElem.value.trim();

    if(cityName) {
        // call function here that searches the api???
    } else {
        alert("invalid: please enter a city name")
    }
};