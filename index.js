let now = new Date();
let currentDay = now.getDay();
let currentHour = now.getHours();
let currentMinute = now.getMinutes();

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

let dayTime = document.querySelector("#day-time");
dayTime.innerHTML = `${days[currentDay]} ${currentHour}:${currentMinute}`;

function displayInput(event) {
    event.preventDefault();
    let userInput = searchForm.querySelector("#city-input");
    let city = userInput.value.charAt(0).toUpperCase() + userInput.value.slice(1);
    currentCity.innerHTML = city

    let weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=27c5687a16012c8b1ba45274dda2ba7e&units=metric`;
    axios.get(weatherApi).then(showTemp);
}

function showTemp(response) {
    let displayedTemp = document.querySelector(".temp");
    displayedTemp.innerHTML = `${Math.round(response.data.main.temp)}ºc`;
    let city = document.querySelector("h1");
    city.innerHTML = response.data.name;
}

function displayLocal(response) {

}

function getWeather(response) {
    let lat = response.coords.latitude;
    let lon = response.coords.longitude;
    let weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=27c5687a16012c8b1ba45274dda2ba7e&units=metric`;
axios.get(weatherApi).then(showTemp)
}

function getLocation() {
     navigator.geolocation.getCurrentPosition(getWeather);
}


let currentCity = document.querySelector("h1");
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", displayInput);