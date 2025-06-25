const apiKey = '2bfb011308844bf9941123534252506';
const apiUrl = "http://api.weatherapi.com/v1/current.json?key=";
const button = document.querySelector(".btn");

async function checkWeather() {
    const input = document.querySelector(".input").value.replace(/ /g, "+");
    const response = await fetch(apiUrl + apiKey + "&q=" + input + "&aqi=no")
    const data = await response.json();
    if (data.error) {
        document.querySelector(".weather").style.display = "none";
        const error = document.querySelector(".error");
        error.style.display = "block";
        if (data.error.code === 1003) {
            error.innerHTML = "Please enter a city name !";
        }
        else {
            error.innerHTML = data.error.message;
        }
    }
    else {
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".Weather-img").src = data.current.condition.icon;
        document.querySelector(".temperature").innerHTML = Math.round(data.current.temp_c) + " °C";
        document.querySelector(".city").innerHTML = data.location.name;
        document.querySelector(".humidity").innerHTML = data.current.humidity + " %";
        document.querySelector(".wind").innerHTML = data.current.wind_kph + " Kph";
        console.log(data)
    }
}
button.addEventListener('click', checkWeather);



