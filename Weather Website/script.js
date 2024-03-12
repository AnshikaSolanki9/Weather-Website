function fetchWeather() {
    const apiKey = '34dd8b3672600670d6759d928fcf4f66'; // Replace with your API key
    const city = document.getElementById('cityInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('There was a problem fetching the weather data:', error);
        });
}

function displayWeather(data) {
    const weatherDiv = document.getElementById('weather');
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    weatherDiv.innerHTML = `<p>Temperature: ${temperature}°C</p>
                            <p>Description: ${description}</p>`;
}
