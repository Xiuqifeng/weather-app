const apiKey = "1fc3cdcef86bb1fda30b20fe423c66b9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

const searchBar = document.querySelector(".city");
const searchButton = document.querySelector(".search");
const weatherLogo = document.querySelector(".weather")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}` );
    let data = await response.json();

    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = data.main.temp;
    document.querySelector(".temperature-min").innerHTML = data.main.temp_min;
    document.querySelector(".temperature-max").innerHTML = data.main.temp_max;
    document.querySelector(".humidity-value").innerHTML = data.main.humidity;
    document.querySelector(".wind-speed").innerHTML = data.wind.speed;

    if (data.weather[0].main == "Clouds") {
        weatherLogo.src = "images/Cloudy.png";
    } 
    else if (data.weather[0].main == "Rain") {
        weatherLogo.src = "images/Rainy.png";
    }
    else if (data.weather[0].main == "clear") {
        weatherLogo.src = "images/Sunny";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherLogo.src = "images/Rainy.png";
    }
    else if (data.weather[0].main == "Snow") {
        weatherLogo.src = "images/Snowing.png";
    }
    else if (data.weather[0].main == "Thunderstorm") {
        weatherLogo.src = "images/ThunderStorm.png";
    }

    document.querySelector(".weather-info").style.display = "block";
};
    

searchButton.addEventListener("click", function(){
    checkWeather(searchBar.value);
});
