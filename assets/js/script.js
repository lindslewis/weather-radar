
// below is my button for searching, need to call it here so I can attach the function to it 
const searchButton = document.querySelector('#searchButton');

searchButton.addEventListener('click', getAPI);
// lat and lon are required and for the latitude and longitude of place being called on
function getAPI() {
    // below is an example for PDX
    const requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=45.51&lon=-122.67&appid=ec4f51ab549c402396d72795f8b68224";

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
        console.log(data)
            // for (let i = 0; i <data.length; i++) {
            //     const listItem = document.create
            // }
        });
}

getAPI();

// searchButton.addEventListener('click', getAPI);

