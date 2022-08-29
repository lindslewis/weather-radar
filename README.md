# weather-radar

## description

The weather radar is a dive into the Open Weather API, creating a website that can search for the daily weather of a specific city, and also bring up the next five days of forecasts. 

Check out the deployed site [here](https://lindslewis.github.io/weather-radar/).

## table-of-contents

1. [usage](#usage)
2. [composition](#composition)
3. [lessons-learned](#lessons-learned)
4. [credits](#credits)

![screenshot of page]()
![readme-img](https://user-images.githubusercontent.com/104105172/187122500-0382ab73-e814-4cb8-b0ea-5b36d0e5ee11.jpg)

## usage

Users are able to start with the input search box on the left hand side of the page and search for a city. Once they've submitted their search, users are then greeted with the current weather information on the right relevant to their searched city. Those details include temperature, humidity, uv index, wind speed, and are given a weather icon to match the current conditions.

Below the daily search, users are given the next five days of forecasts for that specific city, also including the same details of that above. They are then able to search for another in the input box, but their previous searches will be saved in order for them to quickly check the weather again.

## composition

This is a single-paged website, utilizing vanilla Javascript, Bootstrap, and HTML in order to draw everything together. 

The web API that was used in order to pull weather information was [Open Weather](https://openweathermap.org/api/one-call-3). Open Weather, however, only takes in latitude and longitude for it's search parameters, so another API was needed in order to take the user input city and grab the latitude and longitude of their search, which was Open Weather's [Geocoding API](https://openweathermap.org/api/geocoding-api).

In order to provide the date for users, [Moment.js](https://momentjs.com/) was implemented.

[Bootstrap](https://getbootstrap.com/) was also used, providing a CSS framework to build off of.

## credits

- [Open Weather](https://openweathermap.org/api/one-call-3)
- [Geocoding API](https://openweathermap.org/api/geocoding-api)
- [Bootstrap](https://getbootstrap.com/)
- [Moment.js](https://momentjs.com/)
- University of Washington Coding Bootcamp Instructor and Teaching Assistant's
