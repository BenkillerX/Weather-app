const wetherForm = document.querySelector('.wetherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card');
const apiKey = "4ca227ffcd087bec4afbd4ee94896e0f";

wetherForm.addEventListener("submit", async event => {
    event.preventDefault();
    const city = cityInput.value.trim();
    if (city) {
        try {
            const wetherData = await getWeatherData(city);
            displayWeatherInfo(wetherData);
        } catch (error) {
            console.error(error);
            displayError(error.message);
        }
    } else {
        displayError("Please enter a city");
    }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    const responce = await fetch(apiUrl);
    if (!responce.ok) {
        throw new Error(`Could not fetch weather data (${responce.status})`);
    }
    return await responce.json();
}

function displayWeatherInfo(data) {
    const { name: city, main: { temp, humidity }, weather: [{ description, id }] } = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const desDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${temp.toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    desDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    desDisplay.classList.add("decDisplay");
    weatherEmoji.classList.add("wetherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(desDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(wetherId) {
    switch (true) {
        case (wetherId >= 200 && wetherId < 300):
            return "🌩️";
        case (wetherId >= 300 && wetherId < 400):
            return "🌧️";
        case (wetherId >= 500 && wetherId < 600):
            return "🌧️";
        case (wetherId >= 600 && wetherId < 700):
            return "❄️";
        case (wetherId >= 700 && wetherId < 800):
            return "🌫️";
        case (wetherId === 800):
            return "☀️";
        case (wetherId > 800 && wetherId < 810):
            return "☁️";
        default:
            return "❓";
    }
}

function displayError(message) {
    const errorDisplay = document.createElement('p');
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}
