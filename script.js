const apiKey = '22d1518ccd3d6c2a585f81127b3b261d'; // Replace with your OpenWeatherMap API key
const searchButton = document.getElementById('searchButton');
const weatherInfo = document.getElementById('weatherInfo');
const locationInput = document.getElementById('locationInput');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location === '') {
        alert('Please enter a location.');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;

            weatherInfo.innerHTML = `
                <h2>${location}</h2>
                <p>${description}</p>
                <p>Temperature: ${temperature}°C</p>
                <img src="http://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = 'Error fetching weather data';
        });
});
